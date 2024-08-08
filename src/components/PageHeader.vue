<template>
    <header class="navbar">
        <div class="navbar-wrapper">
            <div class="header-container">
                <div class="logo-container">
                    <div class="logo-container">
                        <strong @click="goHomePage">论文神器</strong>
                    </div>
                </div>
                <div class="content">
                    <!-- <nav class="navbar-menu menu">
                     <router-link to="/"
                            :class="'link-item link is-menu-link ' + (pathname == '/' ? 'active' : '')">首页</router-link>
                        <router-link to="/article/generator" :class="'link-item link is-menu-link ' +
                            (pathname == '/article/generator' ? 'active' : '')">长篇</router-link>
                        <router-link to="/log/video/suno-v3.5" :class="'link-item link is-menu-link ' +
                            (pathname == '/log/video/suno-v3.5' ? 'active' : '')">影片</router-link>
                        <router-link to="/log/draw/mj" :class="'link-item link is-menu-link ' +
                            (pathname == '/log/draw/mj' ? 'active' : '')">图册</router-link>  
                       <a href="https://yibu.qiangtu.com" target="_blank" class="link-item link is-menu-link">插件</a>
                        <a href="https://twoapi.qiangtu.com" target="_blank" class="link-item link is-menu-link">API</a>
                </nav>    -->
                    <div class="theme-toggler-content theme-toggler">
                        <button class="switch" role="switch" aria-label="切换暗色主题" aria-checked="false"
                            v-on:click="toggleDarkMode">
                            <div class="switch__action">
                                <div class="switch__icon"><i class="el-icon" style="font-size:13px;"
                                        data-v-3de418c2=""><svg viewBox="0 0 24 24" class="dark-icon"
                                            data-v-3de418c2="">
                                            <path
                                                d="M11.01 3.05C6.51 3.54 3 7.36 3 12a9 9 0 0 0 9 9c4.63 0 8.45-3.5 8.95-8c.09-.79-.78-1.42-1.54-.95A5.403 5.403 0 0 1 11.1 7.5c0-1.06.31-2.06.84-2.89c.45-.67-.04-1.63-.93-1.56z"
                                                fill="currentColor"></path>
                                        </svg><svg viewBox="0 0 24 24" class="light-icon" data-v-3de418c2="">
                                            <path
                                                d="M6.05 4.14l-.39-.39a.993.993 0 0 0-1.4 0l-.01.01a.984.984 0 0 0 0 1.4l.39.39c.39.39 1.01.39 1.4 0l.01-.01a.984.984 0 0 0 0-1.4zM3.01 10.5H1.99c-.55 0-.99.44-.99.99v.01c0 .55.44.99.99.99H3c.56.01 1-.43 1-.98v-.01c0-.56-.44-1-.99-1zm9-9.95H12c-.56 0-1 .44-1 .99v.96c0 .55.44.99.99.99H12c.56.01 1-.43 1-.98v-.97c0-.55-.44-.99-.99-.99zm7.74 3.21c-.39-.39-1.02-.39-1.41-.01l-.39.39a.984.984 0 0 0 0 1.4l.01.01c.39.39 1.02.39 1.4 0l.39-.39a.984.984 0 0 0 0-1.4zm-1.81 15.1l.39.39a.996.996 0 1 0 1.41-1.41l-.39-.39a.993.993 0 0 0-1.4 0c-.4.4-.4 1.02-.01 1.41zM20 11.49v.01c0 .55.44.99.99.99H22c.55 0 .99-.44.99-.99v-.01c0-.55-.44-.99-.99-.99h-1.01c-.55 0-.99.44-.99.99zM12 5.5c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6zm-.01 16.95H12c.55 0 .99-.44.99-.99v-.96c0-.55-.44-.99-.99-.99h-.01c-.55 0-.99.44-.99.99v.96c0 .55.44.99.99.99zm-7.74-3.21c.39.39 1.02.39 1.41 0l.39-.39a.993.993 0 0 0 0-1.4l-.01-.01a.996.996 0 0 0-1.41 0l-.39.39c-.38.4-.38 1.02.01 1.41z"
                                                fill="currentColor"></path>
                                        </svg></i></div>
                            </div>
                        </button>
                    </div>
                    <div class="social-links">
                        <a href="https://github.com/520hacker/lunwenshenqi" title="GitHub" target="_blank" rel="noreferrer noopener"
                            class="social-link">
                            <i class="el-icon" style="font-size:24px;">
                                <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" width="1.2em"
                                    height="1.2em">
                                    <path fill="currentColor"
                                        d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476c0-.237-.013-1.024-.013-1.862c-2.512.463-3.162-.612-3.362-1.175c-.113-.288-.6-1.175-1.025-1.413c-.35-.187-.85-.65-.013-.662c.788-.013 1.35.725 1.538 1.025c.9 1.512 2.338 1.087 2.912.825c.088-.65.35-1.087.638-1.337c-2.225-.25-4.55-1.113-4.55-4.938c0-1.088.387-1.987 1.025-2.688c-.1-.25-.45-1.275.1-2.65c0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337c1.912-1.3 2.75-1.024 2.75-1.024c.55 1.375.2 2.4.1 2.65c.637.7 1.025 1.587 1.025 2.687c0 3.838-2.337 4.688-4.562 4.938c.362.312.675.912.675 1.85c0 1.337-.013 2.412-.013 2.75c0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z">
                                    </path>
                                </svg></i></a>
                    </div>
                    <button class="reset-btn menu-hamburger hamburger" aria-label="移动端导航" aria-expanded="false"
                        v-if="false" aria-controls="full-screen"><span class="hamburger-1"></span><span
                            class="hamburger-2"></span><span class="hamburger-3"></span></button>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import { useRouter } from 'vue-router';
import { inject, ref, h } from 'vue';
import { ElMessageBox } from 'element-plus'

export default {
    name: 'PageHeader',
    props: {
        msg: String
    },
    methods: {
    },
    setup() {
        const pathname = ref('/');
        const logged = ref(false);
        const router = useRouter();
        const isDarkMode = ref(true)
        const onload = () => {
            isDarkMode.value = !localStorage.getItem('isDarkMode') || (localStorage.getItem('isDarkMode') && localStorage.getItem('isDarkMode') == "true") ? true : false;
            if (isDarkMode.value) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        };
        onload();


        const toggleDarkMode = () => {
            isDarkMode.value = !isDarkMode.value;
            if (isDarkMode.value) {
                document.documentElement.classList.add('dark');
                localStorage.setItem('isDarkMode', 'true');
            } else {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('isDarkMode', 'false');
            }
        };

        const logout = () => {
            localStorage.removeItem('SK');
            localStorage.removeItem('Role');
            ElMessageBox({
                title: '成功',
                message: h('p', null, [
                    h('span', null, '已退出登录'),
                ]),
                callback: () => {
                    router.push('/login');
                }
            })
        }

        const goHomePage = () => {
            router.push('/');
        }

        const isLogged = () => {
            let key = localStorage.getItem("SK");
            if (key && key.length > 0 && key != "") {
                return true
            }

            return false
        }

        const sharedState = inject('sharedState');

        // 触发组件B的方法C
        const triggerSearch = () => {
            sharedState.triggerSearch();
        };

        setInterval(function () {
            logged.value = isLogged()
            pathname.value = this.window.location.pathname
        }, 1000)

        return {
            isDarkMode,
            toggleDarkMode,
            goHomePage,
            pathname,
            logged,
            triggerSearch,
            logout
        };
    }
}
</script>
<style scoped>
header {
    display: block;
}

.navbar {
    top: 0;
    left: 0;
    position: relative;
    z-index: var(--nav-z-index);
}

.navbar-wrapper {
    position: relative;
    border-bottom: 1px solid var(--border-color);
    height: var(--header-height);
    padding: 0 12px 0 24px;
    background-image: radial-gradient(transparent 1px, var(--bg-color) 1px);
    background-size: 4px 4px;
    backdrop-filter: saturate(50%) blur(4px);
    -webkit-backdrop-filter: saturate(50%) blur(4px);
    top: 0;
}

.navbar-wrapper .header-container {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
}

.logo-container {
    display: flex;
    align-items: center;
    height: var(--header-height);
    cursor: pointer;
}

.logo-container>a {
    height: 28px;
    width: 128px;
}

.logo-container .logo {
    position: relative;
    height: 100%;
}

.navbar-wrapper .header-container .content {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-grow: 1;
}

.DocSearch-Button {
    align-items: center;
    background: var(--docsearch-searchbox-background);
    border: 0;
    border-radius: 40px;
    color: var(--docsearch-muted-color);
    cursor: pointer;
    display: flex;
    font-weight: 500;
    height: 36px;
    justify-content: space-between;
    margin: 0 0 0 16px;
    padding: 0 8px;
    user-select: none
}

.DocSearch-Button:active,
.DocSearch-Button:focus,
.DocSearch-Button:hover {
    background: var(--docsearch-searchbox-focus-background);
    box-shadow: var(--docsearch-searchbox-shadow);
    color: var(--docsearch-text-color);
    outline: none
}

.DocSearch-Button-Container {
    align-items: center;
    display: flex
}

.DocSearch-Search-Icon {
    stroke-width: 1.6
}

.DocSearch-Button .DocSearch-Search-Icon {
    color: var(--docsearch-text-color)
}

.DocSearch-Button-Placeholder {
    font-size: 1rem;
    padding: 0 12px 0 6px
}

.DocSearch-Button-Keys {
    display: flex;
    min-width: calc(40px + .8em)
}

.DocSearch-Button-Key {
    align-items: center;
    background: var(--docsearch-key-gradient);
    border-radius: 3px;
    box-shadow: var(--docsearch-key-shadow);
    color: var(--docsearch-muted-color);
    display: flex;
    height: 18px;
    justify-content: center;
    margin-right: .4em;
    position: relative;
    padding: 0 0 2px;
    border: 0;
    top: -1px;
    width: 20px
}

.DocSearch {
    --docsearch-primary-color: var(--brand-color);
    --docsearch-highlight-color: var(--brand-color);
    --docsearch-key-gradient: rgba(125, 125, 125, .1);
    --docsearch-footer-height: 44px;
    --docsearch-footer-background: var(--bg-color);
    --docsearch-footer-shadow: 0 -1px 0 0 #e0e3e8, 0 -3px 6px 0 rgba(69, 98, 155, .12);
    --docsearch-searchbox-background: rgba(var(--bg-color-rgb), .8);
    --docsearch-searchbox-focus-background: var(--bg-color-mute);
    --docsearch-searchbox-shadow: inset 0 0 0 2px var(--brand-color);
    --docsearch-muted-color: var(--text-color-lighter);
    --docsearch-text-color: var(--text-color-light);
    --docsearch-modal-background: var(--bg-color-soft);
    --docsearch-modal-shadow: var(--el-box-shadow);
    transition: background-color var(--el-transition-duration-fast);
    background-color: transparent;
}

.DocSearch.DocSearch-Button {
    margin-right: 8px;
}

.navbar-menu {
    display: none;
}

.el-icon {
    cursor: pointer
}

.dark-icon,
.light-icon {
    transition: color var(--el-transition-duration), opacity var(--el-transition-duration)
}

.light-icon {
    opacity: 1;
    position: absolute;
    top: 0;
    left: 0
}

.dark-icon {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0
}

.dark .dark-icon {
    opacity: 1
}

.dark .light-icon {
    opacity: 0
}

.theme-toggler-content {
    background-color: var(--bg-color);
    color: var(--text-color);
    transition: border-color var(--el-transition-duration), background-color var(--el-transition-duration-fast);
    background-color: transparent;
    display: none;
    border-radius: 50%;
    height: 24px;
    padding: 0 12px
}

button.reset-btn {
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
}

.dark {
    --bg-color-rgb: 0, 0, 0;
    --bg-color-soft: #242424;
    --bg-color-mute: #2c2c2c;
    --code-tooltip-bg-color: rgba(var(--el-color-primary-rgb), .1);
    --code-tooltip-color: var(--brand-color);
    --purple-color: #9065db;
    --purple-color-light: #6222c2
}

.switch {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid var(--border-color);
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: var(--bg-color-mute);
    cursor: pointer;
    transition: border-color var(--el-transition-duration), background-color var(--el-transition-duration)
}

.switch:hover {
    border-color: var(--border-color-light)
}

.switch__action {
    position: absolute;
    top: 1px;
    left: 1px;
    border-radius: 50%;
    background-color: var(--bg-color);
    transform: translate(0);
    color: var(--text-color-light);
    transition: border-color var(--el-transition-duration), background-color var(--el-transition-duration), transform var(--el-transition-duration)
}

.dark .switch__action {
    transform: translate(20px)
}

.switch__icon {
    position: relative
}

.switch__icon .el-icon {
    position: absolute;
    left: 1px;
    bottom: 1px
}

.switch__action,
.switch__icon {
    width: 16px;
    height: 16px
}

.switch:focus-visible {
    outline: -webkit-focus-ring-color auto 1px;
    outline-offset: 1px
}

.menu-hamburger {
    width: 20px;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    justify-content: center;
    height: var(--nav-height);
    margin: 0 14px
}

.menu-hamburger>span {
    background-color: var(--text-color);
    border-radius: 10px;
    height: 2px;
    margin: 2px 0;
    transition: var(--el-transition-all);
    width: 100%
}

.menu-hamburger>span.hamburger-1 {
    width: 50%
}

.menu-hamburger>span.hamburger-3 {
    width: 75%
}

.menu-hamburger.active .hamburger-1 {
    transform-origin: bottom;
    transform: rotate(45deg) translate(13px)
}

.menu-hamburger.active .hamburger-2 {
    transform-origin: top;
    transform: rotate(-45deg)
}

.menu-hamburger.active .hamburger-3 {
    transform-origin: bottom;
    width: 50%;
    transform: translate(2px, -10px) rotate(45deg)
}

@media (max-width: 749px) {
    .DocSearch.DocSearch-Button {
        margin: 0 12px;
        padding: 0
    }
}

.dark .DocSearch {
    --docsearch-text-color: var(--text-color-light);
    --docsearch-key-shadow: none;
    --docsearch-modal-shadow: none;
    --docsearch-footer-shadow: none;
    --docsearch-hit-background: var(--bg-color-mute);
    --docsearch-hit-color: var(--text-color-lighter);
    --docsearch-hit-shadow: none
}

.dark .DocSearch .DocSearch-Button .DocSearch-Button-Key {
    box-shadow: unset
}

@media screen and (min-width: 768px) {
    .navbar-wrapper {
        padding: 0 12px 0 32px;
    }

    .navbar-wrapper .content {
        padding-top: 1px;
    }

    .algolia-search-box {
        min-width: 176.3px;
    }

    .DocSearch {
        background-color: var(--docsearch-searchbox-background);
    }

    .navbar-menu {
        display: flex;
    }

    .theme-toggler-content {
        display: flex;
        align-items: center;
    }

    .menu-hamburger {
        display: none;
    }
}

.social-links {
    height: 24px;
    padding: 0 12px;
}

.social-links .el-icon {
    color: #333;
}

.dark .social-links .el-icon {
    color: #fff;
}

.link-item[data-v-36735cb0] {
    display: flex;
    align-items: center
}

.el-icon[data-v-36735cb0] {
    margin-left: 4px
}

.is-menu-link {
    display: block;
    padding: 0 12px;
    line-height: calc(var(--nav-height) - 3px);
    font-size: 14px;
    font-weight: 500;
    color: var(--text-color);
    transition: color var(--el-transition-duration);
    border-bottom: 2px solid transparent
}

.is-menu-link.active {
    border-bottom-color: var(--brand-color)
}

.is-menu-link:hover {
    color: var(--brand-color)
}

.is-menu-link .badge {
    display: inline;
    vertical-align: unset
}

.is-menu-link .badge .is-dot {
    right: 0
}

.el-icon {
    cursor: pointer
}

.dark-icon,
.light-icon {
    transition: color var(--el-transition-duration), opacity var(--el-transition-duration)
}

.light-icon {
    opacity: 1;
    position: absolute;
    top: 0;
    left: 0
}

.dark-icon {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0
}

.dark .dark-icon {
    opacity: 1
}

.dark .light-icon {
    opacity: 0
}

.theme-toggler-content {
    background-color: var(--bg-color);
    color: var(--text-color);
    transition: border-color var(--el-transition-duration), background-color var(--el-transition-duration-fast);
    background-color: transparent;
    display: flex;
    border-radius: 50%;
    height: 24px;
    padding: 0 12px
}

@media screen and (min-width: 768px) {
    .theme-toggler-content {
        display: flex;
        align-items: center
    }
}

.translation-container[data-v-12008bb2] {
    display: none;
    height: 24px;
    padding: 0 12px
}

@media screen and (min-width: 960px) {
    .navbar {
        position: sticky;
        width: 100%;
    }
}

@media screen and (min-width: 1280px) {
    .navbar-wrapper {
        padding: 0 32px;
    }
}

@media screen and (min-width: 1440px) {
    .navbar-wrapper .header-container {
        max-width: calc(var(--vp-screen-max-width));
    }
}
</style>