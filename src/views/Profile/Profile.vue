<template>
  <v-container
    fluid
    class="pc-profile-page"
  >
    <v-row justify="end">
      <!-- <div > -->
      <v-col
        xl="2"
        lg="3"
        md="4"
        sm="5"
        cols="8"
        style="padding: 0;"
        align-self="center"
      >
        <div
          id="profileSwitch"
          style="display: flex"
        >
        <!-- disabled until my progams is developed -->
          <!-- <v-switch
            text
            readonly
            @click="switchProfile"
          >
            <template v-slot:label>
              <label class="profile__switch profile__switch--active">
                public
              </label>
            </template>
            <template v-slot:prepend>
              <label class="profile__switch profile__switch--inactive">
                private
              </label>
            </template>
          </v-switch> -->
        </div>
      </v-col>
    </v-row>
    <v-container fluid>
      <router-view :name="citizenType" />
    </v-container>
  </v-container>
</template>



<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Profile extends Vue {
    get citizenType() {
    if (!localStorage.citizenType) {
      return this.$route.params.citizenType
    }
    return localStorage.citizenType
  }

    public switchProfile() {
        this.$router.push({ name: 'profile.public' })
    }
}
</script>
