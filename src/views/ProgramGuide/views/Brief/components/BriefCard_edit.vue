<template>
  <div class="briefcard__sontaincontainer">
    <v-card
      id="Contain"
      class="briefcard__container"
    >
      <!-- <img src="" alt="" id="programbrief__cover"> -->
      <multi-input
        ref="multiInput"
        :key="key"
        v-model="files"
        v-slot="{entries}"
      >
        <v-row
          v-for="(entry,index) in entries"
          id="briefcard__rowcontain"
          :key="entry.id"
        >
          <v-col
            class="mr-5"
            cols="12"
            md="2"
            xl="1"
          >
            <iframe
              class="briefcard__cover"
              :src="`https://drive.google.com/viewerng/viewer?url=${encodeURIComponent(entry.link)}?pid=explorer&efh=false&a=v&chrome=false&embedded=true&rm=minimal`"
            />
          </v-col>

          <v-col
            class
            cols
          >
            <v-col
              class
              cols="12"
            >
              <div class="briefcard__header">
                {{
                  getName(entry)
                }}
              </div>

              <v-row class="mt-5 pl-3">
                <button
                  v-if="entry.link"
                  class="briefcard__buton mr-3"
                >
                  <a :href="entry.link">VIEW</a>
                </button>
                <button
                  class="briefcard__buton mr-3"
                  @click="triggerFileInput(entry.id)"
                >
                  {{ entry.link?"RE-UPLOAD":"UPlOAD" }}
                </button>
                <v-file-input
                  :ref=" `fileInput${entry.id}`"
                  v-model="entry.file"
                  style="display: none;"
                  accept="image/*, .pdf"
                  @change="onFilesChanged(entries)"
                />
                <button
                  v-if="entries.length>1"
                  class="briefcard__buton mr-3"
                  @click="removeEntry(entry,index)"
                >
                  DELETE
                </button>

                <v-col
                  cols="2"
                  style="padding:0"
                />
                <v-col
                  cols="2"
                  style="padding:0"
                />
                <v-col
                  cols="2"
                  style="padding:0"
                />
              </v-row>
            </v-col>
          </v-col>
        </v-row>
      </multi-input>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue, { Component as VueComponent } from "vue";
import Component from "vue-class-component";
import { PCmultiinput } from "@/components/inputs";
import { VFileInput } from "vuetify/lib";
import { Watch } from 'vue-property-decorator';
import { FbStore } from '../../../../../store';
import { NamedLink } from '../../../../../store/Database/types/utilities';
import { PCLoader } from '../../../../../components/utilities';


const app = PCmultiinput.createMultiInput<NamedLink>();
@Component({
  components: {
    multiInput: app,
    PCLoader
  }
})
export default class BriefCard extends Vue {
  key=0
  mounted(){
    
  }
  files: NamedLink[] = FbStore.currentEmployerProgram!.programBrief || [];
  
  async onFilesChanged(newFiles:{file?:File}&Partial<NamedLink>[]){
    let indexedFiles = newFiles.map((obj:Partial<NamedLink>&{file?:File},index) => ({...obj, index})).filter(obj => obj.file)
    await Promise.all(indexedFiles.map((obj) => {
      return new Promise(async (resolve) => {
        const filePath = `program/${FbStore.currentEmployerProgramUID}/program_brief`
        this.files[obj.index] = await FbStore.getFileLink({file:obj.file!,filePath})
        resolve()
      })
    }))
    FbStore.updateCurrentEmployerProgram({
      programBrief:this.files
    })
    this.key++
    // figure out which objects need to be processed
    // proccess the objects i.e. upload to the database then 
    // remove the file from the object
  }
  async removeEntry(entry:Partial<NamedLink & {file:File}>,index:number){
    if(entry.link)
      await FbStore.storage.refFromURL(entry.link).delete()
    this.files.splice(index,1)
    await FbStore.updateCurrentEmployerProgram({
      programBrief:this.files
    })
    this.key++
      
  }
  getName(entry:Partial<NamedLink & {file:File}>){
    return entry.linkName || entry.file?.name || "Empty Program Brief"
  }
  triggerFileInput(index: number) {
    let ref = `fileInput${index}`;
    let input = (this.$refs[ref] as typeof VFileInput[])[0];
    ((input as Vue).$el.getElementsByClassName(
      "v-file-input__text"
    )[0] as HTMLDivElement).click();
  }
}
</script>

<style scoped>
</style>