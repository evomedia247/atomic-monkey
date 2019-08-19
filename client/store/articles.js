export const state = () => ({
    list: []
})

export const mutations = {
    add(state, article) {
        state.list.push(article)
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