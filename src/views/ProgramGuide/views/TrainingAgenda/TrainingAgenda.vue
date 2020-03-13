<template>
  <v-container class="agenda-view">
    <v-row
      justify="center"
      no-gutters
    >
      <!-- NEW SWITCH BUTTON - NEEDS FRONT END FUNCTIONALITY -->

      <!-- <v-col class="agenda-view__switch mt-12" cols="8">
        <v-row v-if="citizenType == 'teacher'" justify="end">
          <span class="agenda-view__switchlabel">VIEW</span>
          <v-switch @click="toggleView" inset></v-switch>
          <span class="agenda-view__switchlabel">EDIT</span>
        </v-row>
      </v-col>-->

      <v-col
        class="agenda-view__container"
        cols="8"
      >
        <img
          class="pc-vh-center agenda-view__icon"
          src="@/assets/icons/programguide/agendaPink.png"
        >

        <v-row
          justify="center"
          class="agenda-view__title"
          no-gutters
        >
          TRAINING DAY AGENDA

          <!-- TOOLTIP TEMPLATE -->
          <v-tooltip
            top
          >
            <template v-slot:activator="{ on }">
              <v-btn
                href="https://www.pilotcity.com/library/training-day"
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
            <span>What is Training Day? Click to learn more</span>
          </v-tooltip>
          <!-- TOOLTIP TEMPLATE END -->
        </v-row>

        <v-row
          justify="center"
          class="agenda-view__titlewithline"
          no-gutters
        >
          <i
            v-if="citizenType == 'teacher'"
            class="far fa-edit edit-icon__externship"
            @click="toggleView"
          />
        </v-row>

        <v-row
          justify="center"
          no-gutters
          class="businessmodelcanvas_view2__description"
        >
          <v-col
            cols="9"
            class="pt-3 pb-3 text-center"
          >
            Mark agenda items as you complete them.
          </v-col>
        </v-row>
        <component
          :is="currentView"
          @toggleView="toggleView"
          @nextNode="$emit('nextNode')"
          @updateSavedDate="$emit('updateSavedDate', $event)"
          @saving="$emit('saving', $event)"
        />
      </v-col>
    </v-row>
  </v-container>
</template>





<script lang="ts">
import Component from "vue-class-component";
import { FbStore } from "@/store";
import Vue from "vue";
import TrainingAgendaEdit from "./TrainingAgendaEdit.vue";
import TrainingAgendaView from "./TrainingAgendaView.vue";

@Component({
  components: {
    TrainingAgendaView,
    TrainingAgendaEdit
  }
})
export default class TrainingAgenda extends Vue {
  public edit: boolean = false;
  get currentView(): string {
    return this.edit ? "TrainingAgendaEdit" : "TrainingAgendaView";
  }
  get citizenType() {
    return FbStore.userCitizenType;
  }
  toggleView() {
    this.edit = !this.edit;
  }
}
</script>"