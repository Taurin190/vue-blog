<template>
  <div id="app">
    <!-- Navigation -->
  <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
    <div class="container dropdown">
      <a class="navbar-brand" href="/">Lighting up a Conrner</a>
      <button class="navbar-toggler navbar-toggler-right dropdown-toggle" type="button" data-toggle="dropdown" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
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
          <li class="nav-item dropdown-item">
            <router-link class="nav-link" to="/works">Works</router-link>
          </li>
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
          <li class="nav-item">
            <router-link class="nav-link" to="/works">Works</router-link>
          </li>
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
    <router-view/>
     <!-- Footer -->
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <ul class="list-inline text-center">
            <li class="list-inline-item">
              <a href="https://twitter.com/Tauitter51">
                <span class="fa-stack fa-lg">
                    <i class="fas fa-circle fa-stack-2x"></i>
                    <i class="fab fa-twitter fa-stack-1x fa-inverse"></i>
                  </span>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="https://github.com/Taurin190">
                <span class="fa-stack fa-lg">
                    <i class="fas fa-circle fa-stack-2x"></i>
                    <i class="fab fa-github fa-stack-1x fa-inverse"></i>
                  </span>
              </a>
            </li>
          </ul>
          <p class="copyright text-muted">Copyright &copy; Your Website 2018</p>
        </div>
      </div>
    </div>
  </footer>
  </div>
</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
