<template>

<v-row justify="center" >

    <img id="pitch_view__icon" src="@/assets/pitch_view.png">

    <v-col cols="7" id="pitch_view__contain">

        <v-row justify="center" class="mr-auto ml-auto pitch_view__title">VIEW ONE SENTENCE PROJECT PITCHES</v-row>

        <v-col cols="12" id="pitch_view__borderline"></v-col>


        <v-row class="mt-5" justify="center">
            <!-- <v-col class="pitch_view__label" cols="1"></v-col> -->
            <v-col class="pitch_view__label" cols="8">Name</v-col>
            <v-col class="pitch_view__label" cols="2">Rate</v-col>
        </v-row>

<!-- TEAM -->

        <v-row justify="center">
            <!-- <v-col class="pitch_view__externallink" cols="1"><i class="fas fa-external-link-alt"></i></v-col> -->
            <v-col cols="8">
                <v-row class="pitch_view__teamtitle ml-auto">Autonomous Campus Shuttle</v-row>
                <v-row class="pitch_view__teampitch ml-auto">An autonomous residential vehicle (RV) for the homeless in the San Francisco Bay Area</v-row>

            </v-col>
            <v-col cols="2">
                <i class="fas fa-star pitch_view__rated"></i>
                <i class="fas fa-star pitch_view__rated"></i>
                <i class="far fa-star pitch_view__unrated"></i>
                <i class="far fa-star pitch_view__unrated"></i>
                <i class="far fa-star pitch_view__unrated"></i>
            </v-col>
        </v-row>

<!-- TEAM -->

        <v-row justify="center">
            <!-- <v-col class="pitch_view__externallink" cols="1"><i class="fas fa-external-link-alt"></i></v-col> -->
            <v-col cols="8">
                <v-row class="pitch_view__teamtitle ml-auto">Autonomous Home the Homeless</v-row>
                <v-row class="pitch_view__teampitch ml-auto">An autonomous residential vehicle (RV) for the homeless in the San Francisco Bay Area</v-row>

            </v-col>
            <v-col cols="2">
                <i class="fas fa-star pitch_view__rated"></i>
                <i class="fas fa-star pitch_view__rated"></i>
                <i class="fas fa-star pitch_view__rated"></i>
                <i class="fas fa-star pitch_view__rated"></i>
                <i class="far fa-star pitch_view__unrated"></i>
            </v-col>
        </v-row>

<!-- TEAM -->

        <v-row justify="center">
            <!-- <v-col class="pitch_view__externallink" cols="1"><i class="fas fa-external-link-alt"></i></v-col> -->
            <v-col cols="8">
                <v-row class="pitch_view__teamtitle ml-auto">Bart Fare Evasion Detection</v-row>
                <v-row class="pitch_view__teampitch ml-auto">An autonomous residential vehicle (RV) for the homeless in the San Francisco Bay Area</v-row>

            </v-col>
            <v-col cols="2">
                <i class="fas fa-star pitch_view__rated"></i>
                <i class="fas fa-star pitch_view__rated"></i>
                <i class="fas fa-star pitch_view__rated"></i>
                <i class="far fa-star pitch_view__unrated"></i>
                <i class="far fa-star pitch_view__unrated"></i>
            </v-col>
        </v-row>

<!-- TEAM -->

        <v-row justify="center">
            <!-- <v-col class="pitch_view__externallink" cols="1"><i class="fas fa-external-link-alt"></i></v-col> -->
            <v-col cols="8">
                <v-row class="pitch_view__teamtitle ml-auto">Clean Water Assessment for Cities</v-row>
                <v-row class="pitch_view__teampitch ml-auto">An autonomous residential vehicle (RV) for the homeless in the San Francisco Bay Area</v-row>

            </v-col>
            <v-col cols="2">
                <i class="fas fa-star pitch_view__rated"></i>
                <i class="far fa-star pitch_view__unrated"></i>
                <i class="far fa-star pitch_view__unrated"></i>
                <i class="far fa-star pitch_view__unrated"></i>
                <i class="far fa-star pitch_view__unrated"></i>
            </v-col>
        </v-row>

<!-- TEAM -->

        <v-row justify="center">
            <!-- <v-col class="pitch_view__externallink" cols="1"><i class="fas fa-external-link-alt"></i></v-col> -->
            <v-col cols="8">
                <v-row class="pitch_view__teamtitle ml-auto">Data Analysis for the Alameda Library</v-row>
                <v-row class="pitch_view__teampitch ml-auto">An autonomous residential vehicle (RV) for the homeless in the San Francisco Bay Area</v-row>

            </v-col>
            <v-col cols="2">
                <i class="far fa-star pitch_view__unrated"></i>
                <i class="far fa-star pitch_view__unrated"></i>
                <i class="far fa-star pitch_view__unrated"></i>
                <i class="far fa-star pitch_view__unrated"></i>
                <i class="far fa-star pitch_view__unrated"></i>
            </v-col>
        </v-row>




    </v-col>

</v-row>
</template>





<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
@Component
export default class pitch_view extends Vue{
    
}
</script>