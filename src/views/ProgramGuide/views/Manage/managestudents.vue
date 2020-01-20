<template>
  <v-container>
    <v-row
      no-gutters
      justify="center"
    >
      <v-col
        class="manageclass__container"
        cols="10"
      >
        <v-row
          class="manageclass__nav text-center"
          no-gutters
        >
          <v-col
            cols="4"
            sm="3"
            lg="2"
          >
            CLASSES
          </v-col>
          <v-col
            cols="4"
            sm="3"
            lg="2"
          >
            STUDENTS
          </v-col>
          <v-col
            cols="4"
            sm="3"
            lg="2"
          >
            TEAMS
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col
            cols="12"
            class="manageclass__title"
          >
            <span>Manage Student</span>
          </v-col>
        </v-row>
        <v-row
          class="manageclass__labels"
          no-gutters
        >
          <v-col
            cols="12"
            lg="5"
            xl="6"
          >
            <span> Name </span>
          </v-col>
          <v-col class=" d-none d-lg-block">
            <span> Classes </span>
          </v-col>
          <v-col
            cols="2"
            xl="1"
            class="manageclass__sharecode-label d-none d-lg-block "
          >
            <span> Team </span>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-row
              v-for="(entry,index) in entries"
              :key="index"
            >
              <v-col
                cols="12"
                lg="5"
                xl="6"
              >
                {{ entry.name }}
              </v-col>
              <v-col>
                <pc-select
                  v-model="entry.class"
                  :items="availableClasses"
                  @update:value="changeClassroom"
                />
              </v-col>
              <v-col
                cols="2"
                xl="1"
              >
                <pc-select
                  v-model="entry.project"
                  :items="availableProjects[entry.classroomId]"
                  @update:value="changeProject($event,entry)"
                />
              </v-col>
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
import { PCselect } from "../../../../components/inputs";
import { FbStore } from "../../../../store";
import { doc } from "rxfire/firestore";
import { Classroom, Project, GeneralUser } from "../../../../store/Database/types/types";
import { Watch } from "vue-property-decorator";
import { findIndex } from "lodash";
interface studentInfo {
  studentId: string;
  name: string;
  class: string;
  project: string;
  classroomId:string,
  projectId?:string,
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
  subscriptions(){
    return {
      
    }
  },
  components: {
    pcSelect: PCselect
  }
})
export default class managestudents extends Vue {
  async mounted() {
    FbStore.currentTeacherProgramData!.classroomIds.forEach(id => {
      let classroomDoc = FbStore.firestore.collection("Classroom").doc(id);
      this.availableProjects[id] = []
      this.$subscribeTo(doc(classroomDoc), async snapshot => {
        let classroomData = snapshot.data<Classroom>();
        spliceOrPush(this.availableClasses,{
          text:classroomData.className,
          value:id
        }, 'value')
        // handle list of projects here
        classroomData.projectIds.forEach(projectId => {
          this.$subscribeTo(doc(FbStore.firestore.collection("Project").doc(projectId)), projectsnapshot => {
            spliceOrPush(this.availableProjects[id],{
              text:projectsnapshot.data<Project>().teamName,
              value:projectsnapshot.id
            },'value')
          })
        })

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
                    let newObj:studentInfo = {
                      name: await FbStore.getStudentName({studentName: studentSnapshot.data<GeneralUser>()}),
                      project: projectSnapshot.data<Project>().teamName,
                      class:classroomData.className,
                      studentId:studentID,
                      classroomId:id,
                      projectId:projectSnapshot.id
                    }
                    spliceOrPush(this.entries,newObj,"studentId")
                  }
                );else 
                  spliceOrPush(this.entries,{
                    name:await FbStore.getStudentName({studentName: studentSnapshot.data<GeneralUser>()}),
                    studentId: studentID,
                    class:classroomData.className,
                    project:"",
                    classroomId:id,
                  })
            }
          );
        });
      });
    });
  }
  availableProjects:{
    [classroomId:string]:{
      text:string // projectName
      value:string //projectId
    }[]
  } = {
  }
  availableClasses:{
    text:string //className
    value:string // classId
  }[] = []
  entries: studentInfo[] = [];
  async changeProject(projectId:string,studentEntry:studentInfo){
    await FbStore.switchProject({oldProjectId:studentEntry.projectId,newProjectId:projectId,studentId:studentEntry.studentId}) 
  }
  async changeClassroom(classroomId:string,studentEntry:studentInfo){
    await FbStore.switchClassroom({oldClassroomId:studentEntry.classroomId, newClassroomId:classroomId,studentId:studentEntry.studentId})
  }
}
</script>