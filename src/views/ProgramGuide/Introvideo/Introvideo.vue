<template>

<v-row justify="center" >

    <img id="introvideo__icon" src="@/assets/watchintrovideo.png">

    <v-col cols="7" id="introvideo__contain">

        <v-row justify="center" class="mr-auto ml-auto introvideo__watchintro">WATCH INTRODUCTION VIDEO</v-row>

        <v-col cols="12" id="introvideo__borderline"></v-col>

        <v-row justify="center" class="mr-auto ml-auto introvideo__description">Watch the following introduction video by your employer to get warmed up on what we’re doing. </v-row>

        <v-row justify="center" class="mr-auto ml-auto introvideo__video"></v-row>


        <v-row justify="center" class="ml-auto mr-auto introvideo__check" ><input type="checkbox" class="introvideo__checkbox"> I have finished watching the video</v-row>

        <v-col class="mr-auto ml-auto" cols="5"><button class="introvideo__button">NEXT</button></v-col>

    </v-col>

</v-row>
</template>





<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
@Component
export default class Introvideo extends Vue{
    
}
</script>