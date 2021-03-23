<template>
  <v-app-bar app flat color="transparent">
    <v-icon color="primary">mdi-box-cutter</v-icon>
    <span class="primary--text font-weight-bold"> shelby </span>

    <v-spacer />

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
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
  name: 'TheAppBar',
})
export default class TheAppBar extends Vue {}
</script>
