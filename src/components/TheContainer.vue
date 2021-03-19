<template>
  <v-container>
    <slot />
  </v-container>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'the-container',
})
export default class TheContainer extends Vue {}
</script>
