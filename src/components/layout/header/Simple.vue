<template>
  <v-toolbar
    extension-heigh="0"
    dark
    style="height: fit-content"
    max-height="64px;"
    class="pc-header pc-header--simple"
  > 
    <router-link :to="{path: '/'}">
      <img
        class="pc-logo--header"
        src="@/assets/Pilotcity_logo.png"
        alt="Pilot City"
      >
    </router-link>
    <v-spacer />
  </v-toolbar>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { AuthStore } from '@/store'
import PCdropdown from '@/components/inputs/PCdropdown.vue'


@Component({
    components: {
        pcdropdown: PCdropdown
    }
})
export default class Header extends Vue {
    public dropdownselect: string = '';

    public loading = false

    get user() {
        return AuthStore.user
    }

    public route(): void {
        this.$router.push({
            name: 'signup.type'
        })
    }

    public logout: () => Promise<void> = AuthStore.logout
}
</script>
