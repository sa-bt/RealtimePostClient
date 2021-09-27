// function getCart(){
//   return window.localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
function updateLocalStorage(state) {
  localStorage.setItem('cart', JSON.stringify(state.cart))
}

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

    totalAmount(state) {
      return state.cart.reduce((total, p) => {
        return total + (p.price * p.quantity)
      }, 0);
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


    INCREMENT(state, id) {
      const item = state.cart.find(p => p.id == id);
      if (item) {
        item.quantity++
      }
      updateLocalStorage(state);
    },

    DECREMENT(state, id) {
      const item = state.cart.find(p => p.id == id);
      if (item && item.quantity > 1) {
        item.quantity--
      }
      updateLocalStorage(state);
    },
    REMOVE(state, id) {
      state.cart = state.cart.filter(cart => cart.id != id);
      updateLocalStorage(state);
    },
    CLEAR(state) {
      state.cart = [];
      console.log('clear')
      updateLocalStorage(state);
    },
    SET_CART(state) {
      state.cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
    }

  },

  actions: {
    async addToCart({commit}, product) {
      commit('ADD_TO_CART', product)
    },
    async increment({commit}, id) {
      commit('INCREMENT', id)
    },
    async decrement({commit}, id) {
      commit('DECREMENT', id)
    },

    async remove({commit}, id) {
      commit('REMOVE', id)
    },
    async clear({commit}) {
      commit('CLEAR')
    },


  }
}
