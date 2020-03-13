<template>
  <v-row
    class="mt-12"
    justify="center"
  >
    <v-col cols="8">
      <!-- ACTIVE -->

      <v-row class="myprograms__categorytitle mt-12 mb-6">
        My Programs
      </v-row>

      <!-- ACTIVE CARD -->
      <div class="mt-5 mb-5">
        <ProgramCard
          v-for="(program,index) in Programs"
          :key="index"
          :program="program"
        />
      </div>
      <!-- ADD CARD -->

      <v-dialog
        v-model="dialog"
        max-width="50vw"
      >
        <template v-slot:activator="{on}">
          <v-row
            justify="center"
            class="myprograms__addcard mt-9"
            v-on="on"
          >
            +
          </v-row>
        </template>
        <template>
          <v-container class="code-modal pa-0">
            <v-row
              no-gutters
              justify="center"
            >
              <v-col
                cols="10"
                class="code-modal__container"
              >
                <v-row
                  no-gutters
                  justify="center"
                >
                  <v-col
                    class="code-modal__title"
                    cols="12"
                  >
                    <span>Enter program code</span> 
                  </v-col>
                </v-row>
                <v-row
                  no-gutters
                  justify="center"
                >
                  <v-col
                    cols="8"
                    class="code-modal__input"
                  >
                    <v-text-field
                      v-model="shareCode"
                      solo
                      depressed
                      text
                      outlined
                      :success-messages="result"
                    />
                  </v-col>
                </v-row>
                <v-row
                  no-gutters
                  justify="center"
                >
                  <v-col
                    cols="8"
                    md="4"
                    class="code-modal__button"
                  >
                    <v-btn
                      width="100%"
                      height="100%"
                      text
                      depressed
                      outlined
                      @click="joinProgram"
                    >
                      ADD PROGRAM
                    </v-btn>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-container>
        </template>
      </v-dialog>
      <!-- COMPLETED -->

      <v-row class="myprograms__categorytitle mt-12 mb-6">
        Completed
      </v-row>

      <v-row
        justify="center"
        class="myprograms__cardcompletednonev2 mb-12"
      >
        No completed programs yet
        <i class="ml-3 mt-1 far fa-grin-beam-sweat" />
      </v-row>

      <!-- COMPLETED CARD -->

      <!-- <v-row class="myprograms__card">

          <v-col cols="3"><div class="myprograms__cardimage"></div></v-col>
          <v-col cols="9">
              <v-row class="myprograms__cardtitle">Lawrence Berkeley National Labs</v-row>
              <v-row class="myprograms__progresspercentage">100%</v-row>
              <v-row>
                  <v-col cols="9">

                    <v-row class="myprograms__progressbaractive">

                    </v-row>

                  </v-col>
                  <v-col cols="3"><button class="myprograms__cardbutton">See Results</button></v-col>
              </v-row>
          </v-col>
      </v-row>-->

      <!-- NO COMPLETED PROGRAMS YET -->

      <!-- <v-row class="myprograms__cardcompleted">
        <v-col>
          <div class="myprograms__cardimagecompleted"></div>

          <v-row
            justify="center"
            class="myprograms__cardtitlecompleted mt-3 mb-4"
          >Lawrence Berkeley National Labs</v-row>
          <v-row justify="center" class="myprograms__progresspercentagecompleted">100%</v-row>

          <v-row justify="center" class="myprograms__progressbarcompleted ml-auto mr-auto mb-5"></v-row>

          <v-row justify="center" cols="3">
            <button class="myprograms__cardbuttoncompleted mb-2">See Results</button>
          </v-row>
        </v-col>
      </v-row>-->
    </v-col>
  </v-row>
</template>





<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { FbStore, AuthStore } from "../../store";
import {
  EmployerProgram,
  Classroom,
  GeneralUser
} from "../../store/Database/types/types";
import { firebase } from "@/firebase/init";
import { from } from "rxjs";
import { map, switchMap } from "rxjs/operators";
import { PCLoader } from "../../components/utilities";
import { Watch } from 'vue-property-decorator';
import ProgramCard from "./ProgramCard.vue"
@Component<myprograms>({
  components: {
    PCLoader,
    ProgramCard
  },
  subscriptions() {
    return {
      
    };
  },
  async beforeRouteEnter(to, from, next) {
    if (FbStore.userCitizenType == 'student'){
      const studentFormRef = await FbStore.firestore.collection("StudentForm").doc(FbStore.FBUser!.uid).get()
      if (studentFormRef.exists) {
        next()
      }
      else next({name: 'signup.type'})
    }
    else if(AuthStore.user) next()
    else next({name: 'login'})
  },
})
export default class myprograms extends Vue {
  async created(){
    localStorage.PILOTCITY_EMPLOYERPROGRAMID = null;
    await FbStore.initCurrentTeacherProgramData(null);
    this.onProgramChange()
  }
  dialog:boolean = false
  Programs: EmployerProgram[] = [];
  get programIds() {
    switch(FbStore.userCitizenType!){
      case("employer"):
      return FbStore.currentUserProfile!.employerProgramIds
      case("teacher"):
      return Object.keys(FbStore.currentUserProfile!.teacherProgramDataIds)
      case("student"):
      return FbStore.currentUserProfile!.classroomIds
    }
    return []
  }
@Watch('programIds')
async onProgramChange(){
  this.Programs = (await this.getEmployerPrograms()).map(snapshot => snapshot.data())
  this.$forceUpdate()
}

  async getEmployerProgramIds():Promise<string []> {
    if (FbStore.userCitizenType === "student")
      return await Promise.all(
        FbStore.currentUserProfile!.classroomIds.map(
          async id =>
            (
              await FbStore.firestore
                .collection("Classroom")
                .doc(id)
                .get()
            ).data<Classroom>().employerProgramId
        )
      );
    else if(FbStore.userCitizenType === "employer") 
      return FbStore.currentUserProfile!.employerProgramIds;
    else  
      return Object.keys(FbStore.currentUserProfile!.teacherProgramDataIds)
  }
  async getEmployerPrograms() {
    return Promise.all(
      (await this.getEmployerProgramIds()).map(id =>
        FbStore.firestore
          .collection("EmployerProgram")
          .doc(id)
          .get()
      )
    );
  }
  createProgram() {
    let id = FbStore.firestore.collection("EmployerProgram").doc().id;
    FbStore.firestore
      .collection("EmployerProgram")
      .doc(id)
      .set<EmployerProgram>({
        employerProgramId: id,
        programName: "Lawrence Berkley National Labs",
        employerId: FbStore.userUid!,
        programLauncher: [],
        shareCode: "eoisrhjow3i4ubn3woi4nh",
        lastUpdate: firebase.firestore.FieldValue.serverTimestamp()
      });
    FbStore.updateCurrentUserProfile({
      employerProgramIds:firebase.firestore.FieldValue.arrayUnion(id) as unknown as string[]
    });
  }
  value = "";
  custom = true;
  shareCode = "";
  result = "";
  async joinProgram() {
    if (FbStore.userCitizenType === "teacher") {
      let querySnapshot = await FbStore.firestore
        .collection("EmployerProgram")
        .where("shareCode", "==", this.shareCode)
        .get();
        let foundProgramDoc =  querySnapshot.docs[0]
      let foundProgram = querySnapshot.docs[0]?.data() as
        | EmployerProgram
        | undefined;
      if (foundProgram && !FbStore.currentUserProfile!.teacherProgramDataIds[foundProgramDoc.id]){
        await FbStore.createTeacherProgramData(foundProgram.employerProgramId)
        this.dialog = false
        }
      else this.result = "Could not verify share code";
    } else if (FbStore.userCitizenType === "student") {
      let querySnapshot = await FbStore.firestore
        .collection("Classroom")
        .where("shareCode", "==", this.shareCode)
        .get();
      let foundProgram = querySnapshot.docs[0]?.data() as Classroom | undefined;
      if (foundProgram){
        FbStore.joinClassroom({
          classroomUid: foundProgram.classroomId,
          studentUid: FbStore.FBUser!.uid
        });
        this.dialog = false
        }
      else this.result = "Could not verify share code";
    } else if (FbStore.userCitizenType === "employer") {
      let ref = FbStore.firestore
        .collection("EmployerProgram")
        .doc(this.shareCode);
      let doc = await ref.get();
      if (doc.exists) {
        ref.update<EmployerProgram>({
          employerId: FbStore.FBUser!.uid,
          launched: firebase.firestore.FieldValue.delete()
        });
        await FbStore.updateCurrentUserProfile({
          employerProgramIds: (firebase.firestore.FieldValue.arrayUnion(
            doc.id
          ) as unknown) as string[]
        });
        this.dialog = false
      }
    }
  }
  get progress() {
    return Math.min(100, this.value.length * 10);
  }
  get color() {
    return ["error", "warning", "success"][Math.floor(this.progress / 40)];
  }
}
</script>