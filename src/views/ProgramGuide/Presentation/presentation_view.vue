<template>

<v-row justify="center" >

    <img id="presentation_view__icon" src="@/assets/presentation_view.png">

    <v-col cols="7" id="presentation_view__contain">

        <v-row justify="center" class="mr-auto ml-auto presentation_view__title">ENTER LINK TO PRESENTATION</v-row>

        <v-col cols="12" id="presentation_view__borderline"></v-col>


        <v-row class="mt-5" justify="center">
            <v-col class="presentation_view__label" cols="1"></v-col>
            <v-col class="presentation_view__label" cols="6">Name</v-col>
            <v-col class="presentation_view__label" cols="3">Rate</v-col>
        </v-row>

<!-- TEAM -->

        <v-row justify="center">
            <v-col class="presentation_view__externallink" cols="1"><i class="fas fa-external-link-alt"></i></v-col>
            <v-col class="presentation_view__teamtitle" cols="6">Autonomous Campus Shuttle</v-col>
            <v-col cols="3">
                <i class="fas fa-star presentation_view__rated"></i>
                <i class="fas fa-star presentation_view__rated"></i>
                <i class="far fa-star presentation_view__unrated"></i>
                <i class="far fa-star presentation_view__unrated"></i>
                <i class="far fa-star presentation_view__unrated"></i>
            </v-col>
        </v-row>

<!-- TEAM -->

        <v-row justify="center">
            <v-col class="presentation_view__externallink" cols="1"><i class="fas fa-external-link-alt"></i></v-col>
            <v-col class="presentation_view__teamtitle" cols="6">Autonomous Home the Homeless</v-col>
            <v-col cols="3">
                <i class="fas fa-star presentation_view__rated"></i>
                <i class="fas fa-star presentation_view__rated"></i>
                <i class="fas fa-star presentation_view__rated"></i>
                <i class="fas fa-star presentation_view__rated"></i>
                <i class="far fa-star presentation_view__unrated"></i>
            </v-col>
        </v-row>

<!-- TEAM -->

        <v-row justify="center">
            <v-col class="presentation_view__externallink" cols="1"><i class="fas fa-external-link-alt"></i></v-col>
            <v-col class="presentation_view__teamtitle" cols="6">Bart Fare Evasion Detection</v-col>
            <v-col cols="3">
                <i class="fas fa-star presentation_view__rated"></i>
                <i class="far fa-star presentation_view__unrated"></i>
                <i class="far fa-star presentation_view__unrated"></i>
                <i class="far fa-star presentation_view__unrated"></i>
                <i class="far fa-star presentation_view__unrated"></i>
            </v-col>
        </v-row>

<!-- TEAM -->

        <v-row justify="center">
            <v-col class="presentation_view__externallink" cols="1"><i class="fas fa-external-link-alt"></i></v-col>
            <v-col class="presentation_view__teamtitle" cols="6">Clean Water Assessment for Cities</v-col>
            <v-col cols="3">
                <i class="fas fa-star presentation_view__rated"></i>
                <i class="fas fa-star presentation_view__rated"></i>
                <i class="far fa-star presentation_view__unrated"></i>
                <i class="far fa-star presentation_view__unrated"></i>
                <i class="far fa-star presentation_view__unrated"></i>
            </v-col>
        </v-row>

<!-- TEAM -->

        <v-row justify="center">
            <v-col class="presentation_view__externallink" cols="1"><i class="fas fa-external-link-alt"></i></v-col>
            <v-col class="presentation_view__teamtitle" cols="6">Data Analysis for the Alameda Library</v-col>
            <v-col cols="3">
                <i class="fas fa-star presentation_view__rated"></i>
                <i class="fas fa-star presentation_view__rated"></i>
                <i class="fas fa-star presentation_view__rated"></i>
                <i class="far fa-star presentation_view__unrated"></i>
                <i class="far fa-star presentation_view__unrated"></i>
            </v-col>
        </v-row>



    </v-col>

</v-row>
</template>





<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
@Component
export default class presentation_view extends Vue{
    
}
</script>