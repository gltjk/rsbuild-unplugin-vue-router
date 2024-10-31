<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>

  <router-view />

  <div class="route-info">
    <pre>{{ route }}</pre>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
</script>

<style>
nav {
  padding: 2rem;
  text-align: center;
}

nav a {
  margin: 0 0.5rem;
  text-decoration: none;
  color: #2c3e50;
}

nav a.router-link-active {
  color: #42b883;
  font-weight: bold;
}

.route-info {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
</style>