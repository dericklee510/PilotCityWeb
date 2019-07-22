<template>
  <div class="signup-profile__container">
    <v-container
      fill-height
    >
      <v-layout justify-center>
        <v-layout
          style="max-width: 33rem"
          row
          wrap
        >
          <v-flex xs12> 
            <v-card class="signup-profile__card">
              <v-layout
                justify-center
                class="signup-profile__upload"
              >
                <v-flex style="margin-top: 2.5rem">
                  <v-layout justify-center>
                    <h1>
                      Upload Profile Picture
                    </h1>
                  </v-layout>
                  <v-layout justify-center>
                    <v-layout
                      justify-center
                      class="signup-profile__picture"
                    >
                      <v-flex align-self-center>
                        <v-layout justify-center>
                          <i class="fas fa-plus" />
                          <i class="fas fa-user fa-4x" />
                        </v-layout>
                      </v-flex>
                    </v-layout>
                  </v-layout>
                  <v-layout
                    class="signup-profile__pagination"
                    justify-center
                  >
                    <i class="fas fa-dot-circle" />
                    <i class="far fa-circle" />
                  </v-layout>
                </v-flex>
              </v-layout>
              <v-layout style="height: 20%">
                <v-flex
                  align-self-end
                  class="signup-profile__action"
                > 
                  <v-layout
                    justify-center
                  >
                    <v-btn class="signup-profile__button">
                      Upload
                    </v-btn>
                  </v-layout>
                  <v-layout justify-center>
                    <h5
                      class="signup-profile__button--secondary"
                      @click="eventListener"
                    >
                      I'd rather skip this
                    </h5>
                  </v-layout>
                </v-flex>
              </v-layout>
            </v-card>
          </v-flex>
        </v-layout>
      </v-layout>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import Component from "vue-class-component"
// import { AuthStore } from "@/store"


@Component
export default class Profile extends Vue {

}
</script>

<style lang="scss">
.signup-profile__container{
  width: 100%;
  height: 100%;
  background-color: #F79960;
  .signup-profile__card{
    margin-top: 5rem;
    height: 500px;
    border-radius: 2.5rem;
    .signup-profile__upload{
      background-color: #BDBDBD;
      height: 400px;
      .signup-profile__picture{
        box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
        margin-top: 1.5rem;
        height: 200px;
        max-width: 200px;
        background-color: #F2F2F2;
        border-radius: 100%;
        i{
          color: #bdbdbd;
        }
      }
    }
    h1{
      font-size: 2em;
      color: #4F4F4F;
      @media only screen and (max-width: 375px ){
        font-size: 142%;
      }
    }
  }
  .signup-profile__pagination{
    margin-top: 5rem;
    i{
      color: #4f4f4f;
      margin: 0 .5rem;
    }
  }

  .signup-profile__action{
    margin-bottom: 1rem;
  }
  .signup-profile__button{
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


