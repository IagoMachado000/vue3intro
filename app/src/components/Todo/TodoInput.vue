<template>
    <input
        type="checkbox"
        :name="`todo_status_${id}`"
        :id="`todo_status_${id}`"
        class="hidden"
        :checked="completed"
        @change="change"
    />
</template>

<script>
export default {
    props: {
        id: Number,
        completed: Boolean,
    },
    emits: ["change"],
    methods: {
        change({ target }) {
            const payload = {
                id: this.id,
                completed: target.checked,
            };
            this.$emit("change", payload);
        },
    },
};
</script>

<style></style>
