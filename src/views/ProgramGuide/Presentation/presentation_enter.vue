<template>

<v-row justify="center" >

    <img id="presentation_enter__icon" src="@/assets/presentation_enter.png">

    <v-col cols="7" id="presentation_enter__contain">

        <v-row justify="center" class="mr-auto ml-auto presentation_enter__title">ENTER LINK TO PRESENTATION</v-row>

        <v-col cols="12" id="presentation_enter__borderline"></v-col>

        <v-row justify="center" class="mr-auto ml-auto presentation_enter__description">Develop a final presentation and enter the link. You can use it to present to employers, customers or who you wish. </v-row>

        <v-row justify="center" class="mr-auto ml-auto mt-12 mb-12"><input placeholder="https://" class="presentation_enter__videolink"></v-row>


        <v-row justify="center" class="ml-auto mr-auto presentation_enter__check" ><input type="checkbox" class="presentation_enter__checkbox">I acknowledge this link is set for the public to view</v-row>

        <v-col class="mr-auto ml-auto" cols="5"><button class="presentation_enter__button">SAVE</button></v-col>

<!-- NO RATING YET -->

        <v-row justify="center" class="mt-8 presentation_enter__ratinglabel">No rating yet</v-row>

        <v-row justify="center" class="mt-3 mb-6">
            <i class="far fa-star presentation_enter__unratedstar"></i>
            <i class="far fa-star presentation_enter__unratedstar"></i>
            <i class="far fa-star presentation_enter__unratedstar"></i>
            <i class="far fa-star presentation_enter__unratedstar"></i>
            <i class="far fa-star presentation_enter__unratedstar"></i>
        </v-row>

<!-- RATING -->

        <v-row justify="center" class="mt-8 presentation_enter__ratinglabel">Rating</v-row>

        <v-row justify="center" class="mt-3 mb-6">
            <i class="fas fa-star presentation_enter__ratedstar"></i>
            <i class="fas fa-star presentation_enter__ratedstar"></i>
            <i class="fas fa-star presentation_enter__ratedstar"></i>
            <i class="fas fa-star presentation_enter__ratedstar"></i>
            <i class="fas fa-star presentation_enter__ratedstar"></i>
        </v-row>


    </v-col>

</v-row>
</template>





<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
@Component
export default class presentation_enter extends Vue{
    
}
</script>