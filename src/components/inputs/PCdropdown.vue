<template>
  <v-menu
    top
    :offset-y="true"
  >
    <template v-slot:activator="{ on }">
      <v-btn
        elevation="0"
        color="transparent"
        dark
        v-on="on"
      >
        <h2 v-if="title && !icon">
          {{ title }}
        </h2>
        <v-icon v-if="icon && !title">
          {{ icon }}
        </v-icon>
      </v-btn>
    </template>

    <v-list class="pc-dropdown__menu">
      <v-list-item
        v-for="(item, key) in items"
        :key="item+key"
        :data-content="item.title"
        v-on="{click: item.action?item.action:handleInput}"
      >
        <v-list-item-title :data-content="item.title">
          {{ item.title }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script lang="ts">
import Vue from 'vue'
import {Prop, Component} from "vue-property-decorator"

interface Item {
    title: string;
}

@Component
export default class PCdropdown extends Vue {
    @Prop({type: String, required: true})
    public value!: string;
    @Prop({required: true})
    public items!: {title: string; to: object; action(): void }[];
    @Prop({type: String}) //string button
    public title!: string;
    @Prop({type: String}) //icon button
    private icon!: string;

    public content: string = this.value;
    public handleInput(e){
        this.content =  e.target.dataset.content
        this.$emit('input', this.content)
    }

}
</script>

<style lang="scss">

</style>