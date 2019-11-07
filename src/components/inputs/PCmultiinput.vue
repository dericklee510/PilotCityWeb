<template>
    <PCtextfield @input="handleinput"/>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import PCtextfield from './PCtextfield.vue'

type VueEvent = {
    name:string
    type:string
    source:string
    payload:any[]
}
@Component({
    components:{
        PCtextfield
    }
})
export default class PCmultiinput extends Vue{
    handleinput(event:VueEvent){
        this.$emit('input', event.payload[0])
    }
}
</script>