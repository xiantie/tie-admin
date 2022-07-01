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
    <side-bar-item
      v-for="item in routes"
      :key="item.path"
      :route="item"
    ></side-bar-item>
  </el-menu>
</template>
<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { filterRouters, generateMenus } from '@/utils/route'
import SideBarItem from './SideBarItem'
import variables from '@/styles/variables.module.scss'

const router = useRouter()
const routes = computed(() => {
  const filterRoutes = filterRouters(router.getRoutes())
  return generateMenus(filterRoutes)
})
console.log(JSON.stringify(routes.value))
</script>

<style lang="scss" scoped></style>
