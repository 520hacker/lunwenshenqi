export function timestampToDate(timestamp) {
    // 创建一个新的Date对象，并将时间戳作为参数传递
    var date = new Date(timestamp);
  
    // 获取年、月、日
    var year = date.getFullYear();
    var month = date.getMonth() + 1; // 月份从0开始，需要加1
    var day = date.getDate();
  
    // 获取小时、分钟、秒
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
  
    // 格式化日期和时间
    var formattedDate = year + '-' + month + '-' + day;
    var formattedTime = hours + ':' + minutes + ':' + seconds;
  
    // 返回格式化后的日期和时间
    return formattedDate + ' ' + formattedTime;
  }
  