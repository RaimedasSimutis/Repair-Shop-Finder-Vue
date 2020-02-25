<template>
  <nav class="navbar">
    <div class="navbar__brand">
      <img src="../assets/images/logo.png" alt="">
    </div>
    <div class="navbar__menu">
      <ul class="navbar__menu-list">
        <li class="navbar__menu-list-item"><a href="" class="navbar__menu-link">Home</a></li>
        <li class="navbar__menu-list-item"><a href="" class="navbar__menu-link">About</a></li>
        <li class="navbar__menu-list-item"><a href="" class="navbar__menu-link">Services</a></li>
        <li class="navbar__menu-list-item"><a href="" class="navbar__menu-link">Blog</a></li>
        <li class="navbar__menu-list-item"><a href="" class="navbar__menu-link">Pages</a></li>
        <li class="navbar__menu-list-item"><a href="" class="navbar__menu-link">Contacts</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style lang="scss" scoped>
  .navbar {
    background: #ffffff;
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);
    height: 70px;
    width: 100%;
    position: sticky;
    top: 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 100px;

    &__brand {
      display: flex;
      justify-content: space-between;
      align-items: center;

      img {
        width: 114px;
        height: auto;
      }
    }

    &__menu-list {
      display: flex;
      list-style-type: none;
    }

    &__menu-link {
      text-decoration: none;
      color: #000066;
      padding-left: 40px;
      font-size: 18px;
      font-weight: 500;
      padding-top: 30px;
      padding-bottom: 30px;
      transition: all 0.3s ease-in-out;

      &:hover {
        color: #ff6a73;
      }
    }

  }
</style>
