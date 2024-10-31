<template>
  <div class="home">
    <h1>Welcome Home</h1>
    <p>This is the home page powered by file-based routing.</p>
  </div>
</template>

<script setup>
definePage({
  meta: {
    title: 'Home',
  },
});
</script>

<style scoped>
.home {
  text-align: center;
  padding: 2rem;
}
</style>