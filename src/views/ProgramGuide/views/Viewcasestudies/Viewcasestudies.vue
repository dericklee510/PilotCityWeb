<template>
  <v-container>
    <v-row justify="center">
      <img
        id="viewcasestudies__icon"
        class="viewcasestudies__image"
        src="@/assets/Viewcasestudies.png"
      >

      <v-col
        id="viewcasestudies__contain"
        cols="8"
      >
        <v-row
          justify="center"
          class="viewcasestudies__title"
        >
          <v-col
            class="text-center"
            cols="9"
          >
            REVIEW CASE STUDIES & USE CASES
          </v-col>
        </v-row>

        <v-col
          cols="12"
          class="viewcasestudies__borderline"
        />

        <v-row
          justify="center"
          class="viewcasestudies__description"
        >
          <v-col
            cols="9"
            class="text-center"
          >
            It is important to create unique and innovative solutions. Review what’s been done before so you don’t reinvent the wheel.
          </v-col>
        </v-row>
        <v-row
          class="viewcasestudies__reviewtitle"
          no-gutters
          justify="end"
        >
          <v-col
            class="text-start"
            cols="10"
          >
            Reviewed
          </v-col>
        </v-row>

        <v-row
          v-for="(namedLink,index) in namedLinks"
          id="viewcasestudies__check1"
          :key="index"
          justify="end"
          no-gutters
        >
          <v-col
            cols="10"
            class="text-start viewcasestudies__wholeline"
          >
            <input
              v-model="caseStudiesReviewed[index]"
              class="viewcasestudies__check"
              type="checkbox"
            >
            {{ namedLink.linkName }}
            <a
              :href="namedLink.link"
              target="_blank"
            >
              <button class="viewcasestudies__exporticon">
                <img src="@/assets/exportbox.png">
              </button>
            </a>
          </v-col>
        </v-row>
        <v-row
          no-gutters
          justify="center"
        >
          <v-col cols="4">
            <NextNode
              v-slot="{setNext}"
              @CallbackComplete="$emit('nextNode')"
            >
              <v-btn
                id="editcasestudies__button"
                class="mb-12 mt-12"
                text
                solo
                depressed
                outlined
                :disabled="!allReviewed"
                height="73.5px"
                @click="setNext(submit)"
              >
                NEXT
              </v-btn>
            </NextNode>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>




<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { NamedLink, ReviewedLink } from "@/store/Database/types/utilities";
import { FbStore } from "../../../../store";
import { firebase } from "@/firebase/init";
import { NextNode } from "@/views/ProgramGuide/components";
@Component({
  components: {
    NextNode
  }
})
export default class ViewCaseStudies extends Vue {
  created() {
    if (FbStore.currentProject?.programSequence?.caseStudies)
      this.namedLinks.forEach((link, index) => {
        this.caseStudiesReviewed[index] = true;
      });
  }
  namedLinks: NamedLink[] = FbStore.currentEmployerProgram?.caseStudies || [
    {} as NamedLink
  ];
  caseStudiesReviewed = FbStore.currentProject?.caseStudiesReviewed || [];
  get allReviewed() {
    return this.namedLinks
      .map((link, index) => this.caseStudiesReviewed[index])
      .every(isReviewed => isReviewed);
  }
  submit() {
    FbStore.updateCurrentProject({
      [`programSequence.${"caseStudies"}`]: firebase.firestore.FieldValue.serverTimestamp()
    });
    this.$emit("nextNode");
  }
}
</script>