<template>
    <div class="item-container">
        <div :style="statusBarStyle"></div>
        <nav title="消息"></nav>
        <list ref="list" class="list-content" showRefresh="true" @refresh="onRefresh">
            <cell style="height: 144" class="list-item" v-for="item in list">
                <item-post :title="item.title" :body="item.body"
                         :time="item.time" :notices="item.notices"
                         :category="item.category"></item-post>
            </cell>
        </list>
        <div class="divide"></div>
    </div>
</template>

<script>

    import Nav from '../../common/navbar'
    import ItemPost from '../../common/item/itempost'

    export default {
        components: {Nav, ItemPost},
        data () {
            return {
                list: [{
                    title: '任务',
                    body: '你开森就好！',
                    notices: 5,
                    time: '18:00',
                    category: 'mission'
                }, {
                    title: '消息',
                    body: '你开森就好？',
                    notices: 8,
                    time: '18:01',
                    category: 'post'
                },
                    {
                        title: '公告',
                        body: '你开森就好你开森就好你开森就好你开森就好',
                        notices: 0,
                        time: '1993.02.24',
                        category: 'post'
                    }
                    ,
                    {
                        title: '可达鸭',
                        body: '我可谢谢你了！',
                        notices: 0,
                        time: '18:04',
                        category: 'url'
                    }
                ]
            }
        },
        created () {},
        methods: {
            onRefresh () {
                let that = this
                setTimeout(() => {
                    that.$refs.list.refreshEnd()
                }, 1500)
            }
        },
        computed: {
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
        background-color: white;
    }

    .list-item {
        width: 750;
        /*height: 184;*/
        /*background-color: green;*/
    }

    .divide {
        width: 750;
        background-color: #c0c0c0;
        height: 1;
    }

</style>
