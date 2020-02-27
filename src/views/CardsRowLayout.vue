<template>
  <div class="container">
    <ResultCard
      v-for="(item) in getRepairShopsList"
      v-bind:key="item.id"
      :imageUrl="item.photoReference"
      :adress="item.adress"
      :title="item.name"
      :rating="item.rating"
      :reviews="item.reviews"
      :displayVerticaly="true"
      >

    </ResultCard>

  </div>
</template>

<script>

import ResultCard from '@/components/ResultCard'
import { mapGetters } from 'vuex'

export default {
  name: 'CardsRowLayout',
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

<style>

</style>
