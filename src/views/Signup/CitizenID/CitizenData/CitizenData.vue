<template>
  <v-row
    class="citizen-id__body "
    align="center"
  >
    <v-row justify="center">
      <v-col
        cols="12"
        class="mt-6 pt-6 mb-3"
      >
        <v-menu
          max-width="300px"
          content-class="pc-v-center"
          :offset-y="true"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-col cols="12">
              <v-row justify="center">
                <v-col
                  cols="12"
                  md="6"
                  lg="4"
                >
                  <v-btn
                    :id="CITIZENSTYLES[citizenType]"
                    style="display: block"
                    v-bind="attrs"
                    rounded
                    v-on="on"
                  >
                    <h2
                      class="text-capitalize pr-5 pl-5"
                    >
                      {{ $route.params.citizenType }}
                    </h2>
                  </v-btn>
                </v-col>
              </v-row>
            </v-col>
          </template>

          <v-list style="padding: 0 ">
            <v-list-item
              v-for="(type, index) in AVAILABLETYPES"
              :key="type + index"
              style="padding: 0;"
              @click="changeCitizenType(type)"
            >
              <v-col
                cols="12"
                class="pa-0"
              >
                <v-list-item-title :id="CITIZENSTYLES[type]">
                  <v-row
                    align="center"
                    justify="center"
                  >
                    <v-col cols="8">
                      <h3 class="text-center">
                        {{ type }}
                      </h3>
                    </v-col>
                  </v-row>
                </v-list-item-title>
              </v-col>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col>
    </v-row>
    <v-col
      cols="12"
      class="pt-0"
    >
      <v-row
        id="citizen-id__base-questions"
        justify="center"
      >
        <v-col
          cols="12"
          md="6"
          lg="4"
        >
          <v-col
            cols="12"
            class="citizen-title"
          >
            <pcSelect
              :dark-mode="true"
              title="TITLE"
              :items="['Mr.', 'Mrs.', 'Ms.', 'no preference']"
              placeholder="How may we address you?"
            />
          </v-col>
          <v-col cols="12">
            <pcTextfield
              :dark-mode="true"
              title="FIRST NAME"
              placeholder="First Name"
            />
          </v-col>
          <v-col cols="12">
            <pcTextfield
              :dark-mode="true"
              title="LAST NAME"
              placeholder="Last Name"
            />
          </v-col>
          <v-col cols="12">
            <pcTextfield
              :dark-mode="true"
              title="PHONE NUMBER"
              placeholder="(###) ###-####"
            />
          </v-col>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12">
      <v-row justify="center">
        <v-col
          cols="12"
          md="6"
          lg="4"
        >
          <v-btn
            id="citizen-id__next"
            class="pc-button"
            text
            outlined
            :to="{name: 'program.programlist'}"
          >
            <h3 class="text-center">
              NEXT
            </h3>
          </v-btn>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import PCselect from '@/components/inputs/PCselect.vue'
import PCtextfield from '@/components/inputs/PCtextfield.vue'

@Component({
    components: {
        pcSelect: PCselect,
        pcTextfield: PCtextfield
    }
})
export default class CitizenData extends Vue {
    private CITIZENSTYLES = {
        Teacher: 'citizen-id__type--teacher',
        Employer: 'citizen-id__type--employer',
        Student: 'citizen-id__type--student'
    }

    private AVAILABLETYPES: string[] = ['Teacher', 'Employer', 'Student']

    get citizenType() {
        return this.$route.params.citizenType
    }
}
</script>
