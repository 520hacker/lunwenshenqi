import request from '@/utils/request';
import { getSharedToken } from '@/utils/token'

export function getDrawLog(param) { 
    let token = localStorage.getItem('CSK'); 
    if (!token) {
        token = getSharedToken();
    }

    // 将id添加到URL中
    const url = `/v1/logs/draw`;

    let params = new URLSearchParams(param).toString();
    let fullUrl = `${url}?${params}`;
    
    return request({
        url: fullUrl,
        method: 'get',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }).then(data => {
        return data;
    });    
}