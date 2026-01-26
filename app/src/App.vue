<template>
    <div>{{ user.firstName }} {{ user.lastName }}</div>
    <br /><br />
    <div>{{ fullName }}</div>

    <br /><br />

    <div v-for="todo in todos" :key="todo.id">
        {{ todo.title }} <span>{{ todo.completed }}</span>
    </div>

    <br /><br />

    <div>
        <h2>Todos em aberto</h2>
        <div v-for="todo in uncompletedTodos" :key="todo.id">
            {{ todo.title }}
        </div>

        <h2>Todos completas</h2>
        <div v-for="todo in completedTodos" :key="todo.id">
            {{ todo.title }}
        </div>
    </div>

    <br /><br />

    <div>
        <h2>Todos</h2>
        <div v-for="todo in todos" :key="todo.id">
            <input type="checkbox" v-model="todo.completed" />
            {{ todo.title }}
        </div>
    </div>
</template>

<script>
export default {
    name: "App",
    data() {
        return {
            user: {
                firstName: "John",
                lastName: "Doe",
            },
            todos: [
                {
                    userId: 1,
                    id: 1,
                    title: "delectus aut autem",
                    completed: false,
                },
                {
                    userId: 1,
                    id: 2,
                    title: "quis ut nam facilis et officia qui",
                    completed: false,
                },
                {
                    userId: 1,
                    id: 3,
                    title: "fugiat veniam minus",
                    completed: false,
                },
                {
                    userId: 1,
                    id: 4,
                    title: "et porro tempora",
                    completed: true,
                },
                {
                    userId: 1,
                    id: 5,
                    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
                    completed: false,
                },
            ],
        };
    },
    computed: {
        fullName() {
            return `${this.user.firstName} ${this.user.lastName}`;
        },
        uncompletedTodos() {
            return this.todos.filter((t) => !t.completed);
        },
        completedTodos() {
            return this.todos.filter((t) => t.completed);
        },
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
