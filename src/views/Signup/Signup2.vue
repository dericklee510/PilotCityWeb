<template>

<v-row justify="center" class="signup2__background">
    <v-col cols="3">
        <v-row justify="center" class="signup2__header mb-12 mt-12">Join the family.</v-row>

        <v-row class="signup2__email mt-5">First Name</v-row>
        <v-row justify="center"><input class="signup2__emailinput mt-2"></v-row>

        <v-row class="signup2__email mt-5">Last Name</v-row>
        <v-row justify="center"><input class="signup2__emailinput mt-2"></v-row>

        <v-row class="signup2__email mt-5">Email</v-row>
        <v-row justify="center"><input class="signup2__emailinput mt-2"></v-row>

        <v-row class="signup2__password mt-5">Password</v-row>
        <v-row justify="center"><input class="signup2__passwordinput mt-2"></v-row>

        <v-row justify="center"><button class="signup2__button mt-10">Signup</button></v-row>

        <v-row justify="center" class="signup2__forgotpassword mt-5">Forgot password?</v-row>
    </v-col>
</v-row>

</template>





<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
@Component
export default class signup2 extends Vue{
    
}
</script>