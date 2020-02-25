<template>
  <button class="slide" :class="style" @click="onClick">
    <slot/>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    outlined: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    style () {
      return this.outlined ? 'outlined' : 'basic'
    }
  },
  methods: {
    onClick (event) {
      this.$emit('click', event)
    }
  }
}
</script>

<style lang="scss" scoped>
  button {
    height: 60px;
    text-align: center;
    line-height: 55px;
    padding: 0 30px;
    transition: .4s;
    position: relative;
  }

  .basic {
    border: 1px solid #ff6a73;
    background: #ff6a73;
    color: #fff;

    &:hover {
      background: #ffffff;
      color: #ff6a73;
    }
  }

  .outlined {
    border: 1px solid #222222;
    color: #222222;
    background: transparent;

    &:hover {
      background: #ff6a73;
      color: #ffffff;
      border-color: #ff6a73;
    }
  }

</style>
