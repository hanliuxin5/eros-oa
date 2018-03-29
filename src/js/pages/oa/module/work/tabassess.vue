<template>
    <div>
        <div style="height: 1;width: 750;background-color: #c0c0c0"></div>
        <list ref="list" class="list-content" showRefresh="false">
            <cell v-for="item in list">
                <item-assess :name="item.name" :time="item.time"
                             :score="item.score" :status="item.status"></item-assess>
            </cell>
        </list>
    </div>
</template>

<script>
    import ItemAssess from '../../common/item/itemassess'

    export default {
        components: {
            ItemAssess
        },
        data () {
            return {
                list: [
                    {name: '月度绩效', time: '9月', score: 100, status: '否'},
                    {name: '目标绩效', time: '第一季度', score: 0, status: '是'}
                ]
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
