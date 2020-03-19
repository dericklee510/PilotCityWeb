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
      </v-col> -->

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
          HACK DAY AGENDA

          <!-- TOOLTIP TEMPLATE -->
          <v-tooltip
            v-model="show"
            top
          >
            <template v-slot:activator="{ on }">
              <v-btn
                href="https://www.pilotcity.com/library/hack-day"
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
            <span>What is Hack Day? Click to learn more</span>
          </v-tooltip>
          <!-- TOOLTIP TEMPLATE END -->
        </v-row>

        <v-row
          justify="center"
          class="agenda-view__titlewithline"
          no-gutters
        >
          <i
            v-if="citizenType=='teacher'|| citizenType=='employer'"
            class="far fa-edit edit-icon__externship"
            @click="toggleView"
          />
        </v-row>

      <!-- NEW SWITCH BUTTON - NEEDS FRONT END FUNCTIONALITY -->

<v-row>
      <v-col class="agenda-view__switch mt-12" cols="12">
        <v-row v-if="" justify="center">
          <span class="agenda-view__switchlabel">RECORD</span>
          <v-switch v-model="record" @click="toggleView" inset></v-switch>
          <span class="agenda-view__switchlabel">LIVE</span>
        </v-row>
      </v-col>
</v-row>

<!-- FOR STUDENT -->
        <v-row
           v-if="citizenType == 'student'" 
          justify="center"
          no-gutters
          class="businessmodelcanvas_view2__description"
        >
<v-btn dark depressed x-large>Record Hack Day</v-btn>
        </v-row>

<!-- FOR EMPLOYER -->

          <v-row
           v-if="citizenType == 'employer'" 
            justify="center"
            class="mr-auto ml-auto mt-12 mb-12"
            no-gutters
          >
            <v-col
              cols="9"
              md="7"
            >
              <LinkChecker
              disabled
                v-model="url"
                :success="success"
                placeholder="https://"
                class="introvideo_edit__videolink"
              />
            </v-col>
          </v-row>


<!-- END -->

        <!-- <v-row
          justify="center"
          no-gutters
          class="businessmodelcanvas_view2__description"
        >
          <v-col
            cols="9"
            class="pt-3 pb-3 text-center mt-3 mb-10"
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
        /> -->
      </v-col>
    </v-row>
  </v-container>
</template>





<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { FbStore } from "@/store";
import HackAgendaView from "./hackagenda_view.vue";
import HackAgendaEdit from "./hackagenda_edit.vue";
import { LinkChecker, NextNode } from "../../components";
@Component({
  components: {
    HackAgendaView,
    HackAgendaEdit,
    LinkChecker
  }
})
export default class HackAgenda extends Vue {
  public edit: boolean = false;
  get currentView(): string {
    return this.edit ? "HackAgendaEdit" : "HackAgendaView";
  }
  get citizenType() {
    return FbStore.userCitizenType;
  }
  toggleView() {
    this.edit = !this.edit;
  }
}
</script>