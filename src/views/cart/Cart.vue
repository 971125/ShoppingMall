<template>
  <div style="height: 1000px;">
    <nav-bar class="home-nav"> <div slot="center"> 购物车</div></nav-bar>
    <ul>
      <li v-for="(item,key) in carts" :key="key">
        <cart-item>
          <div slot="logo" class="img">  <img :src= item.src />   </div>
          <div slot="count" class="sprice"><span >{{item.sprice}}元/件</span></div>
          <div slot="prise" class="count_span">{{item.count}}件</div>
        </cart-item>
      </li>
    </ul>
     <carts-btn>
       <div class="zongPrise" slot="zongjia">总价：{{count}} 元</div>
     </carts-btn>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import CartItem from '../../components/content/cart/CartItem.vue'
  import CartsBtn from '../../components/content/cart/CartsBtn.vue'
  import axios from 'axios'
  export default {
    name: "Cart",
    components:{
      NavBar,
      CartItem,
      CartsBtn
    },
    data(){
      return{
        carts:[],
        countprice:''
      }
    },
    async created() {
      await axios.get('/js/cartslist.json').then(res => {
        this.carts=res.data
      })
    },
    computed:{
      count:function(){
        let result=0
        this.carts.forEach(ele => {
          result+= parseInt(ele.sprice)*ele.count
        })
        return result

      }
    }
  }
</script>

<style scoped>
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
  img{
    height: 80px;
    width: 80px;
  }
  .img{
    display: block;
    height: 80px;
    width: 80px;
    float: left;
  }
  .zongPrise{
    color: #FFFFFF;
    height: 80px;
    width: 250px;
    display: block;
    float: left;
    line-height: 80px;
    font-size: 25px;
  }
</style>
