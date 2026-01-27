<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />

        <br />

        <button @click="updateUser()">Atualizar Perfil</button>

        <HelloWorld msg="Welcome to Your Vue.js App" />

        <div style="background-color: red; color: #fff">
            <p>
                {{ $store.state.user.firstName }}
                {{ $store.state.user.lastName }}
            </p>
            <p>{{ $store.state.user.email }}</p>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
    name: "HomeView",
    components: {
        HelloWorld,
    },
    methods: {
        updateUser() {
            const newUser = {
                firstName: "Jane",
                lastName: "Doe",
                email: "janedoe@email.com",
            };

            this.$store.commit("storeUser", newUser);
        },
    },
};
</script>
