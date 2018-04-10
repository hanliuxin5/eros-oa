<template>
    <wxc-tab-bar :tab-titles="tabTitles"
                 :tab-styles="tabStyles"
                 title-use-slot="true"
                 title-type="icon"
                 @wxcTabBarCurrentTabSelected="wxcTabBarCurrentTabSelected">
        <template v-for="(tab,index) in tabTitles">
            <div class="tab-item"
                 :style="{width: tabStyles.width,
                  height: tabStyles.height ,
                  backgroundColor: currentPage == index ? tabStyles.activeBgColor : tabStyles.bgColor }"
                 :slot="'tab-title-'+index">
                <image
                    :style="{ width: tabStyles.iconWidth , height:tabStyles.iconHeight}"
                    :src="currentPage == index ? tab.activeIcon : tab.icon"></image>
                <text class="tab-text">{{tab.title}}</text>
            </div>
            <message v-if="index===0" :style="contentStyle"></message>
            <work v-else-if="index===1" :style="contentStyle"></work>
            <contacts v-else-if="index===2" :style="contentStyle"></contacts>
            <me v-else :style="contentStyle"></me>
            <!--<div v-else class="item-container" :style="contentStyle">-->
            <!--<div :style="statusBarStyle"></div>-->
            <!--<text>{{index}}</text>-->
            <!--</div>-->
        </template>
        <div v-if="show" :style="overlayStyle"></div>

        <div ref="action2" v-if="currentPage===0" class="action-child">
            <text style="color: white">审批</text>
            <image style="height: 120;width: 120" src="bmlocal://assets/icon_approval.png"></image>
        </div>
        <!--<div ref="action1" v-if="currentPage===0" class="action-child" @click="openAction1">-->
        <!--<text style="color: white">打卡</text>-->
        <!--<img style="height: 120;width: 120" src="bmlocal://assets/icon_approval.png">-->
        <!--</div>-->
        <div class="action" v-if="currentPage===0" @click="openMenu">
            <image ref="menu" style="height: 56;width: 56" src="bmlocal://assets/icon_add.png"></image>
        </div>
    </wxc-tab-bar>

</template>

<script>
    import { WxcTabBar, WxcOverlay } from 'weex-ui'
    import Config from './config'

    // import Child from './child'
    import Message from './module/message/message'
    import Work from './module/work/work'
    import Contacts from './module/contacts/contacts'
    import Me from './module/me/me'

    const modal = weex.requireModule('modal')
    const animation = weex.requireModule('animation')

    export default {
        components: {
            WxcTabBar, WxcOverlay,
            Message, Work, Contacts, Me
        },
        data () {
            return {
                currentPage: 0,
                tabTitles: Config.tabTitles,
                tabStyles: Config.tabStyles,
                show: false
            }
        },
        methods: {
            wxcOverlayBodyClicked (e) {
                this.show = false
            },
            openAction1 () {
            },
            openMenu () {
                let translateY
                let rotate
                let opacity
                if (this.show) {
                    translateY = 0
                    rotate = 0
                    opacity = 0
                } else {
                    translateY = -140
                    rotate = 45
                    opacity = 1
                }
                let i = 1
                this.show = !this.show

                for (let x in this.$refs) {
                    if (x.toString().startsWith('action')) {
                        let item = this.$refs[x]
                        animation.transition(item, {
                            styles: {
                                transform: `translate(0,${i * translateY})`,
                                transformOrigin: 'center center',
                                // backgroundColor: '#66ccff',
                                opacity: `${opacity}`,
                            },
                            duration: 300, //ms
                            timingFunction: 'ease-out',
                            delay: 0 //ms
                        }, function () {
                            // modal.toast({message: `item${i},animation finished.`})
                        })
                        i = i + 1
                    }
                }
                animation.transition(this.$refs.menu, {
                    styles: {
                        transform: `rotate(${rotate}deg)`,
                        transformOrigin: 'center center',
                    },
                    duration: 300, //ms
                    timingFunction: 'ease-out',
                    delay: 0 //ms
                }, function () {
                    // modal.toast({message: `item${i},animation finished.`})
                })

            },
            wxcTabBarCurrentTabSelected (e) {
                const index = e.page
                this.currentPage = index
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
            overlayStyle: function () {
                const eros = weex.config.eros
                const tabPageHeight = eros.deviceHeight / eros.deviceWidth * 750
                return {
                    width: 750,
                    height: tabPageHeight - this.tabStyles.height,
                    backgroundColor: 'black',
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    opacity: 0.5
                }
            },
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

    .action {
        position: fixed;
        width: 114;
        height: 114;
        right: 40;
        bottom: 144;
        background-color: #009fe8;
        border-radius: 80;
        justify-content: center;
        align-items: center;
    }

    .action-child {
        position: fixed;
        width: auto;
        height: 114;
        right: 40;
        bottom: 144;
        /*background-color: black;*/
        opacity: 0.0;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
</style>
