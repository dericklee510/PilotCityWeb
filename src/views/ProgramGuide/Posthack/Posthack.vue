<template>

    <v-row justify="center" >

        <img class="posthack__image" id="posthack__icon" src="@/assets/Posthack.png">

        <v-col cols="7" id="posthack__contain">

            <v-row justify="center" class="mr-auto ml-auto posthack__title">POST-HACK REFLECTION</v-row>

            <v-col cols="12" class="posthack__borderline"></v-col>

            <v-row justify="center" class="mr-auto ml-auto posthack__description">Now that you’ve received feedback from your employer, it is time to evolve, iterate or pivot your project if necessary. </v-row>



            <v-row id="posthack__check1">

                <span class="posthack__wholeline"><input class="posthack__check" type="checkbox">Update Business Model Canvas 

                <span class="posthack__error">*</span>
                <span><button class="posthack__exporticon"><img src="@/assets/greenexport.png"></button></span>

                </span>

            </v-row>

            <v-row>

                <span class="posthack__descriptionline">
                Description of business model canvas
                </span>

            </v-row>



            <v-row id="posthack__check2">

                <span class="posthack__wholeline"><input class="posthack__check" type="checkbox">Update One Sentence Pitch   

                <span class="posthack__error">*</span>
                <span><button class="posthack__exporticon"><img src="@/assets/greenexport.png"></button></span>

                </span>

            </v-row>

            <v-row>

                <span class="posthack__descriptionline">
                Description of one sentence pitch
                </span>

            </v-row>



            <v-row id="posthack__check2">

                <span class="posthack__wholeline"><input class="posthack__check" type="checkbox">Update Written Elevator Pitch    

                <span class="posthack__error">*</span>
                <span><button class="posthack__exporticon"><img src="@/assets/greenexport.png"></button></span>

                </span>

            </v-row>

            <v-row>

                <span class="posthack__descriptionline">
                Description of written elevator pitch
                </span>

            </v-row>




        
            <v-row>
                <button class="posthack__acknowledgebutton">ACKNOWLEDGE</button>
            </v-row>

        </v-col>


    </v-row>

</template>



<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
@Component
export default class posthack extends Vue{
    
}
</script>