<template>
    <div>
        Edição do Usuário {{ $route.params.id }}

        <br /><br />

        <button @click="login()">Login</button>
    </div>
</template>

<script>
export default {
    methods: {
        login() {
            // ajax do login

            // $route - obj da rota atual
            // $router - funcionalidades do esquema de roteamento
            this.$router.push({ name: "about" });
            console.log("chegou");
        },
    },
};
</script>
