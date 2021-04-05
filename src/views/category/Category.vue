<template>
  <div class="wrapper" ref="aaaa">
    <nav-bar class="home-nav"> <div slot="center"> 商品分类</div></nav-bar>
    <div class="lists">
      <category-item path='/category/man'><div slot='itemname'>男装</div></category-item>
      <category-item path='/category/woman'><div slot='itemname'>女装</div></category-item>
      <category-item path='/category/children'><div slot='itemname'>童装</div></category-item>
      <category-item path='/category/spring'><div slot='itemname'>春秋装</div></category-item>
      <category-item path='/category/dong'><div slot='itemname'>冬装</div></category-item>
      <category-item path='/category/xia'><div slot='itemname'>夏装</div></category-item>
    </div>
    <div class="view">
      <router-view/>
    </div>

  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import NavBar from 'components/common/navbar/NavBar'
  import CategoryItem from '../../components/common/litem/CategoryItem.vue'

  export default {
    name: "Category",
    data() {
      return {
        scroll: null
      }
    },
    props:{
      activeColor:{
        type:String,
        default:'red'
      }
    },
    components:{
      NavBar,
      CategoryItem
    },
    // 组件创建完后调用
    mounted() {

    },
    methods: {

    },
    computed:{
    }
  }
</script>

<style scoped>
  .wrapper {
    height: 100%;
    /* background-color: red; */

    overflow: hidden;
    /* overflow-y: scroll; */
  }
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
  .lists{
    position: relative;
    top: 44px;
    width: 25%;
    height: 1000px;
    border-right: #666666 solid 1px;
    float: left;
  }
  .view{
    width: 75%;
    top: 44px;
    position: relative;
    float: right;
  }
</style>
