<template>
  <div>
    <link 
      href="https://fonts.googleapis.com/css?family=Raleway:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap" 
      rel="stylesheet"
    >
    <keep-alive>
      <component :is="layout">
        <router-view />
      </component>
    </keep-alive>
  </div>
</template>


<script lang="ts">
import '@/assets/SCSS/main.scss'
import Vue from 'vue'
import Component from 'vue-class-component'
import { AuthStore, FbStore } from '@/store'
import { Watch } from 'vue-property-decorator'
import { TeacherProgramData } from './store/Database/types/types'
import {firebase} from "@/firebase/init"
const DEFAULT_LAYOUT = 'default'
const NORMAL_LAYOUT = 'new'
@Component
export default class App extends Vue {
    key = 0
    get layout() {
    if (!AuthStore.user) return `${this.$route.meta.layout ? this.$route.meta.layout : NORMAL_LAYOUT}-layout`
    return `${this.$route.meta.layout ? this.$route.meta.layout : DEFAULT_LAYOUT}-layout`
  }
  fixProgramBrief(){
    FbStore.firestore.collection("TeacherProgramData").get().then(querySnapshot => {
      querySnapshot.forEach(snap => {
        let data = snap.data() as TeacherProgramData
        if(data?.programSequence?.programBrief){
          snap.ref.update({
            'programSequence.programBrief':firebase.firestore.FieldValue.delete()
          })
          snap.ref.update({
            'programSequence.launchDay':data.programSequence.programBrief
          })
        }
      })
    })
  }
}
</script>
