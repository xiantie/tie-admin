<template>
  <!-- 一级 menu 菜单 -->
  <el-menu
    :uniqueOpened="true"
    default-active="2"
    :backgroundColor="variables.menuBg"
    :textColor="variables.menuText"
    active-text-color="#ffd04b"
  >
    <!-- 子集 menu 菜单 -->
    <el-sub-menu index="1">
      <template #title>
        <el-icon>
          <Location />
        </el-icon>
        <span>导航一</span>
      </template>
      <el-menu-item index="1-1">选项1</el-menu-item>
      <el-menu-item index="1-2">选项2</el-menu-item>
    </el-sub-menu>
    <!-- 具体菜单项 -->
    <el-menu-item index="2">
      <el-icon><Setting /></el-icon>
      <template #title>导航二</template>
    </el-menu-item>
  </el-menu>
</template>
<script setup>
import { Location, Setting } from '@element-plus/icons-vue'
import variables from '@/styles/variables.module.scss'
</script>
<style lang="scss" scoped></style>
