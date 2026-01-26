<template>
    <div>
        <input type="text" v-model="name" />
        <br />
        {{ name }}
    </div>

    <br /><br />

    <div>
        <input type="text" v-model="user.firstName" />
        <br />
        <input type="text" v-model="user.lastName" />
        <br />
        {{ user.firstName }} {{ user.lastName }}
    </div>

    <br /><br />

    <select v-model="pageCount">
        <option value="">Escolha</option>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
    </select>
    <br />
    {{ pageCount }}
</template>

<script>
export default {
    name: "App",
    data() {
        return {
            name: "",
            pageCount: 5,
            user: {
                firstName: "",
                lastName: "",
            },
        };
    },
    watch: {
        name(vl) {
            if (vl.length >= 3) {
                this.saveUserName();
            }
        },
        pageCount() {
            this.changePage();
        },
        user: {
            handler() {
                console.log("User alterado");
            },
            deep: true,
        },
    },
    computed: {},
    methods: {
        saveUserName() {
            console.log("AJAX");
            console.log(this.name);
        },
        changePage() {
            console.log("AJAX changePage");
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
