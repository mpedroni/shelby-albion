<template>
  <TheContainer style="border: solid 1px red">
    <v-row>
      <v-col v-for="craft in crafts" :key="craft.id" cols="12" sm="6" md="4">
        <v-card color="primary" flat class="background px-5 my-3">
          <v-row>
            <v-col> shazam</v-col>
          </v-row>
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
  private crafts: Array<Craft> = [
    {
      id: 'T5_GARRA_LIGEIRA',
      name: 'Garra-Ligeira',
    },
    {
      id: 'T3_CAVALIN',
      name: 'Cavalo de Montar do Iniciante',
    },
    {
      id: 'T7_URSO',
      name: 'Cavalo de Montar do Iniciante',
    },
  ];
}
</script>
