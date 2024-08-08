

import { ElMessage } from 'element-plus'
export function scrollToBottom() {
    window.scrollTo({
        top: document.documentElement.scrollHeight || document.body.scrollHeight,
        behavior: 'smooth'
    });
}

export function copyToClipboard(content) {
    try {
        const textarea = document.createElement('textarea');
        textarea.value = content;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        ElMessage({
            type: 'success',
            message: '已复制!',
        })
    } catch {
        navigator.clipboard.writeText(content)
            .then(() => {
                ElMessage({
                    type: 'success',
                    message: '已复制!',
                })
                console.log('Content copied to clipboard');
            })
            .catch(() => {
                ElMessage({
                    type: 'error',
                    message: '复制失败,请稍后再试!',
                })
            });
    }
}

export function maskIP(ip) {
    try{
        // 将IP地址按.分割成数组
        let parts = ip.split('.');
    
        // 检查IP地址是否是有效的
        if (parts.length !== 4) {
            throw new Error("Invalid IP address");
        }
    
        // 将最后两个部分替换为 *
        parts[2] = '*';
        parts[3] = '*';
    
        // 重新组合成新的IP地址
        return parts.join('.');
    }catch (error) {
        console.error(error);
        return "0.0.*.*";
    }
}