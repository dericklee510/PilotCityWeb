 <!-- TEAM AND TEAM NAMES -->

<template v-else>
  <v-row
    no-gutters
    justify="center"
  >
    <v-col cols="8">
      <v-col class="manageteam__teamtitle">
        <!-- JOIN PILOTCITY DISCORD -->
        <v-row
          class="mb-10"
          no-gutters
        >
          <v-col
            cols="12"
          >
            <span>Team Communication</span>     
            <v-row
              class="mt-3"
              no-gutters
            >
              <v-btn 
                href="https://discord.gg/2rU7tsd"
                target="_blank"
                dark
                large
                depressed
              >
                Join PilotCity Discord<v-icon right>
                  mdi-discord
                </v-icon>
              </v-btn>
            </v-row>
          </v-col>
        </v-row>

        <!-- END JOIN PILOTCITY DISCORD -->

        <span>{{ teamName }}


          <!-- TOOLTIP TEMPLATE -->
          <v-tooltip
            top
          >
            <template v-slot:activator="{ on }">
              <v-btn
                icon
                v-on="on"
              >
                <v-icon
                  class="pb-1"
                  color="grey lighten-1"
                >info</v-icon>
              </v-btn>
            </template>
            <span>This is your team's name</span>
          </v-tooltip>
          <!-- TOOLTIP TEMPLATE END -->
        </span>
      </v-col>

      <v-row
        v-for="(name,index) in names"
        :key="index"
        no-gutters
        align="center"
        style="margin-bottom: 25px;"
      >
        <v-col
          cols="1"
          style="margin-right: 20px; margin-left:12px;"
        >
          <!-- TOOLTIP TEMPLATE -->
          <v-tooltip
            right
          >
            <template v-slot:activator="{ on }">
              <v-btn
                small
                depressed
                dark
                v-on="on"
              >
                {{ name }}
              </v-btn>
            </template>
            <span>Team member of {{ teamName }}</span>
          </v-tooltip>
          <!-- TOOLTIP TEMPLATE END -->
        </v-col>
      </v-row>

      <!-- SETTINGS -->

      <v-col class="manageteam__title">
        <span>Settings</span>
      </v-col>
      <v-row
        class="studentid__questiontitle mt-7"
        justify="center"
      >
        {{ `Team ${lockTeam?'Locked':'Unlocked'}` }}
      </v-row>

      <v-row
        no-gutters
        justify="center"
      >
        <span class="agenda-view__switchlabel">UNLOCK</span>
        <v-switch
          v-model="lockTeam"
          inset
        />
        <span class="agenda-view__switchlabel">LOCK</span>
      </v-row>
      <!-- RENAME TEAM -->

      <v-col class="Team__teamname">
        <span>Rename Team</span>

        <ValidationObserver v-slot="{invalid}">
          <v-row>
            <v-col
              cols="12"
              class="join-team__buttons"
            >
              <v-row no-gutters>
                <v-col cols="6">
                  <ValidationProvider
                    v-slot="{errors}"
                    slim
                    rules="required"
                  >
                    <v-text-field
                      v-model="newTeamName"
                      :error-messages="errors"
                      :placeholder="teamName"
                      flat
                      solo
                      depressed
                      outlined
                      class="join-team__dreamteam"
                    />
                  </ValidationProvider>
                </v-col>
                <v-col cols="2">
                  <PCLoader v-slot="{loading,setLoader}">
                    <v-btn
                      :loading="loading"
                      :disabled="invalid"
                      solo
                      depressed
                      height="55.88px"
                      outlined
                      class="ml-6"
                      @click="setLoader(renameTeam)"
                    >
                      RENAME
                    </v-btn>
                  </PCLoader>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </ValidationObserver>
        <v-row>
          <PCLoader v-slot="{loading,setLoader}">
            <span>
              <v-btn
                :loading="loading"
                large
                depressed
                dark
                style="margin-left:12px;"
                @click="setLoader(leaveTeam)"
              >LEAVE TEAM</v-btn>
            </span>
          </PCLoader>
        </v-row>
      </v-col> 
    </v-col>
  </v-row>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from "vue-class-component";
import { FbStore } from '../../../../store';
import { Watch } from 'vue-property-decorator';
import { from } from 'rxjs';
import { PCLoader } from '../../../../components/utilities';
import { ValidationProvider, ValidationObserver } from 'vee-validate';

@Component<TeamSettings>({
  components:{
    PCLoader,
    ValidationObserver,
    ValidationProvider
  },
  subscriptions(){
    return {
      names: from(Promise.all(FbStore.currentProject!.teamMembersIds.map((id) => FbStore.getStudentName({studentUid:id}))))
    }
  }
})
export default class TeamSettings extends Vue{
  names!:string[]
get teamIds() {
    return FbStore.currentProject?.teamMembersIds || [];
  }
  get teamName() {
    return FbStore.currentProject?.teamName || "";
  }
  get currentProject() {
    return FbStore.currentProject
  }
  async renameTeam() {
    await FbStore.renameProject({
      newProjectName: this.newTeamName,
      projectId: FbStore.currentProject!.projectId
    });
    this.newTeamName = "";
  }
  async leaveTeam() {
    await FbStore.leaveProject({
      projectId: FbStore.currentProject!.projectId
    });
    //push back to join team after
  }
  get lockTeam(){
    return this.currentProject?.lockTeam || false
  }
  set lockTeam(newVal:boolean){
    FbStore.updateCurrentProject({
      lockTeam:newVal
    })
  }
  newTeamName: string = "";
}
</script>