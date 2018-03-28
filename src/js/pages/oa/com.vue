<template>
    <div class="com" :style="comStyle" @click="onTap">{{gogo}}</div>
</template>

<script>
    export default {
        props: {
            gogo: {
                type: String,
                default: '我是默认'
            },
            color: {
                type: String,
                default: '#66ccff'
            }
        },
        created () {
            // console.log(this)
        },
        methods: {
            onTap: function (e) {
                const {color} = this
                this.$emit('gogoTap', {e, color})
            }
        },
        computed: {
            comStyle: function () {
                const {color} = this
                return {
                    backgroundColor: color
                }
            }
        }
    }
</script>

<style scoped>
    .com {
        width: 200;
        height: 200;
    }
</style>
