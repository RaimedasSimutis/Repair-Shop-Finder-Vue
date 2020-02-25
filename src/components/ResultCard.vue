<template>
  <div class="card">
      <div class="card__image" >
        <img :src="imageUrl" alt="">
      </div>
      <h2 class="card__title">
        {{title}}
      </h2>
      <p class="card__description">
        Pusu g 45, Vilnius
      </p>
      <div class="card__rating">
        <img class="card__rating-image" src="../assets/images/star-icon.png" alt="">
        4.7
      </div>

  </div>
</template>

<script>
export default {
  name: 'ResultCard',
  props: {
    title: {
      type: String,
      default: 'no title'
    },
    description: {
      type: String,
      default: 'no description'
    },
    imageUrl: {
      type: String,
      default: 'https://www.aamindus.com/images/notfound.png'
    }
  },
  computed: {
    // style () {
    //   return `background-image: url(${this.imageUrl})`
    // }
  }
}
</script>

<style lang="scss" scoped>
  .card {
    //border: 1px solid black;
    background: #ffffff;
    // box-shadow: 0px 0px 22px 0px rgba(0,0,0,0.48);

    box-shadow: 0px 6px 26px 0px rgba(0, 0, 0, 0.06);
    transition: .4s;

    &:hover + img {
      transform: scale(1.1);
    }

    &__image {
      width: 250px;
      height: 200px;
      // background-size: cover;
      // background-position: center;
      // overflow: hidden;

      // border-radius: 4px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform .8s ease;

      }

    }

    &__title {
      font-size: 24px;
      font-weight: 600;
      padding: 0 20px;
    }

    &__description {
      padding: 0 20px;
    }

    &__rating-image {
      width: 15px;
      height: auto;
    }

    &__read-more {
      background: #ff6a73;
      height: 20px;
    }
  }
</style>>
