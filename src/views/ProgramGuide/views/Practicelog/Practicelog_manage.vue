<template>
  <v-container>
    <v-row
      justify="center"
      no-gutters
      class="practicelog-container"
    >
      <img
        id="practicelog-manage__icon"
        class="practicelog_manage__image"
        src="@/assets/practicelog_manage.png"
      >

      <v-col
        class="practicelog-manage__contain"
        cols="8"
      >
        <v-row
          no-gutters
          justify="center"
          class="practicelog-manage__title"
        >
          MANAGE PRACTICE LOGS
        </v-row>
        <v-container v-if="practiceHash && Object.keys(practiceHash).length">
          <v-row
            justify="center"
            class="practicelog-manage__label mt-12 mb-6"
          >
            <v-col
              cols="4"
              md="3"
              lg="2"
              xl="1"
            >
              Time
            </v-col>
            <v-col
              cols="7"
              md="4"
              lg="3"
              xl="2"
              class="pl-0"
            >
              Name
            </v-col>
            <!-- <v-col class="practicelog_manage__label" cols="3"></v-col> -->
          </v-row>

          <!-- LOGGER -->

          <v-row
            v-for="(entry,studentId) in practiceHash"
            :key="studentId"
            justify="center"
            class="practicelog-manage__logged"
          >
            <!-- <v-col class="practicelog_manage__externallink" cols="1"><i class="fas fa-external-link-alt"></i></v-col> -->
            <v-col
              class="practicelog-manage__log-header"
              cols="4"
              md="3"
              lg="2"
              xl="1"
            >
              {{ `${reduceEntry(entry.practiceLog)}m` }}
            </v-col>
            <v-col
              cols="7"
              md="4"
              lg="3"
              xl="2"
              style="padding: 0"
            >
              <v-col
                class="practicelog-manage__log-header"
              >
                {{ entry.name }}
              </v-col>
              <pc-timelog
                :key="key"
                v-model="entry.practiceLog"
                v-slot="{entries}"
              >
                <v-col
                  v-for="(log) in entries"
                  :key="log.id"
                  style="padding: 0"
                >
                  <span>
                    <button
                      class="practicelog_manage__rejectbutton"
                      @click="rejectEntry(studentId,log.lastUpdate)"
                    >Reject</button>
                    <span class="practicelog_manage__singlelog">{{ `${log.minutes}m` }}</span>
                  </span>
                </v-col>
              </pc-timelog>
            </v-col>
          </v-row>
        </v-container>
        <Oops v-else />
        <!-- LOGGER -->
      </v-col>
    </v-row>
  </v-container>
</template>





<script lang="ts">
import Vue from "vue";
import Component, { mixins } from "vue-class-component";
import { TimeLog } from "@/store/Database/types/utilities";
import { PCmultiinput } from "@/components/inputs";
import { firebase } from "@/firebase/init";
import { FbStore } from "../../../../store";
import { Subscription, Observable, from } from "rxjs";
import { Classroom, Project } from "../../../../store/Database/types/types";
import { doc } from "rxfire/firestore";
import { Oops } from "../../components";
import { latestProjectDataMixin } from "../../utilities";
import { switchMap, tap, filter } from "rxjs/operators";
import { Watch } from 'vue-property-decorator';

export const pcTimelog = PCmultiinput.createMultiInput<TimeLog>({
  minutes: 0,
  lastUpdate: firebase.firestore.Timestamp.fromDate(new Date())
});

@Component<Logtime>({
  components: {
    pcTimelog,
    Oops
  },
  subscriptions() {
    return {
      practiceHash: this.latestProjectData$.pipe(
        switchMap(projectdata =>
          from(
            new Promise(async resolve => {
              let obj = {} as Record<
                string,
                { name: string; projectId: string, practiceLog:TimeLog[] }
              >;
              await Promise.all(
                projectdata.map(async project => {
                  await Promise.all(
                    Object.keys(project.practiceLog).map(async studentId => {
                      obj[studentId] = {
                        name: await FbStore.getStudentName({
                          studentUid: studentId
                        }),
                        projectId: project.projectId,
                        practiceLog:project.practiceLog[studentId]
                      };
                    })
                  );
                })
              );
              resolve(obj);
            })
          )
        ),
        tap(() => this.key++)
      )
      
    };
  }
})
export default class Logtime extends mixins(latestProjectDataMixin) {
  // 'someuid':[{
  //   minutes:45,
  //   lastUpdate: firebase.firestore.Timestamp.fromDate(new Date(12))
  // },
  // {
  //   minutes:13,
  //   lastUpdate: firebase.firestore.Timestamp.fromDate(new Date(42))
  // },
  // {
  //   minutes:10,
  //   lastUpdate: firebase.firestore.Timestamp.fromDate(new Date(14))
  // }],
  // "otheruid":[{
  //   minutes:20,
  //   lastUpdate: firebase.firestore.Timestamp.fromDate(new Date(23))
  // }]
  key=0
  practiceHash!: Record<string, { name: string; projectId: string, practiceLog:TimeLog[] }>;
  async rejectEntry(studentId: string, lastUpdate: firebase.firestore.Timestamp) {
    
    await FbStore.firestore
      .collection("Project")
      .doc(this.practiceHash[studentId].projectId)
      .update<Project>({
        [`practiceLog.${studentId}`]: this.practiceHash[studentId].practiceLog.filter((val,filterIndex) => !val.lastUpdate.isEqual(lastUpdate))
      });
    this.$forceUpdate();
  }
  reduceEntry(entries: TimeLog[]): number {
    return entries.reduce((sum, entry) => (sum += entry.minutes), 0);
  }
}
</script>