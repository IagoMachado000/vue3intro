import { createStore } from "vuex";

export default createStore({
    // onde os dados são armazenados (DB)
    state: {
        user: {
            firstName: "John",
            lastName: "Doe",
            email: "johndoe@email.com",
        },
        products: [
            {
                id: 1,
                name: "Bola",
                price: 100,
            },
            {
                id: 2,
                name: "Chuteira",
                price: 200,
            },
            {
                id: 3,
                name: "Meião",
                price: 50,
            },
        ],
        cart: [],
    },

    // deriva propriedades, semelhante ao computed
    getters: {
        total(state) {
            return state.cart.reduce((total, item) => (total += item.price), 0);
        },
    },

    // alterações nos dados do state (síncrono)
    mutations: {
        storeUser(state, data) {
            state.user = data;
        },
        addProduct(state, data) {
            state.cart.push(data);
        },
        removeProduct(state, id) {
            const i = state.cart.findIndex((obj) => obj.id === id);
            state.cart.splice(i, 1);
        },
    },

    // alterações nos dados do state (assíncrono)
    actions: {
        storeUser({ commit }, data) {
            // ajax, promisse
            return new Promise((resolve) => {
                setTimeout(() => {
                    commit("storeUser", data);
                    resolve();
                }, 3000);
            });
        },
    },

    modules: {},
});
