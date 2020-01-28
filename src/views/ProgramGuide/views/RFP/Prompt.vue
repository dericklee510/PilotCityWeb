<template>
  <v-container>
    <v-row no-gutters justify="center">
      <img id="prompt__icon" src="@/assets/pitch_enter.png" />

      <v-col id="prompt__contain" cols="8">
        <v-row justify="center" class="mr-auto ml-auto prompt__title">PROJECT PROMPT GENERATOR</v-row>

        <v-col id="prompt__borderline" cols="12" />

        <v-row
          justify="center"
          class="mr-auto ml-auto prompt__description mb-10"
        >Generate project prompts that best represent employer requirements and your course curriculum by tweaking key information in the mission.</v-row>


<v-row justify="center" class="prompt__header">Step 1</v-row>



        <v-row justify="center" class="prompt__divider ml-auto mr-auto mt-5 mb-5"/>

<v-row justify="center" class="prompt__headerdescription mb-12">Enter the parameters of the employer's project</v-row>


        <v-row>
          <v-col align="right" cols="4" class="prompt__generatetitle">Problem or Opportunity</v-col>
          <v-col cols="7">
            <input class="prompt__generateinput" />
          </v-col>
        </v-row>
        <v-row>
          <v-col align="right" cols="4" class="prompt__generatetitle">Solution</v-col>
          <v-col cols="7">
            <input class="prompt__generateinput" />
          </v-col>
        </v-row>
        <v-row>
          <v-col align="right" cols="4" class="prompt__generatetitle">Key Metric</v-col>
          <v-col cols="7">
            <input class="prompt__generateinput" />
          </v-col>
        </v-row>
        <v-row>
          <v-col align="right" cols="4" class="prompt__generatetitle">Product or Service</v-col>
          <v-col cols="7">
            <input class="prompt__generateinput" />
          </v-col>
        </v-row>


<v-row justify="center" class="prompt__header mt-12">Step 2</v-row>
        <v-row justify="center" class="prompt__divider ml-auto mr-auto mt-5 mb-5"/>

<v-row justify="center" class="prompt__headerdescription mb-12">Choose an option you'd like to edit and finalize</v-row>

<v-col>
<v-row class="mt-5 mb-5" justify="center"><span class="prompt__generatedtitle--color1">TECH-DRIVEN</span><span class="ml-3 prompt__choosebutton">Choose</span></v-row>
<v-row class="prompt__generated mt-5 mb-12" justify="center">Use programmable drones to conceptualize, design or prototype an autonomous solution that solves the manual assessment of road conditions to reach savings in city engineers' time, resource and tax-payer dollars.</v-row>


<v-row class="mt-5 mb-5" justify="center"><span class="prompt__generatedtitle--color2">SOLUTION-DRIVEN</span><span class="ml-3 prompt__choosebutton">Choose</span></v-row>
<v-row class="prompt__generated mt-5 mb-12" justify="center">Conceptualize, design or prototype an autonomous solution using programmable drones that solves the manual assessment of road conditions to reach savings in city engineer's time, resources and tax-payer dollars.</v-row>


<v-row class="mt-5 mb-5" justify="center"><span class="prompt__generatedtitle--color3">PROBLEM-DRIVEN</span><span class="ml-3 prompt__choosebutton">Choose</span></v-row>
<v-row class="prompt__generated mt-5 mb-12" justify="center">Utilizing programmable drones, solve the manual assessment of road conditions by conceptualizing, designing or prototyping an autonomous solution that reaches savings in city engineer's time, resources and tax-payer dollars.</v-row>

<v-row class="mt-5 mb-5" justify="center"><span class="prompt__generatedtitle--color4">METRIC-DRIVEN</span><span class="ml-3 prompt__choosebutton">Choose</span></v-row>
<v-row class="prompt__generated mt-5 mb-12" justify="center">Utilizing programmable drones, reach savings in city engineer's time, resources and tax-payer dollars by conceptualizing, designing or prototyping an autonomous solution that addresses the manual assessment of road conditions. </v-row>



</v-col>





        <v-row justify="center" class="prompt__header mt-8">Step 3</v-row>
        <v-row justify="center" class="prompt__divider ml-auto mr-auto mt-5 mb-5"/>

<v-row justify="center" class="prompt__headerdescription mb-12">Fine-tune and finalize your project prompt with employer</v-row>


        <v-row justify="center"><textarea class="prompt__finalize"></textarea></v-row>



        <v-row class="mt-10 mb-10" justify="center"><v-btn large class="prompt__button">Save</v-btn></v-row>



      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Prompt extends Vue {}
</script>