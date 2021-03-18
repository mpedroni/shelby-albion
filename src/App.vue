<template>
  <v-app :style="`background: ${getBackGroundColor}`" dark>
    <v-app-bar app elevation="0" color="transparent">
      <v-icon color="primary">mdi-box-cutter</v-icon>
      <span class="primary--text font-weight-bold"> shelby </span>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>

    <v-footer color="transparent">
      <v-row justify="center">
        <v-col cols="auto"> created by @mpedroni </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  name: 'app',
})
export default class App extends Vue {
  get getBackGroundColor() {
    return this.$vuetify.theme.dark
      ? this.$vuetify.theme.themes.dark.background
      : this.$vuetify.theme.themes.light.background;
  }
}
</script>
