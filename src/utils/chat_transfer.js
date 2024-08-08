export function initBaseMessage(messages, model = "gpt-3.5-turbo-16k", stream = true) {
    return {
        messages,
        stream: stream,
        model,
        temperature: 0.5,
        presence_penalty: 0,
        frequency_penalty: 0,
        top_p: 1
    };
}

export function getDefaultVersionParam(content, uploadFile) {
    return [
        {
            "type": "text",
            "text": content,
        },
        {
            "type": "image_url",
            "image_url": {
                "url": uploadFile,
            },
        }]
}

export function getRequestContent(content) {
    if (typeof content === 'string') {
        return content;
    } else if (Array.isArray(content)) {
        return content[1].image_url.url + " " + content[0].text;
    } else {
        return '';
    }
}

export function initSummaryMessage(messages, urls, model = "gpt-3.5-turbo-16k", stream = true) {
    return {
        urls,
        messages,
        stream: stream,
        model,
        temperature: 0.5,
        presence_penalty: 0,
        frequency_penalty: 0,
        top_p: 1
    };
}

export function initBaseChatLogSection(type, content, chatId, userId) {
    var content_ = "";
    if (typeof content === 'string') {
        content_ = content;
    } else if (Array.isArray(content)) {
        content_ = content[1].image_url.url + " " + content[0].text;
    } else {
        content_ = '';
    }

    return {
        chat_id: chatId,
        content: content,
        content_: content_,
        gmt_create: Date.now(),
        gmt_update: Date.now(),
        item_type: type,
        userid: userId,
        _id: Date.now(),
    }
}


export function initMessages(list, prompt) {
    var messages = [];
    for (var item in list) {
        var role = "assistant"
        if (list[item].item_type == "intent") {
            role = 'user'
        }

        messages.push({
            'role': role,
            'content': list[item].content
        })
    }

    messages = fixMessages(messages)

    messages.unshift({
        'role': 'system',
        'content': prompt
    })
    return messages;
}

export function initMessagesWithoutSys(list, new_content) {
    var messages = [];
    for (var item in list) {
        var role = "assistant"
        if (list[item].item_type == "intent") {
            role = 'user'
        }

        messages.push({
            'role': role,
            'content': list[item].content
        })
    }

    messages.push({
        'role': 'user',
        'content': new_content
    })

    messages = fixMessages(messages)

    return messages;
}

function fixMessages(list) {
    if (!list || list.length <= 1) {
        return list;
    }

    console.log(list)
    var messages = [];
    var type = "user"
    for (var index in list) {
        var item = list[index]
        console.log(item)
        if (item.role == 'system' && type == 'user') {
            type = 'user'
            continue;
        }

        if (item.role == 'user' && type == 'user') {
            messages.push(item);
            type = 'assistant'
            continue;
        }

        if (item.role == 'user' && type == 'assistant') {
            messages.push({
                'role': 'assistant',
                'content': 'yes?'
            });
            messages.push(item);
            type = 'assistant'
            continue;
        }

        if (item.role == 'assistant' && type == 'user') {
            messages.push({
                'role': 'user',
                'content': 'so?'
            });
            messages.push(item);
            type = 'user'
            continue;
        }

        if (item.role == 'assistant' && type == 'assistant') {
            messages.push(item);
            type = 'user'
            continue;
        }
    }

    if (messages.length > 1 && messages[messages.length - 1].role == "assistant" && messages[messages.length - 1].content == '') {
        messages.splice(messages.length - 1, 1)
    }

    console.log(messages)
    console.log(messages[messages.length - 1])
    return messages;
}