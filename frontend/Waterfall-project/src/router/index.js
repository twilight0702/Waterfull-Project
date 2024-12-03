// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import WaterfallBasicKnowledge from '@/views/WaterfallBasicKnowledge.vue';
import WaterfallModelFramework from '@/views/WaterfallModelFramework.vue';
import WaterfallApplication from '@/views/WaterfallApplication.vue';
import WaterfallSimulationTest from '@/views/WaterfallSimulationTest.vue';

const routes = [
  { path: '/waterfall-basic-knowledge', component: WaterfallBasicKnowledge, meta: { title: '基础知识' } },
  { path: '/waterfall-model-framework', component: WaterfallModelFramework, meta: { title: '知识框架' } },
  { path: '/waterfall-application', component: WaterfallApplication, meta: { title: '应用' } },
  { path: '/waterfall-simulation-test', component: WaterfallSimulationTest, meta: { title: '模拟测试' } },
  { path: '/', redirect: '/waterfall-basic-knowledge' } // 默认页面
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;