<template>
  <v-container class="agenda-view">
    <v-row
      justify="center"
      no-gutters
    >
      <!-- NEW SWITCH BUTTON - NEEDS FRONT END FUNCTIONALITY -->

      <!-- <v-col class="agenda-view__switch mt-12" cols="8">
        <v-row v-if="citizenType == 'teacher'" justify="end">
          <span class="agenda-view__switchlabel">VIEW</span>
          <v-switch @click="toggleView" inset></v-switch>
          <span class="agenda-view__switchlabel">EDIT</span>
        </v-row>
      </v-col> -->

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

          <!-- TOOLTIP TEMPLATE -->
          <v-tooltip
            top
          >
            <template v-slot:activator="{ on }">
              <v-btn
                href="https://www.pilotcity.com/library/hack-day"
                target="_blank"
                icon
                v-on="on"
              >
                <v-icon
                  class="pb-3"
                  color="grey lighten-1"
                >
                  info
                </v-icon>
              </v-btn>
            </template>
            <span>What is Hack Day? Click to learn more</span>
          </v-tooltip>
          <!-- TOOLTIP TEMPLATE END -->
        </v-row>

        <v-row
          justify="center"
          class="agenda-view__titlewithline"
          no-gutters
        >
          <i
            v-if="live && (citizenType=='teacher'|| citizenType=='employer')"
            class="far fa-edit edit-icon__externship"
            @click="toggleView"
          />
        </v-row>

        <!-- NEW SWITCH BUTTON - NEEDS FRONT END FUNCTIONALITY -->

        <v-row no-gutters>
          <v-col
            class="agenda-view__switch mt-12"
            cols="12"
          >
            <v-row
              justify="center"
            >
              <span
                class="agenda-view__switchlabel" 
              >RECORD</span>
              <v-switch
                v-model="live"
                inset
                :color="(!live)?'green':undefined"
              />
              <span class="agenda-view__switchlabel">LIVE</span>
            </v-row>
          </v-col>
        </v-row>

        <div
          v-if="!live"
        >
          <!-- FOR STUDENT -->
          <div v-if="citizenType == 'student'">
            <v-row
              justify="center"
              no-gutters
              class="businessmodelcanvas_view2__description"
            >
              <v-btn
                :dark="!completedBy"
                depressed
                x-large
                :href="url"
                :disabled="!!completedBy"
                :color="url?'':'error'"
              >
                Record Hack Day
              </v-btn>
            </v-row>
            <v-row
              v-show="!url"
              no-gutters
              justify="center"
              class="mt-4"
            >
              <h5
                class="error--text text-center"
              >
                Your employer has not uploaded a VideoAsk yet
              </h5>
            </v-row>
            <v-row
              v-if="completedBy"
              justify="center"
            >
              <span class="caption text-uppercase text--lighten-5 mt-2">
                {{ `Completed By ${completedBy}` }}
              </span>
            </v-row>
            <v-row
              v-if="!completedBy"
              justify="center"
            >
              <v-checkbox
                v-model="acknowledged"
                :label="studentCheckbox" 
              />
            </v-row>
          </div>
          <!-- FOR EMPLOYER -->
        
          <v-row
            v-if="citizenType == 'employer'" 
            justify="center"
            class="mr-auto ml-auto mt-12 mb-12"
            no-gutters
          >
            <v-col
              cols="9"
              md="7"
            >
              <LinkChecker
                v-model="url"
                disabled
                placeholder="https://"
                class="introvideo_edit__videolink"
              />
            </v-col>
          </v-row>
          <v-row
            v-if="!live"
            class="mt-4"
            no-gutters
            justify="center"
          >
            <v-col
              cols="4"
            >
              <NextNode
                v-slot="{setNext}"
                @CallbackComplete="$emit('nextNode')"
              >
                <v-btn
                  id="editcasestudies__button"
                  class="mb-10"
                  text
                  solo
                  depressed
                  outlined
                  height="73.5px"
                  :dark="acknowledged"
                  :disabled="citizenType == 'employer'?false:!acknowledged"
                  @click="setNext(submit)"
                >
                  FINISH
                </v-btn>
              </NextNode>
            </v-col>
          </v-row>
        </div>


        <!-- END -->

        <div
          v-if="live"
        >
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
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>





<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { FbStore } from "@/store";
import HackAgendaView from "./hackagenda_view.vue";
import HackAgendaEdit from "./hackagenda_edit.vue";
import { LinkChecker, NextNode } from "../../components";
import  {firebase} from '@/firebase/init';
import { from } from 'rxjs';
import { PCLoader } from '@/components/utilities';
@Component({
  components: {
    HackAgendaView,
    HackAgendaEdit,
    LinkChecker,
    PCLoader,
    NextNode
  },
  subscriptions(){
    return {
      completedBy: from(new Promise((resolve) => resolve(FbStore.currentProject?.hackDayCompletedBy?FbStore.getStudentName({studentUid:FbStore.currentProject!.hackDayCompletedBy}):null)))
    }
  }
})
export default class HackAgenda extends Vue {
  public edit: boolean = false;
  live:boolean = false;
  url:string = FbStore.currentEmployerProgram!.hackDayVideoLink || ""
  completedBy!:string
  acknowledged:boolean = false
  get studentCheckbox(){
    return `I acknowledge that I ${FbStore.currentUserProfile!.firstName} ${FbStore.currentUserProfile!.lastName} have complete hackday for my team.`
  }
  get currentView(): string {
    return this.edit ? "HackAgendaEdit" : "HackAgendaView";
  }
  get citizenType() {
    return FbStore.userCitizenType;
  }
  toggleView() {
    this.edit = !this.edit;
  }
  async submit(){
    if(FbStore.userCitizenType === "employer")
    await FbStore.updateCurrentEmployerProgram({
      hackDayVideoLink:this.url
    })
    else if (FbStore.userCitizenType === "student"){
      await FbStore.updateCurrentProject({
        programSequence:Object.assign({},FbStore.currentProject!.programSequence,{hackDay:firebase.firestore.FieldValue.serverTimestamp()}),
        hackDayCompletedBy:FbStore.userUid
      })
    }
  }
}
</script>