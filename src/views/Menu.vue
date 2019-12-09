<template>
    <van-tabbar v-model="active" >
        <!--
                <van-tabbar-item name="home" icon="home-o"><router-link to="/">Home</router-link></van-tabbar-item>
        -->
        <van-tabbar-item name="search" icon="search"><router-link to="/about">About</router-link> </van-tabbar-item>
        <van-tabbar-item name="friends" icon="friends-o"><router-link to="/test">Personal</router-link></van-tabbar-item>
        <van-tabbar-item name="setting" icon="setting-o"><router-link to="/index">Index</router-link></van-tabbar-item>
    </van-tabbar>
</template>

<script>
    export default {
        name: "Menu"
    }
</script>

<style scoped>

</style>