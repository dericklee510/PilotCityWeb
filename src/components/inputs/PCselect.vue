<template>
  <div
    cols="12"
    class="pc-input"
  > 
    <label
      for="citizen-title"
      class="pc-input__label"
    >
      <h5
        class="text-uppercase"
      >
        {{ title }}
      </h5>
    </label>
    <v-select 
      v-model="syncValue"
      :multiple="multiselect"
      append-icon="mdi-chevron-down"
      text
      :menu-props="{offsetY: true, 'close-on-click': true, 'offset-overflow':true}"
      :placeholder="placeholder"
      class="pc-input__select"
      background-color="transparent"
      :hide-selected="!multiselect"
      :items="syncedItems || liveList"
      :error-messages="error"
      :dark="darkMode"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import 'reflect-metadata'
import { Component, Prop, PropSync, Watch } from 'vue-property-decorator'
import { Subscription } from 'rxjs'
import { doc } from 'rxfire/firestore'
import { spliceOrPush } from '../../utilities/array'

@Component<PCselect>({
  beforeDestroy(){
    this.liveSnapshots.forEach(subscriber => subscriber.unsubscribe())
  }
})
export default class PCselect extends Vue {
  created(){
    this.onDocumentRefUpdate()
  }
    @Prop()
    value!:string 
    
    get syncValue(){
      return this.value
    }
    set syncValue(newVal:string){
      this.$emit('input',newVal)
    }

    @Prop()
    documentRefs!:firebase.firestore.DocumentReference[]
    
    @Prop()
    liveText!:string
    @Prop()
    liveValue!:string | string[]
    @Watch('documentRefs')
    onDocumentRefUpdate(){
      if(this.documentRefs){
        if(!this.liveText || !this.liveValue)
          throw("Must Provide liveText and liveValue with documentRefs Prop")
      }
      this.liveSnapshots.forEach(subscriber => subscriber.unsubscribe())
      if(this.documentRefs)
      this.documentRefs.forEach(ref => {
        this.liveSnapshots.push(doc(ref).subscribe((snapshot) => {
          spliceOrPush(this.liveList,{
            id:snapshot.id,
            text:snapshot.data()[this.liveText],
            value:(typeof this.liveValue ==="string")?snapshot.data()[this.liveValue]:{...this.liveValue.map(key => snapshot.data()[key])}
          },"id")
        }))
      })
    }
    liveSnapshots:Subscription[] = []

    liveList:{text:string,value:any,id:string} [] = []

    @Prop({ default: false })
    public darkMode!: boolean;

    @Prop({ default: false })
    public multiselect!: boolean;

    @Prop()
    public title!: string;

    @PropSync('items')
    public syncedItems!: string[];

    @Prop()
    public placeholder!: string;

    @Prop()
    public errorMessages?: string | string []

    get errorMessage() {
        return this.errorMessages
    }

    get error(): string | undefined {
      if (Array.isArray(this.errorMessage)) return this.errorMessage.length ? this.errorMessage[0] : ''

      return this.errorMessage
    }
}
</script>
