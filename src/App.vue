<template>
  <v-app>
    <TheAppBar />

    <v-main class="background">
      <router-view />
    </v-main>

    <TheFooter />
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import TheAppBar from '@/components/TheAppBar.vue';
import TheFooter from '@/components/TheFooter.vue';

@Component({
  name: 'app',
  components: {
    TheAppBar,
    TheFooter,
  },
})
export default class App extends Vue {}
</script>
