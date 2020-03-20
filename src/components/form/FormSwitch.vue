<template>
  <v-container>
    <v-row
      class="studentid__questiontitle mt-10"
      justify="center"
    >
      Are you a graduating high school senior?
    </v-row>


    <v-row
      no-gutters
      justify="center"
    >
      <span class="agenda-view__switchlabel">NO</span>
      <v-switch
        v-model="graduatingsenior"
        inset
      />
      <span class="agenda-view__switchlabel">YES</span>
      <slot
        :answer="answer"
      >
        <v-row
          v-if="answer"
          no-gutters
          justify="center mt-2"
        >
          <v-col
            cols="12"
            sm="7"
          >
            <v-text-field
              label="Where are you going after high school?"
              hint="Describe or enter name of school, college or program"
              persistent-hint
              outlined
            />
          </v-col>
        </v-row></v-col>
      </slot>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import Vue from 'vue'
import 'reflect-metadata'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'
@Component<FormSwitch>({})
export default class FormSwitch extends Vue{
    @Prop() title!:string
    @Prop({default:'NO'}) falsy!:string
    @Prop({default:'YES'}) truthy!:string
    @Prop() type!:'text' | 'calendar'
    @Prop()value!:boolean
    get answer(){
        return this.value
    }
    set answer(newval:boolean){
        this.$emit('input',newval)
    }
}
</script>