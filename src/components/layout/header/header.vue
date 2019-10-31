<template>
  <v-toolbar
    dark
    style="height: fit-content"
    max-height="64px;"
    class="pc-toolbar"
  >
    <v-toolbar-side-icon>
      <img
        class="pc-logo--header"
        src="@/assets/Pilotcity_logo.png"
        alt="Pilot City"
      >
    </v-toolbar-side-icon>
    <v-spacer />
    <v-toolebar-items>
      <v-row class="pc-toolbar__buttons">
        <v-col>
          <v-btn
            v-if="user"
            dark
            text
            rounded
            color="primary"
            :loading="loading"
            :disabled="loading"
            @click="logout()"
          >
            Explore
          </v-btn>
        </v-col>
        <v-col>
          <v-btn
            v-if="user"
            dark
            text
            rounded
            color="primary"
            :loading="loading"
            :disabled="loading"
            @click="logout()"
          >
            My Programs
          </v-btn>
        </v-col>
        <v-col>
          <v-btn
            v-if="user"
            dark
            text
            rounded
            color="primary"
            :loading="loading"
            :disabled="loading"
            @click="logout()"
          >
            Logout
          </v-btn>
        </v-col>
      </v-row>
    </v-toolebar-items>
    <v-toolbar-side-icon>
      <v-list-item-avatar size="50">
        <div class="pc-profile-picture pc-profile-picture--icon" />
      </v-list-item-avatar>
    </v-toolbar-side-icon>
  </v-toolbar>
</template>

<script lang="ts">
import Vue from "vue"
import Component from "vue-class-component"
import { AuthStore } from '@/store'

@Component
export default class HeaderMain extends Vue {
    public loading = false
    get user(){
        return AuthStore.user
    }
    public logout:  () => Promise<void> = AuthStore.logout
}
</script>