<template>
<div v-html="this.widgetScript">
</div>
</template>
<script>
import axios from 'axios';
axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
export default {
  name: 'Booklog',
  data() {
      return {
          widgetScript: '<script id="booklog_minishelf" type="text/javascript" />',
      }
  },
  head() {
    return {
      script: [
        {src: '/js/booklog.js'},
      ]
    }
  },
  created() {

  },
  mounted: function() {
    this.readBooklogApi();
  },
  methods: {
      readBooklogApi() {
        let booklogScript = document.createElement('script')
        booklogScript.setAttribute('src', 'https://api.booklog.jp/json/taurin190?category=0&count=50&callback=booklog')
        document.body.appendChild(booklogScript)
      }
  } 
}
</script>
