<template>
    <div>
        <van-row type="flex">
            <van-col span="15">
                <van-cell-group>
                <van-cell title="当前：昆明" value="切换区县"  />
            </van-cell-group>
            </van-col>
        </van-row>

        <van-panel title="定位/最近访问" style="margin-right: 280px" >


          <van-button color="#7232dd" plain>昆明</van-button>

        </van-panel>
    <van-index-bar style="margin-right: 350px" >
        <van-index-anchor index="A" />
        <van-cell title="安阳" />
        <van-cell title="澳门" />
        <van-cell title="安化" />
        <van-cell title="安宁" />
        <van-cell title="阿城区" />

        <van-index-anchor index="B" />
        <van-cell title="包头" />
        <van-cell title="北海" />
        <van-cell title="宝鸡" />
        <van-cell title="北京" />
        <van-cell title="保山" />

        <van-index-anchor index="C" />
        <van-cell title="长沙" />
        <van-cell title="成都" />
        <van-cell title="重庆" />
        <van-cell title="长春" />
        <van-cell title="楚雄" />

        ...
    </van-index-bar>
    </div>


</template>

<script>
    export default {

        name: "Location"
    }
</script>

<style scoped>

</style>