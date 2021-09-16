<template>
  <div class="bg-white shadow-sm rounded p-6 border border-gray-300">
    <div class="border-b pb-6">
    <PostForm/>
    </div>

    <Post v-for="post in posts" :key="post.id" :post="post"/>
    <div v-observe-visibility="visibilityChanged"></div>
  </div>
</template>

<script>
    import AppNav from "../components/AppNav";
    import PostForm from "../components/PostForm";
    import Post from "../components/Post";
    import {mapActions,mapGetters} from 'vuex'

    export default {
        components: {Post, PostForm, AppNav},
        data(){
            return{
                page:1
            }
        },
        computed:{
          ...mapGetters({
              posts:'posts/posts',
              likes:'posts/likes',
          })
        },
        methods:{
            ...mapActions({
                getPosts:'posts/getPosts',
                getMorePosts:'posts/getMorePosts'
            }),
            visibilityChanged(isVisible){
                if (!isVisible){
                    return
                }
                ++this.page
                this.getMorePosts(this.page)
            }
        },
        mounted() {
            this.getPosts()
        }
    }
</script>
