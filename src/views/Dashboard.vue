<template>
  <TheContainer>
    <v-row>
      <v-col
        v-for="{ id, name, dailyProfit, item } in crafts"
        :key="id"
        cols="12"
        sm="10"
        md="auto"
      >
        <v-card
          color="primary"
          class="background lighten-1"
          hover
          rounded
          :to="`crafts/${id}`"
          min-width="350"
          style="position: relative"
        >
          <v-btn
            @click.prevent="() => log()"
            depressed
            fab
            small
            absolute
            right
            color="primary"
            top
            class="mr-n7 mt-2"
          >
            <v-icon small> mdi-delete </v-icon>
          </v-btn>

          <v-card-title>
            <v-avatar tile>
              <v-img
                :src="`https://render.albiononline.com/v1/item/${item.id}@${item.enchantmentLevel}.png`"
              />
            </v-avatar>

            <span>
              {{ name }}
            </span>

            <v-spacer />
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
        id: 'T7_FISH_FRESHWATER_FOREST_RARE',
        name: 'Enguia de Água Podre',
        enchantmentLevel: 0,
      },
      dailyProfit: 120000,
      name: 'Enguia de Água Podre',
    },
    {
      id: 2,
      item: {
        id: 'T5_MOUNT_COUGAR_KEEPER',
        name: 'Garra Ligeira',
        enchantmentLevel: 0,
      },
      dailyProfit: 425605.4,
      name: 'Garra Ligeira',
    },
    {
      id: 3,
      item: {
        id: 'T4_MOUNT_HORSE',
        name: 'Cavalo de Montar do Adepto',
        enchantmentLevel: 0,
      },
      dailyProfit: -80000,
      name: 'Cavalo de Montar do Adepto',
    },
    {
      id: 4,
      item: {
        id: 'T8_MEAL_STEW_FISH',
        name: 'Guisado de Enguia de Água Podre',
        enchantmentLevel: 0,
      },
      dailyProfit: -80000,
      name: 'Guisado de Enguia de Água Podre',
    },
    {
      id: 5,
      item: {
        id: 'T7_FISH_FRESHWATER_FOREST_RARE',
        name: 'Enguia de Água Podre',
        enchantmentLevel: 0,
      },
      dailyProfit: 120000,
      name: 'Enguia de Água Podre',
    },
    {
      id: 6,
      item: {
        id: 'T8_MEAL_STEW_FISH',
        name: 'Guisado de Enguia de Água Podre',
        enchantmentLevel: 3,
      },
      dailyProfit: -80000,
      name: 'Guisado de Enguia de Água Podre',
    },
  ];

  getItemIcon({ id }: Item) {
    this.$http.get('item/icon', { params: { id } }).then(({ data }) => {
      const reader = new FileReader();

      reader.readAsBinaryString(data);

      return reader.result;
    });
  }

  log() {
    console.log('deletado');
  }
}
</script>
