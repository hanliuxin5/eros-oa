<template>
    <div>
        <div :style="statusBarStyle"></div>
        <wxc-minibar title="群组"
                     background-color="white"
                     text-color="black"></wxc-minibar>
        <scroller class="scroller">
            <wxc-cell v-for="n in 15"
                      :has-arrow="false"
                      class="name"
                      :cell-style="{width:750}"
                      :has-bottom-border="true"
                      :has-top-border="true">
                <image class="image"
                       slot="label"
                       src="bmlocal://assets/demo.jpg"></image>
                <text slot="title">群{{n}}</text>
            </wxc-cell>
        </scroller>

    </div>
</template>

<script>
    import { WxcCell, WxcMinibar } from 'weex-ui'

    export default {
        components: {WxcMinibar, WxcCell},
        data () {
            return {}
        },
        created () {},
        methods: {},
        computed: {
            contentStyle: function () {
                const eros = weex.config.eros
                const tabPageHeight = eros.deviceHeight / eros.deviceWidth * 750
                //88是标题栏，120是首页的底部导航栏,1是底部导航栏的间隔线,84是搜索栏
                return {
                    height: tabPageHeight - 90 - eros.statusBarHeight,
                }
            },
            statusBarStyle: function () {
                const eros = weex.config.eros
                return {
                    width: 750,
                    height: eros.statusBarHeight,
                    backgroundColor: '#009fe8'
                }
            }
        }
    }
</script>

<style scoped>
    .scroller {
        width: 750;
    }

    .name {
        width: 750;
        /*background-color: red;*/
        flex-direction: row;
        justify-content: start;
        align-items: center;
        padding-top: 64;
        padding-bottom: 64;
    }

    .image {
        width: 88px;
        height: 88px;
        margin-right: 20px;
    }
</style>
