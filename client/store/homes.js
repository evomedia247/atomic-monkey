export const state = () => ({
  list: []
})

export const mutations = {
  add(state, home) {
    state.list.push(home)
  },
  emptyList(state) {
    state.list = []
  }
}

export const getters = {
  list: state => {
    return state.list
  }
}