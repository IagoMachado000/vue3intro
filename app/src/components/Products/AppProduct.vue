<template>
    <div class="card">
        {{ product.name }} - {{ product.price }}

        <button @click="addProduct()">Adicionar</button>
        <button v-if="isCart" @click="removeProduct()">Remover</button>
    </div>
</template>

<script>
export default {
    props: {
        product: {
            type: Object,
        },
    },
    methods: {
        addProduct() {
            this.$store.commit("addProduct", this.product);
        },
        removeProduct() {
            this.$store.commit("removeProduct", this.product.id);
        },
    },
    computed: {
        isCart() {
            return this.$store.state.cart.some((c) => c.id === this.product.id);
        },
    },
};
</script>

<style scoped>
.card {
    background-color: bisque;
    padding: 6px;
    margin-bottom: 5px;
}
</style>
