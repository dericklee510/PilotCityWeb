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
          TRAINING DAY AGENDA
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
import TrainingAgendaEdit from "@/views/ProgramGuide/views/TrainingAgenda/TrainingAgendaEdit.vue"
import TrainingAgendaView from "@/views/ProgramGuide/views/TrainingAgenda/TrainingAgendaView.vue"
import Component from 'vue-class-component'
import { FbStore } from '@/store'
import Vue from 'vue'

@Component({
    components:{
        TrainingAgendaView,
        TrainingAgendaEdit
    }
})
export default class TrainingAgenda extends Vue{
    public edit: boolean = false;
    get currentView(): string{
        return this.edit?'TrainingAgendaEdit':'TrainingAgendaView';
    }
    get citizenType() {
        return FbStore.userCitizenType;
    }
    toggleView(){
        this.edit = !this.edit;
    }
}
</script>"