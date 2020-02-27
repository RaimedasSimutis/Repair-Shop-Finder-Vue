<template>
  <div class="container">
    <ResultCard class="item"
      v-for="(item) in getRepairShopsList"
      v-bind:key="item.id"
      :imageUrl="item.photoReference"
      :adress="item.adress"
      :title="item.name"
      :rating="item.rating"
      :reviews="item.reviews"
      >
    </ResultCard>

  </div>
</template>

<script>

import ResultCard from '@/components/ResultCard'
import { mapGetters } from 'vuex'

export default {
  name: 'CardsGridLayout',
  components: {
    ResultCard
  },
  computed: {
    ...mapGetters({
      getRepairShopsList: 'getRepairShopsList'
    })
  }
}
</script>

<style lang= "scss" scoped>
.container {
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-gap: 30px;
  justify-items: stretch;
  justify-content: space-between;
}

@media (max-width: 1300px) {
  .container {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
