<template>
    <p>{{ name }}</p>
    <p>{{ user.first_name }} - {{ user.last_name }}</p>
    <p>{{ admin.first_name }} - {{ admin.last_name }}</p>
    <img alt="Vue logo" src="./assets/logo.png" @click="changeName" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
import { reactive, ref } from "vue";
import HelloWorld from "./components/HelloWorld.vue";

export default {
    name: "App",
    components: {
        HelloWorld,
    },
    setup() {
        const user = reactive({
            first_name: "John",
            last_name: "Doe",
        });

        const admin = ref({
            first_name: "Admin",
            last_name: "Master",
        });

        let name = "Fulano";

        const changeName = () => {
            alert("alterou");
            user.first_name = "Jane";
            admin.value.first_name = "Ciclano";
        };

        return {
            user,
            admin,
            name,
            changeName,
        };
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
