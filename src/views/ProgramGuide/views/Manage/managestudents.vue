<template>
  <v-container>
    <v-row
      no-gutters
      justify="center"
    >
      <v-col
        class="manageclass__container"
        cols="8"
      >
        <v-tabs no-gutters>
          <v-tab
            style="cursor: pointer"
            @click="$router.push({name: 'teach-externship-manage-class'})"
          >
            CLASSES
          </v-tab>

          <v-tab
            style="cursor: normal"
            @click="$router.push({name: 'teach-externship-manage-teams'})"
          >
            TEAMS
          </v-tab>

          <v-tab
            style="cursor: pointer"
            @click="$router.push({name: 'teach-externship-manage-students'})"
          >
            STUDENTS
          </v-tab>
        </v-tabs>


        <v-row no-gutters>
          <v-col
            cols="12"
            class="manageteam__title"
          >
            <span>Manage Students</span>
          </v-col>
        </v-row>

        <!-- LABELS -->





        <v-row
          class="manageclass__labels mb-5"
          no-gutters
        >
          <v-col
            cols="4"
            class="pr-3"
          >
            <span>Name</span>
          </v-col>

          <v-col
            cols="4"
            class="pr-3 d-none d-lg-block"
          >
            <span>Classes</span>
          </v-col>

          <v-col
            cols="4"
            class="pr-3 d-none d-lg-block"
          >
            <span>Team</span>
          </v-col>
        </v-row>

        <!-- CONTENT -->

        <v-row no-gutters>
          <v-col cols="12">
            <v-row
              v-for="(entry,index) in entries"
              :key="index"
              no-gutters
            >
              <!-- NAME -->
              <v-col
                cols="12"
                lg="4"
                xl="2"
                class="mt-5 pr-3"
              >
                <v-btn
                  dark
                  depressed
                  small
                >
                  {{ entry.name }}
                </v-btn>
              </v-col>
              <!-- CLASS DROPDOWN -->
              <v-col class="pr-3">
                <v-select
                  :value="{text:entry.class,value:entry.classroomId}"
                  :items="availableClasses"
                  @input="changeClassroom($event,entry)"
                />
              </v-col>

              <!-- TEAM DROPDOWN -->
              <v-col class="pr-3">
                <v-select
                  :value="{text:entry.project, value:entry.projectId}"
                  :items="availableProjects[entry.classroomId]"

                  @input="changeProject($event,entry)"
                />
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <!-- OOPSIE -->

        <Oops v-if="!entries.length" />
      </v-col>
    </v-row>
  </v-container>
</template>


<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { PCselect } from "../../../../components/inputs";
import { FbStore } from "../../../../store";
import { doc } from "rxfire/firestore";
import {
  Classroom,
  Project,
  GeneralUser
} from "../../../../store/Database/types/types";
import { Watch } from "vue-property-decorator";
import { findIndex } from "lodash";
import { Oops } from "../../components";
interface studentInfo {
  studentId: string;
  name: string;
  class: string;
  project: string;
  classroomId: string;
  projectId?: string;
}
function spliceOrPush<T>(
  target: Array<T>,
  obj: T,
  ...identifiers: (keyof T)[]
) {
  let searchObj: Record<keyof T, any> = ({} as unknown) as Record<keyof T, any>;
  identifiers.forEach(identifier => {
    searchObj[identifier] = obj[identifier];
  });
  let index = findIndex(target, searchObj);
  target.splice(index, index === -1 ? 0 : 1, obj);
}
@Component({
  subscriptions() {
    return {};
  },
  components: {
    Oops,
    pcSelect: PCselect
  }
})
export default class managestudents extends Vue {
  async mounted() {
    FbStore.currentTeacherProgramData!.classroomIds.forEach(id => {
      let classroomDoc = FbStore.firestore.collection("Classroom").doc(id);
      this.availableProjects[id] = [];
      this.$subscribeTo(doc(classroomDoc), async snapshot => {
        let classroomData = snapshot.data<Classroom>();
        spliceOrPush(
          this.availableClasses,
          {
            text: classroomData.className,
            value: id
          },
          "value"
        );
        // handle list of projects here
        classroomData.projectIds.forEach(projectId => {
          this.$subscribeTo(
            doc(FbStore.firestore.collection("Project").doc(projectId)),
            projectsnapshot => {
              spliceOrPush(
                this.availableProjects[id],
                {
                  text: projectsnapshot.data<Project>().teamName,
                  value: projectsnapshot.id
                },
                "value"
              );
            }
          );
        });

        // handle students here
        classroomData.studentIds.forEach(async studentID => {
          this.$subscribeTo(
            doc(FbStore.firestore.collection("GeneralUser").doc(studentID)),
            async studentSnapshot => {
              let project = await FbStore.findRelativeProject({
                classroomId: id,
                studentId: studentID
              });
              if (project)
                this.$subscribeTo(
                  doc(
                    FbStore.firestore
                      .collection("Project")
                      .doc(project.projectId)
                  ),
                  async projectSnapshot => {
                    let newObj: studentInfo = {
                      name: await FbStore.getStudentName({
                        studentName: studentSnapshot.data<GeneralUser>()
                      }),
                      project: projectSnapshot.data<Project>().teamName,
                      class: classroomData.className,
                      studentId: studentID,
                      classroomId: projectSnapshot.data<Project>().classroomId,
                      projectId: projectSnapshot.id
                    };
                    spliceOrPush(this.entries, newObj, "studentId");
                  }
                );
              else {
                let relativeClassroom = await FbStore.findRelativeClassroom({
                  employerProgramId: FbStore.currentEmployerProgramUID!,
                  studentId: studentID
                });
                spliceOrPush(
                  this.entries,
                  {
                    name: await FbStore.getStudentName({
                      studentName: studentSnapshot.data<GeneralUser>()
                    }),
                    studentId: studentID,
                    class: relativeClassroom.className,
                    project: "",
                    classroomId: relativeClassroom.classroomId
                  },
                  "studentId"
                );
              }
            }
          );
        });
      });
    });
  }

  get classroomIds() {
    return FbStore.currentTeacherProgramData!.classroomIds;
  }
  availableProjects: {
    [classroomId: string]: {
      text: string; // projectName
      value: string; //projectId
    }[];
  } = {};
  availableClasses: {
    text: string; //className
    value: string; // classId
  }[] = [];
  entries: studentInfo[] = [];
  async changeProject(projectId: string, studentEntry: studentInfo) {
    await FbStore.switchProject({
      oldProjectId: studentEntry.projectId,
      newProjectId: projectId,
      studentId: studentEntry.studentId
    });
  }
  async changeClassroom(classroomId: string, studentEntry: studentInfo) {
    await FbStore.switchClassroom({
      oldClassroomId: studentEntry.classroomId,
      newClassroomId: classroomId,
      studentId: studentEntry.studentId
    });
  }
}
</script>