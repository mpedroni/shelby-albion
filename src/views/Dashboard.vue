<template>
  <TheContainer>
    <v-row>
      <v-col
        v-for="{ id, name, dailyProfit } in crafts"
        :key="id"
        cols="12"
        class="[]"
        sm="6"
        md="4"
      >
        <v-card color="primary" class="background lighten-1" hover rounded :to="`crafts/${id}`">
          <v-card-title>
            <v-avatar>
              <v-img src="../assets/T7_FISH_FRESHWATER_FOREST_RARE.webp" />
            </v-avatar>
            {{ name }}
          </v-card-title>

          <v-card-text>
            <v-row>
              <v-col class="font-weight-bold" cols="12">
                Lucro Diário:
                <span :class="dailyProfit > 0 ? 'green--text' : 'red--text'">
                  {{ dailyProfit || 0 }}
                </span>
                <v-icon>mdi-circle-multiple</v-icon>
              </v-col>
            </v-row>
          </v-card-text>
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
import Item from '@/types/Item';

@Component({
  components: {
    TheContainer,
  },
})
export default class Dashboard extends Vue {
  crafts: Array<Craft> = [
    {
      id: 1,
      item: {
        id: '../assets/T7_FISH_FRESHWATER_FOREST_RARE.webp',
        name: 'Enguia de Água Podre',
      },
      dailyProfit: -120000,
      name: 'Garra-Ligeira',
    },
    {
      id: 2,
      item: {
        id: 'T7_FISH_FRESHWATER_FOREST_RARE',
        name: 'Enguia de Água Podre',
      },
      dailyProfit: 425605.4,
      name: 'Cavalo de Montar do Iniciante',
    },
    {
      id: 3,
      item: {
        id: 'T7_FISH_FRESHWATER_FOREST_RARE',
        name: 'Enguia de Água Podre',
      },
      dailyProfit: 80000,
      name: 'Cavalo de Montar do Adepto',
    },
  ];
}
</script>
