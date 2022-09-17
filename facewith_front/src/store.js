import { defineStore } from 'pinia';

export const userIDStore = defineStore('userID', {
    state(){  // 存放的就是模块的变量
        return {
            userID: ''
        }
    },
    getters:{ // 相当于vue里面的计算属性，可以缓存数据

    },
    actions:{ // 可以通过actions 方法，改变 state 里面的值。

    }
})