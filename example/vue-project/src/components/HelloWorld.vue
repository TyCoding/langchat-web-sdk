<script lang="ts" setup>
import {onMounted, ref} from 'vue'
import '@langchat/web-sdk/style.css'
import LangChatBot from '@langchat/web-sdk'

defineProps<{ msg: string }>()

const count = ref(0)

onMounted(() => {
  new LangChatBot({
    apiUrl: 'https://your-api-url/chat',
    token: 'your-api-token',
    layout: 'widget', // or 'fullpage'
    position: 'bottom-right', // or 'bottom-left'
    theme: {
      primary: '#3B82F6',
      secondary: '#1D4ED8'
    }
  });
})

</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Learn more about IDE Support for Vue in the
    <a
      href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
      target="_blank"
      >Vue Docs Scaling up Guide</a
    >.
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
