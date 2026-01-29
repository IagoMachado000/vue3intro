<template>
    <li
        class="p-2 flex items-center justify-between gap-4 text-gray-600 shadow-sm"
    >
        <div class="flex items-center flex-1">
            <TodoInput
                :id="todo.id"
                :completed="todo.completed"
                @change="completedChange"
            />

            <TodoLabel
                v-if="!edit"
                :id="todo.id"
                :title="todo.title"
                :completed="todo.completed"
            />

            <TodoTextArea
                v-if="edit"
                ref="textarea"
                v-model="draftTitle"
                :id="todo.id"
            />
        </div>

        <div class="flex items-center gap-6 shrink-0">
            <TodoEdit v-if="!edit" @edit-start="editStart" />
            <TodoStore v-if="edit" @edit-save="changeTodo" />
            <TodoEsc v-if="edit" @edit-cancel="editCancel" />
            <TodoDelete
                v-if="!edit"
                @delete-todo="$emit('delete-todo', todo.id)"
            />
        </div>
    </li>
</template>

<script>
import TodoDelete from "./TodoDelete.vue";
import TodoEdit from "./TodoEdit.vue";
import TodoEsc from "./TodoEsc.vue";
import TodoInput from "./TodoInput.vue";
import TodoLabel from "./TodoLabel.vue";
import TodoStore from "./TodoStore.vue";
import TodoTextArea from "./TodoTextArea.vue";

export default {
    data() {
        return {
            edit: false,
            draftTitle: "",
        };
    },
    components: {
        TodoLabel,
        TodoInput,
        TodoTextArea,
        TodoEdit,
        TodoStore,
        TodoEsc,
        TodoDelete,
    },
    props: {
        todo: Object,
    },
    emits: ["completed-change", "change-todo", "delete-todo"],
    methods: {
        completedChange({ id, completed }) {
            const payload = {
                id,
                completed,
            };
            this.$emit("completed-change", payload);
        },
        editStart() {
            this.edit = true;
            this.draftTitle = this.todo.title;
            this.$nextTick(() => {
                this.$refs.textarea.focus();
            });
        },
        editCancel() {
            this.edit = false;
            this.draftTitle = "";
        },
        changeTodo() {
            const payload = {
                id: this.todo.id,
                title: this.draftTitle,
            };

            this.edit = false;
            this.$emit("change-todo", payload);
        },
    },
};
</script>
