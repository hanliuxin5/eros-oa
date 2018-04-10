<!-- 考核 的子项模板-->

<template>
    <div class="container">
        <text class="title">{{name}}</text>
        <div class="content">
            <div class="grid">
                <div class="grid-title">
                    <image class="icon" src="bmlocal://assets/icon_calendar.png">
                    <text class="grid-title-text">考核月度</text>
                </div>
                <text class="text">{{time}}</text>
            </div>
            <div class="grid">
                <div class="grid-title">
                    <image class="icon" src="bmlocal://assets/icon_assess.png">
                    <text class="grid-title-text">考核得分</text>
                </div>
                <text class="text">{{score}}</text>
            </div>
            <div class="grid">
                <div class="grid-title">
                    <image class="icon" src="bmlocal://assets/icon_status.png">
                    <text class="grid-title-text">是否逆向否定</text>
                </div>
                <text class="text">{{status}}</text>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            name: {
                type: String,
                default: '未知'
            },
            time: {
                type: String,
                default: '未知'
            },
            score: {
                type: Number,
                default: 0
            },
            status: {
                type: String,
                default: '未知'
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
        height: 264;
        /*background-color: black;*/
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .content {
        background-color: #c0c0c0;
        flex-direction: row;
        width: 700;
        padding: 1;
        height: 200;
    }

    .grid {
        flex: 1;
        margin: 1;
        height: 192;
        background-color: white;
        justify-content: start;
        align-items: center;
    }

    .grid-title {
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin: 16;
    }

    .grid-title-text {
        font-size: 28;
        color: black;
    }

    .icon {
        width: 44;
        height: 44;
    }

    .text {
        font-size: 38;
        color: black;
        margin-top: 32;
        /*flex: 1;*/
        text-align: center;
        /*background-color: red;*/
    }

    .title {
        width: 700;
        font-size: 36px;
        color: black;
        margin-top: 16;
        margin-bottom: 16;
        /*background-color: red;*/
        text-align: start;
    }
</style>
