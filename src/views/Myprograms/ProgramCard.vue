<template>
  <PCLoader v-slot="{loading, setLoader}">
    <v-row class="myprograms__card">
      <v-col cols="3">
        <div class="myprograms__cardimage" />
      </v-col>
      <v-col cols="9">
        <v-row class="myprograms__cardtitle">
          {{ program.programName }}
        </v-row>
        <v-row
          v-if="isStudent"
          class="myprograms__progresspercentage"
        >
          {{ completion }}%
        </v-row>
        <v-row>
          <v-col cols="9">
            <!-- <v-row class="myprograms__progressbaractive" /> -->
            <v-progress-linear
              v-if="isStudent"
              v-model="completion"
              color="success"
              rounded
              height="25"
            />
          </v-col>
          <v-col cols="3">
            <v-btn
              class="myprograms__cardbutton"
              :disabled="loading"
              :loading="loader"
              @click="setLoader(() => openprogram(program))"
            >
              {{ openCondition?`Open`:`Launch` }}
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </PCLoader>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop, Watch } from "vue-property-decorator";
import {
  EmployerProgram,
  studentClassroom,
  TeacherProgramData
} from "../../store/Database/types/types";
import { FbStore } from "../../store";
import { PCLoader } from "../../components/utilities";
import { RouteList } from "../ProgramGuide/types";
@Component({
  components: {
    PCLoader
  }
})
export default class ProgramCard extends Vue {
  loader = false;
  @Prop({ required: true })
  program!: EmployerProgram;
  @Watch("program", { immediate: true })
  async onProgramChange() {
    if (FbStore.userCitizenType === "student") {
      this.loader = true;
      const classroomData = await FbStore.findRelativeClassroom({
        employerProgramId: this.program.employerProgramId,
        studentId: FbStore.FBUser!.uid
      });
      const studentClassroomData = (
        await FbStore.firestore
          .collection("studentClassroom")
          .doc(classroomData.classroomId + FbStore.FBUser!.uid)
          .get()
      ).data<studentClassroom>();
      const project = await FbStore.findRelativeProject({
        classroomId: classroomData.classroomId,
        studentId: FbStore.FBUser!.uid
      });
      const keysOfSequence = {
        programBrief: studentClassroomData?.finishedIntrovideo,
        introVideo: studentClassroomData?.finishedProgramBrief,
        train: project?.programSequence?.train,
        practice: project?.programSequence?.practice,
        caseStudies: project?.programSequence?.caseStudies,
        bmc: project?.programSequence?.bmc,
        sentencePitch: project?.programSequence?.sentencePitch,
        elevatorPitch: project?.programSequence?.elevatorPitch,
        hackDay: project?.programSequence?.hackDay,
        reflection: project?.programSequence?.reflection,
        processLog: project?.programSequence?.processLog,
        demoVideo: project?.programSequence?.demoVideo,
        presentation: project?.programSequence?.presentation,
        demoDay: project?.programSequence?.demoDay,
        exitForm: project?.programSequence?.exitForm,
        interviewOffer: project?.programSequence?.interviewOffer
      };
      let progress = [...Object.values(keysOfSequence)].reduce(
        (total, current) => {
          return (total += current ? 1 : 0);
        },
        0
      );
      this.completion = (progress / Object.keys(keysOfSequence).length) * 100;
      this.loader = false;
    }
  }
  completion: number = 0;
  async openprogram(program: EmployerProgram) {
    await FbStore.initCurrentEmployerProgram(program);
    localStorage.PILOTCITY_EMPLOYERPROGRAMID = program.employerProgramId;
    let route = new RouteList(FbStore.currentUserProfile!.citizenType!)
      .linkedList.head.value.routeName;
    this.$router.push({
      name: this.openCondition ? route : "program.launch"
      // params: { citizenType: citizenKey }
    });
  }
  get isStudent() {
    return FbStore.userCitizenType == "student";
  }
  get openCondition() {
    switch (FbStore.userCitizenType) {
      case "employer":
        return this.program.launched
      case "student":
        return this.completion
      case "teacher":
        return FbStore.currentUserProfile!.teacherProgramDataIds[
        this.program.employerProgramId
      ]
    }
    return false
  }
}
</script>