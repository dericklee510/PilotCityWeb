<template >

<div class="briefcard__sontaincontainer">
<v-card class="briefcard__container" id="Contain">
    <!-- <img src="" alt="" id="programbrief__cover"> -->
    <v-row id="briefcard__rowcontain">
      <v-col class="mr-5" cols="12" md="2" xl="1">
        <div class="briefcard__cover"></div>
      </v-col>
      
      <v-col class="" cols="">
          <v-col class="" cols="12">
              <div class="briefcard__header">Request for Pilot (RFP)</div>
              <span class="briefcard__check"><input class="checkbox_itself" type="checkbox">I acknowledge I have fully read and understand the included document</span>
              <v-col style="padding:0"><button class="briefcard__buton">CONFIRM</button></v-col>
          </v-col>
      </v-col>
    </v-row>
  </v-card>
</div>
  
</template>

<script lang="ts">
import Vue from 'vue'
import Component from "vue-class-component"

@Component
export default class BriefCard extends Vue{
    
}
</script>

<style scoped>

</style>