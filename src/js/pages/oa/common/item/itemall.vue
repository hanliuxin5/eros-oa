<!-- 全部 的子项模板-->

<template>
    <div class="container">
        <image v-if="category==='post'" class="icon" src="bmlocal://assets/icon_post.png">
        <image v-else class="icon" src="bmlocal://assets/icon_mission.png">
        <text v-if="category==='post'" class="text">新公告</text>
        <text v-else class="text">新任务</text>
        <div v-if="notices!==0" class="notices">
            <text style="color: white;font-size: 22">{{notices}}</text>
        </div>
        <div class="divide"></div>
    </div>
</template>

<script>
    export default {
        props: {
            category: {
                type: String,
                default: 'post'
            },
            notices: {
                type: Number,
                default: 0
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
    .container {
        width: 750;
        height: 104;
        padding-left: 24;
        padding-right: 24;
        box-sizing: border-box;
        background-color: white;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .icon {
        width: 56;
        height: 56;
    }

    .text {
        flex: 1;
        margin-left: 24;
        font-size: 32;
    }

    .notices {
        width: 28;
        height: 28;
        background-color: red;
        border-radius: 24;
        justify-content: center;
        align-items: center;
    }

    .divide {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 750;
        height: 1;
        background-color: #c0c0c0;
    }
</style>
