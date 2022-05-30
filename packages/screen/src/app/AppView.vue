<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useDependency } from 'vdi'

import { GlobalService } from '@pm/global'
import { onMounted } from 'vue'

const globalService = useDependency(GlobalService)
onMounted(() => {
    globalService.title.value = 'screen'
})
</script>

<template>
    <div>
        <h1 class="title">{{ globalService.title.value }}</h1>
    </div>
    <RouterView />
</template>

<style scoped>
.title {
    /* color: #ffffff; */
    font-weight: 400;
    font-size: 30px;
    text-align: center;
}
</style>
