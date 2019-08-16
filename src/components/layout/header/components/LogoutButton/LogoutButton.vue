<template>
<v-btn
              flat
              round
              :loading="loading"
              :disabled="loading"
              v-if="user"
              @click="logout()"
            >
              Logout
            </v-btn>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import { AuthStore } from '@/store';

@Component
export default class LogoutButton extends Vue {
    public loading = false
    get user(){
        return AuthStore.user
    }
    public logout:  () => Promise<void> = AuthStore.logout
}
</script>

<style lang="scss">
</style>