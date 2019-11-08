<template>
<div>
    <span v-for="(entry) in entries" :key="entry.id">
        <PCtextfield   v-model="entry.value"/>
        <i class="mdi mdi-delete" @click="deleteEntry(entry.id)"></i>
    </span>
    <v-btn @click="newEntry"></v-btn>
</div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import PCtextfield from './PCtextfield.vue'
import { Watch } from 'vue-property-decorator';

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
    entries = [{value:"",id:0}]
    newEntry(){
        this.entries.push({value:"",id:this.entries.slice(-1)[0].id+1})
    }
    deleteEntry(id:number){
        this.entries.splice(this.entries.findIndex((entry) => entry.id = id),1)

    }
    @Watch('entries')
    onEntriesChanged(newVal:{value:string,id:number}){
        this.$emit('input',newVal)
    }
}
</script>