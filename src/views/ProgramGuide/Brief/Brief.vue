<template>
<div class="programbrief__dark">
<v-container >
        <v-row class="programbrief__container">
            <v-col cols="12">
                <v-col class="programbrief__tile">Program Briefs</v-col>
                <v-col></v-col>
            </v-col>
            <v-col>
                <BriefCard />
            </v-col>

            <v-col>
                <BriefCard />
            </v-col>
        </v-row>
    </v-container>
</div>
</template>
 
    
    

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import BriefCard from './components/BriefCard.vue'

@Component(({
    components: {
        BriefCard
    }
}))
export default class Brief extends Vue{
    
}
</script>]