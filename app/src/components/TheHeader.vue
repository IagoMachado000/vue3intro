<!-- HTML -->
<template>
    <header class="header">
        <h1
            :class="{
                'title-default': true,
                'title-home': isHome,
                [className]: true,
            }"
        >
            Curso Vue 3
        </h1>

        <p :class="['text', { 'title-default': isHome }, className]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
            eligendi dolorem dolore, expedita omnis quidem, fugiat tempora, est
            ducimus laboriosam voluptates ipsam placeat dicta animi aspernatur?
            Esse alias ullam est.
        </p>

        <p :class="pClass">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
            eligendi dolorem dolore, expedita omnis quidem, fugiat tempora, est
            ducimus laboriosam voluptates ipsam placeat dicta animi aspernatur?
            Esse alias ullam est.
        </p>

        <p :style="{ color: 'aqua', 'background-color': 'black' }">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
            ducimus odit debitis aut ullam maiores inventore quisquam dicta
            provident quasi iusto ab, quod totam dolore neque reprehenderit
            obcaecati, mollitia incidunt!
        </p>

        <p :style="styleClass">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
            ducimus odit debitis aut ullam maiores inventore quisquam dicta
            provident quasi iusto ab, quod totam dolore neque reprehenderit
            obcaecati, mollitia incidunt!
        </p>

        <nav>
            <ul class="menu">
                <li v-for="item in menu" :key="item.name">
                    <a :href="item.uri">
                        {{ item.name }}
                    </a>
                </li>
            </ul>
        </nav>
    </header>

    <img :src="img.src" :alt="img.alt" />
</template>

<!-- JAVASCRIPT -->
<script>
export default {
    data() {
        return {
            menu: [
                {
                    name: "home",
                    uri: "/",
                },
                {
                    name: "about",
                    uri: "/about",
                },
                {
                    name: "contact",
                    uri: "/contact",
                },
            ],
            img: {
                src: "https://placehold.co/200x100",
                alt: "Descrição da imagem",
            },
            className: "title-secondary",
            isHome: true,
            pClass: ["text", "text-secondary"],
            styleClass: {
                color: "red",
                backgroundColor: "black",
                "font-size": "20px",
            },
        };
    },
    mounted() {
        window.addEventListener("resize", this.resize);
    },
    beforeUnmount() {
        // Destruir as nossas libs
        // Eventos
        // Listeners
        console.log("beforeUnmount");

        window.removeEventListener("resize", this.resize);

        console.log("Evento removido");
    },
    unmounted() {
        console.log("unmounted");
    },
    methods: {
        resize($evt) {
            console.log($evt);
        },
    },
};
</script>

<!-- ESTILO -->
<style>
.header {
    color: #fff;
    background: gray;
}
.title-default {
    font-size: 32px;
    color: blue;
}
.title-secondary {
    font-size: 24px;
    color: purple;
}
.title-home {
    font-size: 40px;
    color: orange;
}
.text {
    color: yellow;
}
.text-secondary {
    font-size: 14px;
}
.header .menu {
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
}
.header .menu a {
    color: inherit;
    text-decoration: none;
}
</style>
