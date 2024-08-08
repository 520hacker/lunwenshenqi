
import { getRequestContent } from '@/utils/chat_transfer'

export function loadChat(key) {
    try {
        const json = localStorage.getItem(key) || '[]';
        const data = JSON.parse(json);
        for (const item in data) {
            if (data[item].item_type === "intent") {
                data[item].content_ = getRequestContent(data[item].content);
            }
        }
        return data;
    } catch {
        return [];
    }
}

export function saveChat(key, data) {
    if (!data)
        return;

    var json = JSON.stringify(data)
    localStorage.setItem(key, json);
    return;
}
