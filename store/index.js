export const state = () => ({
  users: [],
})

export const mutations = {
  setUsers(state, { users }) {
    state.users = users
  }
}

export const actions = {
  async loadUsers({ commit }, channel) {
    const profiles = await this.$api.$get('profile', { params: channel })

    commit("setUsers", { users: profiles })
  }
}

export const getters = {
  getUsers: state => state.users,
  getUser: state => id => state.users.find(user => user.id == id),
  getMemberCount: state => state.users.length,
}
