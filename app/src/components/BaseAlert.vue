<template>
    <div :class="baseClass">
        <slot />

        <button @click="onClick()">X</button>
    </div>
</template>

<script>
export default {
    props: {
        variant: {
            type: String,
            default: "",
        },
    },
    computed: {
        baseClass() {
            return ["alert", this.variant ? `alert-${this.variant}` : ""];
        },
    },
    methods: {
        onClick() {
            this.$emit("close");
            console.log("clicou");
        },
    },
};
</script>

<style scoped>
.alert {
    padding: 5px;
    border-radius: 6px;
    color: gray;
    background-color: #ddd;
    max-width: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 80px;
}
.alert-success {
    background-color: #42b983;
    color: #fff;
}
.alert-danger {
    background-color: red;
    color: #fff;
}
</style>
