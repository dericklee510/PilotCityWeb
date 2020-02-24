<template>
  <v-container>
    <v-row
    
      no-gutters
      justify="center"
    >
      <img
        id="prompt__icon"
        src="@/assets/pitch_enter.png"
      >
      <v-col
        id="prompt__contain"
        cols="8"
      >
        <v-row
          class="programguide__title"
          no-gutters
          justify="center"
        >
          {{ citizenType == 'employer' ? 'CREATE ' : citizenType == 'teacher' ? 'REVIEW ' : '' }}  RFP
        </v-row>
        <v-row
          justify="center"
          no-gutters
          class=" prompt__description mb-10"
        >
          <v-col
            class="text-center"
            cols="9"
          >
            Generate project prompts that best represent employer requirements and your course curriculum by tweaking key information in the mission.
            [INSTRUCTIONS FOR EMPLOYERS, ROOT EMPLOYER RFP FOR TEACHERS, AND REVISED & FINALIZED RFP FOR STUDENTS]
            TEACHERS: DISABLED-VIEW OF INPUTS; STUDENTS:
          </v-col>
        </v-row>
        <v-row
          justify="center"
          class="prompt__header"
        >
          Step 1
        </v-row>

        <v-row
          justify="center"
          class="prompt__divider ml-auto mr-auto mt-5 mb-5"
        />

        <v-row>
          <v-col
            align="right"
            cols="4"
            class="prompt__generatetitle"
          >
            Enter Name of Company or Organization [DIABLED FOR NOT-EMPLOYER]
          </v-col>
          <v-col cols="7">
            <ValidationProvider
              v-slot="{errors}"
              rules="required"
            >
              <v-text-field
                v-model="rfpCompany"
                class="prompt__generateinput"
                :error-messages="errors"
              />
            </ValidationProvider>
          </v-col>
        </v-row>
        <v-row
          justify="center"
          class="prompt__header"
        >
          Step 2
        </v-row>

        <v-row
          justify="center"
          class="prompt__divider ml-auto mr-auto mt-5 mb-5"
        />

        <v-row>
          <v-col
            align="right"
            cols="4"
            class="prompt__generatetitle"
          >
            Finalize baseline prompt [VIEWABLE FOR ONLY STUDENTS] | ideally is a copy of original RFP
          </v-col>
          <v-col cols="7">
            <ValidationProvider
              v-slot="{errors}"
              rules="required"
            >
              <v-textarea
                v-model="rfpPrompt"
                outlined
                :error-messages="errors"
                depressed
                solo
              />
            </ValidationProvider>
          </v-col>
        </v-row>
        <v-row
          justify="center"
          class="prompt__header"
        >
          Step 3
        </v-row>

        <v-row
          justify="center"
          class="prompt__divider ml-auto mr-auto mt-5 mb-5"
        />

        <v-row
          justify="center"
          no-gutters
          class="prompt__headerdescription mb-12"
        >
          <v-col
            class="text-center"
            cols="9"
          >
            Enter requirements or specifications for project [PC MULTI-INPUT]
          </v-col>
        </v-row>

        <v-row
          justify="center"
          no-gutters
        >
          <v-col cols="7">
            <v-textarea
              outlined
              depressed
              solo
            />
          </v-col>
        </v-row>
        <v-row
          justify="center"
          class="prompt__header"
        >
          Step 4
        </v-row>

        <v-row
          justify="center"
          class="prompt__divider ml-auto mr-auto mt-5 mb-5"
        />

        <v-row
          justify="center"
          no-gutters
          class="prompt__headerdescription mb-12"
        >
          <v-col
            class="text-center"
            cols="9"
          >
            About the Employer
          </v-col>
        </v-row>

        <v-row>
          <v-col
            align="right"
            cols="4"
            class="prompt__generatetitle"
          >
            [ENTER AN ABOUT ME, DSABLED/VIEWABLE ONLY FOR OTHE users]
          </v-col>
          <v-col cols="7">
            <v-textarea
              v-model="rfpAbout"
              outlined
              depressed
              solo
            />
          </v-col>
        </v-row>
        <v-row
          justify="center"
          class="prompt__header"
        >
          Step 5
        </v-row>

        <v-row
          justify="center"
          class="prompt__divider ml-auto mr-auto mt-5 mb-5"
        />

        <v-row
          justify="center"
          no-gutters
          class="prompt__headerdescription mb-12"
        >
          <v-col
            class="text-center"
            cols="9"
          >
            Share what you know
          </v-col>
        </v-row>

        <v-row>
          <v-col
            align="right"
            cols="4"
            class="prompt__generatetitle"
          >
            ENTER RESOURCES [like case studies]
          </v-col>
          <v-col cols="7">
            <input
              v-model="rfpResources"
              class="prompt__generateinput"
            >
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import { FbStore } from '../../../../../store';
import { ValidationProvider, ValidationObserver } from 'vee-validate';
@Component({
  components:{
    ValidationObserver,
    ValidationProvider
  }
})
export default class RFPBrief extends Vue{
    get citizenType(){
        return FbStore.userCitizenType;
    }
    // rfpCompany = FbStore.currentEmployerProgram?.rfpCompany || ""
    // rfpPrompt = FbStore.currentEmployerProgram?.rfpPrompt || ""
    // rfpRequirements = FbStore.currentEmployerProgram?.rfpRequirements || ""
    // rfpAbout = FbStore.currentEmployerProgram?.rfpAbout || ""
    // rfpResources = FbStore.currentEmployerProgram?.rfpResources || ""
}
</script>