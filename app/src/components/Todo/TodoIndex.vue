<template>
    <div class="flex flex-col gap-y-8 py-20 px-10">
        <h1 class="text-center uppercase font-semibold text-2xl text-gray-600">
            lista de tarefas
        </h1>

        <TodoCreate @create-todo="newTodo" />

        <TodoTags
            :tags="tags"
            :active-tag="activeTag"
            @filter-change="filterTodos"
        />

        <TodoList
            :todos="visibleTodos"
            :tag="currentTag"
            @completed-change="completedChange"
            @change-todo="changeTodo"
            @delete-todo="deleteTodo"
        />
    </div>
</template>

<script>
import TodoCreate from "./TodoCreate.vue";
import TodoList from "./TodoList.vue";
import TodoTags from "./TodoTags.vue";

const STORAGE_KEY = "todo_app_v1";

const TODO_FILTERS = {
    all: () => true,
    done: (todo) => todo.completed === true,
    pending: (todo) => todo.completed === false,
};

const DEFAULT_TODOS = [
    { id: 1, title: "delectus aut autem", completed: false },
    { id: 2, title: "quis ut nam facilis et officia qui", completed: false },
    { id: 3, title: "fugiat veniam minus", completed: false },
    { id: 4, title: "et porro tempora", completed: false },
    {
        id: 5,
        title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
        completed: false,
    },
];

export default {
    // registro de componentes
    components: { TodoCreate, TodoList, TodoTags },

    // passa dados reativos pro componente
    // fonte da verdade
    data() {
        return {
            todos: DEFAULT_TODOS,
            tags: [
                { id: "all", label: "todas" },
                { id: "done", label: "concluídas" },
                { id: "pending", label: "pendentes" },
            ],
            activeTag: "all",
        };
    },
    created() {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return;

        try {
            const parsed = JSON.parse(raw);

            if (Array.isArray(parsed.todos)) {
                this.todos = parsed.todos;
            }

            if (typeof parsed.activeTag === "string") {
                this.activeTag = parsed.activeTag;
            }
        } catch (e) {
            console.warn("LocalStorage inválido, ignorando:", e);
        }
    },
    watch: {
        todos: {
            deep: true,
            handler() {
                this.persist();
            },
        },
        activeTag() {
            this.persist();
        },
    },
    computed: {
        visibleTodos() {
            const filter = TODO_FILTERS[this.activeTag] || TODO_FILTERS.all;

            return this.todos
                .filter(filter)
                .slice()
                .sort((a, b) => b.id - a.id);
        },
        currentTag() {
            return (
                this.tags.find((t) => t.id === this.activeTag) || {
                    id: "all",
                    label: "todas",
                }
            );
        },
    },

    methods: {
        persist() {
            const payload = {
                todos: this.todos,
                activeTag: this.activeTag,
            };
            localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
        },
        completedChange({ id, completed }) {
            const todo = this.todos.find((t) => t.id === id);
            if (!todo) return;
            todo.completed = completed;
        },
        changeTodo({ id, title }) {
            const todo = this.todos.find((t) => t.id === id);
            if (!todo) return;
            todo.title = title;
        },
        deleteTodo(id) {
            const index = this.todos.findIndex((t) => t.id === id);
            if (index !== -1) {
                this.todos.splice(index, 1);
            }
        },
        newTodo(title) {
            const nextId =
                this.todos.reduce((max, t) => Math.max(max, t.id), 0) + 1;
            this.todos.push({ id: nextId, title, completed: false });
        },
        filterTodos(tag) {
            this.activeTag = tag;
        },
    },
};
</script>
