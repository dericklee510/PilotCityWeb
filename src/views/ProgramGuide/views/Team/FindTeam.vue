<template>
  <v-row
    class="join-team"
    no-gutters
    justify="center"
  >
    <v-col
      class="manageteam__container"
      cols="8"
    >
      <!-- JOIN PILOTCITY DISCORD -->
      <v-row no-gutters>
        <v-col
          cols="12"
          class="manageteam__title"
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
          <PCLoader v-slot="{ loading, setLoader }">
            <v-row
              v-for="(project, index) in projects"
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

      <ValidationObserver v-slot="{ invalid }">
        <v-row>
          <v-col
            cols="12"
            class="join-team__buttons"
          >
            <v-row no-gutters>
              <v-col cols="6">
                <ValidationProvider
                  v-slot="{ errors }"
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
                <PCLoader v-slot="{ loading, setLoader }">
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
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { FbStore } from "../../../../store";
import { combineLatest } from "rxjs";
import { doc } from "rxfire/firestore";
import { map } from 'rxjs/operators';
import { Project } from '../../../../store/Database/types/types';
import { PCLoader } from '../../../../components/utilities';

@Component<FindTeam>({
  subscriptions() {
    return {
      projects: combineLatest(
        FbStore.currentClassroom!.projectIds.map((projectId) =>
          doc(FbStore.firestore.collection("Project").doc(projectId))
        )
      ).pipe(
          map(projectDocs => projectDocs.map(projectDoc => projectDoc.data()))
      ),
    };
  },
  components:{
      PCLoader
  }
})
export default class FindTeam extends Vue {
projects!:Project[]
async joinTeam(project: Project) {
    await FbStore.joinProject({ projectId: project.projectId });
  }
}
</script>
