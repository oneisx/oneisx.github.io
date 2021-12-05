module.exports = {
    title: "oneisx's blog",
    description: "oneisx's blog about computer technology",
    author: "oneisx",
    lang: "zh-cn",
    plugins: [
        "-lunr", "-search", "search-pro",
        "custom-favicon",
        "back-to-top-button",
        "expandable-chapters",
        "chapter-fold",
        "code",
        // "code-optimize",
        "highlight", 
        // "prism",  // -highlight
        "splitter",
        "intopic-toc",
        // "highlight-code",
        "tbfed-pagefooter",
        "-sharing",
        "sharing-plus",
        "donate",
        "github",
        "hide-element",
        "auto-scroll-table",
    ],
    pluginsConfig: {
        // "code": {
        //     "copyButtons": true
        // },
        // "code-optimize": {
        //     "copyButtons": true,
        //     "showLines": true
        // },
        "favicon": "/imagessss/favicon.ico",
        "intopic-toc": {
            "label": "CONTENTS",
            "selector": ".markdown-section h1, .markdown-section h2, .markdown-section h3, .markdown-section h4, .markdown-section h5, .markdown-section h6",
            "mode": "nested",
            "maxDepth": 3,
            "isCollapsed": true,
            "isScrollspyActive": true,
            "visible": true,
        },
        "tbfed-pagefooter": {
            "copyright": "Copyright © itoak@qq.com 2020",
            "modify_label": "修订时间：",
            "modify_format": "YYYY-MM-DD HH:mm:ss"
        },
        "sharing": {
            "douban": true,
            "facebook": true,
            "google": true,
            "pocket": false,
            "qq": true,
            "qzone": true,
            "twitter": true,
            "weibo": true,
            "all": [
                "qq", "qzone","viber","whatsapp",
                "douban", "facebook", "google", "instapaper", "linkedin",
                "messenger","twitter", "weibo"
            ]
        },
        /**"donate": {
            "wechat": "/images/wechat_payment.jpeg",
            "alipay": "/images/ali_payment.jpeg",
            "title": "",
            "button": "赏",
            "alipayText": "支付宝打赏",
            "wechatText": "微信打赏"
        },**/
        "github": {
            "url": "https://github.com/oneisx"
        },
        "hide-element": {
            "elements": [".gitbook-link"]
        },
    },
    variables: {
    },
};
