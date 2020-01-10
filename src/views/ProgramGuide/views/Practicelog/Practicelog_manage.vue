<template>
  <v-row justify="center">
    <img
      id="practicelog_manage__icon"
      class="practicelog_manage__image"
      src="@/assets/practicelog_manage.png"
    >

    <v-col
      id="practicelog_manage__contain"
      cols="7"
    >
      <v-row
        justify="center"
        class="mr-auto ml-auto practicelog_manage__title"
      >
        MANAGE PRACTICE LOGS
      </v-row>

      <v-col
        cols="12"
        class="practicelog_manage__borderline"
      />


      <v-row
        class="mt-5"
        justify="center"
      >
        <v-col
          class="practicelog_manage__label"
          cols="2"
        >
          Time
        </v-col>
        <v-col
          class="practicelog_manage__label pl-0"
          cols="6"
        >
          Name
        </v-col>
        <!-- <v-col class="practicelog_manage__label" cols="3"></v-col> -->
      </v-row>

      <!-- LOGGER -->

      <v-row justify="center">
        <!-- <v-col class="practicelog_manage__externallink" cols="1"><i class="fas fa-external-link-alt"></i></v-col> -->
        <v-col
          class="practicelog_manage__loginfo"
          cols="2"
        >
          210m
        </v-col>
        <v-col cols="6">
          <v-row class="practicelog_manage__loginfo">
            Antonio Loza
          </v-row>
          <v-row>
            <button class="practicelog_manage__rejectbutton">
              Reject
            </button><div class="practicelog_manage__singlelog">
              10m
            </div>
          </v-row>
          <v-row>
            <button class="practicelog_manage__rejectbutton">
              Reject
            </button><div class="practicelog_manage__singlelog">
              32m
            </div>
          </v-row>
          <v-row>
            <button class="practicelog_manage__rejectbutton">
              Reject
            </button><div class="practicelog_manage__singlelog">
              56m
            </div>
          </v-row>
        </v-col>
      </v-row>

      <!-- LOGGER -->

      <v-row justify="center">
        <!-- <v-col class="practicelog_manage__externallink" cols="1"><i class="fas fa-external-link-alt"></i></v-col> -->
        <v-col
          class="practicelog_manage__loginfo"
          cols="2"
        >
          251m
        </v-col>
        <v-col cols="6">
          <v-row class="practicelog_manage__loginfo">
            Carly Hudson
          </v-row>
          <v-row>
            <button class="practicelog_manage__rejectbutton">
              Reject
            </button><div class="practicelog_manage__singlelog">
              6m
            </div>
          </v-row>
          <v-row>
            <button class="practicelog_manage__rejectbutton">
              Reject
            </button><div class="practicelog_manage__singlelog">
              25m
            </div>
          </v-row>
          <v-row>
            <button class="practicelog_manage__rejectbutton">
              Reject
            </button><div class="practicelog_manage__singlelog">
              63m
            </div>
          </v-row>
        </v-col>
      </v-row>

      <!-- LOGGER -->

      <v-row justify="center">
        <!-- <v-col class="practicelog_manage__externallink" cols="1"><i class="fas fa-external-link-alt"></i></v-col> -->
        <v-col
          class="practicelog_manage__loginfo"
          cols="2"
        >
          76m
        </v-col>
        <v-col cols="6">
          <v-row class="practicelog_manage__loginfo">
            Dylan Layden
          </v-row>
          <v-row>
            <button class="practicelog_manage__rejectbutton">
              Reject
            </button><div class="practicelog_manage__singlelog">
              36m
            </div>
          </v-row>
          <v-row>
            <button class="practicelog_manage__rejectbutton">
              Reject
            </button><div class="practicelog_manage__singlelog">
              72m
            </div>
          </v-row>
          <v-row>
            <button class="practicelog_manage__rejectbutton">
              Reject
            </button><div class="practicelog_manage__singlelog">
              55m
            </div>
          </v-row>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>





<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
@Component
export default class logtime extends Vue{
    
}
</script>