import {createRouter, createWebHashHistory} from 'vue-router'
import loginView from "@/components/LoginView/loginView";
import signUpView from "@/components/LoginView/signUpView";
/*import store from "@/index";*/

const routes = [
    { path: '/', component: loginView },
    { path: '/signup', component: signUpView },
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