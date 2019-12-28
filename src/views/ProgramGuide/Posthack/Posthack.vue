<template>

    <v-row justify="center" >

        <img class="posthack__image" id="posthack__icon" src="@/assets/Posthack.png">

        <v-col cols="7" id="posthack__contain">

            <v-row justify="center" class="mr-auto ml-auto posthack__title">POST-HACK REFLECTION</v-row>

            <v-col cols="12" class="posthack__borderline"></v-col>

            <v-row justify="center" class="mr-auto ml-auto posthack__description">Now that you’ve received feedback from your employer, it is time to evolve, iterate or pivot your project if necessary. </v-row>


            <v-row justify="left" class="posthack__firstcheck"> 
            <div class="posthack__line1"><input class="posthack__check" id="posthack__check" type="checkbox">Update Business Model Canvas <img id="posthack__requiredbutton" src="@/assets/requiredsymbol.png"> </div>
            <div><button><img class="posthack__exportimage" id="posthack__exporticon" src="@/assets/greenexport.png"></button></div>
            </v-row>

            <v-row>
                <div class="posthack__description1">Description of business model canvas</div>
            </v-row>



            <v-row justify="left" class="posthack__secondcheck"> 
            <div class="posthack__line1"><input class="posthack__check" id="posthack__check" type="checkbox">Update One Sentence Pitch<img id="posthack__requiredbutton" src="@/assets/requiredsymbol.png"> </div>
            <div><button><img class="posthack__exportimage" id="posthack__exporticon2" src="@/assets/greenexport.png"></button></div>
            </v-row>

            <v-row>
                <div class="posthack__description1">Description of one sentence pitch</div>
            </v-row>


            <v-row justify="left" class="posthack__secondcheck"> 
            <div class="posthack__line1"><input class="posthack__check" id="posthack__check" type="checkbox">Update Written Elevator Pitch <img id="posthack__requiredbutton" src="@/assets/requiredsymbol.png"> </div>
            <div><button><img class="posthack__exportimage" id="posthack__exporticon" src="@/assets/greenexport.png"></button></div>
            </v-row>

            <v-row>
                <div class="posthack__description1">Description of written elevator pitch</div>
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