<template>
    <div>
        <div style="height: 1;width: 750;background-color: #c0c0c0"></div>
        <list ref="list" class="list-content" showRefresh="false">
            <cell v-for="item in list">
                <item-post :title="item.title" :body="item.body"
                           :time="item.time" :notices="item.notices"
                           :category="item.category"></item-post>
            </cell>
        </list>
    </div>
</template>

<script>
    import ItemPost from '../../common/item/itempost'

    export default {
        components: {
            ItemPost
        },
        data () {
            return {
                list: [{
                    title: '我是什么制度来着',
                    body: '你问我滋磁不滋磁？',
                    notices: 1,
                    time: '18:00',
                    category: 'post'
                }, {
                    title: '认真学习十八大',
                    body: '一切按照基本法',
                    notices: 0,
                    time: '2017.09.09',
                    category: 'post'
                }]
            }
        },
        created () {},
        methods: {}
    }
</script>

<style scoped>
    .list-content {
        width: 750;
        background-color: white;
    }
</style>
