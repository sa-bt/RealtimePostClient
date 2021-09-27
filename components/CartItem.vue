<template>
  <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
    <div class="flex w-2/5"> <!-- product -->
      <div class="w-20">
        <img class="h-24" :src="product.image" alt="">
      </div>
      <div class="flex flex-col justify-between ml-4 flex-grow">
        <span class="font-bold text-sm">{{product.title}}</span>
        <span class="text-red-500 text-xs">{{product.description}}</span>
        <button @click="remove(product.id)" class="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove
        </button>
      </div>
    </div>
    <div class="flex justify-center w-1/5">
      <svg class="fill-current text-gray-600 w-3" @click="decrement(product.id)" viewBox="0 0 448 512">
        <path
          d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
      </svg>

      <input class="mx-2 border text-center w-8" type="text" v-model="product.quantity">

      <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512" @click="increment(product.id)">
        <path
          d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
      </svg>
    </div>
    <span class="text-center w-1/5 font-semibold text-sm">${{product.price}}</span>
    <span class="text-center w-1/5 font-semibold text-sm">${{product.price*product.quantity}}</span>
  </div>
</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        name: "CartItem",
        props: {
            product: {
                required: true,
                type: Object
            }
        },
        methods: {
            ...mapActions({
                incrementItem: 'cart/increment',
                decrementItem: 'cart/decrement',
                removeItem: 'cart/remove',
            }),
            increment(id) {
                this.incrementItem(id)
            },
            decrement(id) {
                this.decrementItem(id)
            },
            remove(id) {
                this.removeItem(id)
            }
        }
    }
</script>

<style scoped>

</style>
