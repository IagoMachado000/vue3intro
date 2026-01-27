<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
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
};
</script>
