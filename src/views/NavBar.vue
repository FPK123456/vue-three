<template>
  <div>
    <span
      id="shrink_icon"
      @click="checkShrinkFlag"
      style="font-size: 24px; --color:#808695;"
    >
      <el-icon v-if="shrinkFlag">
        <Expand />
      </el-icon>
      <el-icon v-else>
        <Fold />
      </el-icon>
    </span>
    <span>面包屑</span>
    <span id="head_portrait">
      <el-tooltip
        class="box-item"
        effect="dark"
        content="全屏"
        placement="bottom"
      >
        <el-icon style="font-size: 24px; --color:#808695; margin-top:5px; cursor: pointer;">
          <FullScreen />
        </el-icon>

      </el-tooltip>

      <el-dropdown>
        <span class="el-dropdown-link">
          <img
            src="../assets/av.png"
            alt=""
            id="portrait"
            :width="30"
          >
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
          <span id="username">admin</span>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>
              个人信息
            </el-dropdown-item>
            <el-dropdown-item
              text
              @click="open"
              autofocus:false
            >
              退出登录
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <!-- <img src="../assets/av.png" alt="" id="portrait"> -->
    </span>
  </div>
</template>

<script setup>
import { Expand, Fold, FullScreen } from '@element-plus/icons-vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const shrinkFlag = ref(false)

const checkShrinkFlag = () => {
  shrinkFlag.value = !shrinkFlag.value
}

const route = useRouter()
const open = () => {
  ElMessageBox.confirm(
    '确定退出吗？',
    '提示',
    {
      confirmButtonText: '确定',
      cancelButtonText: '返回',
      type: 'info'
    }
  )
    .then(() => {
      route.push('/login')
      localStorage.clear()
      ElMessage({
        type: 'success',
        message: '退出成功'
      })
    })
    .catch(() => {
    })
}
// const loginOut = () => {
//   route.push('/login').then(() => {
//     ElMessage.success('退出成功')
//     localStorage.clear()
//   })
// }
</script>

<style lang="scss" scoped>
#shrink_icon {
  float: left;
  margin-left: 10px;
  cursor: pointer;
}

#head_portrait {
  float: right;
  margin-right: 20px;
}

#portrait {
  margin: 0 auto;
  cursor: pointer;
  margin-left: 10px;
}

.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}

#username {
  position: relative;
  top: -8px;
  left: -10px;
  display: inline-block;
  font-size: 25px;
  padding-bottom: 10px;
  color: black;
}

.el-dropdown {
  cursor: pointer;
}
</style>
