<template>
  <div class="pc-multi_input">
    <v-row no-gutters>
      <v-col>
        <v-row
          v-for="(entry) in entries"
          :key="entry.id"
          no-gutters
          cols="12"
        >
          <v-col :cols="entries.length>1?11:12">
            <PCtextfield
              :key="entry.id + 'textfield'"
              v-model="entry.value"
              :dark-mode="true"
              :placeholder="placeholder"
              :error-messages="errorMessages"
            />
          </v-col>
          <v-col
            v-if="entries.length > 1"
            cols="1"
            style="position: relative"
          >
            <h3
              key="entry.id+'icon'"
              style="position:absolute; top: 25%; color: #B73430;"
              class="pc-vh-center"
            >
              <i
                class="mdi mdi-trash-can-outline"
                @click="deleteEntry(entry.id)"
              />
            </h3>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12">
        <v-btn
          class="pc-button"
          block
          depressed
          @click="newEntry"
        >
          +
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Watch, Prop } from 'vue-property-decorator'
import PCtextfield from '../PCtextfield.vue'
import { Constructable } from '../../../utilities/classes';

interface VueEvent {
  name: string;
  type: string;
  source: string;
  payload: any[];
}

@Component({
  components: {
    PCtextfield
  }
})
export default class PCmultiinput extends Vue {
  @Prop()
  placeholder?: string;

  @Prop()
  value!: string[];

  @Prop()
  errorMessages?: string | string[];

  entries = [{ value: '', id: 0 }]

  newEntry() {
    this.entries.push({ value: '', id: this.entries.slice(-1)[0].id + 1 })
  }

  deleteEntry(id: number) {
    this.entries.splice(this.entries.findIndex(entry => entry.id == id), 1)
  }

  @Watch('entries', { deep: true })
  onEntriesChanged(newVal: { value: string; id: number }[]) {
    this.$emit('input', newVal.map(entree => entree.value))
  }

  static createMultiInput<EntryClass extends Record<string,any>>(emptyEntry:(EntryClass),initialEntry?:EntryClass[], ) {
    interface ID{
      id:number
    }
    type EntryClassID =  ID & EntryClass;
    @Component({})
    class MultiInput extends Vue {

      entries:EntryClassID[] = [{...emptyEntry,id:0}]

      newEntry() {
          this.entries.push({...emptyEntry, id: this.entries.slice(-1)[0].id + 1})
      }
      deleteEntry(id: number) {
        this.entries.splice(this.entries.findIndex(entry => entry.id == id), 1)
      }

      @Watch('entries', { deep: true })
      onEntriesChanged(newVal:EntryClassID[]){
          this.$emit('input',newVal.map((entree:EntryClassID) => {
            let obj ={}
            Object.keys(emptyEntry).forEach(key => {
              obj = {[key]:entree[key]}
              return obj
            })
          } ))
        }
      constructor(){
        super()
        if(initialEntry){
          let counter = 0
          this.entries = initialEntry.map(entry => {
            return {...entry, id:counter++}
          })
        }
      }
    }
    return MultiInput
  }
}
</script>
