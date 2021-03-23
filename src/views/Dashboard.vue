<template>
  <TheContainer>
    <v-row>
      <v-col v-for="{ id, name } in crafts" :key="id" cols="12" class="[]" sm="6" md="4">
        <v-card color="primary" class="background lighten-1" hover rounded :to="`crafts/${id}`">
          <v-card-title>{{ name }}</v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </TheContainer>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import TheContainer from '@/components/TheContainer.vue';

import Craft from '@/types/Craft';

@Component({
  components: {
    TheContainer,
  },
})
export default class Dashboard extends Vue {
  crafts: Array<Craft> = [
    {
      id: 1,
      name: 'Garra-Ligeira',
    },
    {
      id: 2,
      name: 'Cavalo de Montar do Iniciante',
    },
    {
      id: 3,
      name: 'Cavalo de Montar do Iniciante',
    },
  ];
}
</script>
