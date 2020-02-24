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
          cols="9"
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
          class="mb-12 mt-10"
          :disabled="!isAgendaComplete"
          text
          solo
          depressed
          outlined
          height="73.5px"
          @click="$emit('finish')"
        >
          FINISH
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
import { PropSync, Watch, Prop } from "vue-property-decorator";
@Component
export default class AgendaView extends Vue {
  @Prop()
  value!:EventItem[]
  
  get syncedAgenda(): EventItem[]{
    return this.value
  }
  set syncedAgenda(val:EventItem[]){
    this.$emit('input',val)
  }
  @Prop()
  completed!:boolean
  @Watch('completed',{immediate:true})
  onComplete(){
    if(this.completed){
      this.syncedAgenda = this.syncedAgenda.map(item => ({...item,completed:true}))
    }
  }
  static emptyAgenda: EventItem[] = [
    {
      name: "",
      duration: "",
      description: "",
    }
  ];
  get isAgendaComplete() {
    if(this.syncedAgenda){
      return this.syncedAgenda
      .map(item => item.completed)
      .every(isTrue => isTrue);
      }
    // eslint-disable-next-line no-console
    else console.error('Agenda not found!')
    return false
  }
}
</script>