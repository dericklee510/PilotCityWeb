<template>
  <v-row no-gutters>
    <v-col
      cols="4"
      class="manageprogram__experience mt-0 mb-0"
    >
      <v-row no-gutters>
        <div class="manageprogram__numbering mt-0 mb-0">
          {{ num+1 }}
        </div>
        <div class="pt-2">
          {{ name }}
        </div>
      </v-row>
    </v-col>

    <v-col>
      <v-btn
        disabled
      >
        {{ unlockType }}
      </v-btn>
    </v-col>

    <v-col
      v-if="unlockType==='By Date'"
      class="mb-3"
    >
      <v-menu
        class="manageprogram__datepicker"
        :close-on-content-click="false"
        transition="scale-transition"
        offset-y
        max-width="290px"
        min-width="290px"
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            
            v-model="syncValue"
            class="manageprogram__datepicker mt-0 pt-0"
            label="Select Date"
            persistent-hint
            readonly
            v-on="on"
          />
        </template>
        <v-date-picker
          v-model="syncValue"
          no-title
          :min="minDate"
          max="2020-06-12"
          title-date-format="mm-dd-yyyy"
          default-value="2020-06-12"
        />
      </v-menu>
    </v-col>
    <v-col
      v-else-if="unlockType==='By Completion'"
      class="manageprogram__datepicker mb-12 mt-3"
    >
      <v-progress-linear
        :v-model="completion"
        :color="completion?'green':'red'"
        :value="completion"
        height="9"
        reactive
      />
    </v-col>
    <v-col
      v-else-if="unlockType==='Manually'"
      class="manageprogram__datepicker mb-8"
    >
      <v-btn
        class="manageprogram__unlockbutton"
        depressed
        @click="syncValue = !syncValue"
      >
        {{ syncValue?'Lock':'Unlock' }}
      </v-btn>
    </v-col>
    <v-col cols="1">
      <i
        class="fas ml-4"
        :class="{'fa-unlock':isUnlocked, 'fa-lock':!isUnlocked,'manageprogram__unlock':isUnlocked,'manageprogram__lock':!isUnlocked}"
      />
    </v-col>
  </v-row>
</template>
<script lang="ts">
import Vue from 'vue'
import "reflect-metadata"
import Component from "vue-class-component";
import { Prop } from 'vue-property-decorator';
import { PCselect } from '@/components/inputs';
import { FbStore } from '../../../../../store';
import {firebase} from "@/firebase/init"
import moment from 'moment'
type Unlock = "By Date" | "By Completion" | "Manually";
@Component<ProgramBlock>({
    components:{
        PCselect
    },
    created(){
      if(this.unlockType != this.unlockProp)
        this.unlockType = this.unlockProp
    }
})
export default class ProgramBlock extends Vue {
  @Prop()
  unlockProp!:"By Date"|"Manually"| "By Completion"
    @Prop()
    experience!:string
    // @Prop({required:true})
    // value!:boolean|Date
    @Prop()
    sequence!:string
    @Prop()
    name!:string
    @Prop()
    completion!:string
    @Prop()
    num!:number
    items=["By Date","Manually", "By Completion"]
    get unlockType(){
        if(typeof this.syncValue ==="string" )
            return "By Date"
        else if(typeof this.syncValue === "boolean")
            return "Manually"
        else
            return "By Completion"
    }
    set unlockType(newVal:Unlock){
        FbStore.updateCurrentTeacherProgramData({
            [`programSequence.${this.sequence}`]:(newVal==="By Date")?moment('06-15-2020').toDate():(newVal==="Manually")?false:firebase.firestore.FieldValue.delete()
        })
    }
    get syncValue(){
        let val = (FbStore.currentTeacherProgramData!.programSequence as Record<string,boolean|firebase.firestore.Timestamp|undefined>)[this.sequence]
        if(val instanceof firebase.firestore.Timestamp)
            return val.toDate().toISOString().substr(0, 10)
        else 
            return val
    }
    set syncValue(newVal:undefined | boolean | string){
        let val:typeof newVal | Date = newVal
        if(typeof newVal == "string")
            val = moment(newVal).toDate()
        FbStore.updateCurrentTeacherProgramData({
            [`programSequence.${this.sequence}`]:val
        })
    }
    get isUnlocked(){
        if (typeof this.syncValue === "string")
            return moment(new Date(this.syncValue)).isBefore(moment(),'d')
        else if (this.syncValue === undefined)
          return this.completion
        else
            return this.syncValue
    }
    get minDate(){
      const minDate = new Date()
      minDate.setDate(minDate.getDate() -1)
      return minDate.toISOString().substr(0,10)
    }
}
</script>