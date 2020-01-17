<template>
  <v-row
    no-gutters
    class="programguide"
  >
    <v-col
      cols="1"
      sm="3"
      lg="2"
      xl="1"
      class="d-sm-block d-none"
    >
      <Nav v-model="currentModule" />
    </v-col>
    <v-col
      xl="11"
      sm="9"
      lg="10"
      cols="11"
    >
      <v-row
        no-gutters
        class="guide__viewer-container"
      >
        <v-col
          cols="1"
          class="guide__locks guide__locks--left"
          @click="navBackward"
        >
          <Unlock />
        </v-col>
        <v-col cols="12">
          <router-view />
        </v-col>
        <v-col
          cols="1"
          class="guide__locks guide__locks--right"
          @click="navForward"
        >
          <Unlock />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Watch } from "vue-property-decorator";
import { STUDENTMODULES, EMPLOYERMODULES, TEACHERMODULES } from "./views";
import { Nav, Lock, Unlock } from "./components";
import _ from "lodash";
import { LinkedList, LinkedListItem } from "linked-list-typescript";
import { ProgramNode, RouteList } from "./types";
import { FbStore } from "../../store";
import { doc } from "rxfire/firestore";
import { map, filter } from "rxjs/operators";
import { EmployerProgram, TeacherProgramData } from "../../store/Database/types/types";
import { Observable } from "rxjs";
@Component<Guide>({
  async beforeRouteEnter(to, from, next) {
    if (localStorage.PILOTCITY_EMPLOYERPROGRAMID)
      await FbStore.initCurrentEmployerProgram(
        localStorage.PILOTCITY_EMPLOYERPROGRAMID
      );
    if (FbStore.currentUserProfile!.citizenType != "employer")
      await FbStore.initCurrentTeacherProgramData(
        FbStore.currentTeacherProgramUID!
      );
    next();
  },
  subscriptions() {
    return {
      employerProgramData: doc(
        FbStore.firestore
          .collection("EmployerProgram")
          .doc(FbStore.currentEmployerProgramUID)
      ).pipe(map(snapshot => snapshot.data())),
      teacherProgramData:doc(
        FbStore.firestore.collection("TeacherProgramData").doc(FbStore.currentTeacherProgramUID)
      ).pipe(
        filter(snapshot => snapshot.exists),
        map(snapshot => snapshot.data())
      )
    };
  },
  mounted(){
    this.$subscribeTo(this.$observables.employerProgramData,(data:EmployerProgram)=>{
      FbStore.initCurrentEmployerProgram(data)
    })
    this.$subscribeTo(this.$observables.employerProgramData,(data:TeacherProgramData)=>{
      FbStore.initCurrentTeacherProgramData(data)
    })
  },
  components: {
    Nav,
    Lock,
    Unlock
  }
})
export default class Guide extends Vue {
  public sequenceHash: Record<string, Record<string, string[]>> = {
    Teacher: TEACHERMODULES,
    Employer: EMPLOYERMODULES,
    Student: STUDENTMODULES
  };
  public xcurrentModule: string = "";
  routeMap!: LinkedList<ProgramNode>;
  currentNode!: ProgramNode;
  get citizenType(): string {
    return localStorage.citizenType;
  }
  get sequence() {
    return this.sequenceHash[this.citizenType];
  }
  get nextModule() {
    if (this.currentNode) return this.currentNode.next;
    else return null;
  }
  get prevModule() {
    if (this.currentNode) return this.currentNode.prev;
    else return null;
  }
  get currentModule() {
    return this.currentNode;
  }

  public navForward() {
    // this.routeMap.head
    // console.log(mod)
    // let currentRoute= this.$route.name as string;
    // let length = mod.length;
    // console.log(currentRoute,length)
    // if(mod.includes(currentRoute) && mod[length-1] != currentRoute)
    //   this.$router.push({ name: mod[mod.indexOf(currentRoute)+1] })
    // if(mod[length-1] == currentRoute)
    //   this.$router.push({name: this.sequence[this.nextModule][0]})
    let next = this.currentNode.next;
    if (next) {
      this.currentNode = next;
      this.$router.push({ name: next.value.routeName });
    }
  }
  public navBackward() {
    let prev = this.currentNode.prev;
    if (prev) {
      this.currentNode = prev;
      this.$router.push({ name: prev.value.routeName });
    }
  }
  public created() {
    // psuedo-code [could probably turn this into a util function]
    /* 
      if(user.fb.getLastProgress)
        this.currentModule = user.fb.getLastProgress.Name //this should take them to their latest unlock

        BIND THIS TO `XCURRENTMODULE`
    */
    let name = this.$route.name as string;
    this.routeMap = new RouteList(
      FbStore.currentUserProfile!.citizenType!
    ).createLinkedList();
    this.currentNode =
      this.routeMap.toArray().find(node => node.value.routeName === name) ||
      this.routeMap.head;
  }
}
</script>