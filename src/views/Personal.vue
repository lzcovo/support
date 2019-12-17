<template>

    <div style="font-family:verdana;padding:10px;background-color:#f0f0f0;">

       <div style="margin-right: 530px;" >

          </div>

        <van-panel >
            <van-cell  >
                <van-row>
                    <van-col span="4" offset="3"><van-image

                            round
                            width="5rem"
                            height="5rem"
                            src="https://img.yzcdn.cn/vant/cat.jpeg"
                    /></van-col>
                    <van-col span="10" offset="2"   ><van-cell title="点击头像登录/注册" is-link to="About" arrow-direction="none"	/></van-col>
                    <van-col span="5" offset="2" style="margin-top: 15px"><van-tag type="warning">等级值0 ></van-tag></van-col>
                </van-row>


            </van-cell>

            <div>

                    <van-cell  value="全部订单" is-link to="Settlement" >
                <!-- 使用 title 插槽来自定义标题 -->
                <template slot="title">
                    <span class="custom-title" >我的订单</span>

                </template>

            </van-cell>

            </div>
            <van-divider  style="margin-top: 0px; margin-left: 18px"/>
            <div >
                <van-cell >
                    <van-row style="margin-left: 70px">
                        <van-col span="6"><van-icon name="paid" size="23px" ></van-icon></van-col>
                        <van-col span="6"><van-icon name="logistics" size="23px" /></van-col>
                        <van-col span="6"><van-icon name="records" size="23px" /></van-col>
                        <van-col span="6"><van-icon name="balance-pay" size="23px"/></van-col>
                    </van-row>

                </van-cell>
                <van-cell >
                    <van-cell is-link to="/home" title="我的地址" >
                    </van-cell>
                </van-cell>
                <van-cell >
                    <van-cell title="客服" is-link to="/Payfor" />
                </van-cell>
                <van-cell >
                    <van-cell title="系统设置" is-link url="/vant/mobile.html" />
                </van-cell>
                </div>
        </van-panel>
    </div>

</template>

<script>
    export default {
        name: "Test",

    }
</script>

<style scoped>

</style>