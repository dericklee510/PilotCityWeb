

<template>
  <v-container>
    <template v-if="!currentProject">
      <v-row
        class="join-team"
        no-gutters
        justify="center"
      >
        <v-col
          class="manageteam__container"
          cols="8"
        >
          <v-row no-gutters>
            <v-col
              cols="12"
              class="manageteam__title"
            >
              <span>Join Team</span>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col cols="12">
              <PCLoader v-slot="{loading,setLoader}">
                <v-row
                  v-for="(project,index) in projects"
                  :key="index"
                  no-gutters
                  align="center"
                  style="margin-bottom: 25px;"
                >
                  <v-col
                    cols="1"
                    style="margin-right: 20px;"
                  >
                    <v-btn
                      small
                      :loading="loading"
                      depressed
                      dark
                      @click="setLoader(joinTeam(project))"
                    >
                      JOIN
                    </v-btn>
                  </v-col>
                  <v-col class="join-team__team-name text-uppercase">
                    {{ project.teamName }}
                  </v-col>
                </v-row>
              </PCLoader>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col
              cols="12"
              class="manageteam__title"
            >
              <span>Create Team</span>
            </v-col>
          </v-row>
          <!-- <v-row
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
          </v-row>-->

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
                      rules="required"
                    >
                      <v-text-field
                        v-model="createTeamName"
                        flat
                        solo
                        depressed
                        outlined
                        :error-messages="errors"
                        class="join-team__dreamteam"
                        placeholder="Name your team"
                      />
                    </ValidationProvider>
                  </v-col>
                  <v-col cols="2">
                    <PCLoader v-slot="{loading,setLoader}">
                      <v-btn
                        solo
                        depressed
                        outlined
                        height="55.88px"
                        :loading="loading"
                        :disabled="invalid"
                        class="ml-6"
                        @click="setLoader(createProject)"
                      >
                        CREATE
                      </v-btn>
                    </PCLoader>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </ValidationObserver>
        </v-col>
      </v-row>
    </template>

    <!-- TEAM AND TEAM NAMES -->

    <template v-else>
      <v-row
        no-gutters
        justify="center"
      >
        <v-col cols="8">
          <v-col class="manageteam__teamtitle">
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
                v-model="show"
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
import { startCase, toLower } from "lodash";
import { GeneralUser } from "../../../../store/Database/types/types";
function getNames() {
  if (FbStore.currentProject)
    return Promise.all(
      FbStore.currentProject.teamMembersIds.map(async id => {
        let { firstName, lastName } = (
          await FbStore.firestore
            .collection("GeneralUser")
            .doc(id)
            .get()
        ).data<GeneralUser>();
        return startCase(toLower(`${firstName} ${lastName}`));
      })
    );
  return [];
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
    await FbStore.joinProject({ projectId });
    this.createTeamName = "";
    this.$forceUpdate();
  }
  async joinTeam(project: Project) {
    await FbStore.joinProject({ projectId: project.projectId });
    // push to team settings after
  }
  projects: Project[] = [];
  get teamIds() {
    return FbStore.currentProject?.teamMembersIds || [];
  }
  get teamName() {
    return FbStore.currentProject?.teamName || "";
  }
  get currentProject() {
    return FbStore.currentProject || "";
  }
  @Watch("teamIds", { immediate: true })
  async onIdsChange() {
    this.names = await getNames();
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
  names: string[] = [];
  newTeamName: string = "";
}
</script>