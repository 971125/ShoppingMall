import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')

// 1.安装插件
Vue.use(VueRouter)

// 2.创建router
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category,
    children:[
      {
        path: '',
        redirect: '/category/man'
      },
       {
         path:'/category/man',
         name:'',
         component:()=>import('../components/common/litem/NanItem')
       },
       {
         path:'/category/woman',
         name:'',
         component:()=>import('../components/common/litem/NanItem')
       },
       {
         path:'/category/children',
         name:'',
       },
       {
         path:'/category/spring',
         name:'',
       },
       {
         path:'/category/dong',
         name:'',
       },
       {
         path:'/category/xia',
         name:'',
       }

    ]
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})


export default router
