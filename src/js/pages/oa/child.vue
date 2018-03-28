<template>
    <div class="item-container">
        <div :style="statusBarStyle"></div>
        <text>I'm your father!</text>
        <com gogo="wow" color="red" @gogoTap="tap"></com>
    </div>
</template>

<script>
    import Com from './com'

    export default {
        components: {Com},
        data () {
            return {}
        },
        created () {},
        methods: {
            tap: function (e) {
                console.log(e)
            }
        },
        computed: {
            statusBarStyle: function () {
                const eros = weex.config.eros
                return {
                    width: 750,
                    height: eros.statusBarHeight,
                    backgroundColor: 'red'
                }
            }
        }
    }
</script>

<style scoped>
    .item-container {
        width: 750px;
        background-color: #f2f3f4;
        align-items: center;
        justify-content: start;
    }
</style>
