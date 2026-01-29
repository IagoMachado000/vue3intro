<template>
    <ul class="flex flex-col gap-y-6 h-96 overflow-y-auto" v-if="todos.length">
        <TodoItem
            v-for="todo in todos"
            :key="todo.id"
            :todo="todo"
            @completed-change="completedChange"
            @change-todo="$emit('change-todo', $event)"
            @delete-todo="$emit('delete-todo', $event)"
        />
    </ul>

    <small class="text-gray-600 text-sm" v-else> {{ emptyMessage }} </small>
</template>

<script>
import TodoItem from "./TodoItem.vue";

export default {
    components: { TodoItem },
    props: {
        todos: Array,
        tag: Object,
    },
    computed: {
        emptyMessage() {
            return this.tag.id === "all"
                ? "não há tarefas criadas"
                : `não há tarefas ${this.tag.label}`;
        },
    },
    emits: ["completed-change", "change-todo", "delete-todo"],
    methods: {
        completedChange(payload) {
            this.$emit("completed-change", payload);
        },
    },
};
</script>
