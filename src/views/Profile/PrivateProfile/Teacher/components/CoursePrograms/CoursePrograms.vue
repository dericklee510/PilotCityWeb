<template>
  <div class="profile__schedule">
    <v-row
      v-for="entry in classEntries"
      :key="entry.id"
    >
      <v-col
        cols="12"
        md="1"
      >
        <pcTextfield
          v-model="entry.value.period"
          :dark-mode="true"
          title="PERIOD"
          :disabled="true"
          class="pc-input--disabled"
        />
      </v-col>
      <v-col
        cols="12"
        md="4"
      >
        <pcTextfield
          v-model="entry.value.course"
          :dark-mode="true"
          title="COURSES I TEACH"
          :disabled="true"
          class="pc-input--disabled"
        />
      </v-col>
      <v-col
        cols="12"
        md="3"
      >
        <pcSelect
          v-model="entry.value.semester"
          :dark-mode="true"
          title="SEMESTER"
          placeholder="Select semester(s)"
          :items="PROGRAM_SEMS"
        />
      </v-col>
      <v-col
        cols="12"
        md="3"
      >
        <pcSelect
          v-model="entry.value.grades"
          :dark-mode="true"
          title="GRADES"
          :multiselect="true"
          placeholder="Select class grade level"
          :items="PROGRAM_GRADES"
        />
      </v-col>
    </v-row>
  </div>
</template>
<script lang="ts">

import Component from 'vue-class-component'
import { Prop, Watch } from 'vue-property-decorator'
import { maxBy } from 'lodash'
import { mask } from 'vue-the-mask'
import { PCselect, PCtextfield } from '@/components/inputs'
import { ICourses } from '../CourseInput/types'
import { CoursePrograms } from './types'
import { CONST } from './const'
@Component({
    components: {
        pcSelect: PCselect,
        pcTextfield: PCtextfield
    },
    directives: {
        mask
    }
})
export default class CourseProgramsInput extends CONST {
  @Prop()
    value!: CoursePrograms[]

  @Prop({ required: true })
  courseinput!: ICourses[]

  classEntries: { value: CoursePrograms; id: number }[] = []

  @Watch('classEntries', { deep: true })
  onSchedulesChanged(newVal: { value: ICourses; id: number }[]) {
      this.$emit('input', newVal.map(entree => entree.value))
  }

  @Watch('courseinput', { deep: true })
  oncourseinputChanged(newVal: ICourses[]) {
      let index = 0
      this.classEntries = newVal.map((course) => {
      if (this.classEntries[index]) {
              return {
                  value: new CoursePrograms(course, this.classEntries[index].value),
                  id: index++
              }
      }
      return {
              value: new CoursePrograms(course),
        id: index++
          }
    })
  }

  created() {
  }
}
</script>
