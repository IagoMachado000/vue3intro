<template>
    <button @click="sendData"><slot></slot></button>
</template>

<script>
export default {
    name: "AppButton",
    props: {
        variant: {
            type: String,
            default: "success",
        },
    },
    emits: ["update"],
    setup(props, { emit }) {
        const sendData = () => {
            emit("update", props.variant);
        };

        return {
            sendData,
        };
    },
};
</script>
