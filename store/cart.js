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
    count(state) {
      return state.cart.length;
    },
    getCart(state) {
      return state.cart;
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
