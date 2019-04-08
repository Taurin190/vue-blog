import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        blogList: [],
        profile: null
    },
    mutations: {
        updateProfile(state, profile) {
            state.profile = profile;
        },
        updateBlogList(state, blogList) {
            state.blogList = blogList;
        }
    },
    getters: {
        getBlogByTitle: (state) => (title) => {
            return state.blogList.find(blog => blog.english_title === title);
        }
    },
    actions: {

    }
})