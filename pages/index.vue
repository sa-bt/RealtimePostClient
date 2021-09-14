<template>
  <div class="bg-white shadow-sm rounded p-6 border border-gray-300">
    <div class="border-b pb-6">
    <PostForm/>
    </div>
    <Post v-for="post in posts" :key="post.id" :post="post"/>
  </div>
</template>

<script>
    import AppNav from "../components/AppNav";
    import PostForm from "../components/PostForm";
    import Post from "../components/Post";
    import {mapActions,mapGetters} from 'vuex'

    export default {
        components: {Post, PostForm, AppNav},
        computed:{
          ...mapGetters({
              posts:'posts/posts'
          })
        },
        methods:{
            ...mapActions({
                getPosts:'posts/getPosts'
            })
        },
        mounted() {
            this.getPosts()
        }
    }
</script>
