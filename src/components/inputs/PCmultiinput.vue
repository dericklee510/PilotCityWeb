<template>
  <div>
    <span
      v-for="(entry) in entries"
      :key="entry.id"
    >
      <PCtextfield
        v-model="entry.value"
        placeholder="Enter you product or Service"
        :key="entry.id + 'textfield'"
      />
      <h1 :key="entry.id+'icon'">
        <i
          class="mdi mdi-delete"
          @click="deleteEntry(entry.id)"
        />
      </h1>
    </span>
    <v-btn @click="newEntry" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import PCtextfield from './PCtextfield.vue'
import { Watch, Prop} from 'vue-property-decorator'

interface VueEvent {
    name: string;
    type: string;
    source: string;
    payload: any[];
}

@Component({
    components:{
        PCtextfield
    }
})
export default class PCmultiinput extends Vue{
    @Prop()
    value!: string[];
    entries = [{value:"",id:0}]
    newEntry(){
      console.log(this.entries.slice(-1)[0].id+1)
        this.entries.push({value:"",id:this.entries.slice(-1)[0].id+1})
    }
    deleteEntry(id: number){
        this.entries.splice(this.entries.findIndex((entry) => entry.id == id),1)

    }
    @Watch('entries',{deep:true})
    onEntriesChanged(newVal: {value: string; id: number} []){
      console.log('change detected')
        this.$emit('input', newVal.map(entree => entree.value))
    }
}
</script>