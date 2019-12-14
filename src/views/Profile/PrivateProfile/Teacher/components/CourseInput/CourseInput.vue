<template>
  <div>
    <v-row
      v-for="entry in classEntries"
      :key="entry.id"
    >
      <v-col
        cols="12"
        md="2"
      >
        <pcSelect
          v-model="entry.value.period"
          :dark-mode="true"
          :items="['prep','0','1','2','3','lunch','4','5','6','7','8']"
          title="PERIOD"
          placeholder="Class period"
        />
      </v-col>
      <v-col
        cols="12"
        md="3"
      >
        <pc-textfield
          v-model="entry.value.course"
          :dark-mode="true"
          title="COURSES I TEACH"
          placeholder="Course Name"
        />
      </v-col>
      <v-col
        cols="12"
        :md="classEntries.length > 1?'4':'5'"
      >
        <pcSelect
          v-model="entry.value.pathway"
          :dark-mode="true"
          :items="['Agriculture and Natural Resources',
                   'Arts, Media, and Entertainment',
                   'Building and Construction Trades',
                   'Business and Finance',
                   'Education, Child Development, and Family Services',
                   'Energy, Environment, and Utilities',
                   'Engineering and Architecture',
                   'Fashion and Interior Design',
                   'Health Science and Medical Technology',
                   'Hospitality, Tourism, and Recreation',
                   'Information and Communication Technologies',
                   'Manufacturing and Product Development',
                   'Marketing Sales and Service',
                   'Public Services',
                   'Transportation']"
          title="PATHWAY"
          :multiselect="true"
          placeholder="Relevant Industry"
        />
      </v-col>
      <v-col
        cols="12"
        md="2"
      >
        <pc-textfield
          v-model="entry.value.classSize"
          v-mask="'##'"
          :dark-mode="true"
          :items="[]"
          title="CLASS SIZE"
          placeholder="# Students"
          type="text"
        />
      </v-col>
      <v-col
        v-if="classEntries.length > 1"
        cols="1"
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
    <v-row>
      <v-col cols="12">
        <v-btn
          block
          @click="pushNewSchedule()"
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
import { Prop, Watch } from 'vue-property-decorator'
import { maxBy } from 'lodash'
import { mask } from 'vue-the-mask'
import { ICourses } from './types'
import { PCselect, PCtextfield } from '@/components/inputs'
@Component({
    components: {
        pcSelect: PCselect,
        pcTextfield: PCtextfield
    },
    directives: {
        mask
    }
})
export default class CourseInput extends Vue {
    @Prop()
    value!: ICourses[]

    classEntries: {value: ICourses; id: number}[] = [
        {
            value: {
                period: '',
                course: '',
                pathway: '',
                classSize: ''
            },
            id: 0
        }
    ]

    removeSchedule(id: number) {
        this.classEntries.splice(this.classEntries.findIndex((entry => entry.id == id)), 1)
    }

    pushNewSchedule() {
        this.classEntries.push({
            value: {
                period: '',
                course: '',
                pathway: '',
                classSize: ''
            },
            id: (maxBy(this.classEntries, entry => entry.id) as {value: ICourses; id: number}).id + 1
        })
    }

    @Watch('classEntries', { deep: true })
    onSchedulesChanged(newVal: {value: ICourses; id: number}[]) {
        this.$emit('input', newVal.map(entree => entree.value))
    }
}
</script>
