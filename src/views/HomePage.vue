<template>
  <div>
    <div class="common-layout">
      <el-container>
        <el-header>自动化测试平台</el-header>
        <el-container>
          <el-aside width="200px">
            <el-row class="tac">
              <el-col :span="50">
                <el-menu
                  active-text-color="#ffd04b"
                  background-color="#545c64"
                  class="el-menu-vertical-demo"
                  text-color="#fff"
                >
                  <el-sub-menu index="1">
                    <template #title>
                      <el-icon>
                        <location />
                      </el-icon>
                      <span>接口自动化</span>
                    </template>
                    <el-menu-item index="1-1">测试用例</el-menu-item>
                    <el-menu-item index="1-2">测试数据</el-menu-item>
                    <el-menu-item index="1-3">测试计划</el-menu-item>
                    <el-menu-item index="1-3">测试报告</el-menu-item>
                  </el-sub-menu>
                  <el-sub-menu index="2">
                    <template #title>
                      <el-icon>
                        <location />
                      </el-icon>
                      <span>UI自动化</span>
                    </template>
                    <el-menu-item index="1-1">item one</el-menu-item>
                    <el-menu-item index="1-2">item two</el-menu-item>
                    <el-menu-item index="1-3">item three</el-menu-item>
                  </el-sub-menu>
                </el-menu>
              </el-col>
            </el-row>
          </el-aside>
          <el-main>Main</el-main>
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.el-header {
  background-color: cadetblue;
}
.el-aside {
  background-color: aqua;
  position: fixed;
  height: 100%;
}
</style>
