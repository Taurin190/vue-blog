<template>
<div class="row">
  <div id="blog" class="col-lg-8 col-md-10 mx-auto">
    <h2 class="contents-title">Blogs</h2>
    <div v-for="blog in blogList" :key="blog.id">
      <div class="post-preview">
        <a :href="'/blog/' + blog.english_title">
          <h3 class="post-title">
            {{ blog.title }}
          </h3>
          <h4 class="post-subtitle">
            {{ blog.summary }}
          </h4>
        </a>
        <p class="post-meta">
          {{ blog.published_date }}
        </p>
      </div>
    <hr>
    </div>
    <!-- Pager -->
    <div class="clearfix">
      <a class="btn btn-primary float-right" href="/blog">Older Posts &rarr;</a>
    </div>
  </div>
</div>
</template>
<script>
import {firebaseDB} from '../main'

export default {
    name: "BlogList",
    data() {
      return {
        blogList: []
      }
    },
    mounted: function() {
      this.loadBlogList();
    },
    methods: {
      loadBlogList() {
        var vm = this;
        const blogs = firebaseDB.collection('blogs');
        blogs.get().then( (snap) => {
          vm.blogList = [];
          if (snap.size == 0) {
            return 0;
          }
          snap.docs.forEach(function(doc) {
            vm.blogList.push(doc.data());
          });
        });
      }
    }
}
</script>

