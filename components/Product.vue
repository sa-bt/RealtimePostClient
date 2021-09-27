<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg">
    <img class="w-full" :src="product.image" :alt="product.title">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{product.title}}</div>
      <p class="text-gray-700 text-base">{{product.description}}
      </p>
      <button
        class="h-10 px-4 text-center text-white bg-indigo-500 font-medium rounded font-semibold"
        @click="addToCart(product)"
      >Add To Cart
      </button>
    </div>
    <div class="px-6 pt-4 pb-2">
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
    </div>
  </div>
</template>

<script>
    import {mapActions, mapMutations} from 'vuex';

    export default {
        name: "Task",
        props: {
            product: {
                required: true,
                type: Object
            }
        },
        methods: {
            ...mapActions({
                done: 'products/doneTask',
                delete: 'products/deleteTask',
                add: 'cart/addToCart',
            }),
            ...mapMutations({
                setCart: 'cart/SET_CART',
            }),
            async doneTask(product) {
                await this.done(product)
            },
            async deleteTask(product) {
                // console.log(product)
                await this.delete(product)
            },
            async addToCart(product) {
                // this.setCart()
                await this.add(product)
            }
        },
        mounted() {
            this.setCart()
        }

    }
</script>

<style scoped>

</style>
