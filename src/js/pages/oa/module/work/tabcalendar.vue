<template>
    <div>
        <div style="height: 1;width: 750;background-color: #c0c0c0"></div>
        <list ref="list" class="list-content" showRefresh="false">
            <cell v-for="item in list">
                <item-plan :title="item.title" :body="item.body"
                           :notices="item.notices"
                           :category="item.category"></item-plan>
            </cell>
        </list>
    </div>
</template>

<script>
    import ItemPlan from '../../common/item/itemplan'

    export default {
        components: {
            ItemPlan
        },
        data () {
            return {
                list: [{
                    title: '今日拜访特朗普',
                    body: '提醒时间:2018.01.01 09:09',
                    notices: 0,
                    category: 'calendar'
                }, {
                    title: '今日接待习主席',
                    body: '提醒时间:2018.01.01 09:10',
                    notices: 0,
                    category: 'calendar'
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
