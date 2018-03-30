<template>
    <div>
        <div style="height: 1;width: 750;background-color: #c0c0c0"></div>
        <list ref="list" class="list-content" showRefresh="false">
            <cell v-for="item in list">
                <item-memo :name="item.name" :info="item.info"
                           :group="item.group"></item-memo>
            </cell>
        </list>
    </div>
</template>

<script>
    import ItemMemo from '../../common/item/itemmemo'

    export default {
        components: {
            ItemMemo
        },
        data () {
            return {
                list: [{
                    name: '我的备忘录',
                    info: '内容：2018 Google IO',
                    category: '共享人：开发人员'
                }, {
                    name: '老王的备忘录',
                    info: '内容：学习十八大',
                    group: '共享人：党员'
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
