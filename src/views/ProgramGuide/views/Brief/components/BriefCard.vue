<template>
  <div class="briefcard__sontaincontainer">
    <v-card
      id="Contain"
      class="briefcard__container"
    >
      <!-- <img src="" alt="" id="programbrief__cover"> -->
      <v-col>
        <v-row
          id="briefcard__rowcontain"
          no-gutters
        >
          <v-col
            class="mr-5"
            cols="12"
            md="3"
            lg="2"
          >
            <iframe
              class="briefcard__cover"
              :src="`https://drive.google.com/viewerng/viewer?url=${encodeURIComponent(syncValue.link)}?pid=explorer&efh=false&a=v&chrome=false&embedded=true&rm=minimal`"
            />
          </v-col>
        
          <v-col>
            <v-col
              cols="12"
            >
              <div class="briefcard__header">
                {{ syncValue.linkName }}
              </div>
              <v-row
                class="briefcard__check mt-2"
                no-gutters
              >
                <input
                  v-model="acknowledged"
                  class="checkbox_itself"
                  type="checkbox"
                ><v-col>I acknowledge I have fully read and understand the included document</v-col>
              </v-row>
              <v-col style="padding:0">
                <v-btn
                  class="briefcard__buton"
                  :disabled="!acknowledged"
                  @click="$emit('confirm')"
                >
                  CONFIRM
                </v-btn>
              </v-col>
            </v-col>
          </v-col>
        </v-row>
      </v-col>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from "vue-class-component"
import { NamedLink } from '../../../../../store/Database/types/utilities'
import { Prop } from 'vue-property-decorator'
@Component({})
export default class BriefCard extends Vue{
    @Prop()
    value!:boolean
    get acknowledged(){
      return this.value
    }
    set acknowledged(val:boolean){
      this.$emit('input', val)
    }
    @Prop()
    program!: NamedLink
    get syncValue(){
      return this.program
    }
}
</script>

<style scoped>

</style>