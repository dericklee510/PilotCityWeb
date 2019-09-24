<template>
  <!-- <v-card>
    <v-flex
      xs1
      align-self-center
      class="header__main"
    >
      <v-layout justify-center>
        <img
          class="header__logo"
          src="@/assets/PilotCityLogo.png"
          alt="Pilot City"
        >
      </v-layout>
    </v-flex>
  </v-card> -->
  <div>
    <v-toolbar>
      <v-toolbar-title>
        <img class="header__logo" src="@/assets/PilotCityLogo.png" alt="Pilot City">
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <LogoutButton />
    </v-toolbar>
  </div>

</template>

<script lang="ts">
import Vue from "vue"
import Component from "vue-class-component"
import LogoutButton from "./components/LogoutButton/LogoutButton.vue"
@Component({
  components: {
    LogoutButton
  }
})
export default class HeaderMain extends Vue {

  private icons: string[] = [
    "fab fa-instagram",
    "fab fa-facebook",
    "fab fa-twitter"
  ];
}
</script>

<style lang="scss">
.header__main {
  height: 4em;
  margin: 1rem 0 0.5rem;
}
.header__logo {
  max-height: 53px;
  max-width: 42px;
}
</style>
