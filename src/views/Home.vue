<template>
  <div id="pc-home">
    <v-container
      fluid
      class="pc-container"
      style="height: 100%"
    >
      <v-row style="height:100%">
        <v-col
          cols="12"
          align-self="center"
          class="pc-home__content"
        >
          <h1 class="pc-home__header dark">
            Connecting classrooms to the big bad world
          </h1>
          <v-col cols="6">
            <v-row class="pc-home__buttons">
              <v-btn
                class="text-uppercase pc-button pc-button--dark elongated"
                :to="{name: 'signup.type'}"
              >
                Sign Up
              </v-btn>
            </v-row>
          </v-col>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
@Component
export default class Homepage extends Vue {
}
</script>

<style lang="scss">
#title {
  font-family: "Raleway";
  font-weight: 700;
  color: white;
  font-size: 7vh;
  margin-left: 30px;
  margin-top: 190px;
  margin-bottom: 40px;
}
#index-btn-teachers {
  font-family: "Raleway";
  font-size: 20px;
  background-color: #eca0be;
  color: #ffffff;
  font-weight: 700;
  border-radius: 50px;
  height: 45px;
  width: 250px;
  text-align: center;
  border-color: transparent;
  padding-left: 30px;
  padding-right: 30px;
}
#index-btn-employers:hover {
  border: solid 1px white;
}
#index-btn-employers {
  font-family: "Raleway";
  font-size: 20px;
  font-weight: 700;
  background-color: #ae90b0;
  stroke: #ae90b0;
  color: #ffffff;
  border-radius: 50px;
  height: 45px;
  width: 250px;
  padding-left: 30px;
  padding-right: 30px;
  text-align: center;
  border-color: transparent;
}
#index-btn-teachers:hover {
  border: solid 1px white;
}
