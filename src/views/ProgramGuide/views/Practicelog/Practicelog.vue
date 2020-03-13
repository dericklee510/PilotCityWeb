<template>
  <v-container fluid>
    <v-row justify="center">
      <img
        id="logtime__icon"
        class="logtime__image"
        src="@/assets/log.png"
      >

      <v-col
        id="logtime__contain"
        cols="8"
      >
        <v-row
          justify="center"
          class="mr-auto ml-auto logtime__title"
        >
          PRACTICE LOG

          <!-- TOOLTIP TEMPLATE -->
          <v-tooltip
            v-model="show"
            top
          >
            <template v-slot:activator="{ on }">
              <v-btn
                href="https://www.pilotcity.com/library/when-should-i-record-hours-practice-log"
                target="_blank"
                icon
                v-on="on"
              >
                <v-icon
                  class="pb-3"
                  color="grey lighten-1"
                >
                  info
                </v-icon>
              </v-btn>
            </template>
            <span>When should I log my practice hours on the employer's product or service? Click here to learn more</span>
          </v-tooltip>
          <!-- TOOLTIP TEMPLATE END -->
        </v-row>

        <v-col
          cols="12"
          class="logtime__borderline"
        /> 

        <v-row
          justify="center"
          class="mr-auto ml-auto logtime__description"
        >
          As you practice, use and apply the employer's product or service, log how many minutes you use it each time.
        </v-row>

        <ValidationObserver v-slot="{invalid, reset}">
          <v-col
            cols="12"
            class="pt-0 pb-0"
          >
            <v-row
              justify="center"
              class="mt-5 pt-0 pb-0"
            >
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <ValidationProvider
                  v-slot="{errors}"
                  rules="required|min:2|max:3|isTimeNumerical|isTime"
                  class="logtime__input pt-0 pb-0"
                >
                  <v-text-field
                    v-model="timeInput"
                    label="Enter Minutes"
                    :error-messages="errors"
                    outlined
                    class="pt-0 pb-0"
                    style="font-family='Raleway'"
                    height="100px"
                    placeholder="0m"
                    @keypress.enter="addTime().then(()=>{reset()})"
                  />
                </ValidationProvider>
              </v-col>
            </v-row>

            <v-row
              justify="center"
              class="logtime__calculated pt-0 pb-0"
            >
              <v-col
                cols="12"
                sm="6"
                md="4"
                class="pt-0 pb-0"
              >
                <PCLoader v-slot="{loading,setLoader}">
                  <v-btn
                    class="logtime__button pt-0 pb-0"
                    outlined
                    solo
                    text
                    depressed
                    :disabled="invalid"
                    :loading="loading"
                    @click="setLoader( ()=> { addTime().then(()=>{reset()})})"
                  >
                    LOG MINUTES
                  </v-btn>
                </PCLoader>
              </v-col>
            </v-row>
          </v-col>
        </ValidationObserver>
        <v-row
          justify="center"
          class="mr-auto ml-auto mt-5 logtime__label"
        >
          LOGGED TIME
        </v-row>
        <v-row
          justify="center"
          class="mr-auto ml-auto mt-2 mb-7 logtime__calculated"
        >
          {{ timeOutput }}
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>





<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { ValidationObserver, ValidationProvider, extend } from "vee-validate";
import { isNumber } from "util";
import { TimeLog } from "@/store/Database/types/utilities";
import { firebase } from "@/firebase/init";
import { FbStore } from "../../../../store";
import { PCLoader } from "../../../../components/utilities";
extend("isTime", {
  message: `Must end with an "m" for minutes`,
  validate: (val: string) =>
    ["h", "m"].map(char => char === val.charAt(val.length - 1)).some(val => val)
});
extend("isTimeNumerical", {
  message: "Must be numeric",
  validate: (val: string) =>
    val.length >= 2
      ? [...Array(val.length - 1).keys()]
          .map(index => val.charAt(index))
          .every(char => !isNaN(parseInt(char)))
      : false
});
@Component({
  components: {
    ValidationObserver,
    ValidationProvider,
    PCLoader
  }
})
export default class logtime extends Vue {
  timeInput: string = "";
  timeLog: TimeLog[] =
    FbStore.currentProject!.practiceLog[FbStore.FBUser!.uid!] || [];
  get totalTime() {
    return this.timeLog.reduce((sum, entry) => (sum += entry.minutes), 0);
  }
  get timeOutput() {
    return `${Math.floor(this.totalTime / 60)}h ${this.totalTime % 60}m`;
  }
  async addTime() {
    switch (this.timeInput.charAt(this.timeInput.length - 1)) {
      case "m":
        this.timeLog.push({
          minutes: parseInt(this.timeInput),
          lastUpdate: firebase.firestore.Timestamp.fromDate(new Date())
        });
        break;
      case "h":
        this.timeLog.push({
          minutes: parseInt(this.timeInput) * 60,
          lastUpdate: firebase.firestore.Timestamp.fromDate(new Date())
        });
    }

    await FbStore.updateCurrentProject({
      [`practiceLog.${FbStore.FBUser!.uid!}`]: this.timeLog
    });
    this.timeInput = "";
  }
}
</script>