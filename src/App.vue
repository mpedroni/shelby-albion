<template>
  <v-app :style="`background: ${getBackGroundColor}`" dark>
    <TheAppBar />

    <v-main>
      <router-view />
    </v-main>

    <TheFooter />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import TheAppBar from '@/components/TheAppBar.vue';
import TheFooter from '@/components/TheFooter.vue';

@Component({
  name: 'app',
  components: {
    TheAppBar,
    TheFooter,
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
