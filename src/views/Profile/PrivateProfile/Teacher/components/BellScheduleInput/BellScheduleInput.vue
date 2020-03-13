<template>
  <v-row
    no-gutters
    class="profile__schedule"
  >
    <v-col cols="12">
      <v-row
        v-for="entry in classEntries"
        :key="entry.id"
      >
        <v-col
          cols="12"
          md="3"
        >
          <pcSelect
            v-model="entry.value.period"
            :error="error"
            :dark-mode="true"
            :items="['prep','0','1','2','3','lunch','4','5','6','7','8']"
            title="PERIOD"
            placeholder="Class period"
          />
        </v-col>
        <v-col
          cols="12"
          md="4"
        >
          <pcSelect
            v-model="entry.value.weeklySchedule"
            :rules="rules.required"
            error
            :dark-mode="true"
            :items="['M','T','W','Th','F','Sa','S']"
            title="MONDAY - FRIDAY"
            :multiselect="true"
            placeholder="What days"
          />
        </v-col>
        <v-col
          cols="6"
          md="2"
          xl="1"
        >
          <pc-textfield
            v-model="entry.value.startTime"
            :error="error"
            :dark-mode="true"
            :items="[]"
            title="START TIME"
            placeholder="Start Time"
            type="time"
          />
        </v-col>
        <v-col
          cols="6"
          md="2"
          xl="1"
        >
          <pc-textfield
            v-model="entry.value.endTime"
            :error="error"
            :dark-mode="true"
            :items="[]"
            title="END TIME"
            placeholder="End Time"
            type="time"
          />
        </v-col>
        <v-col
          v-if="classEntries.length > 1"
          cols="12"
          md="1"
          style="position: relative"
        >
          <h3
            key="entry.id+'icon'"
            style="position:absolute; top: 40%; color: #B73430;"
            class="pc-vh-center"
          >
            <i
              class="mdi mdi-trash-can-outline"
              @click="removeSchedule(entry.id)"
            />
          </h3>
        </v-col>
      </v-row>
    </v-col>
    <v-col
      cols="12"
      :md="classEntries.length > 1? '12' : '11'"
      :xl="classEntries.length > 1? '10' : '9'"
    >
      <v-btn
        depressed
        class="pc-button"
        block
        @click="pushNewSchedule()"
      >
        +
      </v-btn>
    </v-col>
    <slot name="error_text" />
  </v-row>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop, Watch } from 'vue-property-decorator'
import { maxBy } from 'lodash'
import { IBellSchedule } from './types'
import { PCselect, PCtextfield } from '@/components/inputs'
@Component({
    components: {
        pcSelect: PCselect,
        pcTextfield: PCtextfield
    }
})
export default class BellScheduleInput extends Vue {
@Prop()
    value!: IBellSchedule[]

@Prop({ required: false })
error!: boolean

classEntries: {value: IBellSchedule; id: number}[] = [
    {
        value: {
            period: [],
            weeklySchedule: [],
            startTime: '',
            endTime: ''
        },
        id: 0
    }
]

public rules = {
    required: (value: any) => !!value || 'Required.',
    min: (v: any) => v.length >= 8 || 'Min 8 characters',
    emailMatch: () => ('The email and password you entered don\'t match')
};

removeSchedule(id: number) {
    this.classEntries.splice(this.classEntries.findIndex((entry => entry.id == id)), 1)
}

pushNewSchedule() {
    this.classEntries.push({
        value: {
            period: [],
            weeklySchedule: [],
            startTime: '',
            endTime: ''
        },
        id: (maxBy(this.classEntries, entry => entry.id) as {value: IBellSchedule; id: number}).id + 1
    })
}

@Watch('classEntries', { deep: true })
onSchedulesChanged(newVal: {value: IBellSchedule; id: number}[]) {
    this.$emit('input', newVal.map(entree => entree.value))
}
}
</script>
