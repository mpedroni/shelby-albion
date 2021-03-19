<template>
  <TheContainer>
    <h1 class="primary--text">dashboard</h1>
  </TheContainer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import TheContainer from '@/components/TheContainer.vue';

@Component({
  components: {
    TheContainer,
  },
})
export default class Dashboard extends Vue {}
</script>
