
export function getMainModels(id) {
    if (id) {
        return getSameChannelModels(id);
    }

    return [{
        "id": "34",
        "label": "百度 ERNIE-Bot-turbo"
    }, {
        "id": "108",
        "label": "讯飞 SparkDesk3.5"
    }, {
        "id": "45",
        "label": "360智脑 360GPT_S2_V9"
    }, {
        "id": "78",
        "label": "阿里通义千问 qwen-max"
    }, {
        "id": "99",
        "label": "智谱 glm-4"
    }, {
        "id": "121",
        "label": "零一万物 yi-34b-chat-200k"
    }, {
        "id": "67",
        "label": "百川 Baichuan2-53B"
    }, {
        "id": "83",
        "label": "月之暗面 moonshot-v1-8k"
    }, {
        "id": "5",
        "label": "联网搜索"
    }, {
        "id": "7",
        "label": "其他"
    }]
}

export function getSameChannelModels(id) {
    var models = getAllModelInfos();
    if (id < 0) {
        return models.map(({ id, label }) => ({ id, label }));
    }

    const model = models.find(model => model.id === id);
    if (!model) return [];

    const channelType = model.channelType;
    return models.filter(model => model.channelType === channelType)
        .map(({ id, label }) => ({ id, label }));
}

export function getCheepModel(cur_model) {
    const validModels = [
        "suno-v3",
        "suno-v3.5",
        "sora-1.0-turbo",
        "luma-video",
        "pika-text-to-video",
        "domo-img-to-video",
        "net-gpt-3.5-turbo-16k",
        "net-gpt-4",
        'gpt-4',
        'gpt-4-0613',
        'gpt-4-0314',
        'gpt-4-32k',
        'gpt-4-32k-0613',
        'gpt-4-preview-0125',
        'gpt-4-32k-0314',
        'gpt-4-dalle',
        'gpt-4-v',
        'gpt-4-all',
        "gpt-4-turbo",
        "gpt-4-1106-preview",
        "gpt-4-1106-vision-preview",
        "gpt-4-gizmo-g",
        "st-gpt-4o",
        "yuanqi",
        "gpt-4-vision-preview",
        "gpt-4o",
        "gpt-4o-2024-08-06",
        "gpt-4o-mini",
        "gpt-4o-all",
        "gpt-4-0125-preview",
        "gpt-4-turbo-2024-04-09",
        "chirp-v3-0",
        "chirp-v2-xxl-alpha",
        "domo-video-to-video",
        "deepseek-coder",
        "dall-e-3",
        "dall-e-2",
        "gemini-pro-vision",
        "gemini-1.5-flash-latest",
        "gemini-1.5-pro-latest",
        'mj',
        'mj-chat',
        "playground-v2.5",
        'flux',
        "stable-diffusion-3-2b",
        'midjourney',
        'claude-3',
        "claude-3-opus-20240229",
        "claude-3-sonnet-20240229",
        "claude-3-haiku-20240307",
        "claude-3-5-sonnet-20240620",
        "yi-34b-chat-200k",
        "yi-vl-plus",
        'characterglm',
        "search-gpts",
        "search-gpts-chat",
        "gpts-search",
        "text-search-ada-doc-001",
        "whisper-1",
        "tts-1",
        "tts-1-hd",
        "text-search-ada-doc-001",
        "embedding_s1_v1",
        "text-embedding-ada-002",
        "Embedding-V1",
        "embedding-001",
        "embedding-bert-512-v1",
        "embedding_s1_v1",
        "embedding-gecko-001",
        "embedding-gecko-002",
        "text-embedding-3-small",
        "text-embedding-3-large",
        "Baichuan4",
        "Baichuan3-Turbo-128k",
        "glm-4",
        "glm-4-alltools",
        "glm-4-air",
        "glm-4-520",
        "qwen-max",
        "ERNIE-Bot-Pro",
        "ernie-4.0"
    ];

    if (validModels.includes(cur_model) || cur_model.indexOf("gpt-4-gizmo-g") > -1 || cur_model.indexOf("yuanqi-") > -1) {
        cur_model = 'gpt-4o-mini';
    }

    return cur_model;
}

export function getModel(id) {
    var models = getAllModelInfos();
    const foundModel = models.find(model => model.id === id);
    return foundModel ? foundModel.label : null;
}

export function getAllModels() {
    var models = getAllModelInfos();
    return models.map(model => model.label);
}

export function getAllModelInfos() {
    var models = [
        {
            "id": "0",
            "channelType": "openai",
            "label": "ada"
        },
        {
            "id": "1",
            "channelType": "openai",
            "label": "babbage"
        },
        {
            "id": "2",
            "channelType": "openai",
            "label": "curie"
        },
        {
            "id": "3",
            "channelType": "openai",
            "label": "davinci"
        },
        {
            "id": "4",
            "channelType": "openai",
            "label": "gpt-3.5-turbo"
        },
        {
            "id": "5",
            "channelType": "openai",
            "label": "gpt-3.5-turbo-0301"
        },
        {
            "id": "6",
            "channelType": "openai",
            "label": "gpt-3.5-turbo-0613"
        },
        {
            "id": "7",
            "channelType": "openai",
            "label": "gpt-3.5-turbo-16k"
        },
        {
            "id": "8",
            "channelType": "openai",
            "label": "gpt-3.5-turbo-16k-0613"
        },
        {
            "id": "9",
            "channelType": "openai",
            "label": "gpt-3.5-turbo-instruct"
        },
        {
            "id": "10",
            "channelType": "openai",
            "label": "gpt-3.5-turbo-instruct-0914"
        },
        {
            "id": "11",
            "channelType": "openai",
            "label": "gpt-4"
        },
        {
            "id": "12",
            "channelType": "openai",
            "label": "gpt-4-0314"
        },
        {
            "id": "13",
            "channelType": "openai",
            "label": "gpt-4-0613"
        },
        {
            "id": "14",
            "channelType": "openai",
            "label": "gpt-4-32k"
        },
        {
            "id": "15",
            "channelType": "openai",
            "label": "gpt-4-32k-0314"
        },
        {
            "id": "16",
            "channelType": "openai",
            "label": "gpt-4-32k-0613"
        },
        {
            "id": "17",
            "channelType": "openai-draw",
            "label": "gpt-4-dalle"
        },
        {
            "id": "18",
            "channelType": "google",
            "label": "google-palm"
        },
        {
            "id": "19",
            "channelType": "meta",
            "label": "llama-2-70b"
        },
        {
            "id": "20",
            "channelType": "meta",
            "label": "llama-2-13b"
        },
        {
            "id": "21",
            "channelType": "meta",
            "label": "llama-2-7b"
        },
        {
            "id": "22",
            "channelType": "meta",
            "label": "code-llama-34b"
        },
        {
            "id": "23",
            "channelType": "meta",
            "label": "code-llama-13b"
        },
        {
            "id": "24",
            "channelType": "meta",
            "label": "code-llama-7b"
        },
        {
            "id": "25",
            "channelType": "claude",
            "label": "claude-1-100k"
        },
        {
            "id": "26",
            "channelType": "claude",
            "label": "claude-2-100k"
        },
        {
            "id": "27",
            "channelType": "claude",
            "label": "claude-instant-1"
        },
        {
            "id": "28",
            "channelType": "claude",
            "label": "claude-2"
        },
        {
            "id": "29",
            "channelType": "openai",
            "label": "net-gpt-3.5-turbo-16k"
        },
        {
            "id": "30",
            "channelType": "openai",
            "label": "net-gpt-4"
        },
        {
            "id": "31",
            "channelType": "draw",
            "label": "midjourney"
        },
        {
            "id": "32",
            "channelType": "draw",
            "label": "mj"
        },
        {
            "id": "33",
            "channelType": "baidu",
            "label": "ERNIE-Bot"
        },
        {
            "id": "34",
            "channelType": "baidu",
            "label": "ERNIE-Bot-turbo"
        },
        {
            "id": "35",
            "channelType": "baidu",
            "label": "ERNIE-Bot-Pro"
        },
        {
            "id": "36",
            "channelType": "chatglm",
            "label": "chatglm_pro"
        },
        {
            "id": "37",
            "channelType": "chatglm",
            "label": "chatglm_std"
        },
        {
            "id": "38",
            "channelType": "chatglm",
            "label": "chatglm_lite"
        },
        {
            "id": "39",
            "channelType": "ali",
            "label": "qwen-v1"
        },
        {
            "id": "40",
            "channelType": "ali",
            "label": "qwen-plus-v1"
        },
        {
            "id": "41",
            "channelType": "openai",
            "label": "semantic_similarity_s1_v1"
        },
        {
            "id": "42",
            "channelType": "xunfei",
            "label": "SparkDesk"
        },
        {
            "id": "43",
            "channelType": "xunfei",
            "label": "SparkDesk2"
        },
        {
            "id": "44",
            "channelType": "xunfei",
            "label": "SparkDesk3"
        },
        {
            "id": "45",
            "channelType": "360",
            "label": "360GPT_S2_V9"
        },
        {
            "id": "46",
            "channelType": "360",
            "label": "360GPT_S2_V9.4"
        },
        {
            "id": "47",
            "channelType": "openai",
            "label": "dall-e"
        },
        {
            "id": "48",
            "channelType": "openai",
            "label": "text-embedding-ada-002"
        },
        {
            "id": "49",
            "channelType": "openai",
            "label": "text-davinci-003"
        },
        {
            "id": "50",
            "channelType": "openai",
            "label": "text-davinci-002"
        },
        {
            "id": "51",
            "channelType": "openai",
            "label": "text-ada-001"
        },
        {
            "id": "52",
            "channelType": "openai",
            "label": "text-babbage-001"
        },
        {
            "id": "53",
            "channelType": "openai",
            "label": "text-curie-001"
        },
        {
            "id": "54",
            "channelType": "openai",
            "label": "text-davinci-edit-001"
        },
        {
            "id": "55",
            "channelType": "openai",
            "label": "text-moderation-latest"
        },
        {
            "id": "56",
            "channelType": "openai",
            "label": "text-moderation-stable"
        },
        {
            "id": "57",
            "channelType": "openai",
            "label": "code-davinci-edit-001"
        },
        {
            "id": "58",
            "channelType": "openai",
            "label": "text-search-ada-doc-001"
        },
        {
            "id": "59",
            "channelType": "openai-tts",
            "label": "whisper-1"
        },
        {
            "id": "60",
            "channelType": "openai",
            "label": "Embedding-V1"
        },
        {
            "id": "61",
            "channelType": "openai",
            "label": "PaLM-2"
        },
        {
            "id": "62",
            "channelType": "openai",
            "label": "embedding-bert-512-v1"
        },
        {
            "id": "63",
            "channelType": "openai",
            "label": "embedding_s1_v1"
        },
        {
            "id": "64",
            "channelType": "openai",
            "label": "gpt-4-bing"
        },
        {
            "id": "65",
            "channelType": "chatglm",
            "label": "ChatGLM_Turbo"
        },
        {
            "id": "66",
            "channelType": "chatglm",
            "label": "characterglm"
        },
        {
            "id": "67",
            "channelType": "Baichuan",
            "label": "Baichuan2-53B"
        },
        {
            "id": "68",
            "channelType": "chatglm",
            "label": "chatglm"
        },
        {
            "id": "69",
            "channelType": "openai",
            "label": "gpt-4-all"
        },
        {
            "id": "70",
            "channelType": "openai",
            "label": "gpt-4-v"
        },
        {
            "id": "71",
            "channelType": "sd",
            "label": "stable-diffusion"
        },
        {
            "id": "72",
            "channelType": "openai",
            "label": "gpt-4-1106-preview"
        },
        {
            "id": "73",
            "channelType": "openai",
            "label": "gpt-4-1106-vision-preview"
        },
        {
            "id": "74",
            "channelType": "openai-tts",
            "label": "tts-1"
        },
        {
            "id": "75",
            "channelType": "openai-tts",
            "label": "tts-1-hd"
        },
        {
            "id": "76",
            "channelType": "openai",
            "label": "gpt-3.5-turbo-1106"
        },
        {
            "id": "77",
            "channelType": "openai",
            "label": "gpt-4-gizmo-g"
        },
        {
            "id": "78",
            "channelType": "ali",
            "label": "qwen-max"
        },
        {
            "id": "79",
            "channelType": "ali",
            "label": "qwen-turbo"
        },
        {
            "id": "80",
            "channelType": "ali",
            "label": "qwen-plus"
        },
        {
            "id": "81",
            "channelType": "ali",
            "label": "qwen-max-v1"
        },
        {
            "id": "82",
            "channelType": "openai",
            "label": "gpt-4-vision-preview"
        },
        {
            "id": "83",
            "channelType": "kimi",
            "label": "moonshot-v1-8k"
        },
        {
            "id": "84",
            "channelType": "kimi",
            "label": "moonshot-v1-32k"
        },
        {
            "id": "85",
            "channelType": "kimi",
            "label": "moonshot-v1-128k"
        },
        {
            "id": "86",
            "channelType": "openai",
            "label": "dall-e-3"
        },
        {
            "id": "87",
            "channelType": "tencent",
            "label": "hunyuan"
        },
        {
            "id": "88",
            "channelType": "openai",
            "label": "dall-e-2"
        },
        {
            "id": "89",
            "channelType": "openai",
            "label": "gpt-4-turbo"
        },
        {
            "id": "90",
            "channelType": "openai",
            "label": "chat-bison-00"
        },
        {
            "id": "91",
            "channelType": "openai",
            "label": "embedding-001"
        },
        {
            "id": "92",
            "channelType": "openai",
            "label": "embedding-gecko-001"
        },
        {
            "id": "93",
            "channelType": "openai",
            "label": "embedding-gecko-002"
        },
        {
            "id": "94",
            "channelType": "openai",
            "label": "text-bison-001"
        },
        {
            "id": "95",
            "channelType": "google",
            "label": "gemini-pro"
        },
        {
            "id": "96",
            "channelType": "google",
            "label": "gemini-pro-vision"
        },
        {
            "id": "97",
            "channelType": "google",
            "label": "gemini-ultra"
        },
        {
            "id": "98",
            "channelType": "openai",
            "label": "aqa"
        },
        {
            "id": "99",
            "channelType": "chatglm",
            "label": "glm-4"
        },
        {
            "id": "100",
            "channelType": "openai",
            "label": "mixtral-8x7b"
        },
        {
            "id": "101",
            "channelType": "draw",
            "label": "mj-chat"
        },
        {
            "id": "102",
            "channelType": "openai",
            "label": "gpt-3.5-turbo-0125"
        },
        {
            "id": "103",
            "channelType": "openai",
            "label": "text-embedding-3-small"
        },
        {
            "id": "104",
            "channelType": "openai",
            "label": "text-embedding-3-large"
        },
        {
            "id": "105",
            "channelType": "openai",
            "label": "gpt-4-turbo-preview"
        },
        {
            "id": "106",
            "channelType": "openai",
            "label": "gpt-4-0125-preview"
        },
        {
            "id": "107",
            "channelType": "openai",
            "label": "text-moderation-007"
        },
        {
            "id": "108",
            "channelType": "xunfei",
            "label": "SparkDesk3.5"
        },
        {
            "id": "109",
            "channelType": "openai",
            "label": "search-gpts-chat"
        },
        {
            "id": "110",
            "channelType": "openai",
            "label": "search-gpts"
        },
        {
            "id": "111",
            "channelType": "openai",
            "label": "gpts-search"
        },
        {
            "id": "112",
            "channelType": "openai",
            "label": "gpts-get"
        },
        {
            "id": "113",
            "channelType": "openai",
            "label": "mistral-medium"
        },
        {
            "id": "114",
            "channelType": "ali",
            "label": "qwen-72b"
        },
        {
            "id": "115",
            "channelType": "openai",
            "label": "sora-1.0-turbo"
        },
        {
            "id": "116",
            "channelType": "claude",
            "label": "claude-3"
        },
        {
            "id": "117",
            "channelType": "claude",
            "label": "claude-3-opus-20240229"
        },
        {
            "id": "118",
            "channelType": "claude",
            "label": "claude-3-sonnet-20240229"
        },
        {
            "id": "119",
            "channelType": "claude",
            "label": "claude-3-haiku-20240307"
        },
        {
            "id": "120",
            "channelType": "yi",
            "label": "yi-34b-chat-0205"
        },
        {
            "id": "121",
            "channelType": "yi",
            "label": "yi-34b-chat-200k"
        },
        {
            "id": "122",
            "channelType": "yi",
            "label": "yi-vl-plus"
        },
        {
            "id": "123",
            "channelType": "pika",
            "label": "pika-text-to-video"
        },
        {
            "id": "124",
            "channelType": "domo",
            "label": "domo-img-to-video"
        },
        {
            "id": "125",
            "channelType": "suno",
            "label": "suno-v3"
        },
        {
            "id": "126",
            "channelType": "wbot",
            "label": "wbot-2"
        },
        {
            "id": "127",
            "channelType": "kimi",
            "label": "kimi"
        },
        {
            "id": "128",
            "channelType": "step",
            "label": "step"
        },
        {
            "id": "129",
            "channelType": "step",
            "label": "step-1-200k"
        },
        {
            "id": "130",
            "channelType": "step",
            "label": "step-1v-32k"
        },
        {
            "id": "131",
            "channelType": "deepseek",
            "label": "deepseek-chat"
        },
        {
            "id": "132",
            "channelType": "deepseek",
            "label": "deepseek-coder"
        },
        {
            "id": "133",
            "channelType": "openai",
            "label": "gpt-4o"
        },
        {
            "id": "135",
            "channelType": "chirp",
            "label": "chirp-v3-0",
        },
        {
            "id": "136",
            "channelType": "chirp",
            "label": "chirp-v2-xxl-alpha"
        },
        {
            "id": "137",
            "channelType": "domo",
            "label": "domo-video-to-video"
        },
        {
            "id": "138",
            "channelType": "tencent",
            "label": "yuanqi-Cm2yPJjfGhtr"
        },
        {
            "id": "139",
            "channelType": "tencent",
            "label": "yuanqi-rIUozU0pemV2"
        },
        {
            "id": "140",
            "channelType": "tencent",
            "label": "yuanqi-mdQAL8rzCYDN"
        },
        {
            "id": "141",
            "channelType": "Baichuan",
            "label": "Baichuan3-Turbo"
        },
        {
            "id": "142",
            "channelType": "Baichuan",
            "label": "Baichuan4"
        },
        {
            "id": "143",
            "channelType": "Baichuan",
            "label": "Baichuan3-Turbo-128k"
        },
        {
            "id": "144",
            "channelType": "Baichuan",
            "label": "Baichuan2-Turbo"
        },
        {
            "id": "145",
            "channelType": "Baichuan",
            "label": "Baichuan2-Turbo-192k"
        },
        {
            "id": "146",
            "channelType": "baidu",
            "label": "ERNIE-Speed"
        },
        {
            "id": "147",
            "channelType": "baidu",
            "label": "ERNIE-Lite"
        },
        {
            "id": "148",
            "channelType": "baidu",
            "label": "ERNIE-Tiny"
        },
        {
            "id": "149",
            "channelType": "tencent",
            "label": "yuanqi-vlLakgxQ54Kv"
        },
        {
            "id": "150",
            "channelType": "chatglm",
            "label": "glm-4-air"
        },
        {
            "id": "151",
            "channelType": "chatglm",
            "label": "glm-4-520"
        },
        {
            "id": "152",
            "channelType": "tencent",
            "label": "hunyuan-lite"
        },
        {
            "id": "153",
            "channelType": "xunfei",
            "label": "general"
        },
        {
            "id": "154",
            "channelType": "xunfei",
            "label": "generalv3"
        },
        {
            "id": "155",
            "channelType": "xunfei",
            "label": "generalv3.5"
        },
        {
            "id": "156",
            "channelType": "google",
            "label": "gemini-1.5-pro-latest"
        },
        {
            "id": "157",
            "channelType": "google",
            "label": "gemini-1.5-flash-latest"
        },
        {
            "id": "158",
            "channelType": "pika",
            "label": "luma-video"
        },
        {
            "id": "159",
            "channelType": "suno",
            "label": "suno-v3.5"
        },
        {
            "id": "160",
            "channelType": "claude",
            "label": "claude-3-5-sonnet-20240620"
        },
        {
            "id": "161",
            "channelType": "openai",
            "label": "gpt-4o-all"
        },
        {
            "id": "162",
            "channelType": "xunfei",
            "label": "generalv2"
        },
        {
            "id": "163",
            "channelType": "xunfei",
            "label": "generalv4"
        },
        {
            "id": "164",
            "channelType": "openai",
            "label": "gpt-4o-mini"
        },
        {
            "id": "165",
            "channelType": "chatglm",
            "label": "glm-4-alltools"
        },
        {
            "id": "166",
            "channelType": "openai",
            "label": "st-gpt-4o"
        },
        {
            "id": "167",
            "channelType": "draw",
            "label": "playground-v2.5"
        },
        {
            "id": "168",
            "channelType": "draw",
            "label": "stable-diffusion-3-2b"
        },
        {
            "id": "169",
            "channelType": "meta",
            "label": "llama-3.1-8b"
        },
        {
            "id": "170",
            "channelType": "meta",
            "label": "llama-3.1-70b"
        },
        {
            "id": "171",
            "channelType": "meta",
            "label": "llama-3.1-405b"
        },
        {
            "id": "172",
            "channelType": "360",
            "label": "360gpt-pro"
        },
        {
            "id": "173",
            "channelType": "360",
            "label": "360gpt2-pro"
        },
        {
            "id": "174",
            "channelType": "360",
            "label": "360gpt-turbo-responsibility-8k"
        },
        {
            "id": "175",
            "channelType": "360",
            "label": "360gpt-turbo"
        },
        {
            "id": "176",
            "channelType": "vidu",
            "label": "vidu-vip-video"
        },
        {
            "id": "177",
            "channelType": "vidu",
            "label": "vidu-video"
        },
        {
            "id": "178",
            "channelType": "flux",
            "label": "flux"
        },
        {
            "id": "179",
            "channelType": "openai",
            "label": "gpt-4o-2024-08-06",
        }
    ];

    return models;
}