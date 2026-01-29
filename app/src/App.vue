<template>
    <AppHook v-if="showAppHook" />
    <button @click="showAppHook = !showAppHook">Toggle</button>

    <h5>User</h5>
    <p>{{ user.first_name }} - {{ user.last_name }}</p>

    <h5>fullname</h5>
    <p>{{ fullName }}</p>

    <button @click="user.first_name = 'Ciclano'">Atualizar</button>
</template>

<script>
import { computed, ref, watch } from "vue";
import AppHook from "./components/AppHook.vue";

export default {
    name: "App",
    components: { AppHook },
    setup() {
        const user = ref({
            first_name: "John",
            last_name: "Doe",
        });

        const fullName = computed(
            () => `${user.value.first_name} - ${user.value.last_name}`,
        );

        const showAppHook = ref(true);

        watch(
            user,
            () => {
                console.log("Lógica cabulosa");
            },
            { deep: true },
        );

        watch(
            () => user.value.first_name,
            () => {
                console.log("Lógica cabulosa 2");
            },
        );

        return {
            user,
            fullName,
            showAppHook,
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
