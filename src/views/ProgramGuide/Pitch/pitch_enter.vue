<template>

<v-row justify="center" >

    <img id="pitch_enter__icon" src="@/assets/pitch_enter.png">

    <v-col cols="7" id="pitch_enter__contain">

        <v-row justify="center" class="mr-auto ml-auto pitch_enter__title">YOUR ONE SENTENCE PROJECT PITCH</v-row>

        <v-col cols="12" id="pitch_enter__borderline"></v-col>

        <v-row justify="center" class="mr-auto ml-auto pitch_enter__description">In a tweet or less, describe what your solution is so it is clearly and concisely defined for others to quickly understand.</v-row>

        <v-row justify="center" class="mr-auto ml-auto mt-12 mb-12"><input placeholder="" class="pt-1 pb-12 pl-5 pr-4 pitch_enter__onesentence"></v-row>

        <v-col class="mr-auto ml-auto" cols="5"><button class="pitch_enter__button">SAVE</button></v-col>

<!-- NO RATING YET -->

        <v-row justify="center" class="mt-8 pitch_enter__ratinglabel">No rating yet</v-row>

        <v-row justify="center" class="mt-3 mb-6">
            <i class="far fa-star pitch_enter__unratedstar"></i>
            <i class="far fa-star pitch_enter__unratedstar"></i>
            <i class="far fa-star pitch_enter__unratedstar"></i>
            <i class="far fa-star pitch_enter__unratedstar"></i>
            <i class="far fa-star pitch_enter__unratedstar"></i>
        </v-row>

<!-- RATING -->

        <v-row justify="center" class="mt-8 pitch_enter__ratinglabel">Rating</v-row>

        <v-row justify="center" class="mt-3 mb-6">
            <i class="fas fa-star pitch_enter__ratedstar"></i>
            <i class="fas fa-star pitch_enter__ratedstar"></i>
            <i class="fas fa-star pitch_enter__ratedstar"></i>
            <i class="fas fa-star pitch_enter__ratedstar"></i>
            <i class="fas fa-star pitch_enter__ratedstar"></i>
        </v-row>


    </v-col>

</v-row>
</template>





<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
@Component
export default class pitch_enter extends Vue{
    
}
</script>