<template>
    <wxc-tab-bar :tab-titles="tabTitles"
                 :tab-styles="tabStyles"
                 title-use-slot="true"
                 title-type="icon"
                 @wxcTabBarCurrentTabSelected="wxcTabBarCurrentTabSelected">
        <template v-for="(tab,index) in tabTitles">
            <div class="tab-item"
                 :style="{width: tabStyles.width +'px', height: tabStyles.height +'px',backgroundColor: currentPage == index ? tabStyles.activeBgColor : tabStyles.bgColor }"
                 :slot="tabIndex(index)">
                <image
                    :style="{ width: tabStyles.iconWidth + 'px', height:tabStyles.iconHeight+'px'}"
                    :src="currentPage == index ? tab.activeIcon : tab.icon"></image>
                <text class="tab-text">{{tab.title}}</text>
            </div>
            <div class="item-container" :style="contentStyle">
                <text>{{index}}</text>
            </div>
        </template>
    </wxc-tab-bar>
</template>

<script>
    import { WxcButton, WxcTabBar } from 'weex-ui'
    import Config from './config'

    export default {
        components: {WxcButton, WxcTabBar},
        data () {
            return {
                currentPage: 0,
                tabTitles: Config.tabTitles,
                tabStyles: Config.tabStyles
            }
        },
        methods: {
            tabIndex (index) {
                return `tab-title-${index}`
            },
            wxcTabBarCurrentTabSelected (e) {
                const index = e.page
                this.currentPage = index
                console.log(index)
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
            // const eros = weex.config.eros
            // console.log(eros)
            // console.log(this.tabTitles)

        },
        computed: {
            contentStyle: function () {
                const eros = weex.config.eros
                const tabPageHeight = eros.deviceHeight / eros.deviceWidth * 750
                return {
                    height: tabPageHeight,
                    backgroundColor: 'red'
                }
            },
            styleStatusBar: function () {
                const eros = weex.config.eros
                return {
                    height: eros.statusBarHeight,
                    backgroundColor: 'yellow'
                }
            },
            height: function () {
                const eros = weex.config.eros
                return eros.deviceId
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
        font-size: 24px;
        lines: 1;
        text-overflow: ellipsis;
    }

    .item-container {
        width: 750px;
        background-color: #f2f3f4;
        align-items: center;
        justify-content: center;
    }
</style>
