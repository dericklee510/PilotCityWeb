<template>
  <v-row justify="center">
    <img
      id="processlog__icon"
      class="processlog__image"
      src="@/assets/processlog.png"
    >

    <v-col
      id="processlog__contain"
      cols="7"
    >
      <v-row
        justify="center"
        class="mr-auto ml-auto processlog__title"
      >
        DESIGN & PROTOTYPE PROCESS LOG
      </v-row>

      <v-col
        cols="12"
        class="processlog__borderline"
      />

      <v-row
        justify="center"
        class="mr-auto ml-auto processlog__description"
      >
        As you devleop your project, document your progress and milestones to show your project’s evolution.
      </v-row>

      <!-- <i class="pt-3 pb-3 pl-3 fas fa-paperclip"></i> -->



      <!-- LOG -->


      <v-row justify="center">
        <input class="processlog__logdescription"><i class="processlog__fileattachment fas fa-paperclip pt-3 pb-3 pl-3 pr-4" /><button class="processlog__logbutton">
          LOG
        </button>
      </v-row>

      <!-- LOG ATTACHMENT -->

      <v-row class="processlog__logattachment ml-auto mr-auto mt-3 mb-12">
        <v-col class="processlog__filenamecolumn">
          IMG_323.JPG
        </v-col>
    
        <v-col class="processlog__trashiconcolumn">
          <i class="processlog__trashicon far fa-trash-alt" />
        </v-col>
      </v-row>

      <!-- LOG STAMP -->

      <v-row class="processlog__logostamp ml-auto mr-auto mt-3">
        <v-col>
          <v-row>
            <div class="processlog__logdate">
              TODAY
            </div><div class="processlog__logtime">
              11:28am
            </div><div class="mt-1">
              <i class="processlog__trashicon far fa-trash-alt" />
            </div>
          </v-row>
          <v-row>
            <div class="processlog__logdescription2 mt-2 mb-3">
              This is the log description
            </div>
          </v-row>
          <v-row>
            <div><i class="processlog__filedownload fas fa-file-download" /></div><div class="processlog__filenamecolumn">
              IMG_323.JPG
            </div>
          </v-row>
        </v-col>
      </v-row>

      <!-- LOG STAMP -->

      <v-row class="processlog__logostamp ml-auto mr-auto mt-3">
        <v-col>
          <v-row>
            <div class="processlog__logdate">
              YESTERDAY
            </div><div class="processlog__logtime">
              8:28am
            </div><div class="mt-1">
              <i class="processlog__trashicon far fa-trash-alt" />
            </div>
          </v-row>
          <v-row>
            <div class="processlog__logdescription2 mt-2 mb-3">
              This is the log description
            </div>
          </v-row>
          <v-row>
            <div><i class="processlog__filedownload fas fa-file-download" /></div><div class="processlog__filenamecolumn">
              IMG_323.JPG
            </div>
          </v-row>
        </v-col>
      </v-row>


      <!-- LOG STAMP -->

      <v-row class="processlog__logostamp ml-auto mr-auto mt-3">
        <v-col>
          <v-row>
            <div class="processlog__logdate">
              9/10/2019
            </div><div class="processlog__logtime">
              2:59pm
            </div><div class="mt-1">
              <i class="processlog__trashicon far fa-trash-alt" />
            </div>
          </v-row>
          <v-row>
            <div class="processlog__logdescription2 mt-2 mb-3">
              This is the log description
            </div>
          </v-row>
          <v-row>
            <div><i class="processlog__filedownload fas fa-file-download" /></div><div class="processlog__filenamecolumn">
              IMG_323.JPG
            </div>
          </v-row>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>





<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
@Component
export default class logtime extends Vue{
    
}
</script>