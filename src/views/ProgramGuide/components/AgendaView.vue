<template>
  <v-container fluid>
    <v-col
      v-for="(item,index) in syncedAgenda"
      :key="index"
    >
      <v-row
        class="agenda-view__checkbox"
        no-gutters
      >
        <v-col
          cols="2"
          class="agenda-view__checkbox-input"
        >
          <input
            v-model="item.completed"
            type="checkbox"
          >
        </v-col>
        <v-col
          cols="10"
          class="agenda-view__checkbox-label pa-0"
        >
          <v-col
            class="pa-0"
            :class="item.completed?'agenda-view__checkbox--box':''"
          >
            <label
              for="checkbox+index"
            >
              <span
                class="agenda-view__item"
              >{{ item.name }}</span>
            </label>
          </v-col>
        </v-col> 
      </v-row>
      <v-row no-gutters>
        <v-col cols="2" />
          
        <v-col
          cols="10"
          class="pa-0"
        >
          <v-col class="pa-0">
            <input
              v-model="item.duration"
              disabled="true"
              class="agenda-view__duration"
              placeholder="Duration"
            >
          </v-col>
          <v-col class="pa-0">
            <p
              class="agenda-view__description"
              placeholder="Duration"
            >
              {{ item.description }}
            </p>
          </v-col>
        </v-col>
      </v-row>
    </v-col>
    <v-row
      no-gutters
      justify="center"
    >
      <v-col
        cols="4"
      >
        <v-btn
          id="editcasestudies__button"
          class="mb-10"
          :disabled="!isAgendaComplete"
          text
          solo
          depressed
          outlined
          height="73.5px"
          @click="$emit('finish')"
        >
          NEXT
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template> 
<script lang="ts">
import Vue from "vue";
import "reflect-metadata";
import Component from "vue-class-component";
import { EventItem } from "../../../store/Database/types/utilities";
import { PropSync, Watch } from "vue-property-decorator";
@Component
export default class AgendaView extends Vue {
  @PropSync("value")
  syncedAgenda!: EventItem[];
  
  static emptyAgenda: EventItem[] = [
    {
      name: "",
      duration: "",
      description: "",
    }
  ];
  get isAgendaComplete() {
    return this.syncedAgenda
      .map(item => item.completed)
      .every(isTrue => isTrue);
  }
}
</script>