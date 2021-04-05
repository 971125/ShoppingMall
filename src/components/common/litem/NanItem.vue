<template>
  <div >
    <ul class="Manlist">
      <li v-for="(s,index) in imgs" :key="index">
        <img :src=s.src />
        <span>{{s.sprice}}元</span>
      </li>
    </ul>
  </div>
</template>

<script>
  import {requesrdata} from '../../../network/home.js'
  export default{
    name:'NanItem',
    data(){
      return{
        imgs:[],
        imglist:[],
      }
    },
    async created() {


    },
     async beforeMount() {
      let path = this.$route.path
      await requesrdata(path).then(res=>{
        this.imglist=res
      })
      this.imgs=this.imglist
    },
    watch:{
      '$route.path':function (newVal, oldVal) {
           if (newVal != oldVal) {
           this.$router.go(0);
            }
      }
   }
  }
</script>

<style scoped>
  ul li{
    width: 45%;
    height: 160px;
    margin: 5px;
    list-style: none;
    border: #666666 solid 1px;
  }
  ul li img{
    width: 100%;
    height: 130px;
    border-bottom: #666666 solid 1px;
    border-right: #666666 solid 1px;

  }
  ul li span{
    display: block;
    font-size: 15px;
    text-align: center;
  }
  .Manlist{
    display: flex;
    flex-direction:row;
    flex-wrap: wrap;
  }
</style>
