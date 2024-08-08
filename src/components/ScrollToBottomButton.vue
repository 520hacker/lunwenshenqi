<template>
    <div>
        <div v-if="!isAtBottom" class="scroll-to-bottom-button" @click="scrollToBottom">
            找到对话框
        </div>
    </div>
</template>
  
<script>
import { onMounted, onBeforeUnmount, ref } from 'vue';

export default {
    setup() {
        const isAtBottom = ref(false);

        const handleScroll = () => {
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
            const clientHeight = document.documentElement.clientHeight || document.body.clientHeight;

            if (scrollTop + clientHeight >= scrollHeight - 100) {
                isAtBottom.value = true;
            } else {
                isAtBottom.value = false;
            }
        };

        setInterval(function () { handleScroll() }, 500)
        const scrollToBottom = () => {
            window.scrollTo({
                top: document.documentElement.scrollHeight || document.body.scrollHeight,
                behavior: 'smooth'
            });
        };

        onMounted(() => {
            window.addEventListener('scroll', handleScroll);
        });

        onBeforeUnmount(() => {
            window.removeEventListener('scroll', handleScroll);
        });

        return {
            isAtBottom,
            scrollToBottom
        };
    }
};
</script>
  
<style>
.scroll-to-bottom-button {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #ccc;
    color: #fff;
    padding: 10px;
    cursor: pointer;
    z-index: 28
}
</style>
  