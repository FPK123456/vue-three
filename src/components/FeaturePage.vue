<template>
  <div class="menu-container">
    <!-- 左侧特性logo -->
    <div class="left-feature">
      <i class="iconfont spe-icon">&#xe61d;</i>
      <p class="feature-p">{{ featureTips }}</p>
    </div>
    <div class="tab-top">
      <div class="tab-list" v-for="(value, key) in navTopData.array" :key="key">
        <span @click.stop="goToPlatForm(value.tagName)">{{
          value.navName
        }}</span>
      </div>
    </div>
  </div>
  <!-- <div class="middle-plat">
    <el-button type="primary" @click="goToPlatForm('test')"
      >自动化测试平台</el-button
    >
    <el-button type="primary" @click="goToPlatForm('three')"
      >3D可视化平台</el-button
    >
  </div> -->
</template>

<script>
import { ref, reactive } from 'vue'
export default {
  // Vue3定义各个类型data的方法,可结合vue2.x的版本使用
  setup () {
    // 定义一个字符串类型的data,需要用到Vue3开放的ref钩子函数
    const featureTips = ref('Vue3演练场')
    // 定义一个对象、数组
    const navTopData = reactive({
      array: [
        { navName: '首页', tagName: 'sy' },
        { navName: '演练中心', tagName: 'ylc' },
        { navName: '模板库', tagName: 'mbk' },
        { navName: '登录/注册', tagName: 'login' },
        { navName: '自动化测试平台', tagName: 'zdcs' }
      ]
    })
    // 定义完成,我们需要把它暴露给模板使用。
    return {
      featureTips,
      navTopData
    }
  },
  name: 'FeaturePage',
  // 父子组件数据传递
  props: {
    msg: String
  },
  methods: {
    // 平台切换
    goToPlatForm (index) {
      // 前往自动化测试平台
      if (index === 'login') {
        this.$router.push('/login')
      }
      // 前往3D演练场
      if (index === 'ylc') {
        this.$router.push('/b')
      }
      // 前往模板库
      if (index === 'mbk') {
        this.$router.push('/mbk')
      }
      // 前往模板库
      if (index === 'zdcs') {
        this.$router.push('/home')
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.menu-container {
  position: relative;
  background-color: currentcolor;
  height: 80px;
  min-width: 1100px;
  cursor: pointer;
}
.left-feature {
  position: absolute;
  left: 10%;
  top: 27%;
  display: flex;
  justify-items: center;
  color: ghostwhite;
  .spe-icon {
    font-size: 20px;
  }
  .feature-p {
    font-weight: 400;
    font-size: 22px;
    line-height: 30px;
    padding-left: 8px;
  }
}
.tab-top {
  position: absolute;
  top: 27%;
  left: 40%;
  // background: cyan;
  display: flex;
  .tab-list {
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;
    padding-left: 20px;
    color: ghostwhite;
    span {
      &:hover {
        color: #409eff;
      }
    }
  }
}
.middle-plat {
  position: absolute;
  top: 28%;
  left: 20%;
}
</style>
