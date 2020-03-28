<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container">
      <router-link
        id="link-home"
        to="/"
        href="#"
      >
        <div class="home-image">
          <i class="material-icons">home</i>
        </div>
      </router-link>
      <router-link
        to="/"
        class="navbar-brand"
      >
        About
      </router-link>
    </div>
  </nav>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");

#link-home {
  color: white;
}
</style>

