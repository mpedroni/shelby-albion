<template>
  <v-container>
    <slot />
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'TheContainer',
})
export default class TheContainer extends Vue {}
</script>
