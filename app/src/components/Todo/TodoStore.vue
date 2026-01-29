<template>
    <button @click="$emit('edit-save')">
        <IconDisk classes="hover:fill-gray-800" />
    </button>
</template>

<script>
import IconDisk from "../Icons/IconDisk.vue";

export default {
    components: { IconDisk },
    emits: ["edit-save"],
};
</script>

<style></style>
