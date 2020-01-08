<template>
     <v-row>

       <span class="managestudents__topbutton">

            <button class="managestudents__classesbutton">CLASSES</button>

            <button class="managestudents__studentsbutton">STUDENTS</button>

            <button class="managestudents__teambutton">TEAMS</button>

       </span>


        <v-row class="managestudents__titlemain">

           <span class="managestudents__title"> Manage Students</span>

            <v-row class="managestudents__headtitle">

                <span class="managestudents__teamname">Team Name</span>

            </v-row>

        </v-row>



        <v-row>

            <span class="managestudents__wholeline">

                <input class="managestudents__classinput" placeholder="TEAM NAME 1">
                <button class="managestudents__renamebutton">RENAME</button>
                <button class="managestudents__deletebutton">DELETE</button>

            </span>

            <v-row>
                <span class="managestudents__wholeline2">

                    <input class="managestudents__classinput" placeholder="TEAM NAME 2">
                    <button class="managestudents__renamebutton">RENAME</button>
                    <button class="managestudents__deletebutton">DELETE</button>

                </span>
            </v-row>

        </v-row>


        <v-row class="managestudents__titlemain">

           <span class="managestudents__title1"> Create Team</span>

           <v-row class="managestudents__headtitle">

                <span class="managestudents__teamname">Team Name</span>

            </v-row>

        </v-row>
         

         <v-row>

            <span class="managestudents__wholeline3">

                <input class="managestudents__classinput" placeholder="TEAM NAME 3">
                <button class="managestudents__createbutton">CREATE</button>

            </span>

         </v-row>





     </v-row>
</template>



<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'


@Component(({
    components: {
      
    }
}))

export default class managestudents extends Vue{
    
}
</script>