<template>
  <section class="hero">
    <div class="hero__text-area">
      <h1 class="hero__header animated fadeInDown">Car Care center</h1>
      <p class="hero__paragraph animated fadeInUp">Maecenas interim loremelefied orci aliqual. Aliquam non rhonous magna suspected commodo ut. Maecenas tincidum enim Lorem ipsum dolor sit.</p>
      <div class="hero__buttons-container animated slideInLeft">
        <router-link :to="{ name: 'Search'}"><BaseButton class="hero__button">Find Repair shops</BaseButton></router-link>
        <BaseButton :outlined="true" class="hero__button hero__button--outlined">Find Repair shops</BaseButton>
      </div>
    </div>
    <img class="hero__image animated fadeInRight" src="../assets/images/car-repair-bg.png" alt="">
  </section>
</template>

<script>

import BaseButton from '@/components/BaseButton'

export default {
  name: 'Home',
  components: {
    BaseButton
  }

}
</script>

<style lang="scss" scoped>
  .hero {
    height: 92vh;
    width: 100%;
    background: #fff4f5;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 100px;

    &__text-area {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    }

    &__header {
      font-size: 60px;
      line-height: 80px;
      font-weight: 900;
      margin-bottom: 18px;

    }

    &__paragraph {
      margin-bottom: 45px;
      padding-right: 55px;
      line-height: 30px;
      font-size: 18px;
    }

    &__button {
      margin-right: 24px;

      &--outlined {
        margin-right: 0;
      }
    }

    &__image {
      width: 450px;
      height: auto;
    }

  }
</style>
