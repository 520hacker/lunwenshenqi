
export function createTxtAndDownload(filename, text) { 
    var element = document.createElement('a');  // 创建新的a标签
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));  // 设置href属性，内容为文本内容
    element.setAttribute('download', filename);  // 设置download属性，值为文件名

    element.style.display = 'none';  // 隐藏新创建的元素
    document.body.appendChild(element);  // 将新创建的元素添加到DOM中

    element.click();  // 模拟点击新创建的元素

    document.body.removeChild(element);  // 删除新创建的元素
}