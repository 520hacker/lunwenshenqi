<template>
    <div class="date-changed-new">
        <span>{{ formattedTime }}</span>
    </div>
</template>
  
<script>
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/zh-cn';

export default {
    name: 'DateInfo',
    data() {
        return {
            formattedTime: '',
            eventInterval: null,
        };
    },
    created() {
        this.initializeFormattedTime(this.pubDate);
    },
    watch: {
        pubDate: {
            immediate: true,
            handler(newVal) {
                this.initializeFormattedTime(newVal);
            },
        },
    },
    beforeUnmount() {
        clearInterval(this.eventInterval);
    },
    methods: {
        initializeFormattedTime(timestamp) {
            clearInterval(this.eventInterval);
            // 扩展功能插件
            dayjs.extend(relativeTime);
            // 本地化语言
            dayjs.locale('zh-cn');

            let formatted = dayjs(new Date(timestamp)).fromNow();
            this.formattedTime = formatted; 
            this.eventInterval = setInterval(() => {
                formatted = dayjs(new Date(timestamp)).fromNow();
                this.formattedTime = formatted;
            }, 10000);
        },
    },
    props: {
        pubDate: Number,
    },
};
</script>
  
<style></style>
  