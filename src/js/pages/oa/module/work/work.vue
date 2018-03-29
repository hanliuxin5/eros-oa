<template>
    <div class="item-container">
        <div :style="statusBarStyle"></div>
        <nav title="工作"></nav>
        <wxc-tab-page ref="wxc-tab-page"
                      :tab-titles="tabTitles"
                      :tab-styles="tabStyles"
                      title-type="text"
                      :tab-page-height="tabPageHeight">
            <template v-for="(tab,index) in tabTitles">
                <all v-if="index===0" class="list-content"
                     :style="contentStyle">
                </all>
                <!--<assess v-if="index===0" class="list-content"-->
                <!--:style="contentStyle"></assess>-->
                <post v-else-if="index===2" class="list-content"
                      :style="contentStyle"></post>
                <mission v-else-if="index===3" class="list-content"
                         :style="contentStyle"></mission>
                <plan v-else-if="index===4" class="list-content"
                      :style="contentStyle"></plan>
                <special v-else-if="index===5" class="list-content"
                         :style="contentStyle"></special>
                <assess v-else-if="index===6" class="list-content"
                        :style="contentStyle"></assess>
                <div v-else class="list-content" :style="contentStyle">
                    <text>{{index}},{{tab.title}}</text>
                </div>
            </template>
        </wxc-tab-page>
    </div>
</template>

<script>
    import Nav from '../../common/navbar'
    import All from './taball'

    import Post from './tabpost'
    import Mission from './tabmission'
    import Plan from './tabplan'
    import Special from './tabspecial'
    import Assess from './tabassess'

    import { WxcTabPage } from 'weex-ui'
    import Config from './config'

    export default {
        components: {
            Nav, All, Post, Mission, Plan, Special, Assess,
            WxcTabPage
        },
        data () {
            return {
                tabTitles: Config.tabTitles,
                tabStyles: Config.tabStyles,
            }
        },
        created () {},
        methods: {},
        computed: {
            contentStyle: function () {
                const eros = weex.config.eros
                const tabPageHeight = eros.deviceHeight / eros.deviceWidth * 750
                //88是标题栏，120是首页的底部导航栏,2是底部导航栏的间隔线
                return {
                    height: tabPageHeight - this.tabStyles.height - 120 -
                    88 - 2 - eros.statusBarHeight,
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

    .list-content {
        width: 750;
        background-color: red;
        justify-content: end;
        align-items: end;
    }

</style>
