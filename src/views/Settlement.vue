<template>

    <van-tabs v-model="active">
        <van-tab title="全部"></van-tab>
        <van-tab title="待上门">内容 2</van-tab>
        <van-tab title="待完成">内容 3</van-tab>
        <van-tab title="已完成">内容 4</van-tab>
        <van-row>
            <van-col span="8">2018-01-23 08:40</van-col>
            <van-col span="10"  style="right: 15px">已发货</van-col>
        </van-row>
    </van-tabs>

</template>

<script>
    export default {
        name: "Settlement"
    }
</script>

<style scoped>

</style>