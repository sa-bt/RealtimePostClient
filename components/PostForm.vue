<template>
  <form @submit.prevent="createPost">
    <div class="mb-3">
      <label for="body" class="block mb-2 text-gray-700 ">Content</label>
      <textarea
        name="body"
        id="body"
        placeholder="Share something..."
        v-model="form.body"
        class="w-full border-2 border-gray-300 rounded px-3 py-2"></textarea>
    </div>
    <button type="submit" class="h-10 px-4 text-center text-white bg-indigo-500 font-medium rounded font-semibold">
      Post
    </button>
  </form>
</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        name: "PostForm",
        data() {
            return {
                form: {
                    body: ''
                }
            }
        },
        methods: {
            ...mapActions({
                createPostAction: 'posts/createPost'
            }),
            async createPost() {
                try {
                    await this.createPostAction(this.form)
                    this.form.body = ''
                } catch (e) {
                    //validation
                    console.log(e)
                }
            }
        }
    }
</script>

<style scoped>

</style>
