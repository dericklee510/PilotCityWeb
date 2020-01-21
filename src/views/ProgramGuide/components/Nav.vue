<template>
  <v-col
    cols="12"
    class="guide__bar"
  >
    <!--MAIN GROUP -->
    <v-col
      v-for="(obj, main, index) in sequence"
      :key="main+index"
    >
      <!-- if index == 1, don't show this "bridge" -->
      <div class="guide__sub-container">
        <v-col>
          <v-col>
            <v-col class="guide__bridge guide__bridge--first" />
          </v-col>
        </v-col>
        <v-col style="padding: none">
          <v-col class="guide__mainrow">
            <span
              class="guide__bigdot guide__bigdot--active"
              :class="unlocked&&index==0?'guide__background_blue':unlocked&&index==1?'guide__background_green':''"
            >
              <i class="guide__icon_white fas fa-chalkboard-teacher guide__programicon" />
            </span>

            <!-- <span
              class="guide__maintext"
              :class=" isActive?'guide__maintext--active':''"
            >{{ main }}</span>-->
            <span class="guide__maintext">{{ main }}</span>
          </v-col>
        </v-col>
      </div>
      <v-col
        v-for="(arr, subitem, key) in obj"
        :key="subitem+key"
        class="guide__sub-container"
      >
        <v-col>
          <v-col class="guide__bridge" />
        </v-col>
        <v-col
          class="guide__subrow"
          @click="updateProgram(subitem)"
        >
          <span class="guide__smalldot" />
          <span
            class="guide__smalldotfilled"
            :class="unlocked&&index==0?'guide__background_blue':unlocked&&index==1?'guide__background_green':''"
          />
          <span class="guide__subtext">{{ subitem }}</span>
        </v-col>
      </v-col>
    </v-col>
  </v-col>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { forEachField } from "graphql-tools";
import { TEACHERSEQUENCE, EMPLOYERSEQUENCE, STUDENTSEQUENCE } from "../views";
import { LinkedList, LinkedListItem } from "linked-list-typescript";
import { ProgramNode, RouteList } from "../types";
import { STUDENTMODULES, EMPLOYERMODULES, TEACHERMODULES } from "../views";
import { FbStore } from '../../../store';
import {startCase} from 'lodash'
@Component
export default class Nav extends Vue {
  @Prop()
  public value!: LinkedList<ProgramNode>;
  public unlocked = true;
  public sequenceHash: Record<string, any> = {
    Teacher: TEACHERSEQUENCE,
    Employer: EMPLOYERSEQUENCE,
    Student: STUDENTSEQUENCE
  };
  get citizenType() {
    return startCase(FbStore.userCitizenType!)
  }
  get sequence() {
    return this.sequenceHash[this.citizenType]
  }
  public updateProgram(name: string) {
    this.$emit("input", name);
  }
  // public isActive(): boolean {}
}
</script>