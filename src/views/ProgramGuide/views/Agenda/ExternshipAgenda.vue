<template>
  <v-container class="agenda-view">
    <v-row
      justify="center"
      no-gutters
    >
      <!-- NEW SWITCH BUTTON - NEEDS FRONT END FUNCTIONALITY -->

      <!-- <v-col class="agenda-view__switch mt-12" cols="8"><v-row v-if="citizenType == 'employer'" justify="end"><span class="agenda-view__switchlabel">VIEW</span><v-switch @click="toggleView" inset></v-switch><span class="agenda-view__switchlabel">EDIT</span></v-row></v-col> -->

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
          EXTERNSHIP DAY AGENDA
          <!-- TOOLTIP TEMPLATE -->
          <!-- <v-tooltip v-model="show" top>
              <template v-slot:activator="{ on }">
                <v-btn
                  href="https://www.pilotcity.com/library/demo-day"
                  target="_blank"
                  icon
                  v-on="on"
                >
                  <v-icon class="pb-3" color="grey lighten-1">info</v-icon>
                </v-btn>
              </template>
              <span>What is Demo Day? Click to learn more</span>
            </v-tooltip> -->
          <!-- TOOLTIP TEMPLATE END -->
        </v-row>

        <v-row
          justify="center"
          class="agenda-view__titlewithline"
          no-gutters
        >
          <i
            v-if="citizenType == 'employer'"
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
import Vue from "vue";
import Component from "vue-class-component";
import { FbStore } from "@/store";
import ExternshipAgendaView from "./externshipagenda_view.vue";
import ExternshipAgendaEdit from "./externshipagenda_edit.vue";
@Component({
  components: {
    ExternshipAgendaView,
    ExternshipAgendaEdit
  }
})
export default class ExternshipAgenda extends Vue {
  public edit: boolean = false;
  get currentView(): string {
    return this.edit ? "ExternshipAgendaEdit" : "ExternshipAgendaView";
  }
  get citizenType() {
    return FbStore.userCitizenType;
  }
  toggleView() {
    this.edit = !this.edit;
  }
}
</script>