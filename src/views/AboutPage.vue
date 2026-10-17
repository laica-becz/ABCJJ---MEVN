<template>
  <section class="about-hero">
    <div class="ring r1"></div>
    <div class="container about-grid">
      <div>
        <div class="eyebrow">Info</div>
        <h1>About <em>ABCJ Finds</em></h1>
        <p>ABCJ Finds is a responsive restaurant database application powered by MongoDB. Search, filter, add, edit, and delete restaurant information through one clear interface[cite: 5].</p>
        <router-link class="btn primary" to="/restaurants">View restaurants</router-link>
      </div>
      <div class="card info-card">
        <div class="ico info-icon">▤</div>
        <div class="eyebrow" style="margin:10px 0 0;font-size:9px">Platform information</div>
        <h3>One organized directory</h3>
        <p>Each MongoDB record includes the restaurant name, cuisine, Philippine location, rating, and contact number[cite: 5].</p>
      </div>
    </div>
  </section>

  <main class="container">
    <section class="block center purpose-section">
      <div class="eyebrow">Purpose</div>
      <h2 class="about-heading">Why we built it</h2>
      <p class="sub">We built ABCJ Finds to keep restaurant information in one accessible place and make database management straightforward[cite: 5].</p>
      <div class="three about-cards">
        <div class="card feat"><div class="ico">▤</div><h3>Reliable records</h3><p>Keep essential restaurant details complete and consistent with built-in validation[cite: 5].</p></div>
        <div class="card feat"><div class="ico gold">▦</div><h3>Local discovery</h3><p>Find restaurants across Pampanga by name, cuisine, or location[cite: 5].</p></div>
        <div class="card feat"><div class="ico sage">♥</div><h3>Simple management</h3><p>Add, update, and remove records through a clean interface[cite: 5].</p></div>
      </div>
    </section>
  </main>

 <section class="team-sec">
    <div class="container center">
      <div class="eyebrow">The ABCJ team</div>
      <h2 class="about-heading">Developers</h2>
      <p class="sub">ABCJ Finds was designed and developed by our team members[cite: 5].</p>
      
      <!-- Updated grid layout to force 5 cards in a straight line -->
      <div class="five about-cards" style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 14px; margin-top: 26px;">
        <div class="card dev"><div class="av" style="background:#b9522f">A</div><h3>Justine Enriquez</h3><div class="role">Database &amp; Website Development</div><p>Contributed to database management and website development for ABCJ Finds[cite: 5].</p></div>
        <div class="card dev"><div class="av" style="background:#e8a53a">B</div><h3>Angel Pineda</h3><div class="role">Design &amp; Front-End Development</div><p>Contributed to the website's visual design, layout, and front-end development[cite: 5].</p></div>
        <div class="card dev"><div class="av" style="background:#5b6b50">C</div><h3>Franchesca Sison</h3><div class="role">Front-End &amp; Code Structure</div><p>Contributed to the front-end interface and organization of the website's code[cite: 5].</p></div>
        <div class="card dev"><div class="av" style="background:#26201c">J</div><h3>Bianca Zepeda</h3><div class="role">Database &amp; Back-End Facilitator</div><p>Contributed to database operations and back-end development support[cite: 5].</p></div>
        <div class="card dev"><div class="av" style="background:#8b4513">J</div><h3>Steven San Diego</h3><div class="role">Full-Stack &amp; Integration Support</div><p>Contributed to system integration and back-end connectivity support.</p></div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No JavaScript logic needed for static informational page
</script>