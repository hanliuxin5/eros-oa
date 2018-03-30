<template>
    <div class="item-container">
        <div :style="statusBarStyle"></div>
        <nav title="联系人"></nav>
        <wxc-searchbar></wxc-searchbar>
        <div class="list-content" :style="contentStyle">
            <wxc-cell @wxcCellClicked="openDepartment"
                      :has-arrow="false"
                      class="name"
                      :cell-style="{width:750}"
                      :has-bottom-border="true"
                      :has-top-border="true">
                <image class="image"
                       slot="label"
                       src="bmlocal://assets/icon_department.png"></image>
                <text slot="title">部门</text>
            </wxc-cell>
            <wxc-cell @wxcCellClicked="openOrganize"
                      :has-arrow="false"
                      class="name"
                      :cell-style="{width:750}"
                      :has-bottom-border="true"
                      :has-top-border="true">
                <image class="image"
                       slot="label"
                       src="bmlocal://assets/icon_organize.png"></image>
                <text slot="title">组织架构</text>
            </wxc-cell>
            <wxc-cell @wxcCellClicked="openGroup"
                      :has-arrow="false"
                      class="name"
                      :cell-style="{width:750}"
                      :has-bottom-border="true"
                      :has-top-border="true">
                <image class="image"
                       slot="label"
                       src="bmlocal://assets/icon_group.png"></image>
                <text slot="title">群</text>
            </wxc-cell>
        </div>
        <div class="divide"></div>
    </div>
</template>

<script>
    import Nav from '../../common/navbar'
    import { WxcCell, WxcSearchbar } from 'weex-ui'

    export default {
        components: {
            Nav, WxcCell, WxcSearchbar
        },
        data () {
            return {}
        },
        created () {},
        methods: {
            openDepartment: function () {
                this.$router.open({
                    name: 'department',
                    type: 'PUSH'
                })
            },
            openOrganize: function () {
                this.$router.open({
                    name: 'organize',
                    type: 'PUSH'
                })
            },
            openGroup: function () {
                this.$router.open({
                    name: 'group',
                    type: 'PUSH'
                })
            }
        },
        computed: {
            contentStyle: function () {
                const eros = weex.config.eros
                const tabPageHeight = eros.deviceHeight / eros.deviceWidth * 750
                //88是标题栏，120是首页的底部导航栏,1是底部导航栏的间隔线,84是搜索栏
                return {
                    height: tabPageHeight - 120 -
                    88 - 1 - 84 - eros.statusBarHeight,
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
    .item-container {
        width: 750px;
        background-color: #f2f3f4;
        align-items: center;
        justify-content: start;
    }

    .divide {
        width: 750;
        background-color: #c0c0c0;
        height: 1;
    }

    .list-content {
        width: 750;
        background-color: white;
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
