<template>
  <v-container>
    <v-row justify="center">
      <img
        id="presentation_view__icon"
        src="@/assets/presentation_view.png"
      >

      <v-col
        id="presentation_view__contain"
        cols="8"
        class="pb-9"
      >
        <v-row
          justify="center"
          class="mr-auto ml-auto presentation_view__title"
        >
          VIEW STUDENT PRESENTATION LINKS
          <!-- TOOLTIP TEMPLATE -->
          <v-tooltip
            v-if="citizenType == 'teacher'"
            v-model="show"
            top
          >
            <template v-slot:activator="{ on }">
              <v-btn
                href="https://www.pilotcity.com/library/what-should-i-include-in-my-final-presentation"
                target="_blank"
                icon
                v-on="on"
              >
                <v-icon
                  class="pb-2"
                  color="grey lighten-1"
                >
                  info
                </v-icon>
              </v-btn>
            </template>
            <span>What should my students include in their final presentation? Click to learn more.</span>
          </v-tooltip>
          <!-- TOOLTIP TEMPLATE END -->
        </v-row>

        <v-col
          id="presentation_view__borderline"
          cols="12"
        />

        <v-container>
          <v-row
            class="mt-5"
            justify="center"
            no-gutters
          >
            <v-col
              class="demovideo_view__label"
              cols="1"
            />
            <v-col
              class="demovideo_view__label"
              cols="7"
            >
              Name
            </v-col>
            <v-col
              class="demovideo_view__label"
              cols="2"
            >
              Rate
            </v-col>
          </v-row>
        </v-container>

        <!-- TEAM -->

        <Rating
          v-model="entries"
          :required="['href']"
          @ratingChange="onRatingChange"
        />
        <Oops v-if="!entries.length" />
      </v-col>
    </v-row>
  </v-container>
</template>





<script lang="ts">
import Vue from 'vue'
import Component, { mixins } from 'vue-class-component'
import { Rating, team_snippet } from '../../components'
import { FbStore } from '../../../../store';
import { doc } from 'rxfire/firestore';
import { Classroom, Project } from '../../../../store/Database/types/types';
import { spliceOrPush } from '../../../../utilities/array';
import { Subscription } from 'rxjs';
import {firebase} from "@/firebase/init"
import { Watch } from 'vue-property-decorator';
import { Oops } from "@/views/ProgramGuide/components"
import { getlatestProjectSnippetsMixin } from '../../utilities';
const snippetMixin = getlatestProjectSnippetsMixin({
  href:"presentationLink",
  rating:"presentationRating"
})
@Component({
  components: {
    Rating,
    Oops
  }
})
export default class presentation_view extends mixins(snippetMixin) {
  onRatingChange({
    newRating,
    projectId
  }: {
    newRating: number;
    projectId: string;
  }) {
    FbStore.firestore
      .collection("Project")
      .doc(projectId)
      .update<Project>({
        [`presentationRating${FbStore.userCitizenType!.charAt(
          0
        ).toUpperCase()}`]: newRating,
        lastUpdate: firebase.firestore.FieldValue.serverTimestamp()
      });
  }
}
</script>