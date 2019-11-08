<template>
  <div class="pc-checkbox">
    <v-checkbox
      v-for="(option,index) in options"
      :key="option+index"
      v-model="selected"
      :value="option"
      :label="option"
    />
    <v-checkbox
      v-if="other"
      v-model="otherChecked"
      :value="otherInput"
    >
      <template v-slot:label>
        <v-text-field
          v-if="other"
          v-model="otherInput"
          :disabled="otherChecked"
        />
      </template>
    </v-checkbox>
  </div>
</template>

<script lang="ts">
    
import Vue from 'vue'
import 'reflect-metadata'
import {Component, Prop, Watch} from 'vue-property-decorator'

@Component
export default class  extends Vue{
    @Prop()
    public checked!: string[]
    @Prop()
    public options!: any[]
    @Prop()
    public other!: boolean
    public otherChecked: boolean = false
    public otherInput: string = ""
    public selected: any[] = []
    get checkedOptions(){
        if(this.other && this.otherChecked)
            return [...this.selected,this.otherInput]
        return this.selected
    }
    @Watch('checkedOptions')
    onCheckedOptionsChanged(newval: any[]){
        this.$emit('input',newval)
    }
}
</script>