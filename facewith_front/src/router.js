import {createRouter, createWebHashHistory} from 'vue-router'
import loginView from "@/components/LoginView/loginView";
/*import store from "@/index";*/

const routes = [
    { path: '/', component: loginView },
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