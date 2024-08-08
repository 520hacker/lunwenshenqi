<template>
  <PageHeader msg="Welcome!" /> 
  <main id="page-content" :class="displaySideMenu ? 'page-content ' : 'page-content has-sidebar'">
    <router-view></router-view>
  </main> 
  <ScrollToBottomButton />
</template>

<script>
import PageHeader from './components/PageHeader.vue'
import ScrollToBottomButton from './components/ScrollToBottomButton.vue' 
import { provide, reactive, ref } from 'vue';
// import { getContent } from '@/api/public'

export default {
  name: 'App',
  components: {
    PageHeader, 
    ScrollToBottomButton
  },

  setup() {
    const content = ref('loading')
    const displaySideMenu = ref(false)
    const displayView = ref('CardList')
    const sharedState = reactive({
      triggerSearch: null
    });
    const onLoad = () => {
      // getContent({
      //   key: 'FilingInfo',
      // }).then(data => {
      //   content.value = data.item
      // });
    };
    onLoad();
    provide('sharedState', sharedState);
    provide('displaySideMenu', displaySideMenu);
    provide('changeDisplayView', displayView);
    return {
      content,
      displaySideMenu,
      displayView,
      sharedState,
    };
  }
}
</script>

<style>
*,
:before,
:after {
  box-sizing: border-box;
}

a {
  font-weight: 500;
  text-decoration: inherit;
  color: var(--brand-color);
}

html:not(.dark) {
  --prism-builtin: #3182bd;
  --prism-comment: #848486;
  --prism-deleted: #3182bd;
  --prism-function: #6196cc;
  --prism-boolean: #c25205;
  --prism-number: #c25205;
  --prism-property: #717c11;
  --prism-punctuation: #a8a9cc;
  --prism-keyword: #c792ea;
  --prism-variable: #0b8235;
  --prism-url-decoration: #67cdcc;
  --prism-symbol: green;
  --prism-selector: #0b8235;
}

html.dark {
  color-scheme: dark;
  --el-color-primary: #409eff;
  --el-color-primary-light-3: #3375b9;
  --el-color-primary-light-5: #2a598a;
  --el-color-primary-light-7: #213d5b;
  --el-color-primary-light-8: #1d3043;
  --el-color-primary-light-9: #18222c;
  --el-color-primary-dark-2: #66b1ff;
  --el-color-success: #67c23a;
  --el-color-success-light-3: #4e8e2f;
  --el-color-success-light-5: #3e6b27;
  --el-color-success-light-7: #2d481f;
  --el-color-success-light-8: #25371c;
  --el-color-success-light-9: #1c2518;
  --el-color-success-dark-2: #85ce61;
  --el-color-warning: #e6a23c;
  --el-color-warning-light-3: #a77730;
  --el-color-warning-light-5: #7d5b28;
  --el-color-warning-light-7: #533f20;
  --el-color-warning-light-8: #3e301c;
  --el-color-warning-light-9: #292218;
  --el-color-warning-dark-2: #ebb563;
  --el-color-danger: #f56c6c;
  --el-color-danger-light-3: #b25252;
  --el-color-danger-light-5: #854040;
  --el-color-danger-light-7: #582e2e;
  --el-color-danger-light-8: #412626;
  --el-color-danger-light-9: #2b1d1d;
  --el-color-danger-dark-2: #f78989;
  --el-color-error: #f56c6c;
  --el-color-error-light-3: #b25252;
  --el-color-error-light-5: #854040;
  --el-color-error-light-7: #582e2e;
  --el-color-error-light-8: #412626;
  --el-color-error-light-9: #2b1d1d;
  --el-color-error-dark-2: #f78989;
  --el-color-info: #909399;
  --el-color-info-light-3: #6b6d71;
  --el-color-info-light-5: #525457;
  --el-color-info-light-7: #393a3c;
  --el-color-info-light-8: #2d2d2f;
  --el-color-info-light-9: #202121;
  --el-color-info-dark-2: #a6a9ad;
  --el-box-shadow: 0px 12px 32px 4px rgba(0, 0, 0, .36), 0px 8px 20px rgba(0, 0, 0, .72);
  --el-box-shadow-light: 0px 0px 12px rgba(0, 0, 0, .72);
  --el-box-shadow-lighter: 0px 0px 6px rgba(0, 0, 0, .72);
  --el-box-shadow-dark: 0px 16px 48px 16px rgba(0, 0, 0, .72), 0px 12px 32px #000000, 0px 8px 16px -8px #000000;
  --el-bg-color-page: #0a0a0a;
  --el-bg-color: #141414;
  --el-bg-color-overlay: #1d1e1f;
  --el-text-color-primary: #E5EAF3;
  --el-text-color-regular: #CFD3DC;
  --el-text-color-secondary: #A3A6AD;
  --el-text-color-placeholder: #8D9095;
  --el-text-color-disabled: #6C6E72;
  --el-border-color-darker: #636466;
  --el-border-color-dark: #58585B;
  --el-border-color: #4C4D4F;
  --el-border-color-light: #414243;
  --el-border-color-lighter: #363637;
  --el-border-color-extra-light: #2B2B2C;
  --el-fill-color-darker: #424243;
  --el-fill-color-dark: #39393A;
  --el-fill-color: #303030;
  --el-fill-color-light: #262727;
  --el-fill-color-lighter: #1D1D1D;
  --el-fill-color-extra-light: #191919;
  --el-fill-color-blank: transparent;
  --el-mask-color: rgba(0, 0, 0, .8);
  --el-mask-color-extra-light: rgba(0, 0, 0, .3);
}

html.dark {
  --prism-scheme: dark;
  --prism-foreground: #a6accd;
  --prism-background: #181818;
  --prism-comment: #758575;
  --prism-string: #c3e88d;
  --prism-literal: #429988;
  --prism-keyword: #89ddff;
  --prism-boolean: #6394bf;
  --prism-number: #6394bf;
  --prism-variable: #c2b36e;
  --prism-function: #82aaff;
  --prism-deleted: #bc6066;
  --prism-class: #54b1bf;
  --prism-builtin: var(--el-color-primary-light-3);
  --prism-property: #c792ea;
  --prism-namespace: #db889a;
  --prism-punctuation: #89ddff;
  --prism-decorator: #bd8f8f;
  --prism-regex: #ab5e3f;
  --prism-json-property: #6b8b9e;
  --prism-line-number: #888888;
  --prism-line-number-gutter: #eeeeee;
  --prism-line-highlight-background: #444444;
  --prism-selection-background: #444444;
  --prism-inline-background: #2d2d2d;
}

body {
  margin: 0;
  width: 100%;
  min-width: 320px;
  min-height: 100%;
  line-height: 1.4;
  font-size: 16px;
  font-weight: 400;
  color: var(--text-color);
  background-color: var(--bg-color);
  direction: ltr;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  transition: background-color var(--el-transition-duration-fast);
}

:root {
  --vp-screen-max-width: 1376px;
  --text-color: var(--el-text-color-primary);
  --text-color-light: var(--el-text-color-regular);
  --text-color-lighter: var(--el-text-color-secondary);
  --brand-color: var(--el-color-primary);
  --brand-color-light: var(--el-color-primary-light-1);
  --bg-brand-color: var(--el-color-primary-light-9);
  --bg-color: var(--el-bg-color);
  --bg-color-rgb: 255, 255, 255;
  --bg-color-soft: #fafafa;
  --bg-color-mute: #f2f2f2;
  --border-color: var(--el-border-color);
  --border-color-light: var(--el-border-color-lighter);
  --font-family: var(--el-font-family);
  --font-family-mono: "JetBrains Mono", source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
  --success-color: var(--el-color-success);
  --warning-color: var(--el-color-warning);
  --danger-color: var(--el-color-danger);
  --purple-color: #6222c2;
  --purple-color-light: #9065db;
  --header-height: 55px;
  --nav-height: 55px;
  --vp-screen-max-width: 1362px;
  --vp-sidebar-width-mobile: 220px;
  --vp-sidebar-width-small: 166px;
  --sidebar-width-sm: 10rem;
  --sidebar-width-xs: 20rem;
  --content-min-width: 16rem;
  --content-max-width: 48rem;
  --nav-z-index: 12;
  --sub-nav-z-index: 11;
  --sidebar-z-index: 40;
  --overlay-z-index: 30;
  --code-line-height: 1.4;
  --code-font-size: var(--el-font-size-base);
  --code-bg-color: var(--el-fill-color-light);
  --code-text-color: var(--text-color);
  --code-font-family: var(--font-family-mono);
  --code-tooltip-bg-color: var(--code-bg-color);
  --code-tooltip-color: #0c61c9;
  --block-tip-bg-color: rgba(var(--el-color-primary-rgb), .1);
  --block-warning-bg-color: rgba(var(--el-color-danger-rgb), .1);
  --link-active-bg-color: rgba(var(--el-color-primary-rgb), .1);
}

:root {
  --docsearch-primary-color: #5468ff;
  --docsearch-text-color: #1c1e21;
  --docsearch-spacing: 12px;
  --docsearch-icon-stroke-width: 1.4;
  --docsearch-highlight-color: var(--docsearch-primary-color);
  --docsearch-muted-color: #969faf;
  --docsearch-container-background: rgba(101, 108, 133, .8);
  --docsearch-logo-color: #5468ff;
  --docsearch-modal-width: 560px;
  --docsearch-modal-height: 600px;
  --docsearch-modal-background: #f5f6f7;
  --docsearch-modal-shadow: inset 1px 1px 0 0 hsla(0, 0%, 100%, .5), 0 3px 8px 0 #555a64;
  --docsearch-searchbox-height: 56px;
  --docsearch-searchbox-background: #ebedf0;
  --docsearch-searchbox-focus-background: #fff;
  --docsearch-searchbox-shadow: inset 0 0 0 2px var(--docsearch-primary-color);
  --docsearch-hit-height: 56px;
  --docsearch-hit-color: #444950;
  --docsearch-hit-active-color: #fff;
  --docsearch-hit-background: #fff;
  --docsearch-hit-shadow: 0 1px 3px 0 #d4d9e1;
  --docsearch-key-gradient: linear-gradient(-225deg, #d5dbe4, #f8f8f8);
  --docsearch-key-shadow: inset 0 -2px 0 0 #cdcde6, inset 0 0 1px 1px #fff, 0 1px 2px 1px rgba(30, 35, 90, .4);
  --docsearch-footer-height: 44px;
  --docsearch-footer-background: #fff;
  --docsearch-footer-shadow: 0 -1px 0 0 #e0e3e8, 0 -3px 6px 0 rgba(69, 98, 155, .12);
}


.dark {
  --bg-color-rgb: 0, 0, 0;
  --bg-color-soft: #242424;
  --bg-color-mute: #2c2c2c;
  --code-tooltip-bg-color: rgba(var(--el-color-primary-rgb), .1);
  --code-tooltip-color: var(--brand-color);
  --purple-color: #9065db;
  --purple-color-light: #6222c2;
}

.page-content h1,
.page-content h2,
.page-content h3,
.page-content h4,
.page-content h5,
.page-content h6 {
  display: flex;
  align-items: center;
  position: relative;
  color: var(--el-text-color-regular);
}

h1 {
  margin-top: 1.5rem;
  margin-bottom: 2rem;
  font-size: 1.9rem;
  color: var(--text-color);
}

h1:first-child,
h2:first-child,
h3:first-child,
h4:first-child,
h5:first-child,
h6:first-child {
  margin-top: 0;
}

@media screen and (min-width: 480px) {
  h1 {
    font-size: 2.2rem;
  }

}

.doc-content-wrapper {
  --vp-content-width: 950px;
  padding: 32px 24px 96px;
}

@media screen and (min-width: 768px) {
  .doc-content-wrapper {
    padding: 48px 32px 42px;
  }

}

@media screen and (min-width: 960px) {

  .doc-content-wrapper {
    padding: 64px 64px 42px;
  }
}

@media screen and (min-width: 1440px) {

  .doc-content-wrapper {
    padding: 64px 0 42px 64px;
    display: flex;
  }
}

.date-changed {
  float: left;
  padding-left: 10px;
  margin-top: 12px;
  font-size: 12px;
  color: #666;
}

button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}

.overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, .6);
  transition: opacity .5s;
  z-index: var(--overlay-z-index);
}


.toc-wrapper {
  display: none;
  padding-left: 64px;
}

.page-content {
  outline: none
}

@media screen and (min-width: 960px) {
  .page-content {
    padding-top: var(--nav-height);
  }

  /* .page-content.has-sidebar {
    padding-left: calc(var(--sidebar-width-sm) + 10px);
  } */
}

@media screen and (min-width: 960px) and (min-width: 1280px) {
  /* .page-content.has-sidebar {
    padding-left: calc(var(--vp-sidebar-width-small) - 6px);
  } */
}

@media screen and (min-width: 960px) and (min-width: 1440px) {
  /* .page-content.has-sidebar {
    padding-left: calc((100% - var(--vp-screen-max-width)) / 2 + var(--vp-sidebar-width-small));
  } */
}

.custom-block.tip {
  padding: 8px 16px;
  background-color: var(--block-tip-bg-color);
  border-radius: 4px;
  border-left: 5px solid var(--el-color-primary);
  margin: 20px 0;
}

.doc-content-wrapper {
  --vp-content-width: 950px;
  padding: 32px 24px 96px;
}

@media screen and (min-width: 1440px) {
  .doc-content-wrapper .doc-content-container {
    width: var(--vp-content-width);
  }

  .toc-wrapper {
    display: block;
  }

  :root {
    --vp-sidebar-width-small: 134px;
  }
}

.example {
  border: 1px solid var(--border-color);
  border-radius: var(--el-border-radius-base);
  padding: 24px;
}
.filingInfo {
    text-align: center;
    font-size: 12px;
    padding-bottom: 10px; 
    padding-right: 10px;
}


/* BG Animation */
.dark body {
      background-size: 400% 400%;
	display: flex;
	flex-direction: column;
	align-items: stretch;
	justify-content: space-evenly;
	position: relative; 
	overflow-x: hidden;
}

.dark body::before, 
.dark body::after {
	content: "";
	width: 60vmax;
	height: 53vmax;
	position: absolute;
	background: rgba(255, 255, 255, 0.07);
	left: -20vmin;
	top: -20vmin;
	animation: morph 15s linear infinite alternate, spin 20s linear infinite;
	z-index: 41;
	will-change: border-radius, transform;
	pointer-events: none;
}
	
.dark body::after {
    width: 70vmin;
    height: 70vmin;
    left: auto;
    right: -13vmin;
    top: auto;
    bottom: 10;
    animation: morph 10s linear infinite alternate, spin 26s linear infinite reverse;
    transform-origin: 20% 20%; 
}

@-moz-keyframes Gradient {
	0% {
		background-position: 0 50%
	}
	50% {
		background-position: 100% 50%
	}
	100% {
		background-position: 0 50%
	}
}

@keyframes Gradient {
	0% {
		background-position: 0 50%
	}
	50% {
		background-position: 100% 50%
	}
	100% {
		background-position: 0 50%
	}
}

@keyframes morph {
  0% {
    border-radius: 100% 60% 60% 40% / 70% 30% 70% 30%; }
  100% {
    border-radius: 40% 60%; } 
}

@keyframes spin {
  to {
    transform: rotate(1turn); 
  } 
}
.dark #app .github-markdown-body {
    background: rgba(0,0,0,.8);
    padding: 12px 22px 0px;
}
</style>
