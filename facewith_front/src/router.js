import {createRouter, createWebHashHistory} from 'vue-router'
import loginView from "@/components/LoginView/loginView";
import signUpView from "@/components/LoginView/signUpView";
import forgetPassView from "@/components/LoginView/forgetPassView";
import homeView from "@/components/HomeView/homeView";
import notFoundView from "@/components/ErrorView/notFoundView";
/*import store from "@/index";*/

const routes = [
    { path: '/', component: loginView },
    { path: '/signup', component: signUpView },
    { path: '/home', component: homeView},
    { path: '/forget', component: forgetPassView },
    {
        path: '/:pathMatch(.*)*',
        name: 'error-404',
        component: notFoundView
  }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})

/*router.beforeEach((to, from, next)=>{
    from;
    if (!store.state.currentAuthority){
        if (to.path === "/staff" || to.path === "/finance/overview"){
            next("/")
        }else {
            next()
        }
            }else {
        next()
    }
})*/

export default router;