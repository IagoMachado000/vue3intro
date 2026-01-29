<template>
    <button @click="$emit('edit-cancel')">
        <IconReturn classes="hover:fill-gray-800" />
    </button>
</template>

<script>
import IconReturn from "../Icons/IconReturn.vue";

export default {
    components: { IconReturn },
    emits: ["edit-cancel"],
};
</script>

<style></style>
