<template>
  <v-container>
    <v-row> 
      <span class="Team__title">
        TEAM 
      </span>
    </v-row>
    <v-row
      v-for="(name,index) in names"
      :key="index"
    > 
      <span class="Team__name">
        {{ name }}
      </span>
    </v-row>
    <v-row> 
      <span class="Team__Settings">
        Settings
      </span>
    </v-row>
    <v-row> 
      <span class="Team__teamname">
        Team Name
      </span>

      
      <v-row> 
        <ValidationObserver v-slot="{invalid}">
          <span class="Team__buttons">
            <ValidationProvider
              v-slot="{errors}"
              slim
              rules="required"
            >
              <v-text-field
                v-model="newTeamName"
                :error-messages="errors"
                class="Team__newteamname"
                :placeholder="teamName"
              />
            </ValidationProvider>
            <PCLoader v-slot="{loading,setLoader}">
              <v-btn
                :loading="loading"
                :disabled="invalid"
                class="Team__renamebutton"
                @click="setLoader(renameTeam)"
              >RENAME</v-btn>
            </PCLoader>
          </span>
        </ValidationObserver>
      </v-row>
      <v-row> 
        <PCLoader v-slot="{loading,setLoader}">
          <span class="Team__buttons1">
            <v-btn
              :loading="loading"
              class="Team__leavebutton"
              @click="setLoader(leaveTeam)"
            >LEAVE</v-btn>
          </span>
        </PCLoader>
      </v-row>
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