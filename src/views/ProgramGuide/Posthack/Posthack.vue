<template>

    <v-row justify="center" >

        <img class="posthack__image" id="posthack__icon" src="@/assets/Posthack.png">

        <v-col cols="7" id="posthack__contain">

            <v-row justify="center" class="mr-auto ml-auto posthack__title">POST-HACK REFLECTION</v-row>

            <v-col cols="12" class="posthack__borderline"></v-col>

            <v-row justify="center" class="mr-auto ml-auto posthack__description">Now that you’ve received feedback from your employer, it is time to evolve, iterate or pivot your project if necessary. </v-row>

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