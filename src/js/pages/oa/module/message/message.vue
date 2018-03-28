<template>
    <div class="item-container">
        <div :style="statusBarStyle"></div>
        <nav title="消息"></nav>
        <list ref="list" class="list-content" :showRefresh="true" @refresh="onRefresh">
            <cell class="list-item" v-for="item in 20">
                <text>{{item}}</text>
            </cell>
        </list>
        <div class="divide"></div>
    </div>
</template>

<script>

    import Nav from '../../common/navbar'

    export default {
        components: {Nav},
        data () {
            return {}
        },
        created () {},
        methods: {
            onRefresh () {
                let that = this
                setTimeout(() => {
                    that.$refs.list.refreshEnd()
                }, 1500)
            }
        },
        computed: {
            statusBarStyle: function () {
                const eros = weex.config.eros
                return {
                    width: 750,
                    height: eros.statusBarHeight,
                    backgroundColor: 'white'
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

    .list-content {
        width: 750;
        /*flex: 1;*/
        background-color: white;
    }

    .list-item {
        width: 750;
        height: 200;
        background-color: green;
    }

    .divide {
        width: 750;
        background-color: #c0c0c0;
        height: 1;
    }
</style>
