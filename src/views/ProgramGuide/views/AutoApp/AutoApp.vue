<template>
  <v-row
    justify="center"
    class="mt-12"
  >
    <img
      id="citizenid__autoappicon"
      src="@/assets/autoapp.png"
    >

    <v-col
      id="citizenid__autoappcontaintop"
      cols="8"
    >
      <v-row
        justify="center"
        class="mr-auto ml-auto citizenid__title"
      >
        AUTO-APPLICATION
      </v-row>
    </v-col>

    <v-col
      id="citizenid__containbottom"
      cols="8"
    >
      <!-- PROGRAM INFORMATION -->
      <!-- <v-row
            justify="center"
            class="mr-auto ml-auto mt-5 mb-12 studentid__categorytitle"
          >Share your experience, qualify for opportunities and auto-apply for internship</v-row> -->

      <div class="mt-3 mb-6">
        <v-progress-linear
          color="green lighten-1"
          buffer-value="25"
          stream
        />
      </div>

      <!-- <v-col class="text-center studentid__categorytitle mt-12 mb-6">You are automatically applied.</v-col> -->




      <v-row
        justify="center"
        class="prompt__header mt-12 mb-3"
      >
        You've automatically applied!
      </v-row>

      <!-- <v-row
          justify="center"
          class="prompt__divider ml-auto mr-auto mt-5 mb-5"
        /> -->

      <v-row
        justify="center"
        no-gutters
        class="prompt__headerdescription2 mb-9"
      >
        <v-col
          class="text-center"
          cols="10"
        >
          In the meantime, edit your application items below for improvements.
        </v-col>
      </v-row>


      <v-row>
        <v-col class="text-center mt-6 mb-12">
          <v-btn
            x-large
            disabled
            depressed
          >
            Application In Review
          </v-btn>
        </v-col>
      </v-row>

      <!-- <v-col class="text-center studentid__categorytitle mb-12">In the meantime, review items in your application.</v-col> -->



  
      <v-row>
        <v-col
          cols="6"
          class="text-center align-center"
        >
          <v-progress-circular

            :size="250"
            :width="20"
            value="100"
            color="red"
            align="center"
            class="pitch_view__teamtitle4 text-center"
          >
            100%
          </v-progress-circular>

          <div class="pitch_view__teamtitle2 text-center mt-4">
            Application <br> Strength
          </div>
        </v-col>
        <v-col
          cols="6"
          class="text-left"
        >
          <v-row>
            <ModuleStatus :sequence="sequence" />
          </v-row>
        </v-col>
      </v-row>



      <!-- <div class="mt-6 mb-3">
      <v-progress-linear
      color="red lighten-2"
      buffer-value="0"
      stream
    ></v-progress-linear></div> -->
    </v-col>
  </v-row>
</template>


<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import ModuleStatus from "./components/ModuleStatus.vue"

@Component({
    components: {
      ModuleStatus
    },
})
export default class AutoApp extends Vue {
  get sequence(){
    let dummydata = [{status: 'complete', name: 'example mod'}, {status: 'incomplete', name: 'example mod'},{status: 'missing', name: 'example mod'}];
    return dummydata
  }
}


</script>