<template>
  <span>
    <!--  eslint-disable vue/html-self-closing  -->
    <slot
      :loading="loading"
      :setLoader="setLoader"
      :onSuccess="onSuccess"
      :result="result"
    ></slot>
  </span>
</template>
<script lang="ts">

import Vue from "vue";
import Component from "vue-class-component";
type filter<T> = (value: T) => boolean;
@Component({})
export default class Loader extends Vue {
  loading: boolean = false;
  onSuccess: boolean = false;
  result: any = null
  async setLoader<cbType>(
    callback: (...args: any[]) => Promise<cbType>,
    onSuccess?: {
      successMessage: string;
      errorMessage: string;
      isSuccessful?: filter<cbType>;
    },
    timeoutLength: number = 2000,
    timeoutResponse: string = "Function Timeout",
    exceptionResponse: string = "Exception Occurred"
  ) {
    this.loading = true;
    return new Promise(async (resolve, reject) => {
      setTimeout(() => {
        reject(timeoutResponse);
      }, timeoutLength);
      try {
        let value = await callback();
        if (onSuccess) {
          let { isSuccessful, successMessage, errorMessage } = onSuccess;
          if (!isSuccessful) isSuccessful = (somevalue: cbType) => !!somevalue;
          isSuccessful(value) ? resolve(successMessage) : reject(errorMessage);
        } else resolve(value);
      } catch {
        reject(exceptionResponse);
      }
    })
      .then(value => {
        this.onSuccess = true;
        return value;
      })
      .catch(value => {
        this.onSuccess = false;
      })
      .finally(() => {
        this.loading = false;
      });
  }
}
</script>