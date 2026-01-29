<template>
    <div class="home">
        <div>Total: {{ $store.getters.total }}</div>

        <AppProducts></AppProducts>

        <br /><br />

        <div>
            <div>
                <p>
                    {{
                        `${$store.state.user.firstName} ${$store.state.user.lastName}`
                    }}
                </p>
                <p>{{ $store.state.user.email }}</p>
            </div>
            <button @click="updateUser()">Atualizar Perfil</button>
        </div>
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

            // this.$store.commit("storeUser", newUser);
            this.$store.dispatch("storeUser", newUser).then(() => {
                console.log("terminou com sucesso!");
            });
        },
    },
};
</script>
