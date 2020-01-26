

<template>
  <v-container class="join-team">
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
ValidationObserver;
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
  teamName: string = "";
  async createProject() {
    let projectId = await FbStore.createProject({
      teamName: this.teamName,
      classroomId: FbStore.currentClassroom!.classroomId
    });
    await FbStore.joinProject({projectId})
    this.teamName = "";
    this.$forceUpdate()
  }
  async joinTeam(project:Project){
    await FbStore.joinProject({projectId:project.projectId})
    // push to team settings after
  }
  projects: Project[] = [];
}
</script>