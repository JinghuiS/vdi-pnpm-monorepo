import { VdiRouterModule, vueModule } from 'vdi'
import { createWebHistory } from 'vue-router'

export const AppRoutingModule = vueModule({
    imports: [
        VdiRouterModule.forRoot({
            history: createWebHistory(import.meta.env.BASE_URL),
            routes: []
        })
    ]
})
