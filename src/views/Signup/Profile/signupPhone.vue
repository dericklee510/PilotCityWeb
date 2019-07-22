<template>
  <div class="signup-phone__container">
    <v-container>
      <v-flex>
        <v-layout justify-start>
          <h5>
            <i class="fas fa-angle-left" /> 
            &nbsp; back
          </h5>
        </v-layout>
        <v-layout justify-center>
          <v-layout
            style="max-width: 33rem"
            row
            wrap
          >
            <v-flex xs12> 
              <v-card class="signup-phone__card">
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
                        color="#7B5D7D"
                        outline
                        flat
                        background-color="#fff"
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
              </v-card>
            </v-flex>
          </v-layout>
        </v-layout>
      </v-flex>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import Component from "vue-class-component"
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
  .signup-phone__card{
    color: white;
    margin-top: 5rem;
    height: 500px;
    border-radius: 2.5rem;
    background-color: #F79960;
    .signup-phone__text-input{
      height: 400px;
      .signup-phone__text-field .v-input-slot{
        color: #fff;
        background-color: white;
      }
    }
    h1{
      font-size: 2em;
      @media only screen and (max-width: 37
      5px ){
        font-size: 142%;
      }
    }
    p{
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
    &--secondary{
      color: red;
    }
  }
}

</style>


