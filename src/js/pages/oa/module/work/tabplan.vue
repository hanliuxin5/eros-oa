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
                    title: '计划：你的计划？',
                    body: '签收时间:2018.01.01 09:09',
                    notices: 1,
                    category: 'plan'
                }, {
                    title: '目标：没有蛀牙',
                    body: '签收时间:2018.01.01 09:10',
                    notices: 0,
                    category: 'plan'
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
