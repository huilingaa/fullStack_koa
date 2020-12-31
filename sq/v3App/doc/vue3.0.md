# vue3.0性能对比
1. 将Vue内部的绝大部分api对外暴露，使Vue具备开发大型项目的能力，例如compile编译api等
2. webpack的treeshaking支持度友好
3. 使用Proxy进行响应式变量定义，性能提高2-3倍
4. 可在Vue2.0中单独使用composition-api插件，或者直接用它开发插件
5. 对typescript支持更加友好
6. 面向未来：对于尤雨溪最近创新的vite开发服务器（舍弃webpack、底层为Koa框架的高性能开发服务器）,直接使用的Vue3.0语法

# 语法注意事项
1. 响应式变量申明
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
import { watch, watchEffect, computed } from 'vue'

// 1、创建只读的计算属性
const computedCount = computed(() => count.value + 1)


// 2、创建可读可写的计算属性
const computedCount2 = computed({
      get: () => writeCount.value + 2,
      set: (val) => {
        return writeCount.value =  val + 2
      }
})

// 可以直接修改computed的值，在Vue2.x中无法修改
// computedCount2 = 123 
```

3. watch & watchEffect
```javascript
```