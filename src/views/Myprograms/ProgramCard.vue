<template>
  <PCLoader v-slot="{loading, setLoader}">
    <v-row
      class="myprograms__card"
    >
      <v-col cols="3">
        <div class="myprograms__cardimage" />
      </v-col>
      <v-col cols="9">
        <v-row class="myprograms__cardtitle">
          {{ program.programName }}
        </v-row>
        <v-row class="myprograms__progresspercentage">
          90%
        </v-row>
        <v-row>
          <v-col cols="9">
            <v-row class="myprograms__progressbaractive" />
          </v-col>
          <v-col cols="3">
            <v-btn
              class="myprograms__cardbutton"
              :disabled="loading"
              @click="setLoader(() => openprogram(program))"
            >
              Open
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </PCLoader>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'
import { EmployerProgram } from '../../store/Database/types/types'
import { FbStore } from '../../store'
import { PCLoader } from '../../components/utilities'
@Component({
    components:{
        PCLoader
    }
})
export default class ProgramCard extends Vue {
    @Prop({required:true})
    program!:EmployerProgram
    async openprogram(program: EmployerProgram) {
    await FbStore.initCurrentEmployerProgram(program);
    localStorage.PILOTCITY_EMPLOYERPROGRAMID = program.employerProgramId;
    this.$router.push({
      name: "program.launch"
      // params: { citizenType: citizenKey }
    });
  }
}
</script>