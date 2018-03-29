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
                    title: '通缉',
                    body: '小胡是逃犯',
                    notices: 1,
                    time: '18:00',
                    category: 'mission'
                }, {
                    title: '日常任务',
                    body: '一切按照基本法',
                    notices: 0,
                    time: '2017.09.09',
                    category: 'mission'
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
