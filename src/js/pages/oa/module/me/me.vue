<template>
    <div class="item-container">
        <div :style="statusBarStyle"></div>
        <div class="profile">
            <img style="width: 750;height: 360" src="bmlocal://assets/bg_profile.png">
            <text style="position: absolute;top: 32;left: 365;font-size: 36;color: white">我</text>
            <img src="bmlocal://assets/demo.jpg"
                 style="position: absolute;top: 104;
                 border-radius: 184;
                 height: 184;width: 184;
                 left: 290;font-size: 36;color: white">
        </div>
        <div :style="contentStyle">
            <wxc-cell @wxcCellClicked="openDepartment"
                      :has-arrow="true"
                      class="name"
                      :cell-style="{width:750}"
                      :has-bottom-border="true"
                      :has-top-border="true">
                <image class="image"
                       slot="label"
                       src="bmlocal://assets/icon_check.png"></image>
                <text slot="title">我的打卡</text>
            </wxc-cell>
            <wxc-cell @wxcCellClicked="openDepartment"
                      :has-arrow="true"
                      class="name"
                      :cell-style="{width:750}"
                      :has-bottom-border="true"
                      :has-top-border="true">
                <image class="image"
                       slot="label"
                       src="bmlocal://assets/icon_clock.png"></image>
                <text slot="title">审批历史</text>
            </wxc-cell>
            <wxc-cell @wxcCellClicked="openDepartment"
                      :has-arrow="true"
                      class="name"
                      :cell-style="{width:750}"
                      :has-bottom-border="true"
                      :has-top-border="true">
                <image class="image"
                       slot="label"
                       src="bmlocal://assets/icon_file.png"></image>
                <text slot="title">我的文件</text>
            </wxc-cell>
            <wxc-cell @wxcCellClicked="openDepartment"
                      :has-arrow="true"
                      class="name"
                      style="margin-top: 40"
                      :cell-style="{width:750}"
                      :has-bottom-border="true"
                      :has-top-border="true">
                <image class="image"
                       slot="label"
                       src="bmlocal://assets/icon_setting.png"></image>
                <text slot="title">设置</text>
            </wxc-cell>
        </div>
        <div class="divide"></div>
    </div>
</template>

<script>
    import { WxcCell } from 'weex-ui'

    export default {
        components: {WxcCell},
        data () {
            return {}
        },
        created () {},
        methods: {},
        computed: {
            statusBarStyle: function () {
                const eros = weex.config.eros
                return {
                    width: 750,
                    height: eros.statusBarHeight,
                    backgroundColor: '#009fe8'
                }
            },
            contentStyle: function () {
                const eros = weex.config.eros
                const tabPageHeight = eros.deviceHeight / eros.deviceWidth * 750
                //120是首页的底部导航栏,360是profile区域
                return {
                    backgroundColor: 'white',
                    width: 750,
                    height: tabPageHeight - 120 - 360 - eros.statusBarHeight,
                }
            },
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

    .profile {
        width: 750;
        height: 360;
        background-color: white;
    }

    .divide {
        width: 750;
        background-color: #c0c0c0;
        height: 1;
    }

    .name {
        width: 750;
        /*background-color: red;*/
        flex-direction: row;
        justify-content: start;
        align-items: center;
        padding-top: 56;
        padding-bottom: 56;
    }

    .image {
        width: 64px;
        height: 64px;
        margin-right: 20px;
    }
</style>
