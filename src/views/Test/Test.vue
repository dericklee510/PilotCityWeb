<template>
  
</template>

<script lang="ts">
import Vue from "vue"
import PCselect from "@/components/inputs/PCselect.vue"
import PCtextfield from "@/components/inputs/PCtextfield.vue"
import Component from "vue-class-component"

@Component({
    components:{
        pcSelect: PCselect,
        pcTextfield: PCtextfield
    }
})
export default class Test extends Vue {
    public citizenType: string = "Teacher";
    private CITIZENSTYLES = {
        Teacher: "citizen-id__type--teacher", 
        Employer: "citizen-id__type--employer", 
        Student: "citizen-id__type--student"
    }
    private AVAILABLETYPES: string[] = ["Teacher", "Employer", "Student"]
    
    private changeCitizenType(intype: string): void {
        this.citizenType = intype
    }
}
</script>
