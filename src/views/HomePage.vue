<template>
  <section class="hero">
    <div class="ring r1"></div><div class="ring r2"></div>
    <div class="container hero-grid">
      <div>
        <div class="eyebrow">ABCJ Presents</div>
        <h1>Find restaurants for <em>your appetite.</em></h1>
        <p class="lead">A thoughtfully organized restaurant database for discovering, managing, and keeping every local favorite up to date.</p>
        <form class="search" @submit.prevent="handleSearch">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#b9522f" stroke-width="2" stroke-linecap="round"><path d="M12 21s-7-6.2-7-11a7 7 0 1 1 14 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>
          <input v-model="searchQuery" placeholder="Enter a location in Pampanga" aria-label="Search location">
          <button class="btn primary sm" type="submit">Find restaurants</button>
        </form>
        <div class="hero-actions">
          <router-link class="btn primary" to="/restaurants">Explore restaurants</router-link>
          <router-link class="btn" to="/form">Add a restaurant</router-link>
        </div>
      </div>
      
      <div class="plate" aria-hidden="true">
        <div class="rim"></div>
        <div class="inner"><div class="disc"><div><b>GOOD FOOD</b><small>MADE FRESH</small></div></div></div>
        <span class="chip a">Local</span><span class="chip b">Fresh</span>
      </div>
    </div>
  </section>

  <main class="container">
    <section class="block">
      <div class="section-head">
        <div><div class="eyebrow">At a glance</div><h2>Your restaurant dashboard</h2></div>
        <span class="note">Everything in MongoDB, neatly summarized.</span>
      </div>
      
      <div class="stats">
        <div class="card stat"><div class="ico">⌂</div><div><div class="label">Total restaurants</div><div class="num">{{ stats.total ?? '–' }}</div><div class="sub">Live database records</div></div></div>
        <div class="card stat"><div class="ico gold">▦</div><div><div class="label">Recent updates</div><div class="num">{{ stats.recent ?? '–' }}</div><div class="sub">In the past 7 days</div></div></div>
        <div class="card stat"><div class="ico sage">★</div><div><div class="label">Average rating</div><div class="num">{{ stats.averageRating ? stats.averageRating.toFixed(1) : '–' }}</div><div class="sub">Across all restaurants</div></div></div>
      </div>
    </section>

    <section class="block">
      <div class="section-head">
        <div><div class="eyebrow">Community favorites</div><h2>Top-rated restaurants</h2></div>
        <span class="note">Our top 5 finds, ranked by user ratings.</span>
      </div>
      <div class="top-grid">
        <router-link v-for="r in topRestaurants" :key="r.restaurant_id" class="card top-card" :to="`/restaurants?q=${encodeURIComponent(r.name)}`">
          <div class="row"><span class="tag">{{ r.cuisine }}</span><span class="rate">★ {{ r.rating.toFixed(1) }}</span></div>
          <div class="avatar">{{ r.name[0].toUpperCase() }}</div>
          <h3>{{ r.name }}</h3>
          <div class="loc">{{ r.address }}</div>
        </router-link>
      </div>
    </section>

    <section class="block">
      <div class="section-head">
        <div><div class="eyebrow">Recently touched</div><h2>Latest updates</h2></div>
        <router-link class="link" to="/restaurants">View all</router-link>
      </div>
      <div class="card list">
        <div v-for="r in latestRestaurants" :key="r.restaurant_id" class="list-row">
          <div class="avatar">{{ r.name[0].toUpperCase() }}</div>
          <div><b>{{ r.name }}</b><small>{{ r.cuisine }}</small></div>
          <div class="hide-sm badge">{{ r.address }}</div>
          <div class="rate">★ {{ r.rating.toFixed(1) }}</div>
          <div class="hide-sm badge">{{ r.createdAt === r.updatedAt ? 'Added' : 'Updated' }}</div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const searchQuery = ref('')
const stats = ref({ total: 0, recent: 0, averageRating: 0 })
const topRestaurants = ref([])
const latestRestaurants = ref([])

// Automatically switches between local proxy and live Render backend
const API_URL = (import.meta.env.VITE_API_URL || '').replace(/\/$/, '')

const handleSearch = () => {
  router.push({ path: '/restaurants', query: { q: searchQuery.value } })
}

onMounted(async () => {
  try {
    const [statsRes, topRes, latestRes] = await Promise.all([
      fetch(`${API_URL}/api/stats`),
      fetch(`${API_URL}/api/restaurants?sort=rating`),
      fetch(`${API_URL}/api/restaurants?sort=recent`)
    ])
    stats.value = await statsRes.json()
    const topData = await topRes.json()
    const latestData = await latestRes.json()
    topRestaurants.value = topData.slice(0, 5)
    latestRestaurants.value = latestData.slice(0, 3)
  } catch (err) {
    console.error('Failed to load homepage data', err)
  }
})
</script>
