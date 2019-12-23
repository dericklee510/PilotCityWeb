<template>
  <div class="signup-phone__container">
    <v-container>
      <v-flex>
        <v-layout justify-start>
          <h4 class="signup-phone__back">
            <i class="fas fa-angle-left" />
            &nbsp;
            <router-link
              :to="{name:`signup-upload`}"
            >
              back
            </router-link>
          </h4>
        </v-layout>
        <v-layout justify-center>
          <v-layout
            style="max-width: 33rem"
            row
            wrap
          >
            <v-flex xs12>
              <div class="signup-phone__card">
                <v-layout
                  justify-center
                  class="signup-phone__text-input"
                >
                  <v-flex style="margin-top: 2.5rem">
                    <v-layout justify-center>
                      <h1>
                        Phone Number
                      </h1>
                    </v-layout>
                    <v-layout justify-center>
                      <v-layout
                        class="signup-phone__pagination"
                        justify-center
                      >
                        <i class="fas fa-dot-circle" />
                        <i class="far fa-circle" />
                      </v-layout>
                    </v-layout>
                    <v-layout>
                      <p>
                        Please Enter your phone number.
                        This is required so we have an easy way of contacting you about other opportunities or ways to support you.
                        This information will not be sold and is only for the use of the PilotCity program
                      </p>
                    </v-layout>
                    <v-layout class="signup-phone__text-field">
                      <v-text-field
                        placeholder="Enter your phone number"
                        mask="(###)-###-####"
                        color="#7B5D7D"
                        outlined
                        text
                      />
                    </v-layout>
                  </v-flex>
                </v-layout>
                <v-layout style="height: 20%">
                  <v-flex
                    align-self-end
                    class="signup-phone__action"
                  >
                    <v-layout
                      justify-center
                    >
                      <v-btn class="signup-phone__button">
                        Send Verification
                      </v-btn>
                    </v-layout>
                  </v-flex>
                </v-layout>
              </div>
            </v-flex>
          </v-layout>
        </v-layout>
      </v-flex>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
// import { AuthStore } from "@/store"


@Component
export default class Phone extends Vue {

}
</script>

<style lang="scss">
.signup-phone__container{
  color: white;
  width: 100%;
  height: 100%;
  background-color: #F79960;
  .signup-phone__back{
    text-shadow:  0px 4px 4px rgba(0, 0, 0, 0.25);
    a{
      color: white;
    }
  }
  .signup-phone__card{
    color: white;
    margin-top: 5rem;
    height: 500px;
    border-radius: 2.5rem;
    background-color: #F79960;
    .signup-phone__text-input{
      height: 400px;
      .v-input__control{
        margin-top: 5.5em;
        padding: 1em;
        .v-input__slot{
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        }
        input{
          margin: .5em;
        }
      }
      .v-text-field--outline > .v-input__control > .v-input__slot{
        background-color: white !important;
        margin: 0px;
        border-radius: 10em;
      }
    }
    h1{
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      font-size: 2em;
      @media only screen and (max-width: 37
      5px ){
        font-size: 142%;
      }
    }
    p{
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      font-size: 1em;
      margin: 2em 2.3em 0
    }
  }
  .signup-phone__pagination{
    margin-top: 3rem;
    i{
      color: #4f4f4f;
      margin: 0 .5rem;
    }
  }

  .signup-phone__action{
    margin-bottom: 1rem;
    // background-color: #fff;
  }
  .signup-phone__button{
    width: 40%;
    height: 42px;
    background-color: #7B5D7D !important;
    color: white;
    border-radius: 50px;
    font-size: 1.25em;
    margin-bottom: .5rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    &--secondary{
      color: red;
    }
  }
}

</style>
