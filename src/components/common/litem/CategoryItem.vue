<template>
  <div class="list" @click="itemClick">
    <div class="list-item" :style="activeStyle"><slot name='itemname'></slot></div>
  </div>
</template>
<script>
  export default{
    name:'CategoryItem',
    props:{
      path: String,
      activeColor: {
        type: String,
        default: '#ff8198'
      },
      textColor:{
        type:String,
        default:'#fff'
      }
    },
    data(){
      return{

      }
    },
    methods:{
      itemClick() {
        this.$router.replace(this.path)
      }
    },
    computed:{
      activeStyle() {
        return this.isActive ? {background: this.activeColor,color:this.textColor} : {}
      },
       isActive() {
          return this.$route.path.indexOf(this.path) !== -1
       }
    }
  }
</script>

<style scoped>
  .list{
   width: 100%;
   height: 50px;
   border-bottom: #666666 solid 1px;
  }
  .list-item{
    text-align: center;
    width: 100%;
    line-height: 50px;
  }
</style>
