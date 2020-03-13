<template>
  <v-container>
    <v-row
      justify="center"
      no-gutters
    >
      <img
        id="demovideo_view__icon"
        src="@/assets/demovideo_view.png"
      > 

      <v-col
        id="demovideo_view__contain"
        cols="8"
        class="pb-9"
      >
        <v-row
          justify="center"
          class="mr-auto ml-auto demovideo_view__title"
        >
          1-MINUTE PROTOTYPE DEMONSTRATION VIDEOS

          <!-- TOOLTIP TEMPLATE -->
          <v-tooltip
            v-if="citizenType == 'teacher'"
            top
          >
            <template v-slot:activator="{ on }">
              <v-btn
                href="https://www.pilotcity.com/library/how-can-i-film-upload-my-prototype-video"
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
            <span>What instructions can I share with my students on how to develop their demonstration video? Click here.</span>
          </v-tooltip>
          <!-- TOOLTIP TEMPLATE END -->
        </v-row>

        <v-col
          id="demovideo_view__borderline"
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
        <!-- TEAM -->
      </v-col>
    </v-row>
  </v-container>
</template>





<script lang="ts">
import Vue from "vue";
import Component, { mixins } from "vue-class-component";
import { Rating } from "../../components";
import { team_snippet } from "../../components";
import { FbStore } from "../../../../store";
import { doc } from "rxfire/firestore";
import { Classroom, Project } from "../../../../store/Database/types/types";
import { spliceOrPush } from "../../../../utilities/array";
import { Subscription } from "rxjs";
import { firebase } from "@/firebase/init";
import { Watch } from "vue-property-decorator";
import { Oops } from "@/views/ProgramGuide/components";
import { getlatestProjectSnippetsMixin } from '../../utilities';
const snippetMixin = getlatestProjectSnippetsMixin({
  href:'demoLink',
  rating:"demoRating"
})
@Component({
  components: {
    Rating,
    Oops
  }
})
export default class demovideo_view extends mixins(snippetMixin) {
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
        [`demoRating${FbStore.userCitizenType!.charAt(
          0
        ).toUpperCase()}`]: newRating,
        lastUpdate: firebase.firestore.FieldValue.serverTimestamp()
      });
  }

  get citizenType() {
    return FbStore.userCitizenType;
  }
}
</script>