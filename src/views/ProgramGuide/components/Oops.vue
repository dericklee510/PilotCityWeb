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
        class="oops-card"
        no-gutters
      >
        <!-- <v-alert
              width="200"
            > -->
        No student information yet <i class="ml-4 fas fa-hourglass-start" />
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

<style lang="scss">
.oops-card{
    width: 100%;
    // background-color: #f1f2f2;
    height: 10vh;

    // align-content: center;
    // vertical-align: middle;
    // text-align: center;

    font-size: 30px;
    font-family: "Raleway";
    color: #ffffff;
    font-weight:700;
    font-size: 20px;
    color: #d1d3d4;

    &:hover{

    }
}
</style>