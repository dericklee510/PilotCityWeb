<template>

<v-row justify="center" >

    <img id="elevator_view2__icon" src="@/assets/elevator_view.png">

    <v-col cols="7" id="elevator_view2__contain">

        <v-row justify="center" class="mr-auto ml-auto elevator_view2__title">WRITE YOUR 60-SECOND ELEVATOR PITCH</v-row>

        <v-col cols="12" id="elevator_view2__borderline"></v-col>

        <v-row justify="center" class="mr-auto ml-auto elevator_view2__description">Before you run into a customer or investor, you have to know your solution in detail. Write out what you will say in an elevator pitch.</v-row>

        <!-- <v-row class="mt-12 mr-auto ml-auto pl-5 mb-4 elevator_view2__description__label">Elevator Pitch</v-row> -->

            <v-col class="mt-12 mr-auto ml-auto pl-5 mb-4 elevator_view2__description__label">Elevator Pitch</v-col>

            <v-col></v-col>

        <v-row justify="center" class="mr-auto ml-auto mb-12"><input placeholder="My pitch is..." disabled="true" class="pt-1 pb-12 pl-5 pr-4 elevator_view2__paragraph"></v-row>

        <v-col class="mr-auto ml-auto" cols="5"><button class="elevator_view2__button">SAVE</button></v-col>

<!-- NO RATING YET -->

        <v-row justify="center" class="mt-8 elevator_view2__ratinglabel">No rating yet</v-row>

        <v-row justify="center" class="mt-3 mb-6">
            <i class="far fa-star elevator_view2__unratedstar"></i>
            <i class="far fa-star elevator_view2__unratedstar"></i>
            <i class="far fa-star elevator_view2__unratedstar"></i>
            <i class="far fa-star elevator_view2__unratedstar"></i>
            <i class="far fa-star elevator_view2__unratedstar"></i>
        </v-row>

<!-- RATING -->

        <v-row justify="center" class="mt-8 elevator_view2__ratinglabel">Rating</v-row>

        <v-row justify="center" class="mt-3 mb-6">
            <i class="fas fa-star elevator_view2__ratedstar"></i>
            <i class="fas fa-star elevator_view2__ratedstar"></i>
            <i class="fas fa-star elevator_view2__ratedstar"></i>
            <i class="fas fa-star elevator_view2__ratedstar"></i>
            <i class="fas fa-star elevator_view2__ratedstar"></i>
        </v-row>


    </v-col>

</v-row>
</template>





<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
@Component
export default class elevator_view2 extends Vue{
    
}
</script>