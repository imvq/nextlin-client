<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container">
      <router-link
        id="link-home"
        to="/"
        href="#"
      >
        <div class="white-image">
          <span class="mdi mdi-home" />
        </div>
      </router-link>
      <a
        id="link-home"
        href="https://www.facebook.com/usatchoff"
      >
        <div class="white-image">
          <span class="mdi mdi-facebook" />
        </div>
      </a>
    </div>
  </nav>
</template>

<style scoped>
@import url("https://cdn.materialdesignicons.com/5.0.45/css/materialdesignicons.min.css");

#link-home, #link-author {
  color: white;
  font-size: 24px;
}
</style>

