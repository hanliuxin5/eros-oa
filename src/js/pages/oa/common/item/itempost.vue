<!-- 消息，公告，任务的子项模板-->

<template>
    <div class="container">
        <div class="contentContainer">
            <div class="iconContent">
                <image v-if="category==='post'" class="iconAvatar"
                     src="bmlocal://assets/icon_post.png">
                <image v-else-if="category==='mission'" class="iconAvatar"
                     src="bmlocal://assets/icon_mission.png">
                <image v-else class="iconAvatar"
                     src="bmlocal://assets/demo.jpg">
                <div v-if="notices!==0" class="iconNotice">
                    <text style="color: white;font-size: 24">{{notices}}</text>
                </div>
                <div v-if="notices===0" class="iconNotice" style="background-color: #00ffffff">
                    <!--<text style="color: white;font-size: 24">{{notices}}</text>-->
                </div>
            </div>
            <div class="textContent">
                <text class="textTitle">{{title}}</text>
                <text class="textBody">{{body}}</text>
            </div>
            <div class="timeContent">
                <text class="timeBody">{{time}}</text>
            </div>
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
            title: {
                type: String,
                default: '暂无标题'
            },
            body: {
                type: String,
                default: '[点击查看]'
            },
            notices: {
                type: Number,
                default: 0
            },
            time: {
                type: String,
                default: '刚才'
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
        height: 144;
        background-color: white;
        display: flex;
        flex-direction: column;

    }

    .contentContainer {
        width: 750;
        height: 144;
        background-color: white;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .divide {
        position: absolute;
        top: 143;
        width: 750;
        background-color: #c0c0c0;
        height: 1;
    }

    .iconContent {
        width: 144;
        height: 183;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        /*background-color: red;*/
    }

    .iconAvatar {
        height: 96;
        width: 96;
        margin-left: 24;
    }

    .iconNotice {
        position: relative;
        top: -40;
        left: -16;
        width: 32;
        height: 32;
        justify-content: center;
        align-items: center;
        background-color: red;
        border-radius: 32;
    }

    .textContent {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
        height: 183;
        /*padding-bottom: 24;*/
        /*background-color: #1da1f2;*/
    }

    .textTitle {
        font-size: 32px;
        color: black;
        lines: 1;
        text-overflow: ellipsis;
        margin-bottom: 12;
    }

    .textBody {
        lines: 1;
        text-overflow: ellipsis;
        font-size: 28px;
        color: gray;

    }

    .timeContent {
        width: 144;
        height: 144;
        /*margin-top: -64;*/
        margin-right: 24;
        justify-content: center;
        align-items: right;
        /*background-color: #4cbd34;*/
    }

    .timeBody {
        lines: 1;
        font-size: 28px;
        color: gray;
        text-align: right;
    }
</style>
