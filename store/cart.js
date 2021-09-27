// function getCart(){
//   return window.localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
// }
export default {
  state() {
    return {
      cart: [],
    }
  },

  getters: {
    carts(state) {
      return [...state.prependedPosts, ...state.carts]
    },

  },

  mutations: {
    ADD_TO_CART(state, product) {
      const item = state.cart.find(p => p.id == product.id);
      if (!item) {
        state.cart.push({
          ...product,
          quantity: 1
        })
      } else {
        item.quantity++;
      }
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    SET_CART(state) {
      console.log('hire')
      state.cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
    }

  },

  actions: {
    async addToCart({commit}, product) {
      // let carts = await this.$axios.get('api/carts')
      commit('ADD_TO_CART', product)
    }


  }
}
