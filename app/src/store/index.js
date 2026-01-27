import { createStore } from "vuex";

export default createStore({
    // onde os dados são armazenados (DB)
    state: {
        user: {
            firstName: "John",
            lastName: "Doe",
            email: "johndoe@email.com",
        },
    },
    getters: {},

    // alterações nos dados do state
    mutations: {
        storeUser(state, data) {
            state.user = data;
        },
    },
    actions: {},
    modules: {},
});
