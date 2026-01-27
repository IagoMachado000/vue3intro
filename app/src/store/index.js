import { createStore } from "vuex";

export default createStore({
    // onde os dados são armazenados
    state: {
        user: {
            firstName: "John",
            lastName: "Doe",
            email: "johndoe@email.com",
        },
    },
    getters: {},
    mutations: {},
    actions: {},
    modules: {},
});
