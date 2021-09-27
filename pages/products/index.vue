<template>
  <div class="bg-white shadow-sm rounded p-6 border border-gray-300">
    <div class="border-b pb-6">

      <div class=" flex justify-center items-center" v-if="loading">
        <div class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
      </div>


      <!-- component -->
      <div class=" flex  flex-col  md:flex-row justify-center  flex-wrap gap-3 mt-10  ">
        <Product v-for="product in products" :key="product.id" :product="product"/>
      </div>

    </div>

  </div>

</template>

<script>
    import {mapActions, mapGetters, mapMutations} from 'vuex'
    import Product from "../../components/Product";

    export default {
        components: {
            Product
        },
        data() {
            return {
                page: 1,
                loading: true,
                searchInput: '',
                form: {
                    title: '',
                    description: ''
                }
            }
        },
        computed: {
            ...mapGetters({
                products: 'products/products',
            })
        },
        methods: {
            ...mapMutations({
                setCart: 'cart/SET_CART'
            }),
            ...mapActions({
                getProducts: 'products/getProducts',
                searchProducts: 'products/search',
            }),
            search() {
                this.searchProducts(this.searchInput)
            },

        },

        mounted() {
            this.getProducts()
        },

    }
</script>


<style scoped>

</style>
