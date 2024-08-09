<style>
.article-generator-list-images {
    padding-top: 10px;
}

.article-generator-list-images .el-image {
    display: inline-block;
}

.article-generator-list-images .el-image {
    margin-right: 10px;
    box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, .3);
    border-radius: 3px;
}

.article-generator {
    margin-left: 5%;
    width: 90%;
    padding: 5%;
    background: rgba(255, 255, 255, 0.1);
    margin-bottom: 20px;
}

h3.sub-title {
    text-align: center;
    display: block;
    width: 100%;
    background: rgba(200, 200, 200, 0.3);
    padding: 30px;
    border-radius: 5px;
}

h3.sub-title a {}

.article-generator .steps {
    width: 80%;
    margin-left: 10%;
    padding-top: 60px;
    padding-bottom: 30px;
}

.article-generator-preview,
.article-generator-settings {
    padding-top: 50px;
}

.article-generator-settings-form-row {
    clear: both;
    padding-top: 10px;
    min-height: 80px;
}

.article-generator-settings-form-title {
    width: 20%;
    float: left;
    line-height: 30px;
}

.article-generator-settings-form-content {
    width: 79%;
    float: left;
}

.article-generator-list h2 {
    clear: both;
    padding-top: 30px;
}

.article-generator-list-row {
    padding-top: 10px
}

.article-generator-list-title {
    line-height: 30px;
    padding: 10px;
}

.clear {
    clear: both;
}
</style>

<template>
    <div class="article-generator">
        <div class="steps">
            <el-steps :active="step" finish-status="success">
                <el-step title="写作设定" />
                <el-step title="段落撰写" />
                <el-step title="预览编辑" />
            </el-steps>
        </div>
        <div class="article-generator-settings" v-show="step == 1">
            <el-alert title="指南" type="warning" description="本页面用于使用AI创建长文，流程为 生成提纲 -> 编写内容 （批量或者点击提纲标题边上的编写按钮） -> 预览结果"
                show-icon />
            <h2>写作设定</h2>
            <h3 class="sub-title">
                <span><a href="https://odin.mblog.club/AI%E9%95%BF%E6%96%87%E7%94%9F%E6%88%90%E5%99%A8"
                        target="_blank">第一次使用请务必查看使用教学，点我，点我，点我!</a></span>
            </h3>
            <div class="article-generator-settings-form">
                <div class="article-generator-settings-form-row" v-show="articles && articles.length > 0">
                    <div class="article-generator-settings-form-title">
                        创作历史（{{ articles.length }}）
                    </div>
                    <div class="article-generator-settings-form-content">
                        <el-button style="margin-top: 12px" @click="showDialogTable = true">加载创作历史</el-button>
                    </div>
                </div>
                <div class="article-generator-settings-form-row">
                    <div class="article-generator-settings-form-title">
                        文章类型
                    </div>
                    <div class="article-generator-settings-form-content">
                        <el-radio-group v-model="form.type">
                            <el-radio v-for="item in types" :key="item" :label="item" :value="item">{{ item
                                }}</el-radio>
                        </el-radio-group>
                    </div>
                </div>
                <div class="article-generator-settings-form-row">
                    <div class="article-generator-settings-form-title">
                        风格特点
                    </div>
                    <div class="article-generator-settings-form-content">
                        <el-checkbox-group v-model="form.style">
                            <el-checkbox v-for="item in styles" :label="item" :key="item" />
                        </el-checkbox-group>
                    </div>
                </div>
                <div class="article-generator-settings-form-row">
                    <div class="article-generator-settings-form-title">
                        篇幅
                    </div>
                    <div class="article-generator-settings-form-content">
                        主节点 <el-input-number v-model="form.node_size" class="mx-4" :min="1" :max="10"
                            controls-position="right" /> &nbsp; &nbsp; &nbsp;
                        子节点 <el-input-number v-model="form.item_size" class="mx-4" :min="1" :max="10"
                            controls-position="right" />
                    </div>
                </div>
                <div class="article-generator-settings-form-row">
                    <div class="article-generator-settings-form-title">
                        标题（长文提示词）
                    </div>
                    <div class="article-generator-settings-form-content">
                        <el-input v-model="form.title" placeholder="请输入标题" :autosize="{ minRows: 2, maxRows: 8 }"
                            type="textarea" />
                    </div>
                </div>
                <div class="article-generator-settings-form-row">
                    <div class="article-generator-settings-form-title">
                        内容模型
                    </div>
                    <div class="article-generator-settings-form-content">
                        <el-radio-group v-model="form.model">
                            <el-radio v-for="item in models" :key="item" :label="item" :value="item">
                                {{ item }}
                            </el-radio>
                        </el-radio-group>
                    </div>
                </div>
                <div class="article-generator-settings-form-row">
                    <div class="article-generator-settings-form-title">
                    </div>
                    <div class="article-generator-settings-form-content">
                        <el-button type="primary" style="margin-top: 12px" @click="handleInit"
                            :disabled="loading">下一步</el-button>
                    </div>
                </div>
            </div>
        </div>
        <div class="article-generator-preview" v-show="step == 3">
            <el-alert title="注意" type="warning" description="刷新或关闭会导致内容丢失，请确认您已备份" show-icon />
            <div class="article-generator-list-row">
                <v-md-editor v-model="content" mode="preview"></v-md-editor>
            </div>
            <div class="article-generator-list-row">
                <div class="article-generator-settings-form-title">
                    操作
                </div>
                <div class="article-generator-settings-form-content">
                    <el-button style="margin-top: 12px" @click="handleStep1" :disabled="loading">上一步</el-button>
                    <el-button style="margin-top: 12px" :icon="DocumentCopy" @click="handleCopyChat()"
                        :disabled="loading">复制</el-button>
                    <el-button type="primary" style="margin-top: 12px" :icon="EditPen" @click="handleEditArticle()"
                        :disabled="loading">新窗口编辑</el-button>

                </div>
            </div>
        </div>
        <div class="article-generator-list" v-show="step == 2">
            <el-alert title="指南" type="warning" description="本页面用于使用AI创建长文，流程为 生成提纲 -> 编写内容 （批量或者点击提纲标题边上的编写按钮） -> 预览结果"
                show-icon />
            <div class="article-generator-list-row">
                <div class="article-generator-settings-form-title">
                    操作
                </div>
                <div class="article-generator-settings-form-content">
                    <el-button style="margin-top: 12px" @click="handleStep0" :disabled="loading">上一步</el-button>
                    <el-button :type="form.list.length == 1 ? 'primary' : 'info'" style="margin-top: 12px"
                        @click="handleResetList" :disabled="loading">生成提纲</el-button>
                    <el-button :type="form.list.length != 1 ? 'primary' : 'info'" style="margin-top: 12px"
                        @click="handleStart" :disabled="loading || form.list.length == 1">全部编写</el-button>
                    <el-button style="margin-top: 12px" @click="handleStopLoading" v-show="loading">中断</el-button>
                </div>
            </div>
            <h2>段落撰写</h2>
            <div class="article-generator-list-row" v-for="item, index in form.list" :key="item">
                <div class="article-generator-list-title">
                    {{ item.index }} {{ item.title }} <el-button type="info" :icon="EditPen" :disabled="loading"
                        v-show="item.title != '请点击页面上方‘生成提纲’按钮创建提纲'" @click="handleStartItem(index, item)" />
                    <el-button type="info" :icon="Picture" :disabled="loading" @click="handleDrawItem(index, item)"
                        v-show="item.content != null && item.content.length > 5" />
                </div>
                <div class="article-generator-list-content">
                    <el-input v-model="item.content" :autosize="{ minRows: 2, maxRows: 4 }" type="textarea"
                        placeholder="Please input" v-loading="loading" />
                </div>
                <div class="article-generator-list-images" v-show="item.content != null && item.content.length > 5">
                    <el-image v-for="image in item.images" :key="image" style="width: 100px; height: 100px" :src="image"
                        :zoom-rate="1.2" :max-scale="7" :min-scale="0.2" :preview-src-list="item.images"
                        :initial-index="4" fit="cover" />
                </div>
            </div>
            <div class="article-generator-list-row">
                <div class="article-generator-settings-form-title">
                    操作
                </div>
                <div class="article-generator-settings-form-content">
                    <el-button style="margin-top: 12px" @click="handleStep0" :disabled="loading">上一步</el-button>
                    <el-button style="margin-top: 12px" @click="handlePreview"
                        :disabled="loading || form.list.length == 1">预览内容</el-button>
                </div>
            </div>
            <div class="clear"></div>
        </div>
        <el-dialog v-model="showDialogTable" title="历史对话" width="80%">
            <el-table :data="articles">
                <el-table-column property="title" label="话题" />
                <el-table-column label="日期" width="100" sortable prop="id">
                    <template #default="props">
                        <DateInfo :pubDate="props.row.id" />
                    </template>
                </el-table-column>
                <el-table-column fixed="right" label="操作" width="100">

                    <template #default="props">
                        <el-tooltip class="box-item" effect="dark" content="设为当前会话" placement="top">
                            <el-button type="primary" :icon="Checked" circle @click="handleSetNewArchive(props.row)" />
                        </el-tooltip>
                        <el-popconfirm title="确认删除?不能恢复的哦。" confirm-button-text="删除" cancel-button-text="再想想"
                            @confirm="handleDeleteArchive(props.row)">
                            <template #reference>
                                <el-button type="danger" :icon="Delete" circle />
                            </template>
                        </el-popconfirm>
                    </template>
                </el-table-column>
            </el-table>
        </el-dialog>
    </div>
</template>

<script>
import DateInfo from '@/components/DateInfo.vue';
import { EditPen, Checked, Delete, Picture, DocumentCopy } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import { initBaseMessage } from '@/utils/chat_transfer'
import { makeSingleChat, makeTextFileLineIterator } from '@/api/sse'
import { ref, } from 'vue';
import { copyToClipboard } from '@/utils/page'
import { getArticleKey, updateArticle } from '@/api/public'
export default {
    name: 'ArticleGenerator',
    components: {
        DateInfo
    },

    setup() {
        const models = ref(["gpt-3.5-turbo-16k", "gemini-pro", "gpt-4", "gpt-4o-mini", "claude-3"])
        const loading = ref(false)
        const step = ref(1)
        const types = ref(["学术论文", "新闻报道", "叙述性文章", "描述性文章", "评论性文章", "议论文", "说明文", "报告文", "汇报材料", "研究报告", "访谈文章", "人物特写", "记叙文", "故事型文章", "列表型文章", "观点型文章", "专栏文章", "书评", "电影评论", "产品评测", "短篇小说", "诗歌", "剧本", "散文诗", "幽默文章", "随笔", "日记", "信件", "旅游指南", "美食评论", "科普文章", "商业计划书", "个人陈述或声明"])
        const styles = ref(["篇首有‘楔子’", "严肃严谨", "轻松诙谐", "文笔优美", "善用古文", "多用成语", "猎奇搞怪", "提纲挈领", "引经据典", "细节描述", "抛砖引玉", "反面论证", "正面论证", "举例说明", "设问", "答疑解惑", "引用名言", "引用数据", "引用权威观点", "逻辑推理", "情感表达", "讲故事", "讲笑话", "讲道理", "讲历史", "讲新闻", "讲科学", "讲经济", "讲文化", "讲生活", "讲艺术", "讲体育", "讲娱乐", "讲教育", "讲政策", "讲环保", "讲健康", "讲旅游", "讲美食", "讲科技", "讲商业", "讲心理", "讲哲学", "讲法律", "专业书籍"])
        const content = ref('')
        const form = ref({
            "id": "",
            "model": "gpt-3.5-turbo-16k",
            "type": '学术论文',
            "style": ["严肃严谨", "提纲挈领", "引经据典", "细节描述", '引用数据'],
            "title": '未来30年的AI与人类',
            "node_size": 3,
            "item_size": 2,
            "list": [{ "index": "1", "level": "1", "title": "请点击页面上方‘生成提纲’按钮创建提纲", "images": ["https://filesystem.site/cdn/20240306/TzQdumjmJhVLOF4yxQQnbfM0EiGtZb.webp", "https://filesystem.site/cdn/20240306/VqydmfGwL1m4KJWLkBXEInIi8tK44v.webp"] }]
        })

        const showDialogTable = ref(false)
        const articles = ref([])
        const loadFromLocal = () => {
            try {
                var json = localStorage.getItem("articles")
                articles.value = [];
                if (json && json.length > 0) {
                    articles.value = JSON.parse(json)
                }
            } catch (err) {
                console.log(err)
                articles.value = []
            }
        }

        const handleCopyChat = () => {
            copyToClipboard(content.value)
        }

        const setToLocal = () => {
            if (!articles.value) {
                articles.value = []
            }

            localStorage.setItem("articles", JSON.stringify(articles.value))
        }

        const load = () => {
            form.value.id = Date.now()
            loadFromLocal()
        }
        load()

        const save = () => {
            var checkRow = articles.value.filter(function (item) {
                return item.id == form.value.id;
            });

            if (checkRow && checkRow.length > 0) {
                for (var index in articles.value) {
                    if (articles.value[index].id == form.value.id) {
                        articles.value[index] = form.value;
                        break;
                    }
                }
            } else {
                articles.value.unshift(form.value);
            }

            setToLocal();
        }

        const handleSetNewArchive = (row) => {
            form.value = row
            ElMessage({
                type: 'success',
                message: '历史对话已激活!',
            })
        }

        const handleDeleteArchive = (row) => {
            for (var archiveIndex in articles.value) {
                if (articles.value[archiveIndex].id == row.id) {
                    articles.value.splice(archiveIndex, 1);
                    break;
                }
            }

            setToLocal()

            ElMessage({
                type: 'success',
                message: '历史对话' + row.title + '已删除!',
            })
        }

        const getSysPrompt = () => {
            let firstNode = "";
            let contentStyle = form.value.style.join(',')
            if (contentStyle.indexOf('楔子') > 0) {
                firstNode = "第一章为‘楔子’或者‘引言’，没有子章节；"
            }

            const prompt = `
你的目标是依据需求给出提纲,提纲分2个层次,至少分${form.value.node_size}个主章节，每个主章节包含1-${form.value.item_size}个子章节，${firstNode}最后一章为总结或者点题，没有子章节。
请一步一步思考后，在每个章节点尽可能详细的描述当前节点的概要。
目标内容的题材是： ‘${form.value.type}’
目标内容的写作风格是： ‘${form.value.style}’
要求返回的格式为json，请不要返回json内容之外的其他信息，包含介绍、说明、格式、markdown信息。
要求返回的内容为一个数组json, 数组的内容参考
[{"index":"1","level":"1","title":"大标题一"},{"index":"1.1","level":"2","title":"子标题一"},{"index":"1.2","level":"2","title":"子标题二"},{"index":"1.3","level":"2","title":"子标题三"},{"index":"2","level":"1","title":"大标题二"},{"index":"2.1","level":"2","title":"子标题一"},{"index":"2.2","level":"2","title":"子标题二"},{"index":"2.3","level":"2","title":"子标题三"}]

请返回json内容，而不是其它格式
目标内容的标题/内容要求是：
  `;
            return prompt;
        }

        const getContentPrompt = (list, desc) => {
            return `
## 目标内容的标题是： 《${form.value.title} 》
## 目标内容的题材是： "${form.value.type}"
## 建议写作风格为 ${form.value.style} 
## 提纲如下：
---
${list}
---


基于以上信息
${desc}
            `;
        }

        const handleStopLoading = () => {
            ElMessage({
                type: 'info',
                message: '您取消了加载中的阻塞状态，但是并不会取消刚才正在进行的AI互动活动，相关行为依然会在后台完成。',
            })
            save()
            loading.value = false
        }

        const handleResetList = () => {
            form.value.list = []
            handleInit()
        }

        const handleStart = () => {
            if (form.value.list == [] || form.value.list.length < 2) {
                ElMessage({
                    type: 'info',
                    message: '请先生成提纲！',
                })

                return
            }

            var i = 0;
            var timeJob = setInterval(function () {
                var item;
                var done = true
                for (var index in form.value.list) {
                    item = form.value.list[index]
                    if (!item.content || item.content.length == 0) {
                        done = false
                    }
                }

                if (done) {
                    clearInterval(timeJob)
                    return;
                }

                item = form.value.list[i]
                if (!item.content || item.content.length <= 0) {
                    handleStartItem(i, item)
                }

                i++
                if (form.value.list.length <= i) {
                    i = 0;
                }
            }, 100);
        }

        const handleEditArticle = () => {
            getArticleKey().then(keyJson => {
                ElMessage({
                    type: 'success',
                    message: '已获得Key!即将为您打开新窗口！',
                })
                updateArticle({
                    "key": keyJson.key,
                    "content": content.value
                }).then((rdata) => {
                    var editor_url = ''
                    
                    try {
                        editor_url = process.env.editor_url;
                    }
                    catch (e) {
                        console.log(e)
                    }

                    if (!editor_url) {
                        editor_url = "https://suishouji.qiangtu.com";
                    }

                    window.open(editor_url.trim('/') + "/" + keyJson.key)
                    ElMessage({
                        type: 'success',
                        message: '已弹出编辑窗!',
                    })
                    console.log(rdata)
                });
            });
        }

        const handleDrawItem = async (index, item) => {
            if (loading.value) {
                return;
            }

            var tmpArr = []
            for (var tmpIndex in form.value.list) {
                var tmpItem = form.value.list[tmpIndex]
                tmpArr.push({ "index": tmpItem.index, "level": tmpItem.level, "title": tmpItem.title })
            }

            let sysPrompt = getContentPrompt(JSON.stringify(tmpArr), "# 请给这一章绘制一张插图:")

            var messages = [{
                "role": "user",
                "content": sysPrompt + "\n 《" + item.index + " " + item.title + "》"
            }]
            console.log(messages)

            loading.value = true
            var params = initBaseMessage(messages, "gpt-4-dalle", false)


            var url = '/v1/chat/completions'
            var result = ''
            const lines = makeTextFileLineIterator(url, params);
            for await (let line of lines) {
                if (line == '') {
                    continue;
                }

                try {
                    let text = line;
                    if (text.indexOf("data: ") == 0) {
                        text = text.substring(6);
                    }

                    if (text.indexOf("data:") == 0) {
                        text = text.substring(5);
                    }

                    if (text == "[DONE]") {
                        loading.value = false
                        form.value.list[index].images = extractImageLinks(result)
                        console.log(form.value.list[index].images)
                        return;
                    }
                    else {
                        try {
                            const data = JSON.parse(text);
                            result += data.choices[0].message.content;
                            console.log(data.choices[0].delta.content)
                        } catch (err) {
                            console.log("error" + err)
                            console.log(text)
                        }
                    }
                } catch (e) {
                    console.log(e)
                }
            }
        }

        const extractImageLinks = (markdownContent) => {
            const regex = /!\[.*?\]\((.*?)\)/g;
            const matches = markdownContent.match(regex);

            if (!matches) {
                return [];
            }

            const imageLinks = matches.map(match => {
                const url = match.match(/\((.*?)\)/)[1];
                return url;
            });

            return imageLinks;
        }

        const handleStartItem = (index, item) => {
            if (loading.value) {
                return;
            }

            var tmpArr = []
            for (var tmpIndex in form.value.list) {
                var tmpItem = form.value.list[tmpIndex]
                tmpArr.push({ "index": tmpItem.index, "level": tmpItem.level, "title": tmpItem.title })
            }

            let sysPrompt = ''
            if (item.level == '1') {
                sysPrompt = getContentPrompt(JSON.stringify(tmpArr), "# 请给这一章编写一个简短的引子：")
            } else {
                sysPrompt = getContentPrompt(JSON.stringify(tmpArr), "# 请编写章节：")
            }

            var messages = [{
                "role": "system",
                "content": sysPrompt
            }, {
                "role": "user",
                "content": item.index + " " + item.title
            }]
            console.log(messages)

            loading.value = true
            var params = initBaseMessage(messages, form.value.model, false)
            makeSingleChat(params).then(data => {
                try {
                    form.value.list[index].content = data.choices[0].message.content
                    console.log(form.value.list)
                } catch (err) {
                    console.log(err)
                    console.log(data)
                }
                save()
                loading.value = false
            })
        }

        const handleInit = () => {
            step.value = 2

            if (form.value.list && form.value.list.length > 0) {
                ElMessage({
                    type: 'info',
                    message: '存在初始化索引，生成索引已跳过',
                })
                return;
            }

            if (loading.value == true) {
                ElMessage({
                    type: 'info',
                    message: '生成索引已跳过，请等待其他操作完成!',
                })
                return;
            }

            form.value.list = [{ "index": "1", "level": "1", "title": "加载中", "content": "加载中" }]
            loading.value = true

            let sysPrompt = getSysPrompt()
            var messages = [{
                "role": "system",
                "content": sysPrompt
            }, {
                "role": "user",
                "content": form.value.title
            }]

            console.log(messages)

            ElMessage({
                type: 'info',
                message: '索引使用高级AI,速度较慢，请耐心等待!',
            })

            var params = initBaseMessage(messages, "gpt-4o-mini", false)
            makeSingleChat(params).then(data => {
                try {
                    var content = data.choices[0].message.content
                    var json = content.trim()
                    form.value.list = processContent(json)
                } catch (err) {
                    console.log(err)
                    console.log(data)
                }
                save()
                loading.value = false
            })
        }


        const processContent = (content) => {
            // 匹配包含 JSON 类型标记的 Markdown 代码块
            const jsonWithTypeRegex = /```json\n([\s\S]*?)\n```/;
            const jsonWithTypeMatch = content.match(jsonWithTypeRegex);
            if (jsonWithTypeMatch && jsonWithTypeMatch[1]) {
                const jsonString = jsonWithTypeMatch[1].replace(/"/g, '"').replace(/"/g, '"').trim();
                try {
                    return JSON.parse(jsonString);
                } catch (error) {
                    console.error("Error parsing JSON:", error);
                    return null;
                }
            }

            // 匹配不包含 JSON 类型标记的 Markdown 代码块
            const jsonWithoutTypeRegex = /```\n([\s\S]*?)\n```/;
            const jsonWithoutTypeMatch = content.match(jsonWithoutTypeRegex);
            if (jsonWithoutTypeMatch && jsonWithoutTypeMatch[1]) {
                const jsonString = jsonWithoutTypeMatch[1].replace(/"/g, '"').replace(/"/g, '"').trim();
                try {
                    return JSON.parse(jsonString);
                } catch (error) {
                    console.error("Error parsing JSON:", error);
                    return null;
                }
            }

            // 匹配不包含在 Markdown 代码块中的 JSON 字符串
            try {
                return JSON.parse(content.trim());
            } catch (error) {
                alert("JSON格式错误:\n" + content.trim())
                console.error("Error parsing JSON:", error);
                return null;
            }
        }



        const handleStep0 = () => {
            step.value = 1
        }

        const handleStep1 = () => {
            step.value = 2
        }

        const handlePreview = () => {
            step.value = 3
            content.value = '# ' + form.value.title + "\n\n"
            console.log(form.value.list)
            for (var index in form.value.list) {
                try {
                    var cur_content = form.value.list[index].content
                    var title_icon = form.value.list[index].level == "1" ? "##" : "###"
                    var cur_images_arr = []
                    var cur_images_content = ""
                    if (form.value.list[index].images != null) {
                        cur_images_arr = form.value.list[index].images
                        for (var image_index in cur_images_arr) {
                            cur_images_content += "\n![image](" + cur_images_arr[image_index] + ")"
                        }
                    }

                    if (cur_content) {
                        content.value = `
${content.value}

${title_icon} ${form.value.list[index].index} ${form.value.list[index].title}

${cur_content}${cur_images_content}
                        `
                    }
                } catch (err) {
                    console.log(err)
                }
            }
        }

        return {
            form,
            loading,
            step,
            types,
            styles,
            models,
            content,
            showDialogTable,
            articles,
            DocumentCopy,
            EditPen,
            Checked,
            Delete,
            Picture,
            DateInfo,
            handleInit,
            handleStep0,
            handleStep1,
            handleStart,
            handleStartItem,
            handleDrawItem,
            handleResetList,
            handlePreview,
            handleStopLoading,
            handleSetNewArchive,
            handleCopyChat,
            handleEditArticle,
            handleDeleteArchive
        }
    }
}
</script>