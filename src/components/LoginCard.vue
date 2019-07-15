<!--Look into using v-for and <slot> to dynamically load components -->
<template>
    <div id="app">
    <v-app id="inspire">
        <div
        id="e3"
        style="max-width: 450px; margin: auto;"
        >
        <v-card class="rounded-card">
            <v-container
            grid-list-lg
            >
            <v-layout row wrap justify-center>
                <v-label>
                    Upload Profile Picture
                </v-label>
            </v-layout>
            <v-layout row wrap justify-center class="profile-pic">
                <v-flex xs12 md5 offset-md2>
                    <img src="@/assets/person.png">
                </v-flex>
            </v-layout>

            <v-layout row wrap justify-center>
                
            </v-layout>
            </v-container>
        </v-card>
        <v-card>

        </v-card>
        </div>
    </v-app>
</div>
</template>

<script lang="ts">
import Vue from "vue"
import Component from "vue-class-component"

@Component
export default class LoginCard extends Vue {
}
</script>

<style lang="scss">
    .rounded-card{
        border-radius: 30px;
        background: #E0E0E0;
    }
    .profile-pic{
        border-radius: 30px;
    }
</style>
