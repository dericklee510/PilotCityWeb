<template>
  <v-container
    class="citizen-id"
    fluid
  >
    <v-container  
      fluid
      style="margin-top: 80px;"
    >
      <v-card class="pc-container">
        <v-row
          class=" citizen-id__header pc-background"
          align="end"
        >
          <img
            src="@/assets/citizen-id.jpg"
            class="citizen-id__icon pc-h-center"
          >
          <v-col
            class="citizen-id__title"
          >
            <h1 class="text-center">
              CREATE YOUR CITIZEN ID
            </h1>
          </v-col>
        </v-row>
        <v-row
          class="citizen-id__body "
          align="center"
        >
          <!-- create selector component -->
          <v-col cols="12">
            <v-btn
              id="citizen-id__select"
              rounded
              disabled
            >
              <h2 class="text-capitalize">
                Citizen Type
              </h2>
            </v-btn>
          </v-col>
          <v-col cols="12">
            <v-col cols="4">
              <v-row justify="center">
                <v-col
                  cols="12"
                  style="padding: 0;"
                >
                  <v-btn
                    id="citizen-id__type--teacher"
                    block
                    class=".pc-background--pink"
                  >
                    <h2 class="text-capitalize">
                      Teacher
                    </h2>
                  </v-btn>
                </v-col>
                <v-col
                  cols="12"
                  style="padding: 0;"
                >
                  <v-btn
                    id="citizen-id__type--employer"
                    block
                  >
                    <h2 class="text-capitalize">
                      Employer
                    </h2>
                  </v-btn>
                </v-col>
                <v-col
                  cols="12"
                  style="padding: 0;"
                >
                  <v-btn
                    id="citizen-id__type--student"
                    block
                  >
                    <h2 class="text-capitalize">
                      Student
                    </h2>
                  </v-btn>
                </v-col>
              </v-row>
            </v-col>
          </v-col>
          <v-col cols="12">
            <v-btn
              id="pc-button"
              text
              outlined
            >
              NEXT
            </v-btn>
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
