<template>
    <div class="navbar">
        <text class="title">{{title}}</text>
        <div class="divide"></div>
    </div>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                default: ''
            }
        },
        data () {
            return {}
        },
        created () {},
        methods: {}
    }
</script>

<style scoped>
    .navbar {
        width: 750;
        background-color: white;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 88;
    }

    .title {
        color: black;
        font-size: 36px;
    }

    .divide {
        position: absolute;
        top: 87;
        width: 750;
        background-color: #c0c0c0;
        height: 1;
        align-self: end;
    }

</style>
