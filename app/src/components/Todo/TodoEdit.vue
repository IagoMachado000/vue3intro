<template>
    <button @click="$emit('edit-start')">
        <IconPensil classes="hover:fill-gray-800" />
    </button>
</template>

<script>
import IconPensil from "../Icons/IconPensil.vue";

export default {
    components: { IconPensil },
    emits: ["edit-start"],
};
</script>

<style></style>
