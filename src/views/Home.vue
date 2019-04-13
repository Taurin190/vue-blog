<template>
  <div class="home">
    <header class="masthead">
      <!-- <div class="overlay"></div> -->
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <div class="site-heading">
              <h1>Koichi Taura's Page</h1>
              <span class="subheading">Software Engineer</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  <div class="main container">
    <ProfileOverview />
    <BlogList :isTop="true" />
  </div>
</div>
</template>

<script>
// @ is an alias to /src
import ProfileOverview from '@/components/ProfileOverview.vue'
import BlogList from '@/components/BlogList.vue'

export default {
  name: 'home',
  components: {
    ProfileOverview,
    BlogList
  },
  head: {
    title: {
      inner: 'Lighting up a Corner',
      separator: '-',
      complement: 'Koichi Taura\'s Page'
    }
  }
}
</script>
