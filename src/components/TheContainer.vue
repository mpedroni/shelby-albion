<template>
  <v-container>
    <slot />
  </v-container>
</template>

<script>
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
  name: 'TheContainer',
})
export default class TheContainer extends Vue {}
</script>
