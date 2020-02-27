<template>
  <section class="search">
    <div class="search__input-section">
      <form class="search__form" @submit.prevent="postForm">
        <input class="search__form-input" type="text" placeholder="Enter your city name" v-model="cityName">
        <input class="search__form-submit" type="submit" value="FIND" >
      </form>
    </div>
    <div class="search__filter-options">
      <router-link :to="{ name: 'Row'}" active-class="search__filter-options--active"><img class="search__filter-layout-icon " src="../assets/images/display-mode-row-icon.png" alt=""></router-link>
      <router-link :to="{ name: 'Grid'}" active-class="search__filter-options--active"><img class="search__filter-layout-icon" src="../assets/images/display-mode-grid-icon.png" alt=""></router-link>
    </div>
    <div class="search__results-container">
      <router-view></router-view>
    </div>
    <!-- <div>
      <button @>
        Load more
      </button>
    </div> -->
  </section>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Search',
  components: {

  },
  data () {
    return {
      cityName: ''
    }
  },
  computed: {
    ...mapGetters({
      getRepairShopsList: 'getRepairShopsList'
    })

  },
  methods: {
    ...mapActions({
      fetchRepairShops: 'fetchRepairShops',
      fetchMoreRepairShops: 'fetchMoreRepairShops'
    }),
    postForm () {
      // console.log('postinu')
      this.fetchRepairShops(this.cityName)
    },
    laodMore () {
      // console.log('loading more result')
      this.fetchMoreRepairShops()
    }
  }
}
</script>

<style lang="scss" scoped>
  .search {
    &__input-section {
      background: linear-gradient(to left, #ffa775, #ff6073);
      padding: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &__filter-options {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding: 0 100px;

      &--active {
        filter: invert(59%) sepia(24%) saturate(6574%) hue-rotate(317deg) brightness(101%) contrast(102%);
      }
    }

    &__filter-layout-icon {
      width: 25px;
      height: 25px;
      margin: 5px;
      filter: invert(61%) sepia(27%) saturate(0%) hue-rotate(246deg) brightness(95%) contrast(86%);
    }

    &__results-container {
      margin: 0 105px 0 105px;
    }

    &__form-input {
      height: 60px;
      width: 700px;
      padding-left: 24px;
      background: transparent;
      border: 1px solid #fff;
      color: #fff;

      &::placeholder {
        color: #fff;
        opacity: 1;
      }
    }

    &__form-submit {
      width: 100px;
      height: 60px;
      position: relative;
      border: 1px solid #fff;
      background: #fff;
      color: black;
    }
  }
</style>
