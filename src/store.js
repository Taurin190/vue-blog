import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        sort_by: 'id',
        sort_ascending: false,
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
        },
        getBlogList: state => {
            const sortedBlogList = [...state.blogList].sort((a, b) => {
                if (a[state.sort_by] > b[state.sort_by]) { return 1 }
                if (a[state.sort_by] < b[state.sort_by]) { return -1 }
                return 0
            })

            if (!state.sort_ascending) {
                sortedBlogList.reverse()
            }

            return sortedBlogList
        },
    },
    actions: {

    }
})