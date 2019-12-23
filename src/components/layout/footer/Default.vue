<template>
  <v-footer
    class="pc-footer pc-footer--simple"
    dark
    height="auto"
  >
    <v-layout
      align-start
      justify-center
    >
      <v-flex>
        <v-card
          class="flex"
          text
          tile
        >
          <v-card-title class="white black--text footer__body">
            <v-layout column>
              <v-layout
                xs12
                md4
              >
                <v-flex
                  xs11
                  md3
                  align-self-center
                >
                  <strong class="footer__heading">PilotCity</strong>
                </v-flex>
                <v-flex
                  xs11
                  md5
                  class="footer__icons"
                >
                  <v-btn
                    v-for="icon in icons"
                    :key="icon"
                    class="mx-3 black--text footer_card__icon"
                    dark
                    icon
                  >
                    <v-icon size="24px">
                      {{ icon }}
                    </v-icon>
                  </v-btn>
                </v-flex>
              </v-layout>
              <v-flex
                xs12
                md11
                grow
                class="footer__subheading"
              >
                <v-layout>
                  ©2019 PilotCity Inc LLC, All Rights Reserved
                </v-layout>
              </v-flex>
            </v-layout>
            <v-spacer />
            <v-layout justify-end>
              <v-flex
                shrink
                xs5
                md3
                align-self-center
                class="footer__subheading--small"
              >
                <v-layout
                  offset-md10
                  text-xs-right
                >
                  <span>Endorsed By:</span>
                </v-layout>
              </v-flex>
              <v-flex
                xs3
                md3
                shrink
              >
                <img
                  src="@/assets/ACoE.jpg"
                  class="footer__acoe"
                >
              </v-flex>
            </v-layout>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
    <!-- <v-btn v-for="icon in icons" :key="icon" class="mx-3 black--text footer_card__icon" dark icon>
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn> -->
  </v-footer>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
@Component
export default class FooterMain extends Vue {
    icons: string[] = [
        "fab fa-instagram",
        "fab fa-facebook",
        "fab fa-twitter"
    ];
}
</script>

<style lang="scss">
.footer__icons {
  align-content: start;
}
.footer__subheading {
  text-align: start;
}
@media only screen and (max-width: 960px) {
  .footer__icons {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .footer__subheading {
    text-align: center;
  }
}
.footer__acoe {
  max-width: 70px;
  max-height: 70px;
  border-radius: 100px;
  padding-left: 15px;
}
.footer__heading {
  font-weight: 700;
  font-size: 1.5rem;
}
</style>
