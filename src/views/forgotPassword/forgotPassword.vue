<template>
  <v-container 
    fill-height 
    class="recoverPassword__container"
  >
    <v-layout
      row
      wrap
    >
      <v-flex
        style="text-align: center"
        xs12
        class="recoverPassword__title"
      >
        <h1>
          Forgot Password?
        </h1>
      </v-flex>
      <v-flex
        style="text-align: center"
        xs12
        class="recoverPassword__desc"
      >
        <p>
          Enter your email address you’re using for your account below to send a recover password email
        </p>
      </v-flex>
      <v-flex
        xs12
      >
        <v-layout
          justify-center
          class="recoverPassword__input"
        >
          <v-text-field
            name="email"
            outline
            placeholder="Enter your email"
            required
            single-line
          />
        </v-layout>
      </v-flex>
      <v-flex xs12>
        <v-layout
          justify-center
        >
          <v-btn
            class="recoverPassword__btn"
            flat
            :loading="loading"
            :disabled="loading"
          >
            Recover Password
          </v-btn>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>



<script lang="ts">
import Vue from "vue"
import '@/assets/scss/login.scss'
export default{
    
}
</script>


<style lang="scss">
.recoverPassword__container{
  font-family: raleway;
  max-width: 50rem;
  .recoverPassword__title{
    font-weight: 800;
  }
  .recoverPassword__desc{

  }
  .recoverPassword__input{
    .primary--text{
            color: purple !important;
                caret-color: purple !important;
        }
        .login__label {
            font-weight: bold;
            color: #4f4f4f;
            font-size: 15px;
        }
        .v-text-field--outline .v-input__control .v-input__slot{
            margin-bottom: 0px;
            border-radius: 25px;
        }
        .v-text-field__details {
            margin-bottom: 0px;
        }
  }
  .recoverPassword__btn{
    font-family: raleway;
    background-color: #7b5d7d !important;
    width: 200px;
    height: 40px;
    border-radius: 25px;
    .v-btn{
        &__content{
            font-weight: 1000;
            color: #fff;;
        }
    }
  }
}
</style>
>
</style>