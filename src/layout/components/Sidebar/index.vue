<template>
  <div class="app-wrapper">
    <!-- 左侧 menu -->
    <side-bar
      id="guide-sidebar"
      class="sidebar-container"
      :style="{ backgroundColor: variables.menuBg }"
    />
    <div class="main-container">
      <div class="fixed-header">
        <!-- 顶部的 navbar -->
        <nav-bar />
      </div>
      <!-- 内容区 -->
      <app-main />
    </div>
  </div>
</template>

<script setup>
import variables from '@/styles/variables.scss'
import NavBar from './components/NavBar'
import SideBar from './components/SideBar'
import AppMain from './components/AppMain'
</script>
