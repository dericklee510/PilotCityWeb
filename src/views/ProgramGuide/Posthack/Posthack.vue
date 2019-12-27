<template>

    <v-row justify="center" >

        <img class="posthack__image" id="posthack__icon" src="@/assets/Posthack.png">

        <v-col cols="7" id="posthack__contain">

            <v-row justify="center" class="mr-auto ml-auto posthack__title">POST-HACK REFLECTION</v-row>

            <v-col cols="12" class="posthack__borderline"></v-col>

            <v-row justify="center" class="mr-auto ml-auto posthack__description">Now that you’ve received feedback from your employer, it is time to evolve, iterate or pivot your project if necessary. </v-row>

            <v-row class="posthack__firstcheck"> 
            <v-col cols="8" ><input class="posthack__check" id="posthack__check" type="checkbox">LIDAR FOR AUTONOMOUS CAMPUS SHUTTLES</v-col>
            <v-col cols="1"><img class="posthack__requiredbutton" src="@/assets/requiredsymbol.png"></v-col>
            <v-col cols="1"><button><img class="posthack__exportimage" id="posthack__exporticon" src="@/assets/greenexport.png"></button></v-col>
            </v-row>

            <v-row>
                <div class="posthack__description1">Description of business model canvas</div>
            </v-row>

        
            <v-row class="posthack__secondcheck"> 
            <v-col cols="8" ><input class="posthack__check" id="posthack__check" type="checkbox">Update One Sentence Pitch</v-col>
            <v-col cols="1"><img class="posthack__requiredbutton" src="@/assets/requiredsymbol.png"></v-col>
            <v-col cols="1"><button><img class="posthack__exportimage" id="posthack__exporticon" src="@/assets/greenexport.png"></button></v-col>
            </v-row>

            <v-row>
                <div class="posthack__description1">Description of one sentence pitch</div>
            </v-row>


            <v-row class="posthack__secondcheck"> 
            <v-col cols="8" ><input class="posthack__check" id="posthack__check" type="checkbox">Update Written Elevator Pitch </v-col>
            <v-col cols="1"><img class="posthack__requiredbutton" src="@/assets/requiredsymbol.png"></v-col>
            <v-col cols="1"><button><img class="posthack__exportimage" id="posthack__exporticon" src="@/assets/greenexport.png"></button></v-col>
            </v-row>

            <v-row>
                <div class="posthack__description1">Description of written elevator pitch</div>
            </v-row>

            <v-row class="posthack__acknowledgebuttonrow">
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