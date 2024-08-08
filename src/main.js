import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import App from './App.vue'
import router from './router/index';


import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import '@kangc/v-md-editor/lib/style/preview.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';
import createCopyCodePlugin from '@kangc/v-md-editor/lib/plugins/copy-code/index';
import '@kangc/v-md-editor/lib/plugins/copy-code/copy-code.css';

import Vue3VideoPlayer from '@cloudgeek/vue3-video-player'
import '@cloudgeek/vue3-video-player/dist/vue3-video-player.css'
// import createVideoPlugin from '@kangc/v-md-editor/lib/plugins/video/index';
// import '@kangc/v-md-editor/lib/plugins/video/style.css';

// highlightjs 核心代码
import hljs from 'highlight.js/lib/core';
// 按需引入语言包
import json from 'highlight.js/lib/languages/json';

hljs.registerLanguage('json', json);


// VueMarkdownEditor
//   .use(githubTheme, {
//     Hljs: hljs,
//   })
//   .use(createCopyCodePlugin());

VueMarkdownEditor
  .use(githubTheme, {
    Hljs: hljs,
    extend(md) {
      md.renderer.rules.image = function (tokens, idx, options, env, self) {
        var token = tokens[idx];
        var srcIndex = token.attrIndex('src');
        if (srcIndex >= 0) {
          var src = token.attrs[srcIndex][1];
          if (src.endsWith('.mp4')) {
            var alt = token.content;
            return `<video src="${src}" controls width="90%">${alt}</video>`;
          }
        }
        // 如果不是.mp4链接，使用默认的image渲染。
        return self.renderToken(tokens, idx, options);
      };
    },
  })
  .use(createCopyCodePlugin());

let app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

createApp(App)
  .use(router)
  .use(ElementPlus)
  .use(Vue3VideoPlayer, {
    lang: 'zh-CN'
  })
  .use(VueMarkdownEditor)
  .mount('#app')
