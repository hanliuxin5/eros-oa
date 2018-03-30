<template>
    <div class="container">
        <wxc-cell :has-arrow="false"
                  class="name"
                  :cell-style="{width:750}"
                  :has-bottom-border="false"
                  :has-top-border="false">
            <image class="image"
                   slot="label"
                   src="bmlocal://assets/icon_memo.png"></image>
            <text slot="title">我的审批</text>
        </wxc-cell>
        <wxc-simple-flow class="flow"
                         :list="testData" :themeColor="themeColor"></wxc-simple-flow>
        <div style="width: 750;height: 1;background-color: #c0c0c0"></div>
    </div>
</template>

<script>
    import { WxcSimpleFlow } from 'weex-ui'

    export default {
        components: {WxcSimpleFlow},
        data () {
            return {
                themeColor: {
                    lineColor: '#009fe8',
                    pointInnerColor: '#009fe8',
                    pointBorderColor: '#009fe8',
                    highlightTitleColor: '#bf280b',
                    highlightPointInnerColor: '#bf280b',
                    highlightPointBorderColor: '#d46262'
                },
                testData: [
                    {
                        'date': '2017-05-24 21:10:29',
                        'desc': '审批内容：国内出差，3天',
                        'highlight': true,
                        'title': '出差申请'
                    },
                    {
                        'date': '2017-05-24 19:54:28',
                        'desc': '',
                        'title': '母经理'
                    },
                    {
                        'date': '2017-05-24 19:50:21',
                        'desc': '',
                        'title': '贺总'
                    },
                    {
                        'date': '2017-05-24 19:49:03',
                        'desc': '别来打扰我',
                        'title': '集团副总'
                    }
                ]
            }
        },
        created () {},
        methods: {}
    }
</script>

<style scoped>
    .container {
        width: 750;
        background-color: blue;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .name {
        width: 750;
        background-color: white;
        flex-direction: row;
        justify-content: start;
        align-items: center;
        padding-left: 16;
        padding-top: 16;
    }

    .flow {
        padding-left: 40;
        width: 750;
        /*background-color: #00cfe8;*/
    }

    .image {
        width: 64px;
        height: 64px;
        margin-right: 20px;
    }
</style>
