<template>
    <div>
        <div style="height: 1;width: 750;background-color: #c0c0c0"></div>
        <list ref="list" class="list-content" showRefresh="false">
            <cell v-for="item in list">
                <item-all :category="item.category"
                          :notices="item.notices"></item-all>
            </cell>
        </list>
    </div>
</template>

<script>
    import ItemAll from '../../common/item/itemall'

    export default {
        components: {
            ItemAll
        },
        data () {
            return {
                list: [
                    {category: 'post', notices: 0},
                    {category: 'mission', notices: 3}

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
