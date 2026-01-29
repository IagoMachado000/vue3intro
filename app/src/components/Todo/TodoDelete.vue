<template>
    <button @click="$emit('delete-todo')">
        <IconTrash classes="hover:fill-gray-800" />
    </button>
</template>

<script>
import IconTrash from "../Icons/IconTrash.vue";

export default {
    components: { IconTrash },
    emits: ["delete-todo"],
};
</script>

<style></style>
