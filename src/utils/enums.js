export function getMainMenus() {
    var menus = [
        {
            "job": "默认",
            "items": [
                {
                    "title": "切换 👉️",
                    "links": [
                        { title: "+ 对话", href: "/go/3" },
                        { title: "+ 人设", href: "/go/2" },
                        { title: "+ 撰稿", href: "/go/4" },
                        { title: "+ 视频", href: "/go/5" },
                        { title: "+ 绘图", href: "/go/6" },
                        { title: "+ 功能", href: "/go/7" },
                    ]
                }
            ]
        },
        {
            "job": "人设",
            "items": [
                {
                    "title": "人设",
                    "links": [
                        { title: "<=默认", href: "/go/1" },
                        { title: "哄哄模拟", href: "/chat/base/120/164" },
                        { title: "助手", href: "/chat/base/3/4" },
                        { title: "祖母", href: "/chat/base/5/138" },
                        { title: "半仙", href: "/chat/base/4/72" },
                        { title: "算仙", href: "/chat/base/135/77/984qxMQkT" },
                        { title: "禅师", href: "/chat/base/106/139" },
                        { title: "牛破天", href: "/chat/base/102/72" },
                        { title: "分析师", href: "/chat/base/6/72" },
                        { title: "DBA", href: "/chat/base/104/72" },
                    ]
                }
            ]
        },
        {
            "job": "超级功能",
            "items": [
                {
                    "title": "超级功能",
                    "links": [
                        { title: "<=默认", href: "/go/1" },
                        { title: "长文编撰", href: "/article/generator" },
                        { title: "优秀文笔", href: "/chat/base/118/77/dse9iXvor" },
                        { title: "生成PPT", href: "/chat/base/131/77/Gt6Z8pqWF" },
                        { title: "生头像", href: "/chat/base/139/77/Wk77jayA0" },
                        { title: "理解图片", href: "/chat/base/112/70" },
                        { title: "文档阅读", href: "/chat/base/113/69" },
                        { title: "语法优化", href: "/chat/base/1/164" },
                        { title: "中英互译", href: "/chat/base/7/164" },
                        { title: "联网搜索", href: "/chat/base/8/5" },
                        { title: "网页总结", href: "/chat/summary/111/72" }
                    ]
                }
            ]
        },
        {
            "job": "视频AI",
            "items": [
                {
                    "title": "视频AI",
                    "links": [
                        { title: "<=默认", href: "/go/1" },
                        { title: "VIDU", href: "/chat/base/140/177" },
                        { title: "VIDU历史", href: "/log/video/vidu-video" },
                        { title: "SUNO", href: "/chat/base/127/159" },
                        { title: "SUNO历史", href: "/log/video/suno-v3.5" },
                        // { title: "LUMA", href: "/chat/base/137/158" },
                        { title: "LUMA历史", href: "/log/video/luma-video" },
                        // { title: "PIKA", href: "/chat/base/125/123" },
                        { title: "PIKA历史", href: "/log/video/pika-text-to-video" },
                        // { title: "SORA", href: "/chat/base/121/115" },
                        // { title: "DOMO", href: "/chat/base/126/124" },
                        // { title: "Chirp", href: "/chat/base/126/135" }
                    ]
                }
            ]
        },
        {
            "job": "绘图AI",
            "items": [
                {
                    "title": "绘图AI",
                    "links": [
                        { title: "<=默认", href: "/go/1" },
                        { title: "Midjourney", href: "/chat/base/9/101" },
                        { title: "MJ相册", href: "/log/draw/mj" },
                        { title: "头像", href: "/chat/base/139/77/Wk77jayA0" },
                        { title: "头像相册", href: "/log/draw/gpt-4-gizmo-g" },
                        { title: "Dalle-3", href: "/chat/base/114/17" },
                        { title: "DL相册", href: "/log/draw/gpt-4-dalle" },
                        { title: "playground", href: "/chat/base/114/167" },
                        { title: "PG相册", href: "/log/draw/playground-v2.5" },
                        { title: "stable-diffusion", href: "/chat/base/114/168" },
                        { title: "SD相册", href: "/log/draw/stable-diffusion-3-2b" },
                        { title: "flux", href: "/chat/base/114/178" },
                        { title: "flux相册", href: "/log/draw/flux" }
                    ]
                }
            ]
        },
        {
            "job": "对话AI",
            "items": [
                {
                    "title": "对话AI",
                    "links": [
                        { title: "<=默认", href: "/go/1" },
                        { title: "KIMI", href: "/chat/base/116/83" },
                        { title: "智谱", href: "/chat/base/12/99" },
                        { title: "一言", href: "/chat/base/3/34" },
                        { title: "星火", href: "/chat/base/123/108" },
                        // { title: "元器", href: "/chat/base/132/140" },
                        { title: "百川", href: "/chat/base/133/141" },
                        { title: "混元", href: "/chat/base/134/140" },
                        { title: "智脑", href: "/chat/base/11/45" },
                        { title: "千问", href: "/chat/base/115/78" },
                        { title: "Yi", href: "/chat/base/124/121" },
                        { title: "STEP", href: "/chat/base/128/128" },
                        { title: "DeepSeek", href: "/chat/base/130/131" },
                        { title: "WBot", href: "/chat/base/129/126" },
                        { title: "Claude", href: "/chat/base/122/116" },
                        { title: "OpenAI", href: "/chat/base/13/164" },
                        { title: "Gemini", href: "/chat/base/117/95" },
                        { title: "Meta", href: "/chat/base/138/170" }
                        // { title: "Bing", href: "/chat/base/119/64" },
                    ]
                }
            ]
        },
        {
            "job": "撰稿人",
            "items": [
                {
                    "title": "撰稿人",
                    "links": [
                        { title: "<=默认", href: "/go/1" },
                        { title: "宇辉文风", href: "/chat/base/118/77/dse9iXvor" },
                        { title: "评书文风", href: "/chat/base/136/77/HoVcPBOz2" },
                        { title: "废话大师", href: "/chat/base/132/149" },
                        { title: "周报", href: "/chat/base/110/8" },
                        { title: "助手", href: "/chat/base/3/72" },
                        { title: "小说家", href: "/chat/base/2/72" },
                        { title: "小红书", href: "/chat/base/107/72" },
                        { title: "爆款作家", href: "/chat/base/108/11" },
                        { title: "好评生成", href: "/chat/base/109/72" },
                        { title: "项目起名", href: "/chat/base/100/72" },
                        { title: "Slogan生成", href: "/chat/base/105/72" },
                        { title: "词汇老师", href: "/chat/base/103/4" },
                    ]
                }
            ]
        },
        {
            "job": "GPTs",
            "items": [
                {
                    "title": "GPTs",
                    "links": [
                        { title: "<=默认", href: "/go/1" },
                        { title: "董宇辉说", href: "/chat/base/118/77/dse9iXvor" },
                        { title: "画头像", href: "/chat/base/139/77/Wk77jayA0" },
                        { title: "生成PPT", href: "/chat/base/131/77/Gt6Z8pqWF" },
                        { title: "图文故事", href: "/chat/base/8/77/56aUtyaYF" },
                        { title: "谐音梗🤪", href: "/chat/base/8/77/7nunLIRz8" },
                        { title: "清晰指南", href: "/chat/base/8/77/yIE7C91N3" },
                        { title: "Logo创造", href: "/chat/base/8/77/y2ep4oU9e" },
                        { title: "设计师", href: "/chat/base/8/77/bZfrNSWQ0" },
                        { title: "探索动物", href: "/chat/base/8/77/eNRHCLVnl" },
                        { title: "文档AI", href: "/chat/base/8/77/zk5H2G11H" },
                        { title: "郭德纲", href: "/chat/base/8/77/qdhTcI4hP" },
                    ]
                }
            ]
        }
    ]

    var job = localStorage.getItem('job') ?? '默认';
    var matchedMenu = menus.find(function (menu) {
        return menu.job === job;
    });

    if (matchedMenu) {
        return matchedMenu.items;
    } else {
        return menus[0].items;
    }
}

export function getChannelStatus(status) {
    switch (status) {
        case 1:
            return "启用"
        case 2:
            return "禁用"
        default:
            return "未知"
    }
}

export function getTokenStatus(status) {
    switch (status) {
        case 1:
            return "启用"
        case 2:
            return "禁用"
        default:
            return "未知"
    }
}

export function getRedemptionStatus(status) {
    switch (status) {
        case 1:
            return "启用"
        case 2:
            return "禁用"
        case 3:
            return "已核销"
        default:
            return "未知"
    }
}

export function getChannelType(status) {
    switch (status) {
        case 1:
            return "OpenAI"
        case 2:
            return "讯飞星火"
        case 3:
            return "百度文心"
        default:
            return "未知"
    }
}

export function getErrorMessage(code) {
    var errorMessage = "请检查表单是否都填写正确。"
    switch (code) {
        case "InvalidRedemptionStatus":
            errorMessage = "兑换券不可用。"
            break;
        case "InvalidKey":
            errorMessage = "错误的Key。"
            break;
        case "InvalidSortKey":
            errorMessage = "错误的排序关键字。"
            break;
        case "InvalidSessionId":
            errorMessage = "错误的SessionId。"
            break;
        case "InvalidId":
            errorMessage = "错误的Id。"
            break;
        case "InvalidLimit":
            errorMessage = "错误的页内条数限制。"
            break;
        case "InvalidOffset":
            errorMessage = "错误的翻页起始。"
            break;
        case "InvalidSortDirection":
            errorMessage = "错误的排序方向。"
            break;
        case "DeleteSelfError":
            errorMessage = "您不能删除自己。"
            break;
        case "TokenExpired":
            errorMessage = "令牌已过期。"
            break;
        case "InvalidChannelType":
            errorMessage = "错误的渠道类型。"
            break;
        case "InvalidUserBalance":
            errorMessage = "错误的余额。"
            break;
        case "InvalidToken":
            errorMessage = "错误的令牌。"
            break;
        case "InsufficientTokens":
            errorMessage = "错误的令牌余额。"
            break;
        case "InvalidTokenUser":
            errorMessage = "错误的令牌用户。"
            break;
        case "InvalidUsername":
            errorMessage = "错误的用户名"
            break;
        case "InvalidValue":
            errorMessage = "错误的值"
            break;
        case "InvalidCount":
            errorMessage = "错误的数量"
            break;
        case "InvalidUserId":
            errorMessage = "错误的UserId"
            break;
        case "InvalidRedemption":
            errorMessage = "错误的兑换券"
            break;
        case "InvalidKeyAccess":
            errorMessage = "错误的秘钥权限"
            break;
        case "InvalidUserStatus":
            errorMessage = "错误的用户状态"
            break;
        case "Unknown":
            errorMessage = "发生了未知错误。"
            break;
        case "InvalidType":
            errorMessage = "请检查分类。"
            break;
        case "InvalidName":
            errorMessage = "请检查渠道名。"
            break;
        case "InvalidModels":
            errorMessage = "请检查模型设置"
            break;
        case "InvalidGroup":
            errorMessage = "请检查分组"
            break;
        case "AccessDenied":
            errorMessage = "请检查权限"
            break;
        case "ChannelAlreadyExists":
            errorMessage = "您提交的信息已存在"
            break;
        case "InvalidUserAccessToken":
            errorMessage = "请检查AccessToken"
            break;
        case "DisableSelfError":
            errorMessage = "您不能禁用自己"
            break;
        case "RedemptionAlreadyExists":
            errorMessage = "您提交的信息已存在"
            break;
        case "InvalidUserAccessRedemption":
            errorMessage = "请检查AccessRedemption"
            break;
        case "InvalidUserNameLength":
            errorMessage = "请检查用户名，至少要4个字符。"
            break;
        case "InvalidUserName":
            errorMessage = "请检查用户名。"
            break;
        case "InvalidPassword":
            errorMessage = "请检查密码。"
            break;
        case "InvalidConfirmPassword":
            errorMessage = "请检查校验密码。"
            break;
        case "InvalidEmail":
            errorMessage = "请检查邮件地址。"
            break;
        case "DataNotExits":
            errorMessage = "数据不存在。"
            break;
        case "InvalidExitsUserName":
            errorMessage = "您的用户名已经被注册过了。"
            break;
        case "InvalidExitsEmail":
            errorMessage = "您的邮件地址已经被注册过了。"
            break;
        case "InvalidPasswordSafe":
            errorMessage = "请认真对待您的密码，不要使用过于简单的密码。"
            break;
        case "InvalidPasswordComplex":
            errorMessage = "您的密码过于简单，至少需要有8位，且包含字母和数字。"
            break;
        default:
            break;
    }
    return errorMessage;
}