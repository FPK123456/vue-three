<template>
  <div>
    <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      class="el-menu-vertical-demo"
      text-color="#fff"
      default-active="/cases"
      router
    >
      <el-sub-menu index="2">
        <template #title>
          <el-icon>
            <Ship />
          </el-icon>
          <span>接口自动化</span>
        </template>
        <!-- elementPlus 子路由配置 -->
        <el-menu-item index="/cases">用例管理</el-menu-item>
        <el-menu-item index="/reports">测试报告</el-menu-item>

      </el-sub-menu>
      <el-menu-item index="">
        <el-icon>
          <icon-menu />
        </el-icon>
        <span>个人中心</span>
      </el-menu-item>
      <el-menu-item index="">
        <el-icon>
          <setting />
        </el-icon>
        <span>系统设置</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script setup>
import {
  Ship,
  Menu as IconMenu,
  Setting
} from '@element-plus/icons-vue'
</script>

<style lang="scss" scoped>
</style>
