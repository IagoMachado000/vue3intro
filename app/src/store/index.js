import axios from "axios";
import { createStore } from "vuex";

export default createStore({
    state: {
        todos: [],
    },
    getters: {},
    mutations: {
        storeTodos(state, payload) {
            state.todos = payload;
        },
        storeTodo(state, payload) {
            state.todos.unshift(payload);
        },
    },
    actions: {
        getTodos({ commit }) {
            // teste para mostrar o loading
            return new Promise((resolve) => {
                setTimeout(() => {
                    return axios
                        .get("http://localhost:3000/todos")
                        .then((response) => {
                            commit("storeTodos", response.data);
                            resolve();
                        });
                }, 1000);
            });
        },
        addTodo({ commit }, data) {
            return axios
                .post("http://localhost:3000/todos", data)
                .then((response) => {
                    commit("storeTodo", response.data);
                });
        },
    },
    modules: {},
});
