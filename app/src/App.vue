<template>
    <div>
        <div>
            One-way data binding
            <br />
            Two-way data binding
            <br />
            v-model -> formulários
        </div>

        <br /><br />

        <div>
            <label>Nome</label>
            <br />
            <input type="text" v-model="name" />
            <br />
            {{ name }}
        </div>

        <br /><br />

        <div>
            <label>Sports</label>
            <br />
            <select v-model="sports">
                <option value="">Escolha</option>
                <option value="futebol">Futebol</option>
                <option value="skate">Skate</option>
                <option value="tenis">Tênis</option>
            </select>
            <br />
            {{ sports }}
        </div>

        <br /><br />

        <div>
            <div>
                <label>Não</label>
                <input type="radio" value="Não" v-model="newsletter" />
            </div>
            <div>
                <label>Sim</label>
                <input type="radio" value="Sim" v-model="newsletter" />
            </div>
            {{ newsletter }}
        </div>

        <br /><br />

        <div>
            <div>
                <label>Contrato</label>
                <br />
                <input type="checkbox" v-model="contracts" />
                Aceita nossos termos ...
            </div>
            {{ contracts }}
        </div>

        <br /><br />

        <div>
            <label>Cores que você mais gosta</label>
            <br />
            <input type="checkbox" value="Azul" v-model="colors" /> Azul
            <input type="checkbox" value="Amarelo" v-model="colors" /> Amarelo
            <br />
            {{ colors }}
        </div>
    </div>
</template>

<script>
export default {
    name: "App",
    data() {
        return {
            name: "",
            sports: "",
            newsletter: "Não",
            contracts: false,
            colors: [],
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
