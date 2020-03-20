<template>
  <v-row justify="center">
    <img
      id="processlog__icon"
      class="processlog__image"
      src="@/assets/processlog.png"
    >

    <v-col
      id="processlog__contain"
      cols="8"
    >
      <v-row
        justify="center"
        class="mr-auto ml-auto processlog__title"
      >
        DESIGN & PROTOTYPE PROCESS LOG


        <!-- TOOLTIP TEMPLATE -->
        <v-tooltip
          top
        >
          <template v-slot:activator="{ on }">
            <v-btn
              href="https://www.pilotcity.com/library/using-the-design-prototype-log"
              target="_blank"
              icon
              v-on="on"
            >
              <v-icon
                class="pb-3"
                color="grey lighten-1"
              >
                info
              </v-icon>
            </v-btn>
          </template>
          <span>Click to learn more about how to log and document your process</span>
        </v-tooltip>
        <!-- TOOLTIP TEMPLATE END -->
      </v-row>

      <v-col
        cols="12"
        class="processlog__borderline"
      />

      <v-row
        justify="center"
        class="mr-auto ml-auto processlog__description"
      >
        As you develop your project, document your progress and milestones to show your project’s evolution.
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
              class="processlog__logdescription mb-4"
            >
              <v-text-field
                v-model="inputDescription"
                :error-messages="errors"
                :disabled="loading"
                class="processlog__logdescription-textfield pt-0"
              />
            </ValidationProvider>
          
            <i
              class="processlog__fileattachment fas fa-paperclip pt-3 pb-3 pl-3 pr-4"
              style="cursor: pointer"
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
              large
              :disabled="invalid || !fileQueue.length"
              :loading="loading"
              @click="setLoader(appendEntry).then(() => {reset()});"
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
          class="processlog__logattachment ml-auto mr-auto mt-3 mb-3"
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
        class="mb-12 mt-12"
      >
        <v-row
          v-for="entry in entries"
          :key="entry.id"
          class="processlog__logostamp ml-auto mr-auto"
        >
          <v-col>
            <v-row>
              <div class="processlog__logdate">
                {{ entry.lastUpdate.toDate() | moment("calendar") }}
              </div>
              <div class="mt-1">
                <i
                  class="processlog__trashicon far fa-trash-alt"
                  @click="removeEntry(entry)"
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
import { FbStore } from '../../../../store';


async function getFileLink(file:File,index?:number):Promise<NamedLink>{
  let filePath = `project/${FbStore.currentProject!.projectId}/process_log/${file.name}`
  if(index)
    filePath = `${filePath}(${index})`
  let fileRef = FbStore.storageRef.child(filePath)
  try{
        let res = await FbStore.storageRef.child(filePath).getDownloadURL();
        // file exists already
        return getFileLink(file,index?index+1:1)
      }catch{
        // file doesnt exist yet
        let snapshot = await fileRef.put(file)
        return {
          linkName:index?`${file.name}(${index})`:file.name,
          link:await snapshot.ref.getDownloadURL()
          }
      }
}
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
  // designLog: DesignLog[] = FbStore.currentProject!.designLog || []
  get designLog(){
    this.key++
    return FbStore.currentProject!.designLog || []
  }
  set designLog(newVal){
    // FbStore.updateCurrentProject({
    //   designLog:newVal
    // })
  }
  onChange() {
    if (this.inputFile) this.fileQueue.push({
      file:this.inputFile,
      fileName:this.inputFile.name
    });
    this.inputFile = null;
    this.key++
  }
  async removeEntry(entry:DesignLog, index:number){
    entry.fileLinks.forEach(fileLink => {
      FbStore.storage.refFromURL(fileLink.link).delete()
    })
    this.designLog.splice(index,1)
    FbStore.updateCurrentProject({
      designLog:this.designLog
    })
  }
  async holdEntry(){
    const getLinks:(files:File[])=>Promise<NamedLink[]> = (files) => {
      return Promise.all(files.map(file => getFileLink(file)))
    }
    let fileLinks:NamedLink[] = await getLinks(this.fileQueue.map(queue => queue.file))
    this.designLog.unshift({
      description:this.inputDescription,
      fileLinks,
      lastUpdate:firebase.firestore.Timestamp.now()
    })
    if(FbStore.currentProject!.programSequence?.processLog)
      await FbStore.updateCurrentProject({
        [`programSequence.${"processLog"}`]:firebase.firestore.FieldValue.serverTimestamp()
      })
    await FbStore.updateCurrentProject({
      designLog:this.designLog.map(obj => ({...obj}))
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