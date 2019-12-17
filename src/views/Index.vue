<template>


    <div>
        <van-row>
            <router-link to="/Research">
            <van-col span="22" style="margin-top: -10px"><van-search placeholder="请输入搜索关键词"  v-model="value" />
            </van-col>
            </router-link>
            <router-link to="/Location">
            <van-col span="2" ><van-icon name="location-o" size="17px"/>
                <p style="margin-top: -5px;font-size: 5px">定 位</p>
            </van-col>
            </router-link>
        </van-row>


        <van-tabs v-model="active">
            <van-tab title="今日发布">
                <van-swipe :autoplay="3000" indicator-color="white">
                    <van-swipe-item>
                        <van-image
                            width="500"
                            height="200"
                            src="https://img.yzcdn.cn/vant/apple-1.jpg"
                        /></van-swipe-item>

                    <van-swipe-item><van-image
                            width="500"
                            height="200"
                            src="https://img.yzcdn.cn/vant/apple-2.jpg"
                    /></van-swipe-item>

                    <van-swipe-item><van-image

                            width="500"
                            height="200"
                            src="https://img.yzcdn.cn/vant/apple-1.jpg"
                    /></van-swipe-item>
                    <van-swipe-item><van-image
                            width="500"
                            height="200"
                            src="https://img.yzcdn.cn/vant/apple-2.jpg"
                    /></van-swipe-item>
                </van-swipe>
                <van-cell-group >
                    <van-row>
                        <van-col span="6"><van-cell title="服务类型：" /></van-col>

                        <van-col offset="4" span="10"><van-cell title="服务名称：" /></van-col>
                    </van-row>
                    <van-row>
                        <van-col span="6"><van-cell title="¥54：" style="color: red" /></van-col>

                        <van-col offset="4" span="10"><van-cell title="已售7878" style="color: darkgray" /></van-col>
                    </van-row>
                </van-cell-group>

                <div>
                    <van-image
                            width="100%"
                            height="150"
                            src="https://img.yzcdn.cn/vant/cat.jpeg"
                    />
                </div>
                <van-cell-group >
                    <van-row>
                        <van-col span="6"><van-cell title="服务类型：" /></van-col>

                        <van-col offset="4" span="10"><van-cell title="服务名称：" /></van-col>
                    </van-row>
                    <van-row>
                        <van-col span="6"><van-cell title="¥78：" style="color: red" /></van-col>

                        <van-col offset="4" span="10"><van-cell title="已售6666" style="color: darkgray" /></van-col>
                    </van-row>
                </van-cell-group>
                <div>
                    <van-image
                            width="100%"
                            height="150"
                            src="https://img.yzcdn.cn/vant/cat.jpeg"
                    />
                </div>
                <van-cell-group >
                    <van-row>
                        <van-col span="6"><van-cell title="服务类型：" /></van-col>

                        <van-col offset="4" span="10"><van-cell title="服务名称：" /></van-col>
                    </van-row>
                    <van-row>
                        <van-col span="6"><van-cell title="¥54：" style="color: red" /></van-col>

                        <van-col offset="4" span="10"><van-cell title="已售9999" style="color: darkgray" /></van-col>
                    </van-row>
                </van-cell-group>



            </van-tab>
            <van-tab title="家政服务"><div>
                <van-image
                        width="100%"
                        height="150"
                        src="https://img.yzcdn.cn/vant/cat.jpeg"
                />
            </div>
                <van-cell-group >
                    <van-row>
                        <van-col span="6"><van-cell title="服务类型：" /></van-col>

                        <van-col offset="4" span="10"><van-cell title="服务名称：" /></van-col>
                    </van-row>
                    <van-row>
                        <van-col span="6"><van-cell title="¥54：" style="color: red" /></van-col>

                        <van-col offset="4" span="10"><van-cell title="已售9999" style="color: darkgray" /></van-col>
                    </van-row>
                </van-cell-group>
            </van-tab>
            <van-tab title="民宿公寓"><div>
                <van-image
                        width="100%"
                        height="150"
                        src="https://img.yzcdn.cn/vant/cat.jpeg"
                />
            </div>
                <van-cell-group >
                    <van-row>
                        <van-col span="6"><van-cell title="服务类型：" /></van-col>

                        <van-col offset="4" span="10"><van-cell title="服务名称：" /></van-col>
                    </van-row>
                    <van-row>
                        <van-col span="6"><van-cell title="¥54：" style="color: red" /></van-col>

                        <van-col offset="4" span="10"><van-cell title="已售9999" style="color: darkgray" /></van-col>
                    </van-row>
                </van-cell-group>
            </van-tab>
            <van-tab title="工具出租"><div>
                <van-image
                        width="100%"
                        height="150"
                        src="https://img.yzcdn.cn/vant/cat.jpeg"
                />
            </div>
                <van-cell-group >
                    <van-row>
                        <van-col span="6"><van-cell title="服务类型：" /></van-col>

                        <van-col offset="4" span="10"><van-cell title="服务名称：" /></van-col>
                    </van-row>
                    <van-row>
                        <van-col span="6"><van-cell title="¥54：" style="color: red" /></van-col>

                        <van-col offset="4" span="10"><van-cell title="已售9999" style="color: darkgray" /></van-col>
                    </van-row>
                </van-cell-group>
            </van-tab>
        </van-tabs>
    </div>



</template>

<script>

export default {
        name: "Index"
    }
</script>

<style scoped>

</style>