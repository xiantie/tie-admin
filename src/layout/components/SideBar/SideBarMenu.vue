<template>
  <!-- 一级 menu 菜单 -->
  <el-menu
    :collapse="!$store.getters.sidebarOpened"
    :default-active="activeMenu"
    :background-color="$store.getters.cssVar.menuBg"
    :text-color="$store.getters.cssVar.menuText"
    :active-text-color="$store.getters.cssVar.menuActiveText"
    :unique-opened="true"
    router
  >
    <!-- 子集 menu 菜单 -->
    <side-bar-item
      v-for="item in routes"
      :key="item.path"
      :route="item"
    ></side-bar-item>
  </el-menu>
</template>
<script setup>
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { filterRouters, generateMenus } from '@/utils/route'
import SideBarItem from './SideBarItem'

const router = useRouter()
const routes = computed(() => {
  const filterRoutes = filterRouters(router.getRoutes())
  return generateMenus(filterRoutes)
})
// 计算高亮 menu 的方法
const route = useRoute()
const activeMenu = computed(() => {
  return route.path
})
</script>

<style lang="scss" scoped></style>
