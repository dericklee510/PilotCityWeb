<template>

<v-row justify="center" >

    <img id="introvideo_edit__icon" src="@/assets/watchintrovideo_edit.png">

    <v-col cols="7" id="introvideo_edit__contain">

        <v-row justify="center" class="mr-auto ml-auto introvideo_edit__title">EDIT INTRODUCTION VIDEO</v-row>

        <v-col cols="12" id="introvideo_edit__borderline"></v-col>

        <v-row justify="center" class="mr-auto ml-auto introvideo_edit__description">Record, upload and enter link for an introduction video to your project challenge for students to view. </v-row>

        <v-row justify="center" class="mr-auto ml-auto mt-12 mb-12"><input placeholder="https://" class="introvideo_edit__videolink"><i class="far fa-copy mt-4 ml-5 introvideo_edit__copyicon"></i></v-row>


        <v-row justify="center" class="ml-auto mr-auto introvideo_edit__check" ><input type="checkbox" class="introvideo_edit__checkbox">I confirm this video is set for public view</v-row>

        <v-col class="mr-auto ml-auto" cols="5"><button class="introvideo_edit__button">CONFIRM</button></v-col>

    </v-col>

</v-row>
</template>





<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
@Component
export default class introvideo_edit extends Vue{
    
}
</script>