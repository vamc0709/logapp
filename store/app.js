const state = () => ({
  token: null,
  user_id: null,
  name: null,
  email: null,
  hashed_password: null,
  title: null,
  description: null,
  stacktrace: null,
  my_logs: [],
  logs: [],
  log_id: null,
  current_tags: [],
  all_tags: [],
})

const getters = {}
const mutations = {
  setToken(state, data) {
    state.token = data.token
    state.user_id = data.id
    state.name = data.name
    state.email = data.email
    state.hashed_password = data.hashed_password
    // state.title = data.title
    // state.description = data.description
    // state.stacktrace = data.stacktrace
    // state.my_logs = data.my_logs
    // state.logs = data.logs
    // state.log_id = data.log_id
    // state.current_tags = data.current_tags
    // state.AllTags = data.AllTags
  },

setList(state, data) {
    state.logs = data
  },

  createUser(state, data) {
    state.MyUsers.unshift(data)
  },

  updateDescription(state, data) {
    state.Description = data
  },

  updateLog(state, data) {
    const index = state.logs.findIndex((log) => log.id === data.id)
    state.logs[index].title = data.title
  },

  updateUser(state, data) {
    const index = state.users.findIndex((user) => user.id === user.id)
    state.users[index].title = data.title
  },
  setTags(state, data) {
    console.log('tags ' + data)
    state.current_tags.push({ tagText: data })
    // console.log('after set' + state.current_comments)
  },
}

const actions = {
  async login(state, data) {
    try {
      // Hit the backend api.
      const res = await this.$axios.post('user/login/', {
        email: data.email,
        password: data.password,
      })
      // console.log(res.data.id)

      this.commit('setToken', res.data)
      if (res.status == 200) {
        console.log(res)

        // Set the token after the call is success.
        this.$axios.setHeader('Authorization', 'Bearer ' + res.data.token)
        // move to the homepage from login page.
        this.$router.push('/log')
      } else {
        alert('Invalid email or password')
      }
    } catch (e) {
      console.log(' error while logging in: ' + e)
      alert(' cannot login right now, please try again later')
    }
  },

  async getAllLogs({ commit, state }) {
    const res = await this.$axios.get('log')
    commit('setList', res.data)
  },

  async deleteLog({ commit }, id) {
    // console.log(id)
    const res = await this.$axios.delete('log/' + id)
    console.log(res, 'delete')
  },

  async createUser({ commit, state }, data) {
    // console.log(data)
    const res = await this.$axios.post('user/', data)
    commit('createUser', res.data)
  },

  async updateDescription({ commit }, data) {
    // console.log(data)
    const res = await this.$axios.put('log/' + id, data)
    console.log(res, 'Updated')
    commit('updateDescription', data.Description)
  },

  async updateUser({ commit }, data) {
    await this.$axios
      .put('user/' + data.id, {
        headers: {
          Authorization: 'Bearer ' + this.state.token,
        },
      })
      .then((res) => {
        console.user(res)
        console.user('called')
        commit('updateUser', data)
      })
  },

  async deleteTag({ commit, state }) {
    const res = await this.$axios.delete('tag/' + id)
    commit('createdNewPost', res.data)
  },
  async addTag({ commit, state }, data) {
    const res = await this.$axios.post('tags', {
      text: data.text,
      log_id: state.Log_id,
    })
    commit('setTags', data)
  },

  async getAllTags({ commit, state }, id) {
    const res = await this.$axios.get('tag/' + id)
    commit('setTags', res.data)
  // async deleteTag(tag_id) {
  //   await this.$store.dispatch('deleteTag', tag_id)
  //   await this.$store.dispatch('getAllTags', this.$route.params.id)
  // },
  // visible() {
  //   this.isVisible = true
  //   this.title = this.$store.state.Log
  // },
},
}

export default {
  state,
  getters,
  mutations,
  actions,
}