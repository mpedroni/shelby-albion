<template>
  <v-app-bar app flat color="transparent">
    <v-app-bar-title>
      <v-icon color="primary">mdi-box-cutter</v-icon>
      <span class="primary--text font-weight-bold"> shelby </span>
    </v-app-bar-title>

    <v-spacer />

    <ColorThemeSelector />

    <v-btn
      href="https://github.com/mpedroni/shelby-albion"
      icon
      large
      target="_blank"
      color="primary"
    >
      <v-icon> mdi-github </v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import ColorThemeSelector from '@/components/ColorThemeSelector.vue';

@Component({
  name: 'TheAppBar',
  components: {
    ColorThemeSelector,
  },
})
export default class TheAppBar extends Vue {}
</script>
