<template>
  <v-card>
    <v-flex
      xs1
      align-self-center
      class="header__main"
    >
      <v-layout justify-center>
        <img
          class="header__logo"
          src="../../assets/PilotCityLogo.png"
          alt="Pilot City"
        >
      </v-layout>
    </v-flex>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue"
import Component from "vue-class-component"
@Component
export default class HeaderMain extends Vue {
    
    private icons: string[] = [
        "fab fa-instagram",
        "fab fa-facebook",
        "fab fa-twitter"
    ];
}
</script>

<style lang="scss">
.header__main{
    margin: 1rem 0 .5rem;
}
.header__logo {
  max-height: 70px;
  max-width: 70px;
}
</style>
