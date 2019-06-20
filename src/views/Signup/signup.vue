<template>
    
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import {
  State,
  Getter,
  Action,
  Mutation,
  namespace
} from 'vuex-class'
import { password_validator } from './store/types';
const signup = namespace("./store")
@Component
export default class Signup extends Vue {
  something:string = ""
  dothis(){
    console.log(this.something)
  }
@signup.Action process!: (email:string) => Promise<void>
@signup.Action processPassword!:(password:string) => password_validator
}
</script>
>
export default {

}
</script>

<style>

</style>
