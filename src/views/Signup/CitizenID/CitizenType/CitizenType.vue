<template>
  <v-row
    class="citizen-id__body "
    align="center"
  >
    <v-col cols="12">
      <v-row justify="center">
        <v-col
          cols="8"
          md="4"
          lg="3"
        >
          <v-btn
            id="citizen-id__type-select"
            rounded
            disabled
          >
            <h2 class="text-capitalize">
              Citizen Type
            </h2>
          </v-btn>
        </v-col>
      </v-row>
    </v-col>
    <v-col
      cols="12"
    >
      <v-row
        id="type-buttons"
        justify="center"
      >
        <v-col
          cols="12"
          md="6"
          lg="4"
        >
          <v-col
            v-for="(type, index) in AVAILABLETYPES"
            :key="type + index"
            cols="12"
            style="padding: 0;"
          >
            <v-btn
              :id="CITIZENSTYLES[type]"
              block
              @click="selectCitizenType(type)"
            >
              <!-- @click="$router.push({name:`signup.data`, props: {citizenType: type}})" -->
              <h2 class="text-capitalize">
                {{ type }}
              </h2>
            </v-btn>
          </v-col>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from "vue"
import Component from "vue-class-component"


@Component  
export default class CitizenType extends Vue {
    private CITIZENSTYLES = {
        Teacher: "citizen-id__type--teacher", 
        Employer: "citizen-id__type--employer", 
        Student: "citizen-id__type--student"
    }
    private AVAILABLETYPES: string[] = ["Employer","Teacher", "Student"]
    selectCitizenType(citizenKey: string){
        localStorage.citizenType = citizenKey
        this.$router.push({
            name:`signup.data`, 
            params: {citizenType: citizenKey}
        })
        this.$router.push
    }
}
</script>
