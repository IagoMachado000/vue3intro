<template>
    <textarea
        ref="textarea"
        :name="`todo_${id}`"
        :id="`todo_${id}`"
        :value="modelValue"
        class="w-full resize-none overflow-hidden focus-visible:outline-none"
        rows="1"
        @input="input"
    ></textarea>
</template>

<script>
export default {
    props: {
        modelValue: String,
        id: Number,
    },
    emits: ["update:modelValue"],
    mounted() {
        this.resize();
    },
    watch: {
        modelValue() {
            this.$nextTick(this.resize);
        },
    },
    methods: {
        input({ target }) {
            this.$emit("update:modelValue", target.value);
            this.resize();
        },
        resize() {
            const el = this.$refs.textarea;
            if (!el) return;

            el.style.height = "auto";
            el.style.height = el.scrollHeight + "px";
        },
        focus() {
            this.$refs.textarea?.focus();
        },
    },
};
</script>

<style></style>
