export default {

  state() {
    return {
      posts: [],
      prependedPosts: [],
    }
  },

  getters: {
    posts(state) {
      return [...state.prependedPosts, ...state.posts]
    }
  },

  mutations: {
    SET_POSTS(state, posts) {
      state.posts = posts
    },
    PREPEND_POST(state, post) {
      state.prependedPosts = [post, ...state.prependedPosts]
    },

    APPEND_POSTS(state, posts) {
      state.posts = [...state.posts, ...posts]
    }
  },

  actions: {
    async getPosts({commit}) {
      let posts = await this.$axios.get('api/posts')
      commit('SET_POSTS', posts.data.data)
    },

    async createPost({commit}, post) {
      console.log(post)
      let prependPost = await this.$axios.post('api/posts', post)
      commit('PREPEND_POST', prependPost.data.data)
    },

    async getMorePosts({commit, state}, page) {
      let posts = await this.$axios.get(`api/posts?page=${page}&skip=${state.prependedPosts.length}`)
      commit('APPEND_POSTS', posts.data.data)
    }
  }
}
