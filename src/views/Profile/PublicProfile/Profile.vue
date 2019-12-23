<template>
  <v-container
    fluid
    class="pc-profile-page"
  >
    <v-row
      justify="end"
    >
      <!-- <div > -->
      <v-spacer />
      <v-col
        xl="2"
        lg="3"
        md="4"
        sm="5"
        cols="8"
        style="padding: 0;"
        align-self="center"
      >
        <div
          id="profileSwitch"
          style="display: flex"
        >
          <v-switch
            text
            readonly
            @click="switchProfile"
          >
            <template v-slot:label>
              <label
                class="profile__switch profile__switch--active"
              >
                public
              </label>
            </template>
            <template v-slot:prepend>
              <label
                class="profile__switch profile__switch--inactive"
              >
                private
              </label>
            </template>
          </v-switch>
        </div>
      </v-col>
      <!-- </div> -->
    </v-row>
    <v-container fluid>
      <v-card class="pc-container">
        <!-- probably going to use Doka here.... -->
        <img
          id="profileBanner"
          src="@/assets/PC_user_banner.png"
          alt=""
        >
        <v-container>
          <!-- make tag component -- backlog -->
          <v-row>
            <!-- insert Doka-profile-picture-component -->
            <v-col id="profileContainer">
              <!-- <profile-upload v-model="citizenBase.profilePicture" /> -->
              <div class="pc-profile-picture pc-profile-picture--page pc-vh-center" />
            </v-col>
            <v-col
              cols="12"
              md="7"
              class="pl-6"
              style="padding-bottom: 0"
            >
              <v-row>
                <v-col cols="12">
                  <h1>Tommie Ebanez</h1>
                </v-col>
                <v-row justify="start">
                  <v-col
                    cols="12"
                    md="6"
                    lg="4"
                    xl="3"
                  >
                    <v-btn
                      :id="CITIZENSTYLES[citizenType]"
                      v-bind="attrs"
                      rounded
                      v-on="on"
                    >
                      <h2 class="text-capitalize pr-5 pl-5">
                        {{ citizenType }}
                      </h2>
                    </v-btn>
                  </v-col>
                  <v-col
                    cols="12"
                    md="4"
                  >
                    <h3>Fremont, CA</h3>
                  </v-col>
                </v-row>
              </v-row>
            </v-col>
          </v-row>
          <v-row>
            <v-card id="profileDescription">
              <v-container>
                <p>
                  I’m a teacher of 10 years and I’m on a mission to make all student outcomes better. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </v-container>
            </v-card>
          </v-row>
          <v-container>
            <v-list
              id="profileFields"
              text
            >
              <v-list-group
                no-action
                :ripple="false"
              >
                <template v-slot:activator>
                  <v-row>
                    <v-col
                      cols="12"
                      lg="2"
                    >
                      <v-list-item-title
                        style="max-width: fit-content"
                        v-text="'People'"
                      />
                    </v-col>
                    <v-col
                      cols="12"
                      lg="10"
                    >
                      <v-list-item-subtitle
                        v-text="'13 Program Friends'"
                      />
                    </v-col>
                  </v-row>
                </template>

                <v-list-item>
                  <v-list-item-content>
                    <v-row class="ml-auto mr-auto">
                      <v-col
                        cols="5"
                        lg="2"
                        xl="1"
                        align-self="center"
                      >
                        <div class="pc-badge__employer--inverted pc-badge">
                          Employer
                        </div>
                      </v-col>
                      <!-- AVATAR ICONS -->
                      <!-- insert v-for here -->
                      <v-col
                        cols="8"
                        lg="10"
                        xl="11"
                      >
                        <v-list-item-avatar size="50">
                          <div class="pc-profile-picture pc-profile-picture--icon" />
                        </v-list-item-avatar>
                        <v-list-item-avatar size="50">
                          <div class="pc-profile-picture pc-profile-picture--icon" />
                        </v-list-item-avatar>
                        <v-list-item-avatar size="50">
                          <div class="pc-profile-picture pc-profile-picture--icon" />
                        </v-list-item-avatar>
                      </v-col>
                      <v-col
                        cols="5"
                        lg="2"
                        xl="1"
                        align-self="center"
                      >
                        <div class="pc-badge__teacher--inverted pc-badge">
                          Teacher
                        </div>
                      </v-col>
                      <!-- AVATAR ICONS -->
                      <!-- insert v-for here -->
                      <v-col
                        cols="8"
                        lg="10"
                        xl="11"
                      >
                        <v-list-item-avatar size="50">
                          <div class="pc-profile-picture pc-profile-picture--icon" />
                        </v-list-item-avatar>
                        <v-list-item-avatar size="50">
                          <div class="pc-profile-picture pc-profile-picture--icon" />
                        </v-list-item-avatar>
                        <v-list-item-avatar size="50">
                          <div class="pc-profile-picture pc-profile-picture--icon" />
                        </v-list-item-avatar>
                      </v-col>
                      <v-col
                        cols="5"
                        lg="2"
                        xl="1"
                        align-self="center"
                      >
                        <div class="pc-badge__student--inverted pc-badge">
                          Student
                        </div>
                      </v-col>
                      <!-- AVATAR ICONS -->
                      <!-- insert v-for here -->
                      <v-col
                        cols="8"
                        lg="10"
                        xl="11"
                      >
                        <v-list-item-avatar size="50">
                          <div class="pc-profile-picture pc-profile-picture--icon" />
                        </v-list-item-avatar>
                        <v-list-item-avatar size="50">
                          <div class="pc-profile-picture pc-profile-picture--icon" />
                        </v-list-item-avatar>
                        <v-list-item-avatar size="50">
                          <div class="pc-profile-picture pc-profile-picture--icon" />
                        </v-list-item-avatar>
                      </v-col>
                    </v-row>
                  </v-list-item-content>
                </v-list-item>
              </v-list-group>
              <v-list-group
                no-action
                :ripple="false"
              >
                <template v-slot:activator>
                  <v-row>
                    <v-col
                      cols="12"
                      lg="2"
                    >
                      <v-list-item-title
                        style="max-width: fit-content"
                        v-text="'Places'"
                      />
                    </v-col>
                    <v-col
                      cols="12"
                      lg="10"
                    >
                      <v-list-item-subtitle
                        v-text="'1 Location'"
                      />
                    </v-col>
                  </v-row>
                </template>
                <v-list-item>
                  <v-list-item-content />
                </v-list-item>
              </v-list-group>
            </v-list>
          </v-container>
        </v-container>
      </v-card>
    </v-container>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Profile extends Vue {
    public CITIZENSTYLES = {
        Teacher: 'citizen-id__type--teacher',
        Employer: 'citizen-id__type--employer',
        Student: 'citizen-id__type--student'
    }

    get citizenType() {
        return localStorage.citizenType
    }

    set citizenType(type: string) {
        this.citizenType = type
    }

    public switchProfile() {
        this.$router.push({ name: 'profile.private' })
    }
}
</script>
