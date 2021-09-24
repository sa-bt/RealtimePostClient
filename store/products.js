export default {

  state() {
    return {
      products: [],
      search: []
    }
  },

  getters: {
    products(state) {
      return state.products
    }
  },

  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products
    },
    APPEND_PRODUCT(state, product) {
      state.products = [...state.products, product]
    },
    CHANGE_STATE_PRODUCT(state, data) {
      const index = state.products.findIndex(product => product.id == data.id)
      state.products.splice(index, 1, data)

    },
    DELETE_PRODUCT(state, data) {
      const index = state.products.findIndex(product => product.id == data.id)
      state.products.splice(index, 1)

    },
  },


  actions: {

    async getProducts({commit}) {
      let products = await this.$axios.get('api/products')
      commit('SET_PRODUCTS', products.data)
    },

    async search({commit}, word) {
      let products = await this.$axios.get(`api/products/search?word=${word}`)
      commit('SET_PRODUCTS', products.data)
    },

    async createProduct({commit}, data) {
      try {
        let product = await this.$axios.post(`api/products`, data)
        commit('APPEND_PRODUCT', product.data)
      } catch (e) {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this imaginary file!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it',

            show_class:
              {
                popup: 'swal2-show',
                backdrop: 'swal2-backdrop-show',
                icon: 'swal2-icon-show'
              }
          }
        )
      }
    }
    ,

    async doneProduct({commit}, data) {
      let product = await this.$axios.post(`api/products/${data.id}/done`)
      commit('CHANGE_STATE_PRODUCT', product.data)
      Swal.fire({
        title: 'product is done',
        icon: 'success',
        position:"top",
        timerProgressBar:true,
        timer:3000,
        showConfirmButton:false,
        toast:true
      })
    }
    ,

    async deleteProduct({commit}, data) {
      let product = await this.$axios.delete(`api/products/${data.id}`)
      commit('DELETE_PRODUCT', data)
      Swal.fire({
        title: 'product is changed',
        icon: 'success',
        position:"top",
        timerProgressBar:true,
        timer:3000,
        showConfirmButton:false,
        toast:true
      })
    }
  }
  ,


}
