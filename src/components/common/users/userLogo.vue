<template>
  <div class="user_root">
    <div class="user_logo"></div>
    <span class="user_name">昵称:测试账号</span>
  </div>
</template>

<script>
  export default{
    name:"userLogo",
  }
</script>

<style>
  .user_root{
    display: block;
    margin-top:44px;
    border-bottom: #666666 solid 1px;
  }
  .user_logo{
    width: 100px;
    height: 100px;
    background-color: #666666;
    display: inline-block;
    border-radius: 25%;
  }
  .user_name{
    display: inline-block;
    position: relative;
    font-size: 25px;
    color: #FF8198;
    height: 100px;
    line-height: 100px;
    float: right;
    width: 70%;
  }
</style>
