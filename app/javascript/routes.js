import Vue from 'vue'
import VueRouter from 'vue-router';
import store from './store/index'

import Login from './components/login/login'
import WelcomePage from './components/shared/welcome';

Vue.use(VueRouter)

const router =  new VueRouter({
  mode: 'history',
  routes: [
    {path: '/', component: WelcomePage},
    {path: '/login', component: Login},
  ]
})

router.beforeEach(async (to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // このルートはログインされているかどうか認証が必要です。
    // もしされていないならば、ログインページにリダイレクトします。
    await store.dispatch('login')
    if (to.path !== '/login' && !store.state.user.isAuth) {
       next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
    if (!store.state.user.isAuth) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // next() を常に呼び出すようにしてください!
  }
})

export default router
