<template>
    <ul class="flex flex-col sm:flex-row items-center justify-center gap-6">
        <li v-for="tag in tags" :key="tag.id" class="w-full sm:w-auto">
            <button
                type="button"
                class="border border-gray-400 rounded shadow-sm text-gray-600 px-3 py-1 uppercase text-sm hover:bg-gray-600 hover:text-white transition w-full"
                :class="{ 'bg-gray-600 text-white': activeTag === tag.id }"
                @click="filterChange(tag.id)"
            >
                {{ tag.label }}
            </button>
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        tags: Array,
        activeTag: String,
    },
    emits: ["filter-change"],
    methods: {
        filterChange(id) {
            this.$emit("filter-change", id);
        },
    },
};
</script>

<style></style>
