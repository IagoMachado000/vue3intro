<template>
    <form @submit.prevent="submit">
        <div
            class="border border-gray-400 rounded flex items-center justify-between focus-within:border-gray-500 focus-within:ring-2 focus-within:ring-gray-500 focus-within:ring-offset-1"
        >
            <input
                type="text"
                name="new_todo"
                id="new_todo"
                v-model.trim="form.new_todo"
                class="p-2 focus:outline-none focus-visible:outline-none text-gray-600 w-full"
            />
            <button
                :disabled="!form.new_todo"
                class="p-2 uppercase bg-gray-400 text-white hover:bg-gray-200 hover:text-gray-400 transition disabled:bg-gray-100 disabled:cursor-not-allowed"
            >
                adicionar
            </button>
        </div>
    </form>
</template>

<script>
export default {
    data() {
        return {
            form: {
                new_todo: "",
            },
        };
    },
    emits: ["create-todo"],
    methods: {
        submit() {
            if (!this.form.new_todo) return;
            this.$emit("create-todo", this.form.new_todo);
            this.form.new_todo = "";
        },
    },
};
</script>
