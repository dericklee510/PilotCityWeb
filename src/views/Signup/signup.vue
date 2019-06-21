<template>
  <v-container />
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import {
    // State,
    // Getter,
    // Action,
    // Mutation,
    namespace
} from 'vuex-class'
import { passwordValidator } from './store/types'
const signup = namespace("./store")
@Component
export default class Signup extends Vue {
    something: string = ""
    dothis(){
        // console.log(this.something)
    }
@signup.Action process!: (email: string) => Promise<void>
@signup.Action processPassword!: (password: string) => passwordValidator
}
</script>

<style>

</style>
