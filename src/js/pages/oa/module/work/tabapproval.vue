<template>
    <div>
        <div style="height: 1;width: 750;background-color: #c0c0c0"></div>
        <list ref="list" class="list-content" showRefresh="false">
            <cell v-for="item in 1">
                <item-approval></item-approval>
            </cell>
        </list>
    </div>
</template>

<script>
    import ItemApproval from '../../common/item/itemapproval'

    export default {
        components: {
            ItemApproval
        },
        data () {
            return {}
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
