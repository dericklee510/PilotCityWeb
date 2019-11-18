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
          <v-switch
            text
            readonly
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
          </v-switch>
        </div>
      </v-col>
    </v-row>
    <v-container fluid>
      <router-view :name="'Teacher'" />
    </v-container>
  </v-container>
</template>


<script lang="ts">
import Vue from "vue"
import Component from "vue-class-component"
// this.$route.params.citizenType
@Component
export default class Profile extends Vue {
}
</script>

