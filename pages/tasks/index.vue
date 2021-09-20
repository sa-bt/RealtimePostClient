<template>

  <div class="bg-white shadow-sm rounded p-6 border border-gray-300">
    <div class="border-b pb-6">

      <!-- component -->
      <div class=" flex  flex-col  md:flex-row justify-center  flex-wrap gap-3 mt-10  " >
        <Task v-for="task in tasks" :key="task.id" :task="task"/>
      </div>

    </div>

  </div>
</template>

<script>
    import {mapActions, mapGetters, mapMutations} from 'vuex'
    import Task from '../../components/Task'

    export default {
        components: {
            Task
        },
        data() {
            return {
                page: 1,
            }
        },
        computed: {
            ...mapGetters({
                tasks: 'tasks/tasks',
            })
        },
        methods: {
            ...mapMutations({
                SET_TASKS: 'tasks/SET_LIKES'
            }),
            ...mapActions({
                getTasks: 'tasks/getTasks',
                getMoreTasks: 'tasks/getMoreTasks',
                getSingleTask: 'tasks/getSingleTask',
            }),

        },
        mounted() {
            this.getTasks()
        }
    }
</script>
