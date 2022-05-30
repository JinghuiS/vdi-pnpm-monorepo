import { createModule } from 'vdi'

import { AppModule } from './app/App.Module'
import 'uno.css'
import '@unocss/reset/antfu.css'
import './styles/index.css'
import { add } from '@pm/global'

console.log(add(1, 2))

/**创建vue实例绑定module */
createModule(AppModule).then((vueInstance) => {
    /**
     * 在这里可以获取到vue实例
     * 使用vue.use之类的方法
     */
    vueInstance.mount('#app')
})
