<template>
  <section class="search">
    <div class="search__input-section">
      <form class="search__form">
        <input class="search__form-input" type="text" placeholder="Enter your city name">
        <input class="search__form-submit" type="submit" value="FIND" >
      </form>
    </div>
    <div class="search__filter-options">
      starts
    </div>
    <div class="search__results-container">
      <ResultCard v-for="(item, index) in getResults"> </ResultCard>
      <ResultCard title="Autovita" imageUrl="https://www.delondas.lt/wp-content/uploads/2018/08/20180816_154020.jpg" />
      <ResultCard title="Autovita" imageUrl="https://www.delondas.lt/wp-content/uploads/2018/08/20180816_154020.jpg" />
      <ResultCard title="Autovita" imageUrl="https://www.delondas.lt/wp-content/uploads/2018/08/20180816_154020.jpg" />
      <ResultCard title="Autovita" />
    </div>
  </section>
</template>

<script>

import ResultCard from '@/components/ResultCard'
import { mapGetters } from 'vuex'

export default {
  name: 'Search',
  components: {
    ResultCard
  },
  computed: {
    ...mapGetters({
      getResults: 'getResults'
    })
  }
}
</script>

<style lang="scss" scoped>
  .search {

    &__input-section {
      // background: #ff6a73;
      background: linear-gradient(to left, #FFA775, #FF6073);
      //height: 100px;
      padding: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &__results-container {
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;

    }

    &__form-input {
      height: 60px;
      width: 700px;
      padding-left: 24px;
      background: transparent;
      border: 1px solid #ffffff;
      color: #ffffff;

      &::placeholder {
        color: #ffffff;
        opacity: 1;
      }
    }

    &__form-submit {
      width: 100px;
      height: 60px;
      position: relative;
      top: 1px;
      //width: 400px;
      border: 1px solid #ffffff;
      background: #ffffff;
      color: black;
    }
  }
</style>
