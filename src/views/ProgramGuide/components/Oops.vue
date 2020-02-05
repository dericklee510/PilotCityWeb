<template>
  <!-- <v-overlay absolute> -->
  <v-row
    align="center"
    justify="center"
    no-gutters
  >
    <v-col
      cols="12"
    >
      <v-row
        align="center"
        justify="center"
        style="height: 10vh"
      >
        <!-- <v-alert
              width="200"
            > -->
        No students here...yet <i class="fas fa-user-alt-slash" />
        <!-- </v-alert> -->
      </v-row>
      <!-- <v-row
        align="center"
        justify="center"
      >
        <v-progress-circular indeterminate="" size="16" />
      </v-row> -->
    </v-col>
  </v-row>
  <!-- </v-overlay> -->
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