<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <h1>PORTFOLIO | ADRIAN THAUS</h1>
      <nav>
        <RouterLink to="/">ABOUT</RouterLink>
        <RouterLink to="/work">WORK</RouterLink>
        <RouterLink to="/contact">CONTACT</RouterLink>
      </nav>
  </header>

  <RouterView />
</template>

<style scoped>
  @import './assets/main.css'
</style>