

<template>
  <v-container>
    <component :is="teamPage" />
  </v-container>
</template>





<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { FbStore } from "../../../../store";
import { doc } from "rxfire/firestore";
import { Project } from "../../../../store/Database/types/types";
import { findIndex } from "lodash";
import { PCLoader } from "../../../../components/utilities";
import { ValidationProvider, ValidationObserver } from "vee-validate";
import { Watch } from "vue-property-decorator";
import { Subscription } from "rxjs";
import { startCase, toLower } from "lodash";
import { GeneralUser } from "../../../../store/Database/types/types";
import FindTeam from './FindTeam.vue';
import TeamSettings from './TeamSettings.vue';

@Component<Team>({
  components: {
    FindTeam,
    TeamSettings
  }
})
export default class Team extends Vue {
get teamPage(){
  if(FbStore.currentProject)
    return 'TeamSettings'
  else
    return 'FindTeam'
}
}
</script>