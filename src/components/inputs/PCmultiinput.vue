<template>
  <div>
    <v-row
      v-for="(entry) in entries"
      :key="entry.id"
    >
      <v-col :cols="entries.length>1?11:12">
        <PCtextfield
          :key="entry.id + 'textfield'"
          v-model="entry.value"
          placeholder="Enter you product or Service"
        />
      </v-col>
      <v-col cols="1">
        <h3
          v-if="entries.length > 1"
          key="entry.id+'icon'"
        >
          <i
            class="mdi mdi-delete"
            @click="deleteEntry(entry.id)"
          />
        </h3>
      </v-col>
    </v-row>
    <v-btn
      block
      @click="newEntry"
    >
      +
    </v-btn>
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
        this.entries.push({value:"",id:this.entries.slice(-1)[0].id+1})
    }
    deleteEntry(id: number){
        this.entries.splice(this.entries.findIndex((entry) => entry.id == id),1)

    }
    @Watch('entries',{deep:true})
    onEntriesChanged(newVal: {value: string; id: number} []){
        this.$emit('input', newVal.map(entree => entree.value))
    }
}
</script>