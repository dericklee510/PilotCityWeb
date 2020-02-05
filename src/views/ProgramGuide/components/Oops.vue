<template>
  <v-overlay absolute>
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        cols="8"
      >
        <v-card
          class="elevation-8"
          height="200"
          width="400"
          dark
        >
          <v-row
            align="center"
            justify="center"
          >
            <v-alert
              width="200"
            >
              There is nothing here yet...<i class="far fa-grin-beam-sweat" />
            </v-alert>
          </v-row>
          <v-row
            align="center"
            justify="center"
          >
            <v-progress-circular indeterminate="" />
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-overlay>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
@Component<Oops>({
  components: {
  },
  subscriptions() {
    return {
      
    };
  }
})
export default class Oops extends Vue {
}
</script>