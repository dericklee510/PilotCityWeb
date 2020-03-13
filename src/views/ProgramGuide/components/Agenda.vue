<template>
  <v-container justify="center">
    <multiAgenda
      v-model="agendaItems"
      v-slot="{entries, newEntry, deleteEntry}"
    >
      <v-row
        v-for="entry in entries"
        :key="entry.id"
        class="mt-10 pt-0 pb-0"
      >
        <v-col
          class="agenda__item-box"
          cols="1"
          sm="2"
        />

        <v-col
          cols="6"
          sm="8"
          class="agenda__item mr-auto ml-auto"
        >
          <v-row class="agenda__borderline">
            <input
              v-model="entry.name"
              placeholder="Item"
              class="agenda__item-input__header pt-3 pb-3 pl-4 pr-4"
            >
          </v-row>
          <v-row class="agenda__borderline">
            <input
              v-model="entry.duration"
              placeholder="Duration"
              class="agenda__item-input__duration pt-2 pb-2 pl-4 pr-4"
            >
          </v-row>
          <v-row>
            <v-textarea
              v-model="entry.description"
              placeholder="Describe your agenda item"
              class="agenda__item-input__description"
              dense
              hide-details
              background-color="transparent"
              no-resize
              solo
              text
            />
          </v-row>
        </v-col>

        <v-col
          cols="2"
          class="agenda__trashicon"
        >
          <i
            v-if="entries.length>1"
            class="mt-2 far fa-trash-alt agenda__trashicon"
            @click="deleteEntry(entry.id)"
          />
        </v-col>
      </v-row>

      <!-- ADD AGENDA ITEM -->
      <v-row class="mt-10 pt-0 pb-0">
        <v-col
          class="agenda__item-box"
          cols="2"
        />

        <v-col
          cols="8"
          class="agenda__item-add mb-2"
          @click="newEntry"
        >
          +
        </v-col>

        <v-col cols="2" />
      </v-row>
      <v-row
        class="mt-4"
        no-gutters
        justify="center"
      >
        <v-col
          cols="4"
        >
          <v-btn
            id="editcasestudies__button"
            class="mb-10"
            text
            solo
            depressed
            outlined
            height="73.5px"
            @click="$emit('toggleView')"
          >
            FINISH
          </v-btn>
        </v-col>
      </v-row>
    </multiAgenda>
  </v-container>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { EventItem } from "@/store/Database/types/utilities";
import { PCmultiinput } from "@/components/inputs";
import "reflect-metadata";
import { PropSync, Watch } from "vue-property-decorator";
const emptyAgenda: EventItem = {
  name: "",
  duration: "",
  description: "",
};
const app = PCmultiinput.createMultiInput(emptyAgenda);
@Component({
  components: {
    multiAgenda:app
  }
})
export default class Agenda extends Vue {
  @PropSync("value")
  agendaItems!: EventItem[];
}
</script>