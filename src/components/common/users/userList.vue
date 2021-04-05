<template>
  <div>
  <ul>
    <li>基本信息</li>
    <li>购物记录</li>
    <li>物流信息</li>
    <li>设置</li>
    <li>退出登录</li>
  </ul>
  </div>
</template>

<script>
  export default{
    name:"userList"
  }
</script>

<style scoped>
  ul{
    display: block;
  }
  ul li{
    width: 100%;
    height: 80px;
    font-size: 25px;
    line-height: 80px;
    padding-left: 10%;
    color: #FF8198;
    border-bottom: #666666 solid 1px;
  }
</style>
