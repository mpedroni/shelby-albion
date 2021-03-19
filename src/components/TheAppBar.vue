<template>
  <v-app-bar app elevation="0" color="transparent">
    <v-icon color="primary">mdi-box-cutter</v-icon>
    <span class="primary--text font-weight-bold"> shelby </span>
  </v-app-bar>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'TheAppBar',
})
export default class TheAppBar extends Vue {}
</script>
"]
