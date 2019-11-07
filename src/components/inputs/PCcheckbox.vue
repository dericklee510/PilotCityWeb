<template >
    <div class="pc-radio">
        <v-checkbox>

        </v-checkbox>
    </div>
</template>

<script lang="ts">
    
import Vue from 'vue'
import {Component, Prop} from 'vue-property-decorator'

@Component
export default class PCcheckbox extends Vue{
    @Prop({required: true})
    checked!: boolean;

    public xcontent = false;
    get content() {
        return this.xcontent
    }
    set content(value: boolean){
        this.content = value
    }

    private handleChange(e: any){
        this.content = this.checked
        this.$emit('change', this.content)
    }
}
</script>