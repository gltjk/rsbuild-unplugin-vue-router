<template>
  <div class="about">
    <h1>About Page</h1>
    <p>This is the about page with route meta information.</p>
  </div>
</template>

<script setup>
definePage({
  meta: {
    title: 'About',
  },
});
</script>

<style scoped>
.about {
  text-align: center;
  padding: 2rem;
}
</style>