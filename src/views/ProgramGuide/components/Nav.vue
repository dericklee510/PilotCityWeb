<template>
  <v-col
    cols="12"
    class="guide__bar"
  >
    <!--MAIN GROUP -->
    <v-col
      v-for="(nodes, main, index) in sequence"
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
          <v-col class="guide__mainrow pl-3">
            <span
              class="guide__bigdot guide__bigdot--active"
              :class="main=='Externship'?
                'guide__background_blue':main=='Project'?
                  'guide__background_green':main=='Internship'?
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
        v-for="(node, i) in nodes"
        :key="i"
        class="guide__sub-container"
      >
        <v-col>
          <v-col class="guide__bridge" />
        </v-col>
        <router-link :to="node.value.isUnlocked?{name:node.value.routeName}:'#'">
          <v-col class="guide__subrow">
            <span class="guide__smalldot" />
            <span
              class="guide__smalldotfilled"
              :class="node.value.isUnlocked&&main=='Externship'?
                'guide__background_blue': node.value.isUnlocked&&main=='Project'?
                  'guide__background_green': node.value.isUnlocked&&main=='Internship'?
                    'guide__background_purple':'guide__background--grey'"
            />
            <span
              class="guide__subtext"
              :class="$route.name==node.value.routeName?'guide__subtext--active':''"
            >{{ node.value.page }}</span>
          </v-col>
        </router-link>
      </v-col>
    </v-col>

    <v-col>
      <div class="guide__sub-container">
        <v-col>
          <v-col>
            <v-col class="guide__bridge guide__bridge--first" />
          </v-col>
        </v-col>
        <v-col style="padding: none">
          <v-col class="guide__mainrow pl-3">
            <span
              class="guide__bigdot guide__bigdot--active"
              :class="'guide__background--grey'"
            >
              <i class="guide__icon_white fas fa-seedling guide__programicon" />
            </span>
            <span class="guide__maintext">{{ 'Internship' }}</span>
          </v-col>
        </v-col>
      </div>
      <v-col class="guide__sub-container">
        <v-col>
          <v-col class="guide__bridge" />
        </v-col>
        <v-col class="guide__subrow">
          <span class="guide__smalldot" />
          <span
            class="guide__smalldotfilled"
            :class="'guide__background--grey'"
          />
          <span class="guide__subtext">{{ 'Auto-app' }}</span>
        </v-col>
      </v-col>
      <v-col class="guide__sub-container">
        <v-col>
          <v-col class="guide__bridge" />
        </v-col>
        <v-col class="guide__subrow">
          <span class="guide__smalldot" />
          <span
            class="guide__smalldotfilled"
            :class="'guide__background--grey'"
          />
          <span class="guide__subtext">{{ 'Interviews' }}</span>
        </v-col>
      </v-col>
      <v-col class="guide__sub-container">
        <v-col>
          <v-col class="guide__bridge" />
        </v-col>
        <v-col class="guide__subrow">
          <span class="guide__smalldot" />
          <span
            class="guide__smalldotfilled"
            :class="'guide__background--grey'"
          />
          <span class="guide__subtext">{{ 'Offers' }}</span>
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
import { FbStore } from "../../../store";
import { startCase, union, unionBy } from "lodash";

@Component
export default class Nav extends Vue {
  @Prop({ required: true })
  routeMap!: LinkedList<ProgramNode>;
  public unlocked = false;
  get sequence() {
    let seq: Record<string, ProgramNode[]> = {};
    union(this.routeMap.toArray().map(node => node.value.sequence)).forEach(
      seqKey => {
        seq[seqKey] = unionBy(
          this.routeMap
            .toArray()
            .filter(node => node.value.sequence === seqKey),
          node => node.value.page
        );
      }
    );
    return seq;
  }
  get citizenType() {
    return startCase(FbStore.userCitizenType!);
  }
  // public isActive(): boolean {}
}
</script>