<template>
  <v-col
    cols="12"
    class="guide__bar"
  >
    <!-- MAIN GROUP -->
    <v-col class="guide__mainrow">
      <span class="guide__bigdot guide__bigdot--active guide__background_blue"><i class="guide__icon_white fas fa-chalkboard-teacher guide__programicon" /></span>

      <span class="guide__maintext guide__maintext--active">Externship Day</span>
    </v-col>





    <!-- SUB GROUP -->
    <v-col>
      <v-col class="guide__bridge" />
    </v-col>
    <v-col class="guide__subrow">
      <router-link :to="{name: 'teach-externship-agenda'}">
        <span class="guide__smalldot" />
        <span class="guide__smalldotfilled guide__background_blue" />
        <span class="guide__subtext">Agenda</span>
      </router-link>
    </v-col>


    <!-- SUB GROUP -->
    <v-col>
      <v-col class="guide__bridge" />
    </v-col>
    <v-col class="guide__subrow">
      <router-link :to="{name: 'teach-externship-brief'}">
        <span class="guide__smalldot" />
        <span class="guide__smalldotfilled guide__background_blue" />
        <span class="guide__subtext">Brief</span>
      </router-link>
    </v-col>

    <!-- SUB GROUP -->
    <v-col>
      <v-col class="guide__bridge" />
    </v-col>
    <v-col class="guide__subrow">
      <router-link :to="{name: 'teach-externship-manage'}">
        <span class="guide__smalldot" />
        <span class="guide__smalldotfilled guide__background_blue" />
        <span class="guide__subtext">Manage</span>
      </router-link>
    </v-col>

    <!-- MAIN GROUP -->
    <v-col>
      <v-col class="guide__bridge" />
    </v-col>
    <v-col class="guide__mainrow">
      <span class="guide__bigdot  guide__background_green guide__bigdot--active"><i class="fas fa-project-diagram guide__icon_white guide__programicon" /></span>
      <span class="guide__maintext guide__maintext--active ">Project</span>
    </v-col>
    <!-- SUB GROUP -->
    <v-col>
      <v-col class="guide__bridge" />
    </v-col>
    <v-col class="guide__subrow">
      <router-link :to="{name: 'teach-project-intro'}">
        <span class="guide__smalldot" />
        <span class="guide__smalldotfilled guide__background_green" />
        <span class="guide__subtext">Intro Video</span>
      </router-link>
    </v-col>
    <!-- SUB GROUP -->
    <v-col>
      <v-col class="guide__bridge" />
    </v-col>
    <v-col class="guide__subrow">
      <router-link :to="{name: 'teach-project-training'}">
        <span class="guide__smalldot" />
        <span class="guide__smalldotfilled guide__background_green" />
        <span class="guide__subtext">Train</span>
      </router-link>
    </v-col>
    <!-- SUB GROUP -->
    <v-col>
      <v-col class="guide__bridge" />
    </v-col>
    <v-col class="guide__subrow">
      <router-link :to="{name: 'teach-project-practicelog'}">
        <span class="guide__smalldot" />
        <span class="guide__smalldotfilled guide__background_green" />
        <span class="guide__subtext">Practice</span>
      </router-link>
    </v-col>

    <!-- SUB GROUP -->
    <v-col>
      <v-col class="guide__bridge" />
    </v-col>
    <v-col class="guide__subrow">
      <router-link :to="{name: 'teach-project-casestudy'}">
        <span class="guide__smalldot" />
        <span class="guide__smalldotfilled guide__background_green" />
        <span class="guide__subtext">Research</span>
      </router-link>
    </v-col>

    <!-- SUB GROUP -->
    <v-col>
      <v-col class="guide__bridge" />
    </v-col>
    <v-col class="guide__subrow">
      <router-link :to="{name: 'teach-project-canvas'}">
        <span class="guide__smalldot" />
        <span class="guide__smalldotfilled guide__background_green" />
        <span class="guide__subtext">Ideate</span>
      </router-link>
    </v-col>

    <!-- SUB GROUP -->
    <!-- <v-col>
      <v-col class="guide__bridge" />
    </v-col>
    <v-col class="guide__subrow">
      <span class="guide__smalldot" />
      <span class="guide__smalldotfilled guide__background_green" />
      <span class="guide__subtext">Prepare</span>
    </v-col> -->

    <!-- SUB GROUP -->
    <v-col>
      <v-col class="guide__bridge" />
    </v-col>
    <v-col class="guide__subrow">
      <router-link :to="{name: 'teach-project-hack'}">
        <span class="guide__smalldot" />
        <span class="guide__smalldotunfilled" />
        <span class="guide__subtext">Hack Day</span>
      </router-link>
    </v-col>

    <!-- SUB GROUP -->
    <!-- <v-col>
      <v-col class="guide__bridge" />
    </v-col>
    <v-col class="guide__subrow">
      <span class="guide__smalldot" />
      <span class="guide__smalldotunfilled" />
      <span class="guide__subtext">Reflection</span>
    </v-col> -->

    <!-- SUB GROUP -->
    <!-- <v-col>
      <v-col class="guide__bridge" />
    </v-col>
    <v-col class="guide__subrow">
      <span class="guide__smalldot" />
      <span class="guide__smalldotunfilled" />
      <span class="guide__subtext">Design & Prototype</span>
    </v-col> -->

    <!-- SUB GROUP -->
    <v-col>
      <v-col class="guide__bridge" />
    </v-col>
    <v-col class="guide__subrow">
      <router-link :to="{name:'teach-project-demo'}">
        <span class="guide__smalldot" />
        <span class="guide__smalldotunfilled" />
        <span class="guide__subtext">Package</span>
      </router-link>
    </v-col>

    <!-- SUB GROUP -->
    <v-col>
      <v-col class="guide__bridge" />
    </v-col>
    <v-col class="guide__subrow">
      <router-link :to="{name:'teach-project-demoagenda'}">
        <span class="guide__smalldot" />
        <span class="guide__smalldotunfilled" />
        <span class="guide__subtext">Demo Day</span>
      </router-link>
    </v-col>

    <!-- SUB GROUP -->
    <v-col>
      <v-col class="guide__bridge" />
    </v-col>
    <v-col class="guide__subrow">
      <span class="guide__smalldot" />
      <span class="guide__smalldotunfilled" />
      <span class="guide__subtext">Exit Form</span>
    </v-col>



    <!-- MAIN GROUP -->
    <!-- <v-col>
      <v-col class="guide__bridge" />
    </v-col>
    <v-col class="guide__mainrow">
      <span class="guide__bigdot"><i class="fas fa-seedling guide__programicon guide__icon_gray" /></span>
      <span class="guide__maintext">Internship</span>
    </v-col> -->

    <!-- SUB GROUP -->
    <!-- <v-col>
      <v-col class="guide__bridge" />
    </v-col>
    <v-col class="guide__subrow">
      <span class="guide__smalldot" />
      <span class="guide__smalldotunfilled" />
      <span class="guide__subtext">Interview Offer</span>
    </v-col> -->

    <!-- SUB GROUP -->
    <!-- <v-col>
      <v-col class="guide__bridge" />
    </v-col>
    <v-col class="guide__subrow">
      <span class="guide__smalldot" />
      <span class="guide__smalldotunfilled" />
      <span class="guide__subtext">First Interview</span>
    </v-col> -->
    <!-- SUB GROUP -->
    <!-- <v-col>
      <v-col class="guide__bridge" />
    </v-col>
    <v-col class="guide__subrow">
      <span class="guide__smalldot" />
      <span class="guide__smalldotunfilled" />
      <span class="guide__subtext">Final Interview</span>
    </v-col> -->
    <!-- SUB GROUP -->
    <!-- <v-col>
      <v-col class="guide__bridge" />
    </v-col>
    <v-col class="guide__subrow">
      <span class="guide__smalldot" />
      <span class="guide__smalldotunfilled" />
      <span class="guide__subtext">Position Offer</span>
    </v-col> -->

    <!-- SUB GROUP -->
    <!-- <v-col>
      <v-col class="guide__bridge" />
    </v-col>
    <v-col class="guide__subrow">
      <span class="guide__smalldot" />
      <span class="guide__smalldotunfilled" />
      <span class="guide__subtext">Next Program</span>
    </v-col> -->



    <!--MAIN GROUP -->
    <!-- <v-col
      v-for="(obj, main, index) in PROGRAMNAMES"
      :key="main+index"
      no-gutters
    > 
      if index == 1, don't show this "bridge"
    <v-col>
        <v-col class="guide__bridge" />
      </v-col>
      <v-col class="guide__mainrow">
        <span
          class="guide__bigdot guide__bigdot--active"
          :class="unlocked?'guide__background_blue':''"
        ><i class="guide__icon_white fas fa-chalkboard-teacher guide__programicon" /></span>

        <span
          class="guide__maintext"
          :class=" isActive?'guide__maintext--active':''"
        >{{ main }}</span>
      </v-col>
      <v-col
        v-for="(subitem, key) in obj"
        :key="subitem+key"
        no-gutters
      >
        <v-col>
          <v-col class="guide__bridge" />
        </v-col>
        <v-col
          class="guide__subrow"
          @click="updateProgram(subitem)"
        >
          <span>
            <div class="guide__smalldot" />
            <div
              class="guide__smalldotfilled"
              :class="unlocked?'guide__background_blue':''"
            />
            <div class="guide__subtext">
              {{ subitem }}
            </div>
          </span>
        </v-col>
      </v-col>
    </v-col> -->
  </v-col>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from 'vue-property-decorator';
import { forEachField } from 'graphql-tools';
@Component
export default class Nav extends Vue {
  @Prop()
  public value !: string;

  public _select = this.value;
  public unlocked = false;
  get select() {
    return this._select;
  }
  set select(value: string) {
    this._select = value;
  }
  public updateProgram(name: string) {
    this.$emit('input', name )
  }
  public PROGRAMNAMES:Record<string,string[]> = { // for reference
    'Externship': [
      'Agenda',
      'Brief',
      'Manage',
    ],
    'Project': [
      'IntroVid',
      'TrainingDay',
      'Practice',
      // 'Research',
      // 'Ideate',
      // 'Prepare',
      'Hack',
      // 'Reflection'
      // 'Design & Prototype'
      // 'Package'
      'Demo'
      // 'Exit'
    ],
    'Internship': [
      // 'Offer 1'
      // 'Interview 1'
      // 'Interview 2'
      // 'Offer 2'
      // 'Next Program'
    ],
    'Unsorted': [
      'CaseStudy',
      'IntroVid',
      'Practice',
      'Presentation',
      'DemoVid',
      'Pitch',
      'Elevator',
      'Canvas',
      'Process',
    ]
  }
  public DONTDELETE = `

      `
  public isActive(): boolean{
    var active: boolean = false;
    Object.keys(this.PROGRAMNAMES).forEach( key => {
      this.PROGRAMNAMES[key].forEach(item => {
        item==this.select?active = true: active = false;
      })
    })
    return active;
  }
}
</script>