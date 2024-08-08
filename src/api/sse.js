import baseURL from '@/utils/base';
import request from '@/utils/request';
import { getSharedToken } from '@/utils/token'

export function makeSingleChat(param) {
    let token = localStorage.getItem('CSK'); 
    if (!token) {
        token = getSharedToken();
    }
    
    if (!token) {
        return Promise.resolve({
            "success": false,
            "errorMessage": "SK value miss",
            "errorCode": 401,
            "executionTime": 0
        });
    }

    return request({
        url: '/v1/chat/completions',
        method: 'post',
        data: param,
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }).then(data => { 
        return data;
    });
}

export function makeSpeechToText(param) {
    let token = localStorage.getItem('CSK'); 
    if (!token) {
        token = getSharedToken();
    }

    if (!token) {
        return Promise.resolve({
            "success": false,
            "errorMessage": "SK value miss",
            "errorCode": 401,
            "executionTime": 0
        });
    }

    return request({
        url: '/v1/audio/transcriptions',
        method: 'post',
        data: param,
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }).then(data => { 
        return data;
    });
} 

export function makeTextToSpeech(param) {
    let token = localStorage.getItem('CSK'); 
    if (!token) {
        token = getSharedToken();
    }
    
    if (!token) {
        return Promise.resolve({
            "success": false,
            "errorMessage": "SK value miss",
            "errorCode": 401,
            "executionTime": 0
        });
    }

    return request({
        url: '/v1/audio/speech',
        method: 'post',
        data: param,
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }).then(data => { 
        return data;
    });
} 

export async function* makeTextFileLineIterator(url, params) {
    const utf8Decoder = new TextDecoder("utf-8");
    var token = localStorage.getItem('CSK');
    if (!token) {
        token = getSharedToken();
    }

    let response = await fetch(`${baseURL}${url}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(params),
        mode: "cors",
    });
    let reader = response.body.getReader();
    let { value: chunk, done: readerDone } = await reader.read();
    chunk = chunk ? utf8Decoder.decode(chunk, { stream: true }) : "";

    let re = /\r\n|\n|\r/gm;
    let startIndex = 0;

    for (; ;) {
        let result = re.exec(chunk);
        if (!result) {
            if (readerDone) {
                break;
            }
            let remainder = chunk.substr(startIndex);
            ({ value: chunk, done: readerDone } = await reader.read());
            chunk =
                remainder + (chunk ? utf8Decoder.decode(chunk, { stream: true }) : "");
            startIndex = re.lastIndex = 0;
            continue;
        }

        yield chunk.substring(startIndex, result.index);
        startIndex = re.lastIndex;
    }
    if (startIndex < chunk.length) {
        // last line didn't end in a newline char 
        yield chunk.substr(startIndex);
    }
}