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
      <ValidationObserver v-slot="{invalid, reset}">
        <pc-loader v-slot="{loading, setLoader}">
          <v-row justify="center">
            <!-- <i class="processlog__fileattachment fas fa-paperclip pt-3 pb-3 pl-3 pr-4" /> -->
          
            <ValidationProvider
              v-slot="{errors}"
              rules="required"
              class="processlog__logdescription"
            >
              <v-text-field
                v-model="inputDescription"
                :error-messages="errors"
                :disabled="loading"
              />
            </ValidationProvider>
          
            <i
              class="processlog__fileattachment fas fa-paperclip pt-3 pb-3 pl-3 pr-4"
              @click="triggerFileInput"
            />
            <v-file-input
              ref="fileInput"
              v-model="inputFile"
              style="display: none;"
              @change="onChange"
            />
         
        
            <v-btn
              class="processlog__logbutton"
              :disabled="invalid || !fileQueue.length"
              :loading="loading"
              @click="setLoader(appendEntry);reset();"
            >
              LOG
            </v-btn>
          </v-row>
        </pc-loader>
      </ValidationObserver>
      <!-- LOG ATTACHMENT -->

      <multifile-input
        :key="`input${key}`"
        v-model="fileQueue"
        v-slot="{entries,deleteEntry}"
      >
        <v-row
          v-for="entry in entries"
          :key="entry.id"
          class="processlog__logattachment ml-auto mr-auto mt-3 mb-12"
        >
          <v-col class="processlog__filenamecolumn">
            {{ entry.fileName }}
          </v-col>

          <v-col class="processlog__trashiconcolumn">
            <i
              class="processlog__trashicon far fa-trash-alt"
              @click="deleteEntry(entry.id)"
            />
          </v-col>
        </v-row>
      </multifile-input>
      <!-- LOG STAMP -->
      <multi-input
        :key="`log${key}`"
        v-model="designLog"
        v-slot="{entries, deleteEntry}"
      >
        <v-row
          v-for="entry in entries"
          :key="entry.id"
          class="processlog__logostamp ml-auto mr-auto mt-3"
        >
          <v-col>
            <v-row>
              <div class="processlog__logdate">
                {{ entry.lastUpdate.toDate() | moment("calendar") }}
              </div>
              <div class="mt-1">
                <i
                  class="processlog__trashicon far fa-trash-alt"
                  @click="deleteEntry(entry.id)"
                />
              </div>
            </v-row>
            <v-row>
              <div class="processlog__logdescription2 mt-2 mb-3">
                {{ entry.description }}
              </div>
            </v-row>
            <v-row
              v-for="(fileLink,index) in entry.fileLinks"
              :key="index"
            >
              <div>
                <a :href="fileLink.link">
                  <i class="processlog__filedownload fas fa-file-download" />
                </a>
              </div>
              <div class="processlog__filenamecolumn">
                {{ fileLink.linkName }}
              </div>
            </v-row>
          </v-col>
        </v-row>
      </multi-input>
    </v-col>
  </v-row>
</template>





<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { firebase } from "@/firebase/init";
import { TimeLog, DesignLog, NamedLink } from "@/store/Database/types/utilities";
import { Overwrite } from "utility-types";
import moment from "moment";
import { PCmultiinput } from "@/components/inputs";
import {PCLoader} from "@/components/utilities/"
import { VFileInput } from 'vuetify/lib';
import { ValidationObserver, ValidationProvider } from 'vee-validate';
moment(
  firebase.firestore.Timestamp.fromDate(
    moment(new Date())
      .subtract(1, "d")
      .toDate()
  )
).diff(moment(), "d");
@Component({
  components: {
    multiInput: PCmultiinput.createMultiInput<DesignLog>(),
    multifileInput: PCmultiinput.createMultiInput<{file:File,fileName:string}>(),
    pcLoader:PCLoader,
    ValidationProvider,
    ValidationObserver
  }
})
export default class logtime extends Vue {
  inputFile: File | null = null;
  inputDescription:string = ""
  key:number = 0
  fileQueue: {file:File,fileName:string}[] = [];
  designLog: DesignLog[] = [
    {
      description: "This is the log description",
      fileLinks: [
        {
          linkName: "IMG_323.JPG",
          link: "https://www.rapidtables.com/web/html/link/test_file.zip"
        }
      ],
      lastUpdate: firebase.firestore.Timestamp.fromDate(new Date())
    },
    {
      description: "This is the log description",
      fileLinks: [
        {
          link: "https://www.rapidtables.com/web/html/link/test_file.zip",
          linkName: "IMG_323.JPG"
        },
        {
          link:
            "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
          linkName: "File.pdf"
        }
      ],
      lastUpdate: firebase.firestore.Timestamp.fromDate(
        moment(new Date())
          .subtract(1, "d")
          .toDate()
      )
    },
    {
      description: "This is the log description",
      fileLinks: [
        {
          link: "https://www.rapidtables.com/web/html/link/test_file.zip",
          linkName: "IMG_323.JPG"
        }
      ],
      lastUpdate: firebase.firestore.Timestamp.fromDate(
        moment(new Date())
          .subtract(1, "d")
          .toDate()
      )
    }
  ];
  onChange() {
    if (this.inputFile) this.fileQueue.push({
      file:this.inputFile,
      fileName:this.inputFile.name
    });
    this.inputFile = null;
    this.key++
  }
  async holdEntry(){
    const getLinks:(files:File[])=>Promise<NamedLink[]> = async (files) => files.map(file => ({
      linkName:file.name,
      link:"https://random.com"
    }))
    let fileLinks:NamedLink[] = await getLinks(this.fileQueue.map(queue => queue.file))
    this.designLog.unshift({
      description:this.inputDescription,
      fileLinks,
      lastUpdate:firebase.firestore.Timestamp.now()
    })
    this.fileQueue = []
    this.inputDescription = ""
    this.key++
  }
  async appendEntry(){
    await new Promise((resolve,reject) => {
      setTimeout(() =>{
        this.holdEntry()
        resolve()
      },2000)
    })
  }
   triggerFileInput() {
    let ref = `fileInput`;
    let input = (this.$refs[ref] as typeof VFileInput);
    
    (((input as Vue).$el.getElementsByClassName("v-file-input__text")[0]) as HTMLDivElement).click()
    
  }
  getDay(timestamp: firebase.firestore.Timestamp) {
    switch (moment(timestamp.toDate()).diff(moment(), "days")) {
      case 0:
        return "Today";
      case 1:
        return "Yesterday";
    }
  }
}
</script>