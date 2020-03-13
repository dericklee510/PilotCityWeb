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
                          <ProfileUpload />
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
                    <v-btn
                      class="signup-profile__button"
                      :to="{name:`signup-number`}"
                    >
                      Upload
                    </v-btn>
                  </v-layout>
                  <v-layout justify-center>
                    <h5
                      class="signup-profile__button--secondary"
                    >
                      <router-link :to="{name:`signup-number`}">
                        I'd rather skip this
                      </router-link>
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
import Vue from 'vue'
import Component from 'vue-class-component'
import { ProfileUpload } from '@/components/Doka'
// import { AuthStore } from "@/store"


@Component({
    components: {
        ProfileUpload
    }
})
export default class Upload extends Vue {

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
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        margin-top: 1.5rem;
        height: 200px;
        max-width: 200px;
        background-color: rgb(142, 140, 140);
        border-radius: 100%;
        i{
          color: #bdbdbd;
        }
      }
    }
    h1{
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      font-size: 2em;
      color: #fff;
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
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 40%;
    height: 42px;
    background-color: #7B5D7D !important;
    color: white;
    border-radius: 50px;
    font-size: 1.25em;
    margin-bottom: .5rem;
    &--secondary{
      a{
        color: red;
      }
    }
  }
}
</style>
