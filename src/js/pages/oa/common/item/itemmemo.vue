<!-- 备忘 的子项模板-->

<template>
    <div class="container">
        <wxc-cell :has-arrow="false"
                  :cell-style="{width:750}"
                  :has-bottom-border="false"
                  :has-top-border="false">
            <image class="image"
                   slot="label"
                   src="bmlocal://assets/icon_memo.png"></image>
            <text slot="title">{{name}}</text>
        </wxc-cell>
        <wxc-cell :has-arrow="false"
                  :cell-style="content"
                  :has-bottom-border="false"
                  :has-top-border="false">
            <image class="image2"
                   slot="label"
                   src="bmlocal://assets/icon_content.png"></image>
            <text slot="title">{{info}}</text>
        </wxc-cell>
        <wxc-cell :has-arrow="false"
                  :cell-style="content"
                  :has-bottom-border="false"
                  :has-top-border="false">
            <image class="image2"
                   slot="label"
                   src="bmlocal://assets/icon_people.png"></image>
            <text slot="title">{{group}}</text>
        </wxc-cell>
        <div style="width: 750;height: 1;background-color: #c0c0c0"></div>
    </div>
</template>

<script>
    import { WxcCell } from 'weex-ui'

    export default {
        props: {
            name: {
                type: String,
                default: '备忘录'
            },
            info: {
                type: String,
                default: '内容：点击查看'
            },
            group: {
                type: String,
                default: '共享人：点击查看'
            }
        },
        components: {
            WxcCell
        },
        data () {
            return {
                content: {
                    width: 750,
                    flex: 1,
                    backgroundColor: 'white',
                    marginLeft: 80
                }
            }
        },
        created () {},
        methods: {}
    }
</script>

<style scoped>
    .container {
        width: 750;
        height: 264;
        background-color: white;
        justify-content: start;
        align-items: center;
    }

    .image {
        width: 64px;
        height: 64px;
        margin-right: 20px;
    }

    .image2 {
        width: 48px;
        height: 48px;
        margin-right: 20px;
    }


</style>
