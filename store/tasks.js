export default {

  state() {
    return {
      tasks: []
    }
  },

  getters: {
    tasks(state) {
      return state.tasks
    }
  },

  mutations: {
    SET_TASKS(state, tasks) {
      state.tasks = tasks
    }
  },


  actions: {

    async getTasks({commit}) {
      let tasks = await this.$axios.get('api/tasks')
      commit('SET_TASKS', tasks.data)
    }
  },


}
