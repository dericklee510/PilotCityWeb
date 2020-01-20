<template>
  <v-row
    class="mt-12"
    justify="center"
  >
    <v-col cols="8">
      <!-- ACTIVE -->

      <v-row class="myprograms__categorytitle mt-12 mb-6">
        Active
      </v-row>

      <!-- ACTIVE CARD -->
      <PCLoader v-slot="{loading, setLoader}">
        <v-row
          v-for="(program,index) in Programs"
          :key="index"
          class="myprograms__card"
        >
          <v-col cols="3">
            <div class="myprograms__cardimage" />
          </v-col>
          <v-col cols="9">
            <v-row class="myprograms__cardtitle">
              {{ program.programName }}
            </v-row>
            <v-row class="myprograms__progresspercentage">
              90%
            </v-row>
            <v-row>
              <v-col cols="9">
                <v-row class="myprograms__progressbaractive" />
              </v-col>
              <v-col cols="3">
                <v-btn
                  class="myprograms__cardbutton"
                  :disabled="loading"
                  @click="setLoader(() => openprogram(program))"
                >
                  Open
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </PCLoader>
      <!-- ADD CARD -->

      <v-dialog>
        <template v-slot:activator="{on}">
          <v-row
            justify="center"
            class="myprograms__addcard mt-9"
            v-on="on"
          >
            +
          </v-row>
        </template>
        <v-text-field
          v-model="shareCode"
          :success-messages="result"
        />
        <v-btn @click="joinProgram" />
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
import { FbStore } from "../../store";
import { EmployerProgram, Classroom, GeneralUser } from "../../store/Database/types/types";
import { firebase } from "@/firebase/init";
import { from } from "rxjs";
import { map, switchMap } from "rxjs/operators";
import { PCLoader } from "../../components/utilities";
@Component<myprograms>({
  components: {
    PCLoader
  },
  subscriptions() {
    return {
      Programs: from(
        this.getEmployerPrograms()
      ).pipe(map(snapshotArr => snapshotArr.map(snapshot => snapshot.data())))
    };
  }
})
export default class myprograms extends Vue {
  Programs: EmployerProgram[] = [];
  get programIds() {
    return FbStore.userCitizenType != "student"
      ? FbStore.currentUserProfile!.employerProgramIds
      : FbStore.currentUserProfile;
  }
  async getEmployerProgramIds() {
    if(FbStore.userCitizenType === "student")
      return Promise.all(FbStore.currentUserProfile!.classroomIds.map(async id =>
      (await FbStore.firestore.collection("Classroom").doc(id).get()).data<Classroom>().employerProgramId
    ))
    else
      return FbStore.currentUserProfile!.employerProgramIds
  }
  async getEmployerPrograms(){
   return Promise.all((await this.getEmployerProgramIds()).map(id => 
     FbStore.firestore.collection("EmployerProgram").doc(id).get()
   ))
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
  }
  value = "";
  custom = true;
  shareCode=""
  result= ""
  async joinProgram(){
    
    if(FbStore.userCitizenType==="teacher"){
      let querySnapshot = await FbStore.firestore.collection("Program").where("shareCode", "==", this.shareCode).get()
      let foundProgram  = querySnapshot.docs[0]?.data() as EmployerProgram | undefined
      if(foundProgram)
    FbStore.firestore.collection("GeneralUser").doc(FbStore.FBUser!.uid).update({
        employerProgramIds: firebase.firestore.FieldValue.arrayUnion(foundProgram.employerProgramId)
     }); else this.result = "Could not verify share code"
    }else if(FbStore.userCitizenType ==="student"){
      let querySnapshot = await FbStore.firestore.collection("Classroom").where("shareCode", "==", this.shareCode).get()
      let foundProgram  = querySnapshot.docs[0]?.data() as Classroom | undefined
      if(foundProgram)
        FbStore.joinClassroom({classroomUid:foundProgram.classroomId, studentUid:FbStore.FBUser!.uid})
       else this.result = "Could not verify share code"
    }else if(FbStore.userCitizenType ==="employer"){
      let ref = FbStore.firestore.collection("EmployerProgram").doc(this.shareCode)
      let doc = await ref.get()
      if(doc.exists){
        ref.update<EmployerProgram>({
          employerId:FbStore.FBUser!.uid
        })
        FbStore.updateCurrentUserProfile({
          employerProgramIds: firebase.firestore.FieldValue.arrayUnion(doc.id) as unknown as string[]
        })
      }
    }
  }
  get progress() {
    return Math.min(100, this.value.length * 10);
  }
  get color() {
    return ["error", "warning", "success"][Math.floor(this.progress / 40)];
  }
  async openprogram(program: EmployerProgram) {
    await FbStore.initCurrentEmployerProgram(program);
    localStorage.PILOTCITY_EMPLOYERPROGRAMID = program.employerProgramId;
    this.$router.push({
      name: "program.launch"
      // params: { citizenType: citizenKey }
    });
  }
}
</script>