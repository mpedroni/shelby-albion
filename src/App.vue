<template>
  <v-app :style="`background: ${getBackGroundColor}`" dark>
    <TheAppBar />

    <v-main>
      <router-view />
    </v-main>

    <v-footer color="transparent">
      <v-row justify="center" class="ma-0 py-1">
        <v-col cols="auto"> created by @mpedroni </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import TheAppBar from '@/components/TheAppBar.vue';

@Component({
  name: 'app',
  components: {
    TheAppBar,
  },
})
export default class App extends Vue {
  get getBackGroundColor() {
    return this.$vuetify.theme.dark
      ? this.$vuetify.theme.themes.dark.background
      : this.$vuetify.theme.themes.light.background;
  }
}
</script>
