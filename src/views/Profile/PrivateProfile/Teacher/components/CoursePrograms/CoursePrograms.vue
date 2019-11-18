<template>
  <div>
    <v-row v-for="entry in courseinput" :key="entry.id">
      <v-col cols="12" md="1">
        <pcTextfield title="PERIOD" v-model="entry.value.period" />
      </v-col>
      <v-col cols="12" md="4">
        <pcTextfield title="COURSES I TEACH" v-model="entry.value.course" />
      </v-col>
      <v-col cols="12" md="3">
        <pcSelect :dark-mode="true" title="SEMESTER" placeholder="Select semester(s)" :items="PROGRAM_SEMS" v-model="entry.value.semester" />
      </v-col>
      <v-col cols="12" md="3">
        <pcSelect :dark-mode="true" title="GRADES" :multiselect="true" placeholder="Select class grade level" :items="PROGRAM_GRADES" v-model="entry.value.grades" />
      </v-col>
    </v-row>
  </div>
</template>
<script lang="ts">
import { PCselect, PCtextfield } from '@/components/inputs'

import Component from "vue-class-component"
import { Prop, Watch } from 'vue-property-decorator'
import { maxBy } from 'lodash'
import { mask } from 'vue-the-mask'
import { ICourses } from '../CourseInput/types'
import { CoursePrograms } from "./types"
import {CONST} from "./const"
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

  created() {
    let index = 0
    this.classEntries = this.courseinput.map((course) => {
      return {        value: new CoursePrograms(course),
        id: index++      }
    })
  }

  @Watch('classEntries', { deep: true })
  onSchedulesChanged(newVal: { value: ICourses; id: number }[]) {
    this.$emit('input', newVal.map(entree => entree.value))
  }
}
</script>