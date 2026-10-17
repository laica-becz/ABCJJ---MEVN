<template>
  <main class="container">
    <div class="page-head">
      <div class="section-head">
        <div>
          <div class="eyebrow">Database</div>
          <h1>Restaurants</h1>
          <p>{{ restaurants.length }} restaurants in dbRestaurants. Edit or delete any record below.</p>
        </div>
        <router-link class="btn primary" to="/form">Add a restaurant</router-link>
      </div>
    </div>

    <div class="toolbar">
      <div class="field" style="flex:2"><input class="input" v-model="filters.q" @input="fetchRestaurants" placeholder="Search by name, cuisine or location" /></div>
      <div class="field">
        <select class="input" v-model="filters.cuisine" @change="fetchRestaurants">
          <option value="">All cuisines</option>
          <option v-for="c in uniqueCuisines" :key="c" :value="c">{{ c }}</option>
        </select>
      </div>
      <div class="field">
        <select class="input" v-model="filters.sort" @change="fetchRestaurants">
          <option value="">Default order</option>
          <option value="rating">Top rated</option>
          <option value="name">Name (A–Z)</option>
          <option value="recent">Recently updated</option>
        </select>
      </div>
    </div>

    <div class="grid">
      <article v-for="r in restaurants" :key="r.restaurant_id" class="card r-card">
        <div class="r-body">
          <div class="row"><span class="tag">{{ r.cuisine }}</span><span class="rate">★ {{ r.rating.toFixed(1) }}</span></div>
          <div class="banner">🍴</div>
          <h3>{{ r.name }}</h3>
          <div class="loc">{{ r.address }}</div>
          <div class="loc">{{ r.contact }}</div>
        </div>
        <div class="r-actions">
          <router-link class="btn sm" :to="`/form?edit=${r.restaurant_id}`">Edit</router-link>
          <button class="btn sm del" @click="deleteRestaurant(r.restaurant_id)">Delete</button>
        </div>
      </article>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const restaurants = ref([])
const uniqueCuisines = ref([])
const filters = ref({ q: '', cuisine: '', sort: '' })

const API_URL = import.meta.env.VITE_API_URL || ''

const fetchRestaurants = async () => {
  const params = new URLSearchParams(Object.entries(filters.value).filter(([, v]) => v))
  const res = await fetch(`${API_URL}/api/restaurants?${params.toString()}`)
  restaurants.value = await res.json()
}

const deleteRestaurant = async (id) => {
  if (confirm('Are you sure you want to delete this restaurant?')) {
    await fetch(`${API_URL}/api/restaurants/${id}`, { method: 'DELETE' })
    fetchRestaurants()
  }
}

const applyRouteQuery = () => {
  if (route.query.q) {
    filters.value.q = route.query.q
  }
  fetchRestaurants()
}

onMounted(async () => {
  applyRouteQuery()
  const res = await fetch(`${API_URL}/api/restaurants`)
  const all = await res.json()
  uniqueCuisines.value = [...new Set(all.map((r) => r.cuisine))]
})

watch(() => route.query.q, (newQ) => {
  filters.value.q = newQ || ''
  fetchRestaurants()
})
</script>
