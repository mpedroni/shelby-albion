<template>
  <v-btn @click="darkTheme = !darkTheme" icon class="ease-in-ease-out">
    <v-icon v-text="darkTheme ? 'mdi-white-balance-sunny' : 'mdi-weather-night'" />
  </v-btn>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ColorThemeSelector extends Vue {
  get darkTheme(): boolean {
    return this.$vuetify.theme.dark;
  }

  set darkTheme(darkTheme: boolean) {
    this.$vuetify.theme.dark = darkTheme;
  }
}
</script>
