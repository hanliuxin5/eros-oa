<template>
    <div>
        <div class="profile">
            <image class="profile-bg" src="bmlocal://assets/bg_profile2.png"></image>
            <image class="avatar" src="bmlocal://assets/demo.jpg"></image>
            <text style="font-size: 36px;margin-top: 16">龙哥</text>
            <text style="margin-top: 8">工号：2049</text>
            <div class="back" @click="back"></div>
        </div>
        <div style="height: 1;width: 750;background-color: #c0c0c0"></div>
        <wxc-cell v-for="item in details"
                  :has-arrow="false"
                  class="name"
                  :has-bottom-border="false"
                  :has-top-border="false">
            <image class="image"
                   slot="label"
                   :src="item.icon"></image>
            <div slot="title" style="flex-direction: row;align-items: center">
                <text style="width: 184;font-size: 28">{{item.label}}</text>
                <text style="font-size: 28;">{{item.value}}</text>
            </div>
        </wxc-cell>
    </div>
</template>

<script>
    import { WxcCell } from 'weex-ui'

    const modal = weex.requireModule('modal')
    export default {
        components: {
            WxcCell
        },
        data () {
            return {
                details: [{
                    icon: 'bmlocal://assets/icon_whatsup.png',
                    label: '个性签名',
                    value: '未知'
                }, {
                    icon: 'bmlocal://assets/icon_department2.png',
                    label: '部门',
                    value: '糕层'
                }, {
                    icon: 'bmlocal://assets/icon_jobtitle.png',
                    label: '职务',
                    value: '大boss'
                }, {
                    icon: 'bmlocal://assets/icon_phone2.png',
                    label: '手机',
                    value: '13333333333'
                }, {
                    icon: 'bmlocal://assets/icon_email.png',
                    label: 'E-mail',
                    value: 'jjj@qq.com'
                }, {
                    icon: 'bmlocal://assets/icon_phone2.png',
                    label: '公司电话',
                    value: '28629314'
                }]
            }
        },
        created () {},
        methods: {
            back () {
                this.$router.back()
            }
        }
    }
</script>

<style scoped>
    .profile {
        flex-direction: column;
        background-color: white;
        align-items: center;
        width: 750;
        height: 568;
    }

    .back {
        position: absolute;
        top: 0;
        left: 0;
        width: 120;
        height: 160;
        background-color: black;
        opacity: 0;
    }

    .profile-bg {
        width: 750;
        height: 400;
    }

    .avatar {
        width: 144;
        height: 144;
        border-width: 2;
        border-color: white;
        margin-top: -88;
    }

    .name {
        width: 750;
        height: 72;
        /*background-color: red;*/
        flex-direction: row;
        justify-content: start;
        align-items: center;
        padding-left: 16;
        padding-top: 16;
        padding-bottom: 0;
    }

    .image {
        width: 48px;
        height: 48px;
        margin-right: 20px;
    }
</style>
