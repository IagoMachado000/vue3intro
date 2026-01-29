<template>
    <label
        :for="`todo_status_${id}`"
        class="relative flex items-center gap-4 cursor-pointer w-full before:content-[''] before:w-2 before:h-2 before:border before:border-gray-600 before:rounded-full before:flex-shrink-0 before:bg-gray-400"
        :class="{
            'before:border-green-600 before:bg-green-400 line-through':
                completed,
        }"
    >
        {{ title }}
    </label>
</template>

<script>
export default {
    props: {
        id: Number,
        title: String,
        completed: Boolean,
    },
};
</script>
