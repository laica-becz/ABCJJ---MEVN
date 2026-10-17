<template>
  <header class="site-header">
    <div class="container nav">
      <router-link class="brand" to="/">
        <div class="logo"><img src="/images/logo.png" alt="ABCJ Finds Logo"></div>
        <span class="brand-name">ABCJ <span>Finds</span></span>
      </router-link>
      <nav class="nav-links">
        <router-link to="/">Home</router-link>
        <router-link to="/restaurants">Restaurants</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/feedback">Feedback</router-link>
      </nav>
      <router-link class="btn primary sm" to="/restaurants">
        <span>Manage Restaurants</span>
      </router-link>
    </div>
  </header>

  <!-- THIS IS CRITICAL: Without this, views won't display -->
  <router-view />

  <footer class="site-footer">
    <div class="container">
      <b>ABCJ Finds</b><span>Restaurants for your appetite · dbRestaurants</span>
    </div>
  </footer>
</template>

<script setup>
</script>