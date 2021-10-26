<template>
  <div id="app">
    <h1>黑马头条</h1>
    <div>
      <!-- 使用字体图标的时候，需要引入两个类名，一个是font-family的名字，一个字体图标的名字 -->
      <i class="ttfont toutiao-dianzan"></i>
    </div>
    <div>
      <van-button type="primary">主要按钮</van-button>
      <van-button type="info">信息按钮</van-button>
      <van-button type="default">默认按钮</van-button>
      <van-button type="warning">警告按钮</van-button>
      <van-button type="danger">危险按钮</van-button>
    </div>
    <van-cell-group>
      <van-cell title="单元格" value="内容" />
      <van-cell title="单元格" value="内容" label="描述信息" />
    </van-cell-group>
    <!--  <router-view/>是路由的出口，这个标签一定不要删除 -->
    <router-view/>
  </div>
</template>

<script>
// 这里是脚本部分
export default {
  name: 'App'
}
</script>

<style lang="less">
// 这里是样式部分
</style>
