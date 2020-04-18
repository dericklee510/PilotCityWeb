<template>
  <v-col cols="10" lg="12">
    <v-row
      v-for="(obj, mod, index) in sequence"
      :key="index+mod"
      no-gutters
      class="mt-2 mb-2"
    >
      <v-col >
        <span class="module-status__row">
          <v-btn
            class="mr-3 text-uppercase module-status__button"
            x-small
            depressed
            light
            :color="color(obj)"
            :to="{name: routeList(mod)}"
          >
            <span class="module-status__status">{{ obj.status }}</span>
            <span class="module-status__edit">Edit</span>
          </v-btn>
          <span class="pitch_view__teamtitle3 text-capitalize">
            {{ mod }}
          </span>
        </span>
      </v-col>
    </v-row>
  </v-col>
</template>
<style lang="scss">
  .module-status__row{
    display: flex;
    .module-status__button{
      height: 40px;
      width: 90px;
      &.v-btn{
        span.module-status__edit{
          display: none;
        }
        &:hover{
          span.module-status__edit{
            display: inline;
          }
          span.module-status__status{
            display: none;
          }
        }
      }
    }
    .pitch_view__teamtitle3{
      max-width: 100%;
      flex: 1 0 auto;
      word-wrap: break-word;
    }
  }
</style>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'
import {AutoAppKeys, AutoAppValue, assignValidator, assignWeights, getCompletion} from '../utils'

@Component
export default class ModuleStatus extends Vue{
  @Prop()
  sequence: Record<AutoAppKeys, AutoAppValue> | undefined
  color(mod: Record<'status' | 'name', string>) {
      let msg = mod.status;
      return msg == 'complete'?'success':msg == 'missing'?'error':msg == 'incomplete'?'secondary':'grey'
  }
  routeList(mod: AutoAppKeys): string{
    let list: Record<AutoAppKeys, string>= {
      "Get Started": 'stud-project-profile',
      "Request for Pilot (RFP)": 'stud-project-profile',
      "Introduction Video": 'stud-project-intro',
      "Team": 'stud-project-team-join',
      "Cowork": 'project-training',
      "Practice Log": 'stud-project-practicelog',
      "Research": 'stud-project-casestudy',
      "Business Model Canvas": 'stud-project-canvas-edit',
      "One Sentence Pitch": 'stud-project-ospitch-edit',
      "Elevator Pitch": 'stud-project-elevator-edit',
      "Hack Day": 'project-hack',
      "Reflection": 'stud-project-hack-reflect',
      "Design & Prototype Process Log": 'stud-project-processlog',
      "Prototype Video": 'stud-project-demo-edit',
      "Presentation Link": 'stud-project-presentation-edit',
      "Demo Day": 'project-demo-agenda'
    };
    return list[mod];
  }
}
</script>
