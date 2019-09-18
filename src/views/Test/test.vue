<template>
  <v-container
    class="citizen-id"
    fluid
  >
    <v-container
      fluid
      style="margin-top: 75px;"
    >
      <v-card class="pc-container">
        <v-row
          class="pc-background citizen-id__header"
        >
          <v-col cols="12">
            <v-img
              src="@/assets/citizen-id.svg"
              class="citizen-id__icon"
            />
          </v-col>
          <v-col class="citizen-id__title">
            <h1>CREATE YOUR CITIZEN ID</h1>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue"
import Component from "vue-class-component"


@Component
export default class Test extends Vue {
      
}
</script>
