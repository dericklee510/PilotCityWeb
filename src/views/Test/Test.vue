<<<<<<< HEAD
<template>
  <div />
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { FbStore } from "@/store";
import { GeneralUser } from "../../store/Database/types/types";
@Component
export default class Test extends Vue {
  async created() {
    this.createUserProfile();
  }

  createUserProfile() {
    let uid = (FbStore.FBUser as firebase.User).uid;

    // FbStore.firestore
    //   .collection("GeneralUser")
    //   .doc(uid)
    //   .set<GeneralUser>({
    //     firstName: "Taisei"
    //   });
  }
}
=======
<template>
  <div />
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { FbStore } from "@/store";
import { GeneralUser } from "../../store/Database/types/types";
@Component
export default class Test extends Vue {
  async created() {
    this.createUserProfile();
  }

  createUserProfile() {
    let uid = (FbStore.FBUser as firebase.User).uid;

    FbStore.firestore
      .collection("GeneralUser")
      .doc(uid)
      .update<GeneralUser>({
        firstName: "Taisei",
        lastName: "Tateno"
      });
  }
}
>>>>>>> 2dd245ebaa8932851d0a4ca41089157f8dd574e4
</script>