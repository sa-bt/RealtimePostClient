<template>
  <div class="flex items-center justify-between border-b border-gray-300 p-3">
    <div class="flex">
      <img :src="post.user.avatar" :alt="post.user.name" class="w-12 h-12 rounded-full mr-4">
      <div>
        <span class="font-semibold">{{post.user.name}}</span>
        <span class="text-sm text-gray-500">{{post.created_at}}</span>
        <p>{{post.body}}</p>
      </div>
    </div>
    <div>
      <Like/>
    </div>
  </div>
</template>

<script>
    import Like from '../components/Like'

    export default {
        components: {Like},
        name: "Post",
        props:{
          post:{
              required:true,
              type:Object
          }
        },
    }
</script>

<style scoped>

</style>
