

<template>
  <div class="about">
    <h1></h1>

    <van-cell-group>
      <van-field
              v-model="username"
              required
              clearable
              label="用户名"
              right-icon="question-o"
              placeholder="请输入用户名"
              @click-right-icon="$toast('question')"
      />

      <van-field
              v-model="password"
              type="password"
              label="密码"
              placeholder="请输入密码"
              required
      />

      <van-field
              v-model="phone"
              label="手机号"
              placeholder="请输入手机号"
      />
      <van-cell-group>
        <van-field
                v-model="sms"
                center
                clearable
                label="短信验证码"
                placeholder="请输入短信验证码"
        >
          <van-button slot="button" size="small" type="primary">发送验证码</van-button>
        </van-field>
      </van-cell-group>
    </van-cell-group>

    <van-button plain type="primary" round="true" style="margin-top: 20px">登录</van-button>

  </div>

</template>

<script>

</script>