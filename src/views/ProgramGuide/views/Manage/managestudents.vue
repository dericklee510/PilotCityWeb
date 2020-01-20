<template>
  <v-container>
    <span class="managestudents__topbutton">
      <button class="managestudents__classesbutton">CLASSES</button>

      <button class="managestudents__studentsbutton">STUDENTS</button>

      <button class="managestudents__teambutton">TEAMS</button>
    </span>

    <v-row
      class="managestudents__titlemain"
      justify="start"
    >
      <span class="managestudents__title">Manage Students</span>
    </v-row>
    <v-row>
      <v-col>Name</v-col>
      <v-col>Classes</v-col>
      <v-col>Team</v-col>
    </v-row>
    <v-row
      v-for="(entry,index) in entries"
      :key="index"
    >
      <v-col>{{ entry.name }}</v-col>
      <v-col>
        <pc-select
          :value="{text:entry.class,value:entry.classroomId}"
          :items="availableClasses"
          @update:value="changeClassroom($event,entry)"
        />
      </v-col>
      <v-col>
        <pc-select
          :value="{text:entry.project, value:entry.projectId}"
          :items="availableProjects[entry.classroomId]"
          @update:value="changeProject($event,entry)"
        />
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