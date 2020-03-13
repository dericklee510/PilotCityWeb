<template>
  <v-container>
    <v-row
      no-gutters
      justify="center"
    >
      <v-col cols="8">
        <v-col class="Team__title"> 
          <span>
            Team
          </span>
        </v-col>
        <v-col
          v-for="(name,index) in names"
          :key="index"
        > 
          <span class="Team__name">
            {{ name }}


          </span>
        </v-col>
        <v-col class="Team__Settings"> 
          <span>
            Settings


            <!-- TOOLTIP TEMPLATE -->

            <v-btn 
              href="https://github.com/vuetifyjs/vuetify/releases/latest"
              target="_blank"
              icon
              v-on="on"
            >
              <v-icon
                class="pb-1"
                color="grey lighten-1"
              >info</v-icon>
            </v-btn>
            <!-- TOOLTIP TEMPLATE END -->


          </span>
        </v-col>
        <v-col class="Team__teamname"> 
          <span>
            Team Name
          </span>
          
          <ValidationObserver v-slot="{invalid}">
            <v-row no-gutters> 
              <v-col>
                <v-row class="Team__buttons">
                  <ValidationProvider
                    v-slot="{errors}"
                    slim
                    rules="required"
                  >
                    <v-col cols="6">
                      <v-text-field
                        v-model="newTeamName"
                        :error-messages="errors"
                        class="Team__newteamname"
                        :placeholder="teamName"
                      />
                    </v-col>
                  </ValidationProvider>
                  <PCLoader v-slot="{loading,setLoader}">
                    <v-col cols="12">
                      <v-btn
                        :loading="loading"
                        :disabled="invalid"
                        solo
                        depressed
                        text
                        height="55.88px"
                        outlined
                        class="Team__renamebutton"
                        @click="setLoader(renameTeam)"
                      >
                        RENAME
                      </v-btn>
                    </v-col>
                  </PCLoader>
                </v-row>
              </v-col>
            </v-row>
          </ValidationObserver>
          <v-row> 
            <PCLoader v-slot="{loading,setLoader}">
              <span class="Team__buttons1">
                <v-btn
                  :loading="loading"
                  solo
                  depressed
                  text
                  height="55.88px"
                  outlined
                  class="Team__leavebutton"
                  @click="setLoader(leaveTeam)"
                >LEAVE TEAM</v-btn>
              </span>
            </PCLoader>
          </v-row>
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>










<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { FbStore } from '../../../../store'
import { GeneralUser } from '../../../../store/Database/types/types'
import {startCase, toLower} from 'lodash'
import { Watch } from 'vue-property-decorator'
import { PCLoader } from '../../../../components/utilities'
import { ValidationObserver, ValidationProvider } from 'vee-validate'
function getNames(){
   return Promise.all(FbStore.currentProject!.teamMembersIds.map(async (id) =>{
           let {firstName, lastName} = (await FbStore.firestore.collection("GeneralUser").doc(id).get()).data<GeneralUser>()
        return startCase(toLower(`${firstName} ${lastName}`))
     }))
}
@Component<Team>({
  components:{
    PCLoader,
    ValidationObserver,
ValidationProvider
  }
})
export default class Team extends Vue{
  newTeamName:string = ""
  created(){
    this.onIdsChange()
  }
  get teamIds(){
    return FbStore.currentProject!.teamMembersIds
  }
  get teamName(){
    return FbStore.currentProject!.teamName
  }
  get currentProject(){
    return FbStore.currentProject
  }
  @Watch('teamIds')
  async onIdsChange(){
    this.names = await getNames()
  }
  async renameTeam(){
    await FbStore.renameProject({newProjectName:this.newTeamName,projectId:FbStore.currentProject!.projectId})
    this.newTeamName = ""
  }
  async leaveTeam(){
    await FbStore.leaveProject({projectId:FbStore.currentProject!.projectId})
    //push back to join team after
  }
  names:string[] = []
}
</script>