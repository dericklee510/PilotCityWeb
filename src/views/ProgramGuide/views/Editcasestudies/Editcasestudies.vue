<template>
  <v-container>
    <v-row justify="center">
      <img
        id="editcasestudies__icon"
        class="editcasestudies__image"
        src="@/assets/Reviewcase.png"
      >

      <v-col
        id="editcasestudies__contain"
        cols="8"
      >
        <v-row
          justify="center"
          no-gutters
          class="editcasestudies__title"
        >
          <v-col
            class="text-center"
            cols="9"
          >
            ENTER CASE STUDIES & USE CASES
          </v-col>
        </v-row>

        <v-col
          cols="12"
          class="editcasestudies__borderline"
        />

        <v-row
          justify="center"
          no-gutters
          class="editcasestudies__description"
        >
          <v-col
            class="text-center"
            cols="9"
          >
            Share key articles, publications and links that support the student’s understanding of the technology, product or service.
          </v-col>
        </v-row>

        <v-row
          justify="center"
          no-gutters
          class="editcasestudies__labels"
        >
          <v-col
            cols="2"
            md="1"
          />
          <v-col
            cols="3"
            md="4"
            class="editcasestudies__titlename mb-3"
          >
            Link Name
          </v-col>
          <v-col
            cols="3"
            md="4"
            class="editcasestudies__titleurl mb-3"
          >
            Link URL
          </v-col>
          <v-col
            cols="2"
            md="1"
          />
        </v-row>

        <multi-input
          v-model="links"
          v-slot="{entries,newEntry,deleteEntry}"
        >
          <v-row
            v-for="entry in entries"
            :key="entry.id"
            class="editcasestudies__textbox"
            justify="center"
            no-gutters
          >
            <v-col
              cols="2"
              md="1"
            />
            <v-col
              cols="3"
              md="4"
              class="editcasestudies__inputlinkname"
            >
              <input
                v-model="entry.linkName"
                placeholder="Lidar for Drones"
              >
            </v-col>
            <v-col
              cols="3"
              md="4"
              class="editcasestudies__inputlinkurl"
            >
              <LinkChecker
                v-model="entry.link"
                placeholder="http://www.velodyne.com/casestudy1"
              />
            </v-col>
            <v-col
              cols="2"
              md="1"
            >
              <i
                v-if="entries.length>1"
                class="mt-2 ml-3 far fa-trash-alt agenda__trashicon"
                @click="deleteEntry(entry.id)"
              />
            </v-col>
          </v-row>
          <v-row
            no-gutters
            justify="center"
          >
            <v-col
              cols="6"
              md="8"
              class="editcasestudies__box"
              @click="newEntry"
            >
              <span>+</span>
            </v-col>
          </v-row>
        </multi-input>
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
                class="mb-10 mt-8"
                text
                solo
                depressed
                outlined
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
import { PCmultiinput } from "@/components/inputs";
import { NamedLink } from "@/store/Database/types/utilities";
import { LinkChecker } from "../../components";
import { FbStore } from "../../../../store";
import NextNode from "../../components/NextNode.vue";

interface NamedLinkID extends NamedLink {
  id: number;
}
let namedLinkDefault: NamedLink = { linkName: "", link: "" };
let linkData: NamedLink[] = [
  {
    linkName: "Lidar For Drones",
    link: "velodyne.co"
  },
  {
    linkName: "Lidar for Autonomous Shuttles",
    link: "http://velodyne.co"
  }
];
const multiInput = PCmultiinput.createMultiInput<NamedLink>(
  namedLinkDefault,
  linkData
);

@Component({
  components: {
    LinkChecker,
    multiInput,
    NextNode
  }
})
export default class editcasestudies extends Vue {
  links: NamedLink[] = FbStore.currentEmployerProgram?.caseStudies || [
    {} as NamedLink
  ];
  submit() {
    FbStore.updateCurrentEmployerProgram({
      caseStudies: this.links
    });
  }
}
</script>