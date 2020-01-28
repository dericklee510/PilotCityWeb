<template>
  <v-container>
    <v-row no-gutters>
      <v-col cols="12">
        <div class="manageprogram__header mt-10">Manage Program</div>

        <v-row class="mb-10 mt-12" no-gutters>
          <v-col cols="4" class="manageprogram__title">Experience</v-col>
          <v-col class="manageprogram__title">Unlock</v-col>
          <v-col class="manageprogram__title">Trigger</v-col>
          <v-col class="manageprogram__title">Status</v-col>
        </v-row>

        <!-- LAUNCH DAY -->

        <v-row no-gutters>
          <v-col cols="4" class="manageprogram__experience mt-0 mb-0">
            <v-row no-gutters>
              <div class="manageprogram__numbering mt-0 mb-0">1</div>
              <div class="pt-2">Launch Day</div>
            </v-row>
          </v-col>

          <v-col>
            <v-btn
              class="manageprogram__unlockbydate mt-0 mb-0 ml-0 mr-0"
              depressed
              disabled
            >By Date</v-btn>
          </v-col>

          <v-col class="mb-3">
            <v-menu
              class="manageprogram__datepicker"
              ref="menu1"
              v-model="menu1"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              full-width
              max-width="290px"
              min-width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  class="manageprogram__datepicker mt-0 pt-0"
                  v-model="dateFormatted"
                  label="Select Date"
                  persistent-hint
                  @blur="date = parseDate(dateFormatted)"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="date" no-title @input="menu1 = false"></v-date-picker>
            </v-menu>
          </v-col>

          <v-col>
            <i class="fas fa-unlock manageprogram__unlock ml-4"></i>
          </v-col>
        </v-row>

        <!-- TRAINING -->

        <v-row no-gutters>
          <v-col cols="4" class="manageprogram__experience mt-0 mb-0">
            <v-row no-gutters>
              <div class="manageprogram__numbering mt-0 mb-0">2</div>
              <div class="pt-2">Training</div>
            </v-row>
          </v-col>

          <v-col>
            <v-btn class="manageprogram__unlockbydate mt-0 mb-0" depressed disabled>By Completion</v-btn>
          </v-col>
          <v-col class="manageprogram__datepicker mb-12 mt-3">
            <v-progress-linear v-model="power" color="green" height="9" reactive></v-progress-linear>
          </v-col>

          <v-col>
            <i class="fas fa-unlock manageprogram__unlock ml-4"></i>
          </v-col>
        </v-row>

        <!-- PRACTICE & RESEARCH -->

        <v-row no-gutters>
          <v-col cols="4" class="manageprogram__experience mt-0 mb-0">
            <v-row no-gutters>
              <div class="manageprogram__numbering mt-0 mb-0">3</div>
              <div class="pt-2">Practice & Research</div>
            </v-row>
          </v-col>

          <v-col>
            <v-btn class="manageprogram__unlockbydate mt-0 mb-0" depressed disabled>By Completion</v-btn>
          </v-col>
          <v-col class="manageprogram__datepicker mb-12 mt-3">
            <v-progress-linear v-model="power" color="green" height="9" reactive></v-progress-linear>
          </v-col>

          <v-col>
            <i class="fas fa-unlock manageprogram__unlock ml-4"></i>
          </v-col>
        </v-row>

        <!-- IDEATE -->

        <v-row no-gutters>
          <v-col cols="4" class="manageprogram__experience mt-0 mb-0">
            <v-row no-gutters>
              <div class="manageprogram__numbering mt-0 mb-0">4</div>
              <div class="pt-2">Ideate</div>
            </v-row>
          </v-col>

          <v-col>
            <v-btn class="manageprogram__unlockbydate mt-0 mb-0" depressed disabled>By Completion</v-btn>
          </v-col>
          <v-col class="manageprogram__datepicker mb-12 mt-3">
            <v-progress-linear v-model="power" color="red" height="9" reactive></v-progress-linear>
          </v-col>

          <v-col>
            <i class="fas fa-lock manageprogram__lock ml-4"></i>
          </v-col>
        </v-row>

        <!-- HACK DAY -->

        <v-row no-gutters>
          <v-col cols="4" class="manageprogram__experience mt-0 mb-0">
            <v-row no-gutters>
              <div class="manageprogram__numbering mt-0 mb-0">5</div>
              <div class="pt-2">Hack Day</div>
            </v-row>
          </v-col>

          <v-col>
            <v-btn
              class="manageprogram__unlockbydate mt-0 mb-0 ml-0 mr-0"
              depressed
              disabled
            >By Date</v-btn>
          </v-col>

          <v-col class="mb-3">
            <v-menu
              class="manageprogram__datepicker"
              ref="menu1"
              v-model="menu1"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              full-width
              max-width="290px"
              min-width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  class="manageprogram__datepicker mt-0 pt-0"
                  v-model="dateFormatted"
                  label="Select Date"
                  persistent-hint
                  @blur="date = parseDate(dateFormatted)"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="date" no-title @input="menu1 = false"></v-date-picker>
            </v-menu>
          </v-col>

          <v-col>
            <i class="fas fa-lock manageprogram__lock ml-4"></i>
          </v-col>
        </v-row>

        <!-- REFLECTION -->

        <v-row no-gutters>
          <v-col cols="4" class="manageprogram__experience mt-0 mb-0">
            <v-row no-gutters>
              <div class="manageprogram__numbering mt-0 mb-0">6</div>
              <div class="pt-2">Reflection</div>
            </v-row>
          </v-col>

          <v-col>
            <v-btn class="manageprogram__unlockbydate mt-0 mb-0" depressed disabled>By Completion</v-btn>
          </v-col>
          <v-col class="manageprogram__datepicker mb-12 mt-3">
            <v-progress-linear v-model="power" color="red" height="9" reactive></v-progress-linear>
          </v-col>

          <v-col>
            <i class="fas fa-lock manageprogram__lock ml-4"></i>
          </v-col>
        </v-row>

        <!-- DESIGN & PROTOTYPE -->

        <v-row no-gutters>
          <v-col cols="4" class="manageprogram__experience mt-0 mb-0">
            <v-row no-gutters>
              <div class="manageprogram__numbering mt-0 mb-0">7</div>
              <div class="pt-2">Design & Prototype</div>
            </v-row>
          </v-col>

          <v-col>
            <v-btn class="manageprogram__unlockbydate mt-0 mb-0" depressed disabled>Manually</v-btn>
          </v-col>
          <v-col class="manageprogram__datepicker mb-8">
            <v-btn class="manageprogram__unlockbutton" depressed>Unlock</v-btn>
          </v-col>

          <v-col>
            <i class="fas fa-lock manageprogram__lock ml-4"></i>
          </v-col>
        </v-row>

        <!-- PACKAGE -->

        <v-row no-gutters>
          <v-col cols="4" class="manageprogram__experience mt-0 mb-0">
            <v-row no-gutters>
              <div class="manageprogram__numbering mt-0 mb-0">8</div>
              <div class="pt-2">Package</div>
            </v-row>
          </v-col>

          <v-col>
            <v-btn class="manageprogram__unlockbydate mt-0 mb-0" depressed disabled>By Completion</v-btn>
          </v-col>
          <v-col class="manageprogram__datepicker mb-12 mt-3">
            <v-progress-linear v-model="power" color="red" height="9" reactive></v-progress-linear>
          </v-col>

          <v-col>
            <i class="fas fa-lock manageprogram__lock ml-4"></i>
          </v-col>
        </v-row>

        <!-- DEMO DAY -->

        <v-row no-gutters>
          <v-col cols="4" class="manageprogram__experience mt-0 mb-0">
            <v-row no-gutters>
              <div class="manageprogram__numbering mt-0 mb-0">9</div>
              <div class="pt-2">Demo Day</div>
            </v-row>
          </v-col>

          <v-col>
            <v-btn
              class="manageprogram__unlockbydate mt-0 mb-0 ml-0 mr-0"
              depressed
              disabled
            >By Date</v-btn>
          </v-col>

          <v-col class="mb-3">
            <v-menu
              class="manageprogram__datepicker"
              ref="menu1"
              v-model="menu1"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              full-width
              max-width="290px"
              min-width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  class="manageprogram__datepicker mt-0 pt-0"
                  v-model="dateFormatted"
                  label="Select Date"
                  persistent-hint
                  @blur="date = parseDate(dateFormatted)"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="date" no-title @input="menu1 = false"></v-date-picker>
            </v-menu>
          </v-col>

          <v-col>
            <i class="fas fa-lock manageprogram__lock ml-4"></i>
          </v-col>
        </v-row>

        <!-- EXIT SURVEY -->

        <v-row no-gutters>
          <v-col cols="4" class="manageprogram__experience mt-0 mb-0">
            <v-row no-gutters>
              <div class="manageprogram__numbering mt-0 mb-0">10</div>
              <div class="pt-2">Exit Survey</div>
            </v-row>
          </v-col>

          <v-col>
            <v-btn class="manageprogram__unlockbydate mt-0 mb-0" depressed disabled>By Completion</v-btn>
          </v-col>
          <v-col class="manageprogram__datepicker mb-12 mt-3">
            <v-progress-linear v-model="power" color="red" height="9" reactive></v-progress-linear>
          </v-col>

          <v-col>
            <i class="fas fa-lock manageprogram__lock ml-4"></i>
          </v-col>
        </v-row>

        <!-- Save Button -->
        <v-row no-gutters class="mt-12 mb-12">
          <button class="manageprogram__savebutton">Save</button>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class ManageProgram extends Vue {}
</script>