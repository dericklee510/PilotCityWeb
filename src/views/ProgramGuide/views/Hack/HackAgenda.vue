<template>
  <v-container class="agenda-view">
    <v-row
      justify="center"
      no-gutters
    >
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
          <i
            v-if="citizenType=='teacher'|| citizenType=='employer'"
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
        />
      </v-col>
    </v-row>
  </v-container>
</template>





<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { FbStore } from '@/store'
import HackAgendaView from "./hackagenda_view.vue"
import HackAgendaEdit from "./hackagenda_edit.vue"
@Component({
    components:{
        HackAgendaView,
        HackAgendaEdit
    }
})
export default class HackAgenda extends Vue{
    public edit: boolean = false;
    get currentView(): string{
        return this.edit?'HackAgendaEdit':'HackAgendaView';
    }
    get citizenType() {
        return FbStore.userCitizenType;
    }
    toggleView(){
        this.edit = !this.edit;
    }
}
</script>