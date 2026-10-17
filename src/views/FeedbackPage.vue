<template>
  <main class="container" style="padding-bottom: 60px;">
    <div class="page-head" style="margin-bottom: 30px;">
      <div class="eyebrow">Let's talk</div>
      <h1>Feedback &amp; contact</h1>
      <p style="color: var(--muted); font-size: 15px; margin-top: 6px;">Have a correction, suggestion, or restaurant to recommend? We’d love to hear from you.</p>
    </div>

    <div class="feedback-grid" style="display: grid; grid-template-columns: 1.2fr 1fr; gap: 24px; align-items: start;">
      
      <!-- Left Card: Send us a message form -->
      <div class="card form-card" style="padding: 32px;">
        <h2 style="font-size: 24px; font-family: var(--serif); margin-bottom: 6px;">Send us a message</h2>
        <p style="color: var(--muted); font-size: 13px; margin-bottom: 24px;">We usually respond within two working days.</p>

        <form @submit.prevent="handleSubmit">
          <label class="f" style="display: block; font-size: 11px; font-weight: 600; margin-bottom: 16px;">Name
            <input class="input" v-model="form.name" placeholder="Your full name" style="margin-top: 5px; width: 100%;" required>
          </label>

          <label class="f" style="display: block; font-size: 11px; font-weight: 600; margin-bottom: 16px;">Email
            <input class="input" type="email" v-model="form.email" placeholder="you@example.com" style="margin-top: 5px; width: 100%;" required>
          </label>

          <label class="f" style="display: block; font-size: 11px; font-weight: 600; margin-bottom: 24px;">Feedback
            <textarea class="input" v-model="form.feedback" placeholder="Tell us what's on your mind..." rows="5" style="margin-top: 5px; width: 100%; resize: vertical;" required></textarea>
          </label>

          <button class="btn primary" type="submit" style="width: 100%; justify-content: center; padding: 12px;">Submit Feedback &rarr;</button>
        </form>
      </div>

      <!-- Right Card: Direct contact info -->
      <div class="card contact-card" style="background: #5b6b50; color: #fff; padding: 32px; border-radius: var(--radius);">
        <div class="eyebrow" style="color: #e8a53a;">Direct contact</div>
        <h2 style="font-size: 26px; font-family: var(--serif); margin: 6px 0 12px; color: #fff;">Other ways to reach us</h2>
        <p style="font-size: 13px; color: #e6ebdf; margin-bottom: 28px;">For restaurant updates and database concerns, connect with our team directly.</p>

        <div style="display: flex; flex-direction: column; gap: 20px;">
          <!-- Email -->
          <div style="display: flex; gap: 14px; align-items: flex-start;">
            <div class="ico" style="background: rgba(255,255,255,0.15); color: #fff; display: flex; align-items: center; justify-content: center;">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </div>
            <div>
              <div style="font-size: 10px; text-transform: uppercase; letter-spacing: 0.1em; color: #d0dcc5;">Support Email</div>
              <div style="font-size: 14px; font-weight: 500; margin-top: 2px;">hello@abcjfinds.ph</div>
            </div>
          </div>
          <!-- Phone -->
          <div style="display: flex; gap: 14px; align-items: flex-start;">
            <div class="ico" style="background: rgba(255,255,255,0.15); color: #fff; display: flex; align-items: center; justify-content: center;">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            </div>
            <div>
              <div style="font-size: 10px; text-transform: uppercase; letter-spacing: 0.1em; color: #d0dcc5;">Support Number</div>
              <div style="font-size: 14px; font-weight: 500; margin-top: 2px;">+63 917 555 0148</div>
            </div>
          </div>
          <!-- Location -->
          <div style="display: flex; gap: 14px; align-items: flex-start;">
            <div class="ico" style="background: rgba(255,255,255,0.15); color: #fff; display: flex; align-items: center; justify-content: center;">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            </div>
            <div>
              <div style="font-size: 10px; text-transform: uppercase; letter-spacing: 0.1em; color: #d0dcc5;">Location Address</div>
              <div style="font-size: 14px; font-weight: 500; margin-top: 2px;">Angeles City, Pampanga, Philippines</div>
            </div>
          </div>
        </div>

        <div style="margin-top: 36px; padding: 16px; background: rgba(0,0,0,0.15); border-radius: 8px;">
          <div style="font-size: 10px; text-transform: uppercase; letter-spacing: 0.1em; color: #d0dcc5;">Support Hours</div>
          <div style="font-size: 13px; font-weight: 500; margin-top: 4px;">Monday–Friday · 9:00 AM–5:00 PM</div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { reactive } from 'vue'
const form = reactive({ name: '', email: '', feedback: '' })
const handleSubmit = () => {
  alert('Thank you for your feedback! We have received your message.')
  form.name = ''
  form.email = ''
  form.feedback = ''
}
</script>