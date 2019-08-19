export const state = () => ({
    list: []
})

export const mutations = {
    add(state, portfolio) {
        state.list.push(portfolio)
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