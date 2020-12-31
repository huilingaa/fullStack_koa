# 项目启动

$ yarn create <project-name>
$ cd <project-name>
\$ yarn dev

# 语法相关

1. 响应式变量声明

```javascript
import { ref, reactive } from 'vue'
// 方式一： 可传入任意类型的值，改变值的时候必须使用其value属性,例 refData.value = 2
const refData = ref(0)

// 方式二： 只能传入引用类型的值
const data = reactive({
  tableData: [
    {
      name: '姓名1'
    }
  ]
})

// 使用响应式变量前，必须在Vue文件的setup函数中 执行/return 出去
setup (props, context){
  return {
    refData,
    data
  }
}
```

2. computed

```javascript
import { watch, watchEffect, computed } from "vue";

// 1、创建只读的计算属性
const computedCount = computed(() => count.value + 1);

// 2、创建可读可写的计算属性
const computedCount2 = computed({
  get: () => writeCount.value + 2,
  set: (val) => {
    return (writeCount.value = val + 2);
  },
});

// 可以直接修改computed的值，在Vue2.x中无法修改
// computedCount2 = 123
```

3. watch & watchEffect

```javascript
```

4. provide & inject

```javascript
```

5. 生命周期

   > 在 v2 的基础上加上`on`,取消了`和`

6.

```javascript
// 组件内部路由拦截器的使用方式
import { useRouter, useRoute } from "vue-router"

setup() {
  // 组件内路由
  const router = useRouter()
  router.beforeEach((to, from, next) => {
    next()
  })
  // 组件内路由信息
  const route = useRoute()
}
```

7. vuex
   > 创建 Store

```javascript
import { createStore } from "vuex";

const store = createStore({
  state: {
    userInfo: {
      name: "renkq",
    },
  },
  mutations: {
    getUserInfo(state, name) {
      state.userInfo.name = name;
    },
  },
  actions: {
    asyncGetUserInfo({ commit }) {
      setTimeout(() => {
        commit("getUserInfo", +new Date() + "action");
      }, 2000);
    },
  },
  getters: {
    userInfoGetter(state) {
      return state.userInfo.name;
    },
  },
});

export default store;
```

> 组件内使用 store

```javascript
import {
  useStore,
  // mapState,
  // mapMutations,
  // mapActions,
  // mapGetters
} from "vuex";

export default {
  name: "self",
  setup() {
    const store = useStore();
    console.log(store, "store");
    console.log(store.getters, "getters");
    const state = store.state;
    const getters = store.getters;
    // console.log(mapState(store.state),'mapState')
    // console.log(mapMutations(store._mutations),'mapMutations')
    // console.log(mapActions(store._actions),'mapActions')
    // console.log(mapGetters(store.getters),'mapGetters')
    const methods = {
      // 处理commit
      handleMutation: () => {
        store.commit("getUserInfo", +new Date());
      },
      // 处理dispatch
      handleAction: () => {
        store.dispatch("asyncGetUserInfo");
      },
    };
    return {
      state,
      getters,
      ...methods,
    };
  },
};
```

8. v-model

```javascript
```

9. directive
   > 定义指令

```javascript
import { ObjectDirective } from "vue";
// 使用ObjectDirective声明指令类型即可，因为源码内部指定了默认类型说明
export const customDirective: ObjectDirective = {
  beforeMount(el, binding, vnode, prevVnode) {
    console.log(el, binding, vnode, prevVnode);
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  beforeUnmount() {
    console.log("beforeUnmount");
  },
  unmounted() {
    console.log("unmounted");
  },
};
```

> 全局注册指令

```javascript
const app = createApp(App);
app.use(router);
app.use(store);
app.directive("custom", customDirective);
app.mount("#app");
```

> 组件内使用指令

```javascript
import { customDirective } from "../../directive/directive";
export default {
  setup() {
    return {};
  },
  directives: {
    custom: customDirective,
  },
};
```

10. nextTick

```javascript
import { nextTick, onBeforeMount } from 'vue'
{
  setup () {

    onBeforeMount(() => {
      nextTick(() => {

      })
    })

  }
}
```

11. 定义组件 defineAsyncComponent & defineComponent

```javascript
// 一、定义同步组件
const syncComponent = defineComponent({
  setup() {
    return () => `我是同步组件`;
  },
});

// 二、定义异步组件
// 方式1
const asyncComponent = defineAsyncComponent({
  loader: () => import("./asyncComponents.vue"),
  loadingComponent: loadingComponent,
  errorComponent: loadingComponent,
  delay: 2000,
  timeout: 3000,
});
// 方式2
const asyncComponent = defineAsyncComponent(() =>
  import("./syncComponents.vue")
);
```
