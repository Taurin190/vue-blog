<template>
<div class="row">
  <div class="col-lg-8 col-md-10 mx-auto">
    <h2 class="subheading">Social</h2>
    <div class="col-lg-12 col-md-12">
      <h3 class="subheading">Github</h3>
      <a href="http://github.com/Taurin190" class="gh-contributions" data-gh-username="Taurin190" target="_blank">Taurin190's contributions</a>
    </div>
    <div class="col-lg-6 col-md-6 rounded float-left">
      <h3 class="subheading">Twitter</h3>
      <a class="twitter-timeline" data-width="600" data-height="800" href="https://twitter.com/Tauitter51?ref_src=twsrc%5Etfw">Tweets by Tauitter51</a>
    </div>
    <div class="col-lg-6 col-md-6 rounded float-right">
      <h3 class="subheading">Booklog</h3>
      <Booklog />
    </div>
  </div>
</div>
</template>
<script>
import Booklog from '@/components/Booklog.vue'

export default {
  name: 'SocialActivity',
  components: {
    Booklog
  },
  head() {
    return {
      script: [
        {src: 'https://ikuwow.github.io/yourcontributions/widget.min.js'},
        {src: 'https://platform.twitter.com/widgets.js', async: true},
      ]
    }
  }
}
</script>
<style>

</style>

