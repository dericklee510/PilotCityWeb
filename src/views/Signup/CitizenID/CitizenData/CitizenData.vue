
<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import PCselect from "@/components/inputs/PCselect.vue";
import PCtextfield from "@/components/inputs/PCtextfield.vue";
import { FbStore } from "../../../../store";
import { startCase, toLower } from "lodash";
import { mask } from "vue-the-mask";
import { ValidationObserver, ValidationProvider } from "vee-validate";
import { PCLoader } from "../../../../components/utilities";
@Component({
  components: {
    pcSelect: PCselect,
    pcTextfield: PCtextfield,
    ValidationObserver,
    ValidationProvider,
    PCLoader
  },
  directives: {
    mask
  }
})
export default class CitizenData extends Vue {
  private CITIZENSTYLES = {
    Teacher: "citizen-id__type--teacher",
    Employer: "citizen-id__type--employer",
    Student: "citizen-id__type--student"
  };
  firstName = FbStore.currentUserProfile!.firstName;
  lastName = FbStore.currentUserProfile!.lastName;
  title = FbStore.currentUserProfile!.title || "Mr.";
  phoneNumber = FbStore.currentUserProfile!.phoneNumber || "";
  private AVAILABLETYPES: string[] = ["Teacher", "Employer", "Student"];

  get citizenType() {
    return startCase(
      toLower(FbStore.currentUserProfile?.citizenType?.toUpperCase())
    );
  }
  async submit() {
    const { firstName, lastName, title, phoneNumber } = this;
    const updateSettings = {
      firstName,
      lastName,
      title,
      phoneNumber
    };
    FbStore.updateCurrentUserProfile(updateSettings);
    this.$router.push({ name: "program.programlist" });
  }
}
</script>
