<template>
 <div>
   <nav-bar class="home-nav"> <div slot="center"> 个人信息</div></nav-bar>
   <user-logo></user-logo>
   <user-list></user-list>
 </div>
</template>

<script>
 import NavBar from 'components/common/navbar/NavBar'
 import userLogo from '../../components/common/users/userLogo.vue'
 import userList from '../../components/common/users/userList.vue'
  export default {
    name: "Profile",
    components: {
      NavBar,
      userLogo,
      userList
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
</style>
