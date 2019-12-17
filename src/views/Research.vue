<template>

    <van-row>
        <van-col style="width: 25%" >
            <van-sidebar v-model="activeKey " @change="onChange" style="width: 100%">
                <van-sidebar-item title="美食">

                </van-sidebar-item>
                <van-sidebar-item title="家政服务" />
                <van-sidebar-item title="民宿公寓"/>
                <van-sidebar-item title="生活服务" />
                <van-sidebar-item title="居家百货" />
                <van-sidebar-item title="洗护" />
                <van-sidebar-item title="杂货" />
                <van-sidebar-item title="饮食" />
                <van-sidebar-item title="电器" />
            </van-sidebar>
        </van-col>
        <van-col style="height: 100%;width: 70%"  span="7" >
            <van-grid square style="text-align: center">
                <van-grid-item
                        v-for="value in 8"
                        :key="value"
                        icon="photo-o"
                        text="文字"
                />
            </van-grid>
        </van-col>
    </van-row>




</template>

<script>
    import { Notify } from 'vant';

    export default {
        name: "Research",
        data() {
            return {
                activeKey: 0,


            };
        },
        methods: {
            onChange(index) {
                Notify({ type: 'primary', message: index });
            }
        }
    }
</script>

<style scoped>

</style>