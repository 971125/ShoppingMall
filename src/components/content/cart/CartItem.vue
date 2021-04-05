<template>
  <div class="cartslist">
    <slot class="logo_item" name="logo"></slot>
    <slot class="sprice" name="count"></slot>
    <slot class="count_span" name="prise"></slot>
  </div>
</template>

<script>
  export default{
    name:"CartItem",
    props:{
    }
  }
</script>

<style scoped>
  .cartslist{
    width: 99%;
    height: 120px;
    position: relative;
    margin: 0 auto;
    top: 44px;
    background-color: #EEEEEE;
    border-bottom: #F6F6F6 solid 1px;
    padding-top: 15px;
    padding-left: 15px;
  }
  .count_span{
    display: block;
    width: 50px;
    height: 50px;
    font-size: 25px;
    float: right;
    text-align: center;
    line-height: 50px;
  }
  .sprice{
    display: block;
    float: right;
    font-size: 15px;
    color: #FF8198;
    width: 100px;
    height: 50px;
    margin-bottom: 0;
    line-height: 50px;
    text-align: center;
  }
</style>
