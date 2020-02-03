

<template>
  <v-container>
    <template v-if="!currentProject">
      <v-row
        no-gutters
        justify="center"
      >
        <v-col
          class="manageteam__container"
          cols="10"
        >
          <v-row no-gutters>
            <v-col
              cols="12"
              class="manageteam__title"
            >
              <span>Join Teams</span>
            </v-col>
          </v-row>

          <v-row no-gutters>
            <v-col cols="12">
              <PCLoader v-slot="{loading,setLoader}">
                <v-row
                  v-for="(project,index) in projects"
                  :key="index"
                >
                  <span class="jointeam__name1">
                    <v-btn
                      :loading="loading"
                      class="jointeam__button1 manageclass__button"
                      @click="setLoader(joinTeam(project))"
                    >JOIN</v-btn>
                    {{ project.teamName }}
                  </span>
                </v-row>
              </PCLoader>
            </v-col>
          </v-row>

          <v-row no-gutters>
            <v-col
              cols="12"
              class="manageteam__title"
            >
              <span>Create Teams</span>
            </v-col>
          </v-row>
          <v-row
            class="manageteam__labels"
            no-gutters
          >
            <v-col
              cols="12"
              lg="5"
              xl="6"
            >
              <span>Team Name</span>
            </v-col>
          </v-row>

          <v-row>
            <v-col
              cols="12"
              class="jointeam__buttons"
            >
              <v-row no-gutters>
                <ValidationObserver v-slot="{invalid}">
                  <v-col cols="5">
                    <ValidationProvider
                      v-slot="{errors}"
                      rules="required"
                    >
                      <v-text-field
                        v-model="teamName" 
                        flat
                        solo
                        depressed
                        :error-messages="errors"
                        class="jointeam__dreamteam"
                        placeholder="Dream Team"
                      />
                    </ValidationProvider>
                  </v-col>
                  <v-col cols="3">
                    <PCLoader v-slot="{loading,setLoader}">
                      <v-btn
                        text
                        solo
                        depressed
                        :loading="loading"
                        :disabled="invalid"
                        class="jointeam__createbutton manageclass__button"
                        @click="setLoader(createProject)"
                      >
                        CREATE
                      </v-btn>
                    </PCLoader>
                  </v-col>
                </ValidationObserver>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </template>
    <template v-else>
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
    </template>
  </v-container>
</template>





<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { FbStore } from "../../../../store";
import { doc } from "rxfire/firestore";
import { Project } from "../../../../store/Database/types/types";
import { findIndex } from "lodash";
import { PCLoader } from "../../../../components/utilities";
import { ValidationProvider, ValidationObserver } from "vee-validate";
import { Watch } from "vue-property-decorator";
import { Subscription } from "rxjs";
import {startCase, toLower} from 'lodash'
import { GeneralUser } from '../../../../store/Database/types/types'
function getNames(){
  if(FbStore.currentProject)
   return Promise.all(FbStore.currentProject.teamMembersIds.map(async (id) =>{
           let {firstName, lastName} = (await FbStore.firestore.collection("GeneralUser").doc(id).get()).data<GeneralUser>()
        return startCase(toLower(`${firstName} ${lastName}`))
     }))
     return []
}
@Component<jointeam>({
  asyncComputed: {
    // async projectObservables(){
    //  FbStore.currentClassroom!.projectIds.map(id => {
    //   this.$subscribeTo(
    //     doc(FbStore.firestore.collection("Project").doc(id)),
    //     snapshot => {
    //       let index = findIndex(this.projects, { projectId: id });
    //       this.projects.splice(index, (index===-1)?0:1, snapshot.data());
    //       console.log(this.$observables)
    //     },
    //     err => {},
    //     () => {
    //       let index = findIndex(this.projects, { projectId: id });
    //       console.log("Project was deleted");
    //       this.projects.splice(index, 1);
    //     }
    //   )
    // });
    // }
  },
  components: {
    PCLoader,
    ValidationProvider,
    ValidationObserver
  }
})
export default class jointeam extends Vue {
  created() {
    this.onChange();
  }
  get projectObservables() {
    return FbStore.currentClassroom!.projectIds.map(id => {
      return doc(FbStore.firestore.collection("Project").doc(id));
    });
  }
  @Watch("projectObservables")
  onChange() {
    this.subscribers.forEach(subscription => subscription.unsubscribe());
    this.subscribers = [];
    this.projects = [];
    this.projectObservables.forEach(observer => {
      observer.subscribe(snapshot => {
        let index = findIndex(this.projects, { projectId: snapshot.id });
        this.projects.splice(index, index === -1 ? 0 : 1, snapshot.data());
      });
    });
  }
  beforeDestroy() {
    this.subscribers.forEach(subscriber => subscriber.unsubscribe());
  }
  subscribers: Subscription[] = [];
  createTeamName: string = "";
  async createProject() {
    let projectId = await FbStore.createProject({
      teamName: this.createTeamName,
      classroomId: FbStore.currentClassroom!.classroomId
    });
    await FbStore.joinProject({projectId})
    this.createTeamName = "";
    this.$forceUpdate()
  }
  async joinTeam(project:Project){
    await FbStore.joinProject({projectId:project.projectId})
    // push to team settings after
  }
  projects: Project[] = [];
    get teamIds(){
    return FbStore.currentProject?.teamMembersIds || []
  }
  get teamName(){
    return FbStore.currentProject?.teamName || ""
  }
  get currentProject(){
    return FbStore.currentProject || "";
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
    newTeamName:string = ""
}
</script>