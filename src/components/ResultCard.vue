<template>
  <div class="card " :class="addCardClassVertical">
    <div class="card__image" :class="addImageClassVertical" >
      <img :src="urlCheck" alt="">
    </div>
    <div class="card__content">
      <p class="card__location">{{adress}}</p>
      <h2 class="card__title">
        {{title}}
      </h2>
      <p class="card__description">
        {{description}}
      </p>
      <div class="card__rating">
        <img class="card__rating-image" src="../assets/images/star-icon.png" alt="">
        {{rating}} ({{reviews}})
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResultCard',
  props: {
    displayVerticaly: {
      type: Boolean,
      default: false
    },
    imageUrl: {
      type: String,
      default: 'https://www.aamindus.com/images/notfound.png'
    },
    adress: {
      type: String,
      default: 'no adress'
    },
    title: {
      type: String,
      default: 'no title'
    },
    description: {
      type: String,
      default: 'no description'
    },
    rating: {
      type: Number,
      default: 0
    },
    reviews: {
      type: Number,
      default: 0
    }
  },
  computed: {
    // style () {
    //   return `background-image: url(${this.imageUrl})`
    // }
    urlCheck () {
      return this.imageUrl ? this.imageUrl : 'https://www.aamindus.com/images/notfound.png'
    },
    addCardClassVertical () {
      return this.displayVerticaly ? 'card--vertical' : ''
    },
    addImageClassVertical () {
      return this.displayVerticaly ? 'card__image--vertical' : ''
    }
  }
}
</script>

<style lang="scss" scoped>
  .card {
    //border: 1px solid black;
    background: #fff;
    // box-shadow: 0px 0px 22px 0px rgba(0,0,0,0.48);
    // margin: 20px 8px;
    box-shadow: 0 6px 26px 0 rgba(0, 0, 0, 0.06);
    // transition: 0.4s;
    transition: all 0.2s ease-in-out;
    // width: 246px;

    &:hover {
      cursor: pointer;
    }

    &:hover &__image img {
      transform: scale(1.1);
    }

    &--vertical {
      display: flex;
      margin-bottom: 30px;
      // background: #ff6a73;
    }

    &__image {
      // width: 246px;
      width: 100%;
      height: 164px;
      // transition: all 0.2s ease-in-out;
      overflow: hidden;
      // background-size: cover;
      // background-position: center;
      // overflow: hidden;

      // border-radius: 4px;

      &--vertical {
        width: 400px;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.8s ease;
      }
    }

    &__location {
      font-size: 13px;
      margin: 10px 0 0 0;
      padding: 0 20px;
    }

    &__title {
      font-size: 20px;
      font-weight: 600;
      padding: 0 20px;
      margin: 0 0 20px 0;
    }

    &__description {
      margin: 0 0;
      padding: 0 20px;
    }

    &__rating {
      padding: 0 20px 10px 20px;
      font-size: 13px;
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
