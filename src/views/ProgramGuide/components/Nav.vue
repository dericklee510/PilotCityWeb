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
              :class="isUnlocked('Externship')&&main=='Externship'?
                'guide__background_blue':isUnlocked('Project')&&main=='Project'?
                  'guide__background_green':isUnlocked('Internship')&&main=='Internship'?
                    'guide__background_purple':'guide__background--grey'"
            >
              <i
                v-if="main=='Externship'"
                class="guide__icon_white fas fa-chalkboard-teacher guide__programicon"
              />
              <i
                v-if="main=='Project'"
                class="guide__icon_white fas fa-project-diagram guide__programicon"
              />
              <i
                v-if="main=='Internship'"
                class="guide__icon_white fas fa-seedling guide__programicon"
              />
            </span>

            <!-- <span
              class="guide__maintext"
              :class=" isActive?'guide__maintext--active':unlocked&&main=='Internship'"
            >{{ main }}</span>-->
            <span class="guide__maintext">{{ main }}</span>
          </v-col>
        </v-col>
      </div>
      <v-col
        v-for="(val, mod, key) in obj"
        :key="mod+key"
        class="guide__sub-container"
      >
        <v-col>
          <v-col class="guide__bridge" />
        </v-col>
        <v-col
          class="guide__subrow"
          @click="updateProgram(val.routeName)"
        >
          <span class="guide__smalldot" />
          <span
            class="guide__smalldotfilled"
            :class="val.unlocked&&main=='Externship'?
              'guide__background_blue': val.unlocked&&main=='Project'?
                'guide__background_green': val.unlocked&&main=='Internship'?
                  'guide__background_purple':'guide__background--grey'"
          />
          <span
            class="guide__subtext"
            :class="value==val.routeName?'guide__subtext--active':''"
          >{{ mod }}</span>
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
import { LinkedList, LinkedListItem } from "linked-list-typescript";
import { ProgramNode, RouteList } from "../types";
import { FbStore } from '../../../store';
import {startCase} from 'lodash'
type Sequence = {
  Externship:{[key:string]: {unlocked: () => boolean, routeName: string}}, 
  Project:{[key:string]: {unlocked: () => boolean, routeName: string}}
}
@Component
export default class Nav extends Vue {
  @Prop()
  public value!: LinkedList<ProgramNode>;
  @Prop({required: true})
  public routeMap!:  LinkedList<ProgramNode>;

  get citizenType() {
    return startCase(FbStore.userCitizenType!)
  }
  get sequence(){
    let seq = {} as Sequence;
    seq.Externship = {};
    seq.Project = {};
    this.routeMap.toArray().forEach(obj => {
      if(obj.value.sequence == "Externship"){
        seq.Externship[obj.value.page] =  {unlocked: obj.value.isUnlocked, routeName: obj.value.routeName}
      }if(obj.value.sequence == "Project"){
        seq.Project[obj.value.page] =  {unlocked: obj.value.isUnlocked, routeName: obj.value.routeName}
      }
    })
    return seq;
  }
  public updateProgram(name: string) {
    this.$emit("input", name);
  }
  // public isActive(): boolean {}
}
</script>