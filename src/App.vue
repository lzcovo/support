<template>
  <div id="app">
    <div id="nav">
      <van-nav-bar
              v-bind:left-text="backval"
              v-bind:title="title"
              fixed=True
              right-text="按钮"

              left-arrow
              @click-left="onClickLeft"
              @click-right="onClickRight"
      />

    </div>

    <van-tabbar v-model="active" >
      <!--
              <van-tabbar-item name="home" icon="home-o"><router-link to="/">Home</router-link></van-tabbar-item>
      -->
      <van-tabbar-item name="search" icon="search"><router-link to="/about">About</router-link> </van-tabbar-item>
      <van-tabbar-item name="friends" icon="friends-o"><router-link to="/test">Personal</router-link></van-tabbar-item>
      <van-tabbar-item name="setting" icon="setting-o"><router-link to="/index">Index</router-link></van-tabbar-item>
    </van-tabbar>
    <router-view >

    </router-view>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
  import { Toast } from 'vant';

  export default {
    data() {
      return {
        active: 'home',
        backval: '返回',
        title: "主页"
      }
    },
    methods: {
      onClickLeft() {
        this.$router.go(-1);
      },
      onClickRight() {
        Toast('按钮');
      }
    }

  }
</script>
