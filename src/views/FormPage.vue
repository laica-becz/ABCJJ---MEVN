<template>
  <main class="container" style="padding-bottom: 60px; max-width: 700px;">
    <div class="page-head" style="margin-top: 30px; margin-bottom: 24px;">
      <div class="eyebrow">Database Management</div>
      <h1>{{ isEdit ? 'Edit Restaurant' : 'Add a New Restaurant' }}</h1>
      <p style="color: var(--muted); font-size: 15px; margin-top: 6px;">
        {{ isEdit ? 'Update the details of this restaurant in MongoDB.' : 'Fill out the details below to add a new restaurant to dbRestaurants.' }}
      </p>
    </div>

    <div class="card" style="padding: 32px;">
      <form @submit.prevent="handleSubmit">
        
        <div style="margin-bottom: 20px;">
          <label style="display: block; font-size: 11px; font-weight: 600; margin-bottom: 6px; text-transform: uppercase;">Restaurant Name *</label>
          <input class="input" v-model="form.name" placeholder="e.g. Luyag's Burgers" required style="width: 100%;">
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
          <div>
            <label style="display: block; font-size: 11px; font-weight: 600; margin-bottom: 6px; text-transform: uppercase;">Cuisine *</label>
            <input class="input" v-model="form.cuisine" placeholder="e.g. Filipino, Japanese" required style="width: 100%;">
          </div>
          <div>
            <label style="display: block; font-size: 11px; font-weight: 600; margin-bottom: 6px; text-transform: uppercase;">Rating (1 to 5) *</label>
            <input class="input" type="number" step="0.1" min="1" max="5" v-model="form.rating" placeholder="4.5" required style="width: 100%;">
          </div>
        </div>

        <div style="margin-bottom: 20px;">
          <label style="display: block; font-size: 11px; font-weight: 600; margin-bottom: 6px; text-transform: uppercase;">Location / Address *</label>
          <input class="input" v-model="form.address" placeholder="e.g. Angeles City, Pampanga" required style="width: 100%;">
        </div>

        <div style="margin-bottom: 28px;">
          <label style="display: block; font-size: 11px; font-weight: 600; margin-bottom: 6px; text-transform: uppercase;">Contact Number (PH Mobile) *</label>
          <input class="input" v-model="form.contact" placeholder="e.g. 09171234567 or +639171234567" required style="width: 100%;">
          <small style="color: var(--muted); font-size: 11px; margin-top: 4px; display: block;">Must match a valid Philippine mobile number format.</small>
        </div>

        <div style="display: flex; gap: 12px;">
          <button class="btn primary" type="submit" style="flex: 1; justify-content: center; padding: 12px;">
            {{ isEdit ? 'Save Changes' : 'Add Restaurant to Database' }}
          </button>
          <router-link class="btn" to="/restaurants" style="padding: 12px 20px; text-align: center;">Cancel</router-link>
        </div>
      </form>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const isEdit = ref(false)
const editId = ref(null)
const API_URL = import.meta.env.VITE_API_URL || ''

const form = ref({
  name: '',
  cuisine: '',
  rating: '',
  address: '',
  contact: ''
})

onMounted(async () => {
  if (route.query.edit) {
    isEdit.value = true
    editId.value = route.query.edit
    try {
      const res = await fetch(`${API_URL}/api/restaurants/${editId.value}`)
      if (res.ok) {
        const data = await res.json()
        form.value = {
          name: data.name,
          cuisine: data.cuisine,
          rating: data.rating,
          address: data.address,
          contact: data.contact
        }
      }
    } catch (err) {
      console.error('Failed to load restaurant details for editing', err)
    }
  }
})

const handleSubmit = async () => {
  try {
    const url = isEdit.value ? `${API_URL}/api/restaurants/${editId.value}` : `${API_URL}/api/restaurants`
    const method = isEdit.value ? 'PUT' : 'POST'

    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form.value)
    })

    const data = await res.json()

    if (!res.ok) {
      alert(data.error || 'Validation failed. Please check your inputs.')
      return
    }

    alert(isEdit.value ? 'Restaurant updated successfully!' : 'Restaurant added successfully!')
    router.push('/restaurants')
  } catch (err) {
    console.error('Error saving restaurant:', err)
    alert('Something went wrong on the server.')
  }
}
</script>
