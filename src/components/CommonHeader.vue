<template>
<!-- Navigation -->
  <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
    <div class="container">
      <a class="navbar-brand" href="/">Lighting up a Conrner</a>
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="dropdown" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="dropdown-menu dropdown-menu-right">
          <li class="nav-item dropdown-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item dropdown-item">
            <router-link class="nav-link" to="/profile">Profile</router-link>
          </li>
          <!-- <li class="nav-item dropdown-item">
            <router-link class="nav-link" to="/works">Works</router-link>
          </li> -->
          <li class="nav-item dropdown-item">
            <router-link class="nav-link" to="/blog">Blog</router-link>
          </li>
          <li class="nav-item dropdown-item">
            <router-link class="nav-link" to="/contact">Contact</router-link>
          </li>
        </ul>
      </div>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/profile">Profile</router-link>
          </li>
          <!-- <li class="nav-item">
            <router-link class="nav-link" to="/works">Works</router-link>
          </li> -->
          <li class="nav-item">
            <router-link class="nav-link" to="/blog">Blog</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact">Contact</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
    name: 'common-header'
}
</script>

