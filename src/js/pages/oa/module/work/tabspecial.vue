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
                    title: '销售计划',
                    body: '卖卖卖',
                    notices: 1,
                    category: 'special'
                }, {
                    title: '专项计划',
                    body: '买买买买',
                    notices: 0,
                    category: 'special'
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
