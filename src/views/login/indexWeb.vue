<template>
  <div class="login-container">
    <el-form class="login-form">
      <div class="title-container">
        <h3 class="title">永恒登陆</h3>
      </div>
      <el-form-item>
        <span class="svg-container">
          <el-icon>
            <avatar />
          </el-icon>
        </span>
        <el-input placeholder="username" name="username" type="text" />
      </el-form-item>
      <!-- password  -->
      <el-form-item>
        <span class="svg-container">
          <el-icon>
            <avatar />
          </el-icon>
        </span>
        <el-input placeholder="password" name="password" />
        <span class="show-pwd">
          <el-icon>
            <avatar />
          </el-icon>
        </span>
      </el-form-item>
      <!-- 登陆按钮 -->
      <el-button type="primary" style="width: 100%; margin-bottom: 30px"
        >登陆</el-button
      >
    </el-form>
  </div>
</template>
<script setup>
import { Avatar } from '@element-plus/icons'
import {} from 'vue'
</script>
<style lang="scss" scoped></style>
