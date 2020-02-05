<template>
  <AgendaView
    v-model="agendaItems"
    class="pc-externship"
    @finish="$emit('nextNode')"
  />
</template>





<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { EventItem } from '@/store/Database/types/utilities'
import { FbStore } from '@/store'
import { AgendaView } from "@/views/ProgramGuide/components/"

@Component<ExternshipAgendaView>({
  components: {
    AgendaView
  }
})
export default class ExternshipAgendaView extends Vue{
  agendaItems:EventItem[] = FbStore.currentEmployerProgram?.externshipDayAgenda?.events || []
}
</script>