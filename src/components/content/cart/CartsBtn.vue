<template>
  <div class="cartbtn">
    <slot class="zongPrise" name="zongjia"></slot>
    <button id="btn">结算</button>
  </div>
</template>

<script>
  export default{
    name:"CartBtn",
    props:{
      counts:[]
    }
  }
</script>

<style>
  .cartbtn{
    width: 100%;
    position: fixed;
    height: 80px;
    bottom: 44px;
    background-color: #666666;
  }
  #btn{
    height: 80px;
    width: 100px;
    display: block;
    position: relative;
    float: right;
    font-size:25px;
    color: #FF8198;
    }
</style>
