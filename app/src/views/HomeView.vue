<template>
    <div class="home">
        <div>Total: {{ $store.getters.total }}</div>

        <AppProducts></AppProducts>

        <br /><br />

        <button @click="updateUser()">Atualizar Perfil</button>
    </div>
</template>

<script>
import AppProducts from "@/components/Products/AppProducts.vue";

// @ is an alias to /src

export default {
    name: "HomeView",
    components: {
        AppProducts,
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
