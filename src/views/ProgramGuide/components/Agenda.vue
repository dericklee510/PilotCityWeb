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
          cols="2"
        />

        <v-col
          cols="8"
          class="agenda__item mr-auto ml-auto"
        >
          <v-row id="agenda__borderline">
            <input
              v-model="entry.name"
              placeholder="Item"
              class="agenda__item-input__header pt-3 pb-3 pl-4 pr-4"
            >
          </v-row>
          <v-row id="agenda__borderline">
            <input
              v-model="entry.duration"
              placeholder="Duration"
              class="agenda__item-input__duration pt-2 pb-2 pl-4 pr-4"
            >
          </v-row>
          <v-row>
            <input
              v-model="entry.description"
              placeholder="Description"
              class="agenda__item-input__description pt-3 pb-12 pl-4 pr-4"
            >
          </v-row>
        </v-col>

        <v-col cols="2">
          <i
            v-if="entries.length>1"
            class="mt-2 ml-3 far fa-trash-alt agenda__trashicon"
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
          class="agenda__item-add mr-auto ml-auto mb-12"
          @click="newEntry"
        >
          +
          <v-row />
        </v-col>

        <v-col cols="2" />
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