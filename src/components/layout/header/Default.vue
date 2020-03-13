<template>
  <v-toolbar
    extension-heigh="0"
    dark
    style="height: fit-content"
    max-height="64px;" 
    class="pc-header pc-header--simple"
  > 
    <router-link :to="{path: '/'}">
      <img
        v-if="user"
        class="pc-logo--header"
        src="@/assets/Pilotcity_logo.png"
        alt="Pilot City"
      >
    </router-link>
    <v-spacer />
    <v-toolbar-items class="pc-toolbar__buttons d-sm-none">
      <!-- <pcdropdown
        v-model="dropdownselect"
        :items="[{title: 'LOGOUT', action: logout}]"
        icon="mdi-menu"
      /> -->
      <!-- :items="[{title: 'EXPLORE'},{title: 'MY PROGRAMS'}, {title: 'LOGOUT', action: logout}]" -->
    </v-toolbar-items>
    <!-- <v-toolbar-items class="pc-toolbar__buttons d-none d-sm-block"> -->
    <!-- <v-btn
        v-if="user"
        dark
        text
        rounded
        color="primary"
        :loading="loading"
        :disabled="loading"
      >
        Explore
      </v-btn> -->
    <span
      v-if="$route.name!='signup.type'"
      class="ml-2 mr-2"
    >
      <v-btn
        v-if="user"
        class="pc-navbar__myprograms"
        dark
        rounded
        depressed
        large
        outlined
        :loading="loading"
        :disabled="loading"
        @click="$router.push({ name: 'program.programlist' })"
      >
        My Programs
      </v-btn>
    </span>


    <span class="ml-2 mr-2">
      <v-btn
        v-if="user"
        class="pc-navbar__logout"
        dark
        rounded
        depressed
        large
        outlined
        :loading="loading"
        :disabled="loading"
        @click="logout()"
      >
        Logout
      </v-btn></span>

    <span class="ml-2 mr-2">
      <router-link :to="{name:'signup.type'}">
        <v-avatar 
          class="pc-navbar__avatar" 
          color="blue"
          size="45"
        >
          <span class="white--text pc-navbar__avatartext">{{ initials }}</span>
        </v-avatar>
      </router-link>
    </span>


    <!-- </v-toolbar-items> -->
    <!-- in need of doka component -->
    <!-- <v-list-item-avatar size="50">
      <div class="pc-profile-picture pc-profile-picture--icon" />
    </v-list-item-avatar> -->
  </v-toolbar>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { AuthStore, FbStore } from '@/store'
import PCdropdown from '@/components/inputs/PCdropdown.vue'


@Component({
    components: {
        pcdropdown: PCdropdown
    }
})
export default class Header extends Vue {
    public dropdownselect: string = '';

    public loading = false

    get user() {
        return AuthStore.user
    }
    
    get initials(){
     let str = FbStore.currentUserProfile?.firstName + " " + FbStore.currentUserProfile?.lastName
      return str.split(" ").map((n)=>n[0]).join("");
    }

    public route(): void {
        this.$router.push({
            name: 'signup.type'
        })
    }

    public async logout(){
      await AuthStore.logout()
      this.$forceUpdate()
      this.$router.push({name:'login'})
    }
}
</script>
