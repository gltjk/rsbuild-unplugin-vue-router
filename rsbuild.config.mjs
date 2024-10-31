import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';
import { rspack as VueRouter } from 'unplugin-vue-router';

export default defineConfig({
  plugins: [pluginVue()],
  tools: {
    rspack: {
      plugins: [VueRouter()],
    },
  },
});
