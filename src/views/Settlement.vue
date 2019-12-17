<template>

    <van-tabs v-model="active">
        <van-tab title="全部"></van-tab>
        <van-tab title="待上门"></van-tab>
        <van-tab title="待完成"></van-tab>
        <van-tab title="已完成"></van-tab>
 <van-row type="flex" justify="space-between" style="font-size: 10px;margin-top: 10px">
            <van-col span="8">2018-01-23 08:40</van-col>

            <van-col span="6" style="color:#43CD80">已发货</van-col>
        </van-row>
        <van-divider :style="{ borderColor: '#CDC9A5', padding: '0 16px',margin:'5px 0 0 0' }">
        </van-divider>
        <van-row style="margin-top: 10px">
            <van-col span="8">
                <van-image
                    width="100"
                    height="100"
                    src="https://img.yzcdn.cn/vant/cat.jpeg"
            /></van-col>
            <div style="margin-top: 0px">
                <van-col span="8" style="color:transparent">5</van-col>
                <van-col span="8" style="color:transparent">5</van-col>
                <van-col span="8" style="color:transparent">5</van-col>
                <van-col span="8" style="color:transparent">5</van-col>
                <van-col span="8" style="color:transparent">5</van-col>
                <van-col span="8" style="color:transparent">5</van-col>

            <van-col span="8" style="color: gainsboro"><van-row type="flex">
                <van-col span="8">100克</van-col>
            </van-row></van-col>
            <van-col span="8"><van-row type="flex" justify="end">
                <van-col span="12">省3.99</van-col>
            </van-row></van-col>
                <van-col span="8" style="color: red;font-size: 15px;margin-top: 5px"><van-row type="flex">
                    <van-col span="8">￥66.6</van-col>
                </van-row></van-col>
            <van-col span="8"><van-row type="flex" justify="end">
                <van-col span="12" style="margin-top: 5px">x1</van-col>
            </van-row></van-col>

            </div>

        </van-row>
        <van-row type="flex" justify="end" style="margin-top: 5px">
            <van-col span="4" style="font-size: 7px">共计1件商品    </van-col>
            <van-col span="4" style="font-size: 7px">总计</van-col>
            <van-col span="4" style="font-size: 7px">￥66.6</van-col>
        </van-row>

        <van-row type="flex" justify="end" style="margin-top: 10px">
            <van-col span="6"> <van-button  type="default" to="index" size="small" >查看物流</van-button></van-col>
            <van-col span="6"> <van-button plain type="primary" to="index" size="small">确认收货</van-button></van-col>

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