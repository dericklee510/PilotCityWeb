<template>
  <v-toolbar
    extension-heigh="0"
    dark
    style="height: fit-content"
    max-height="64px;"
    class="pc-header pc-header--simple"
  >
    <router-link :to="{name: 'home'}"> 
      <img
        class="pc-logo--header"
        src="@/assets/Pilotcity_logo.png"
        alt="Pilot City"
      >
    </router-link>
    <v-spacer />
    <v-toolbar-items class="pc-toolbar__buttons d-sm-none">
      <pcdropdown
        v-model="dropdownselect"
        :items="[{title: 'LOGIN', action: routeLogin}, {title: 'SIGNUP', action: routeSignup}]"
        icon="mdi-menu"
      />
      <!-- :items="[{title: 'EXPLORE'},{title: 'MY PROGRAMS'}, {title: 'LOGOUT', action: logout}]" -->
    </v-toolbar-items>
    <v-toolbar-items class="pc-toolbar__buttons d-none d-sm-block">
      <v-btn
        dark
        text
        rounded
        color="primary"
        :loading="loading"
        :disabled="loading"
        @click="routeLogin"
      >
        Login
      </v-btn>
      <v-btn
        dark
        text
        rounded
        color="primary"
        :loading="loading"
        :disabled="loading"
        @click="routeSignup"
      >
        Sign Up
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script lang="ts">
import Vue from "vue"
import Component from "vue-class-component"
import { AuthStore } from '@/store'
import PCdropdown from '@/components/inputs/PCdropdown.vue'


@Component({
    components:{
        pcdropdown: PCdropdown
    }
})
export default class Header extends Vue {
    public dropdownselect: string = ``;
    public loading = false
    get user(){
        return AuthStore.user
    }
    public route(): void {
        this.$router.push({
            name: 'signup.type'
        })
    }
    private routeLogin(){
        this.$router.push({name: 'login'})
    }
    private routeSignup(){
        this.$router.push({name: 'signup'})

    }
}
</script>