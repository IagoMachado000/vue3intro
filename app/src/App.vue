<template>
    <div>
        <TheHeader v-if="showHeader">
            <!-- <template v-slot:title> Home </template> -->

            <template v-slot:description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </template>

            Home
        </TheHeader>
        <h1>Hello World</h1>
        {{ name }}
        <br />
        <button @click="showHeader = !showHeader">
            Ativar e desativar header
        </button>
        <br />
        <input type="text" v-model="name" />

        <br /><br /><br />

        <div class="card text-small">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            reiciendis sapiente repellat aliquid, placeat accusantium tempora.
            Ab minus eius nesciunt quidem est dignissimos, numquam beatae. Atque
            accusamus tempore culpa dolorum?
        </div>

        <BaseCard></BaseCard>

        <br /><br /><br />

        <BaseAlert :variant="variant">
            <small>{{ text }}</small>
        </BaseAlert>
    </div>
</template>

<script>
import BaseAlert from "./components/BaseAlert.vue";
import BaseCard from "./components/BaseCard.vue";
import TheHeader from "./components/TheHeader.vue";

export default {
    name: "App",
    components: { TheHeader, BaseCard, BaseAlert },
    data() {
        return {
            name: "John Doe",
            showHeader: true,
            variant: "danger",
            text: "Houve um erro no envio do seu formulário",
        };
    },

    // Criação
    // Preparar o componente
    // Aja, inicializar algumas variáveis
    // Não tem acesso ao template (DOM)

    // Montagem
    // Inicializar um lib externa (new Lib())
    // Precisa de acesso ao template (DOM)
    // Tem acesso ao template (DOM)

    // Atualização
    // Debug
    // Update

    // Desmontagem
    // Remover tudo que for necessário para liberar memória (lib->destroy())

    // HOOKS
    beforeUpdate() {
        console.log("beforeUpdate");
    },
    updated() {
        console.log("updated");
    },
    // beforeCreate() {
    //     console.log("beforeCreate");
    //     console.log("Estado:", this.name);
    //     console.log("DOM:", this.$el);
    // },
    // created() {
    //     console.log("created");
    //     console.log("Estado:", this.name);
    //     console.log("DOM:", this.$el);
    // },
    // beforeMount() {
    //     console.log("beforeMount");
    //     console.log("Estado:", this.name);
    //     console.log("DOM:", this.$el);
    // },
    // mounted() {
    //     console.log("mounted");
    //     console.log("Estado:", this.name);
    //     console.log("DOM:", this.$el);
    // },
    // beforeUnmount() {
    //     console.log("beforeUnmount");
    //     console.log("Estado:", this.name);
    //     console.log("DOM:", this.$el);
    // },
    // unmounted() {
    //     console.log("unmounted");
    //     console.log("Estado:", this.name);
    //     console.log("DOM:", this.$el);
    // },
    watch: {},
    computed: {},
    methods: {},
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
