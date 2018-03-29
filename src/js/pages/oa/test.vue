<template>
    <div>
        <wxc-tab-bar :tab-titles="tabTitles"
                     :tab-styles="tabStyles"
                     title-use-slot="true"
                     title-type="icon"
                     @wxcTabBarCurrentTabSelected="wxcTabBarCurrentTabSelected">
            <template v-for="(tab,index) in tabTitles">
                <div class="tab-item"
                     :style="{width: tabStyles.width +'px', height: tabStyles.height +'px',backgroundColor: currentPage == index ? tabStyles.activeBgColor : tabStyles.bgColor }"
                     :slot="'tab-title-'+index">
                    <image
                        :style="{ width: tabStyles.iconWidth + 'px', height:tabStyles.iconHeight+'px'}"
                        :src="currentPage == index ? tab.activeIcon : tab.icon"></image>
                    <text class="tab-text">{{tab.title}}</text>
                </div>
                <message v-if="index===0" :style="contentStyle"></message>
                <work v-else-if="index===1" :style="contentStyle"></work>
                <div v-else class="item-container" :style="contentStyle">
                    <div :style="statusBarStyle"></div>
                    <text>{{index}}</text>
                </div>
            </template>
        </wxc-tab-bar>
        <div class="action">
            <img style="height: 56;width: 56" src="bmlocal://assets/icon_add.png">
        </div>
    </div>
</template>

<script>
    import { WxcTabBar } from 'weex-ui'
    import Config from './config'

    // import Child from './child'
    import Message from './module/message/message'
    import Work from './module/work/work'

    export default {
        components: {
            WxcTabBar, Message, Work
        },
        data () {
            return {
                currentPage: 0,
                tabTitles: Config.tabTitles,
                tabStyles: Config.tabStyles
            }
        },
        methods: {
            wxcTabBarCurrentTabSelected (e) {
                const index = e.page
                this.currentPage = index
                // console.log(index)
            },
            androidFinishApp () {
                const globalEvent = weex.requireModule('globalEvent')
                globalEvent.addEventListener('homeBack', options => {
                    this.$router.finish()
                })
            }
        },
        created () {
            this.androidFinishApp()
            // console.log(this.tabStyles.height)

        },
        computed: {
            contentStyle: function () {
                const eros = weex.config.eros
                const tabPageHeight = eros.deviceHeight / eros.deviceWidth * 750
                return {
                    width: 750,
                    height: tabPageHeight - this.tabStyles.height,
                    backgroundColor: 'red'
                }
            },
            statusBarStyle: function () {
                const eros = weex.config.eros
                return {
                    width: 750,
                    height: eros.statusBarHeight,
                    backgroundColor: 'blue'
                }
            }
        }

    }
</script>

<style scoped>
    .tab-item {
        flex-direction: column;
        align-items: center;
        padding-top: 10px;
        justify-content: space-around;
    }

    .tab-text {
        font-size: 22px;
        lines: 1;
        text-overflow: ellipsis;
    }

    .item-container {
        width: 750px;
        background-color: #f2f3f4;
        align-items: center;
        justify-content: start;
    }

    .action {
        position: absolute;
        width: 112;
        height: 112;
        right: 40;
        bottom: 144;
        background-color: #009fe8;
        border-radius: 80;
        justify-content: center;
        align-items: center;
        box-shadow: 4px 4px 2px #c0c0c0;
    }

    .action:active {
        background-color: #00cfe8;
    }
</style>
