<!-- HTML -->
<template>
    <header class="header">
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
        };
    },
};
</script>

<!-- ESTILO -->
<style>
.header {
    color: #fff;
    background: gray;
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
