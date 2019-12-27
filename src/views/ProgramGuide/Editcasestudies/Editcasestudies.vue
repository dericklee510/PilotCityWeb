<template>
    <v-row justify="center" >

        <img class="editcasestudies__image" id="editcasestudies__icon" src="@/assets/Reviewcase.png">

        <v-col cols="7" id="editcasestudies__contain">

            <v-row justify="center" class="mr-auto ml-auto editcasestudies__title">ENTER CASE STUDIES & USE CASES</v-row>

            <v-col cols="12" class="editcasestudies__borderline"></v-col>

            <v-row justify="center" class="mr-auto ml-auto editcasestudies__description">Share key articles, publications and links that support the student’s understanding of the technology, product or service.</v-row>

            <v-row>
            <div class="editcasestudies__titlename">Link Name</div>
            <div class="editcasestudies__titleurl">Link URL</div>
            </v-row>

            <v-row justify="center" class="editcasestudies__textbox">
                <v-col>
                <button><img class="editcasestudies__plustext" id="editcasestudies__plustexticon" src="@/assets/Plus_casestudies.png"></button>
                <input class="editcasestudies__inputlinkname" placeholder="Lidar for drones">
                <input class="editcasestudies__inputlinkurl" placeholder="http://www.velodyne.com/casestudy1">
                <button><img class="editcasestudies__trashcan" id="editcasestudies__trashcanicon" src="@/assets/Redtrash.png"></button>
                </v-col>
            </v-row>

            <v-row>
                <v-col>
                <button><img class="editcasestudies__plustext" id="editcasestudies__plustexticon" src="@/assets/Plus_casestudies.png"></button>
                <input class="editcasestudies__inputlinkname" placeholder="Lidar for autonomous campus shuttles">
                <input class="editcasestudies__inputlinkurl" placeholder="http://www.velodyne.com/casestudy2">
                <button><img class="editcasestudies__trashcan" id="editcasestudies__trashcanicon" src="@/assets/Redtrash.png"></button>
                </v-col>
            </v-row>

            <v-row id="editcasestudies__box">
                <button><img class="editcasestudies__plus" id="editcasestudies__plusicon" src="@/assets/Pluscase.png"></button>
            </v-row>

            <v-row class="editcasestudies__savebuttonrow">
                <button class="editcasestudies__savebutton">SAVE</button>
            </v-row>

        </v-col>


    </v-row>
</template>








<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
@Component
export default class editcasestudies extends Vue{
    
}
</script>