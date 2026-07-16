<script setup>
// import JSONLab from './components/JSONLab.vue'
import BHeader from './components/BHeader.vue'
// import LibraryRegistrationForm from './views/HomeView.vue'
</script>

<template>
  <header class="container">
    <BHeader />
  </header>

  <main class="container">
    <!-- <LibraryRegistrationForm /> -->
    <!-- <JSONLab /> -->
    <router-view></router-view>
  </main>
</template>

<style>
.container {
  max-width: 80vw;
  margin: 0 auto;
  padding: 20px;
  /* background-color: #e0bfbf; */
  border-radius: 10px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* Class selectors */
.form {
  text-align: center;
  margin-top: 50px;
}

/* ID selectors */
#username:focus,
#password:focus,
#isAustralian:focus,
.card {
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card-header {
  padding: 10px;
  border-radius: 10px 10px 0 0;
  background-color: #275fda;
  color: white;
}

.list-group-item {
  padding: 10px;
}

/* header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
} */
</style>
