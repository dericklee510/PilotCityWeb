<template>
  <ValidationProvider
    v-slot="{errors, valid}"
    rules="required|url"
    slim
  >
    <v-text-field
      v-model="inputUrl"
      v-stream:input="inputChange$"
      depressed
      solo
      text
      flat
      :error-messages="color=='error'?result:errors"
      :success-messages="color!='sucess'?result:[]"
      :loading="loading"
      :color="color"
      placeholder="https://"
    />
  </ValidationProvider>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { pluck, switchMap, debounceTime, filter } from "rxjs/operators";
import { Subject, from } from "rxjs";
import { validate } from "@/utilities/validation";
import { ValidationProvider } from "vee-validate";
// import {isLinkValid} from "@/api"
import { filterByPromise } from "filter-async-rxjs-pipe";
import { isLinkValid } from "@/api";
import { PropSync, Prop, Watch } from "vue-property-decorator";
interface nativeEvent {
  data: undefined;
  event: {
    msg: string;
    name: string;
  };
}
@Component<LinkChecker>({
  domStreams: ["inputChange$"],
  subscriptions() {
    return {
      result: this.inputChange$.pipe(
        debounceTime(300),
        pluck<nativeEvent, string>("event", "msg"),
        filterByPromise(
          async value => (await validate(value, "required|url")).valid
        ),
        switchMap(value => from(this.checkUrl(value)))
      )
    };
  },
  components: {
    ValidationProvider
  }
})
export default class LinkChecker extends Vue {
  mounted(){
    this.inputUrl = this.value
  }
  @Prop({ required: true })
  value!: string;
  inputUrl: string = "";
  @Watch("inputUrl")
  onChange() {
    this.$emit("input", this.inputUrl);
  }
  @Prop()
  propClass!: string;
  @PropSync("isSuccessful")
  success?: boolean;
  loading: boolean = false;
  checkbox: boolean = false;
  inputChange$!: Subject<nativeEvent>;
  result!: string;
  color: "success" | "error" = "success";

  async checkUrl(URL: string) {
    this.loading = true;
    return new Promise(async (resolve, reject) => {
      setTimeout(() => {
        reject("Could not verify URL, server timeout");
      }, 5000);
      try {
        let value = await isLinkValid(URL);
        resolve("Link is verified");
      } catch (err) {
        if (err.response.status == 400)
          reject("Link does not exist")
        else
          reject("Could not verify URL, exception occured");
      }
    })
      .then(value => {
        this.success = true;
        this.color = "success";
        return value;
      })
      .catch(error => {
        this.success = false;
        this.color = "error";
        return error;
      })
      .finally(() => {
        this.loading = false;
      });
  }
}
</script>