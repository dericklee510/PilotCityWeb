<template>
  <v-menu
    style="border: 0px;"
    top
    offset-y
  >
    <template v-slot:activator="{ on }">
      <v-btn
        outlined
        elevation="0"
        color="transparent"
        dark
        v-on="on"
      >
        <h3
          v-show="placeholder && !icon && !content"
          class="text-capitalize"
        >
          {{ placeholder }}
        </h3>
        <h3
          v-show="placeholder && !icon && content"
          class="text-capitalize"
        >
          {{ content }}
        </h3>
        <v-icon
          v-show="icon && !placeholder"
          class="text-capitalize"
        >
          {{ icon }}
        </v-icon>
      </v-btn>
    </template>

    <v-list style="padding: 0">
      <v-list-item
        v-for="(item, key) in items"
        :key="item+key"
        :class="[content==item.title?'pc-menu--active':'', 'pc-menu']"
        style="padding:0;"
        :data-content="item.title"
        v-on="{click: item.action?item.action:handleInput}"
      >
        <v-list-item-title
          v-if="item.title"
          :data-content="item.title"
        >
          <h4
            class="text-capitalize"
            :data-content="item.title"
            style="text-align: center; display: block"
          >
            {{ item.title }}
          </h4>
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script lang="ts">
import Vue from 'vue'
import { Prop, Component } from 'vue-property-decorator'

@Component
export default class PCdropdown extends Vue {
    @Prop({ type: String, required: true })
    public value!: string;

    @Prop({ required: true })
    public items?: {
        title: string;
        action: () => void;
    }[]

    @Prop({ type: String }) // string button
    public placeholder!: string;

    @Prop({ type: String }) // icon button
    private icon!: string;

    get content() {
        return this.xcontent
    }

    set content(value: string) {
        this.xcontent = value
    }

    public xcontent: string = '';
    /* eslint-disable-next-line */
    public handleInput(e: any){
        this.content = e.target.dataset.content
        /* eslint-disable-next-line */
        console.log(e.target)
        this.$emit('input', this.content)
    }
}
</script>

<style lang="scss">

</style>
