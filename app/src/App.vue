<template>
    <div>
        <button @click="onClick()">Enviar</button>
    </div>

    <br /><br />

    <div @mouseover="onMouseOver" @mouseout="onMouseOut">Mouse Over</div>

    <br /><br />

    <form action="https://google.com" @submit.prevent="onSubmit">
        <input type="text" @keyup.esc="onKeyUp" />
        <button type="submit">Enviar</button>
    </form>
</template>

<script>
export default {
    name: "App",
    data() {
        return {};
    },
    methods: {
        onClick() {
            console.log("click");
        },
        onMouseOver(e) {
            console.log("mouse over", e);
        },
        onMouseOut() {
            console.log("mouse out");
        },
        onSubmit() {
            console.log("submit");
        },
        onKeyUp($e) {
            console.log($e);
        },
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
