<template >
    <div class="pc-radio">
        <v-checkbox v-for="(option,index) in options" :key="index" v-model="selected" :value="option" :label="option" />
        <v-checkbox v-if="other" v-model="otherChecked" />
        <v-text-field v-if="other" :disabled="otherChecked" v-model="otherInput"></v-text-field>
        
    </div>
</template>

<script lang="ts">
    
import Vue from 'vue'
import 'reflect-metadata'
import {Component, Prop, Watch} from 'vue-property-decorator' 

@Component
export default class PCcheckbox extends Vue{
    @Prop()
    public value!:string
    @Prop()
    public options!:any[]
    @Prop()
    public other!:boolean
    public otherChecked:boolean = false
    public otherInput:string = ""
    public selected:any[] = []
    get checkedOptions(){
        if(this.other && this.otherChecked)
            return [...this.selected,this.otherInput]
        return this.selected
    }
    @Watch('checkedOptions')
    onCheckedOptionsChanged(newval:any[]){
        this.$emit('input',newval)
    }
}
</script>