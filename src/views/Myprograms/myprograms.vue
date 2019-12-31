<template>
  <v-row
    class="mt-12"
    justify="center"
  >
    <v-col cols="8">
      <!-- ACTIVE -->

      <v-row class="myprograms__categorytitle mt-12 mb-6">
        Active
      </v-row>

      <!-- ACTIVE CARD -->

      <v-row class="myprograms__card">
        <v-col cols="3">
          <div class="myprograms__cardimage" />
        </v-col>
        <v-col cols="9">
          <v-row class="myprograms__cardtitle">
            Lawrence Berkeley National Labs
          </v-row>
          <v-row class="myprograms__progresspercentage">
            90%
          </v-row>
          <v-row>
            <v-col cols="9">
              <v-row class="myprograms__progressbaractive" />
            </v-col>
            <v-col cols="3">
              <button class="myprograms__cardbutton">
                Open
              </button>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <!-- ADD CARD -->

      <v-row
        justify="center"
        class="myprograms__addcard mt-9"
      >
        +
      </v-row>


      <!-- COMPLETED -->

      <v-row class="myprograms__categorytitle mt-12 mb-6">
        Completed
      </v-row>

      <v-row
        justify="center"
        class="myprograms__cardcompletednonev2 mb-12"
      >
        No completed programs yet<i class="ml-3 mt-1 far fa-grin-beam-sweat" />
      </v-row>
      
      <!-- COMPLETED CARD -->

      <!-- <v-row class="myprograms__card">

          <v-col cols="3"><div class="myprograms__cardimage"></div></v-col>
          <v-col cols="9">
              <v-row class="myprograms__cardtitle">Lawrence Berkeley National Labs</v-row>
              <v-row class="myprograms__progresspercentage">100%</v-row>
              <v-row>
                  <v-col cols="9">

                    <v-row class="myprograms__progressbaractive">

                    </v-row>

                  </v-col>
                  <v-col cols="3"><button class="myprograms__cardbutton">See Results</button></v-col>
              </v-row>
          </v-col>
      </v-row> -->

      <!-- NO COMPLETED PROGRAMS YET -->

      <!-- <v-row class="myprograms__cardcompleted">
        <v-col>
          <div class="myprograms__cardimagecompleted"></div>

          <v-row
            justify="center"
            class="myprograms__cardtitlecompleted mt-3 mb-4"
          >Lawrence Berkeley National Labs</v-row>
          <v-row justify="center" class="myprograms__progresspercentagecompleted">100%</v-row>

          <v-row justify="center" class="myprograms__progressbarcompleted ml-auto mr-auto mb-5"></v-row>

          <v-row justify="center" cols="3">
            <button class="myprograms__cardbuttoncompleted mb-2">See Results</button>
          </v-row>
        </v-col>
      </v-row> -->
    </v-col>
  </v-row>
</template>





<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
@Component
export default class myprograms extends Vue {
  value = "";
  custom = true;
  get progress() {
    return Math.min(100, this.value.length * 10);
  }
  get color() {
    return ["error", "warning", "success"][Math.floor(this.progress / 40)];
  }
}
</script>