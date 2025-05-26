/**
 * 另一个落地页主题
 */
const CONFIG = {
  // 默认只展示Logo文字，如果设置了logo图片，会在文字左侧显示图标
  STARTER_LOGO: '', // 普通logo图片 示例：/images/starter/logo/logo.svg
  STARTER_LOGO_WHITE: '', // 透明底浅色logo 示例： /images/starter/logo/logo-white.svg

  // MENU ， 菜单部分不在此处配置，请在Notion数据库中添加MENU

  // 英雄区块导航
  STARTER_HERO_ENABLE: true, // 开启英雄区
  STARTER_HERO_TITLE_1: '破竹投资课堂', // 英雄区文字
  STARTER_HERO_TITLE_2: '树财经思维，做投资实操。', // 英雄区文字
  // 英雄区两个按钮，如果TEXT留空则隐藏按钮
  STARTER_HERO_BUTTON_1_TEXT: '开始学习', // 英雄区按钮
  STARTER_HERO_BUTTON_1_URL:
    'https://www.pozhu.app', // 英雄区按钮
  STARTER_HERO_BUTTON_2_TEXT: '联系我们', // 英雄区按钮
  STARTER_HERO_BUTTON_2_URL: 'https://work.weixin.qq.com/kfid/kfce78726ce63a87ede', // 英雄区按钮
  STARTER_HERO_BUTTON_2_ICON: '/images/starter/wechat.png', // 英雄区按钮2的图标，不需要则留空

  // 英雄区配图，如需隐藏，改为空值即可 ''
  STARTER_HERO_PREVIEW_IMAGE: '/images/starter/hero/hero-image.png', // 产品预览图 ，默认读取public目录下图片
  STARTER_HERO_BANNER_IMAGE: '', // hero区下方的全宽图

  // 顶部右侧导航暗流
 // STARTER_NAV_BUTTON_1_TEXT: 'Sign In',
//  STARTER_NAV_BUTTON_1_URL: '/sign-in',

//  STARTER_NAV_BUTTON_2_TEXT: 'Sign Up',
//  STARTER_NAV_BUTTON_2_URL: '/sign-up',

  // 特性区块
  STARTER_FEATURE_ENABLE: true, // 特性区块开关
  STARTER_FEATURE_TITLE: '产品服务', // 特性
  STARTER_FEATURE_TEXT_1: '破竹投资课堂', // 特性
  STARTER_FEATURE_TEXT_2:
    '破竹APP于2017年上线，已服务且影响了超2000万高知用户。是国内领先的地产/知识付费IP运营团队，上市公司背景，成功打造50+细分行业头部大IP，全公司200+人All in短视频、私域运营，操盘私域用户量过百万。深耕自媒体IP运营、企业品牌矩阵化运营6年。', // 特性

  STARTER_FEATURE_1_TITLE_1: '财富圈', // 特性1
  STARTER_FEATURE_1_TEXT_1: '「财富圈」破竹原创的多维度及时互动产品，包含研究随笔、音频课程、视频讲堂、私密直播。', // 特性1
  STARTER_FEATURE_1_BUTTON_TEXT: '了解更多', // 特性1
  STARTER_FEATURE_1_BUTTON_URL: 'https://pc.pozhu.com/all/15453989', // 特性1

  STARTER_FEATURE_2_TITLE_1: '大咖课', // 特性2
  STARTER_FEATURE_2_TEXT_1: '「大咖课」满足用户投资痛点需求的私密直播产品', // 特性2
  STARTER_FEATURE_2_BUTTON_TEXT: '了解更多', // 特性2
  STARTER_FEATURE_2_BUTTON_URL:
    'https://pc.pozhu.com/all/17851140', // 特性2

  STARTER_FEATURE_3_TITLE_1: 'SVIP', // 特性3
  STARTER_FEATURE_3_TEXT_1: '「SVIP」覆盖破竹App大量权益，音频畅听、直播免费、高端社群、专属客服、线下福利等。', // 特性3
  STARTER_FEATURE_3_BUTTON_TEXT: '了解更多', // 特性3
  STARTER_FEATURE_3_BUTTON_URL: 'https://pc.pozhu.com/all/14308723/26378382', // 特性3

 STARTER_FEATURE_4_TITLE_1: '财经专家', // 特性4
 STARTER_FEATURE_4_TEXT_1: '汇聚头部财经学者，成为用户认知升级的外脑。', // 特性4
 STARTER_FEATURE_4_BUTTON_TEXT: '了解更多', // 特性4
 STARTER_FEATURE_4_BUTTON_URL: 'https://www.pozhu.com//#zhuanjia', // 特性4

  // 首页ABOUT区块
  STARTER_ABOUT_ENABLE: true, // ABOUT区块开关
  STARTER_ABOUT_TITLE: '一站式投资课程学习',
  STARTER_ABOUT_TEXT:
    '破竹的愿景是帮助所有投资者，不论是投资小白，还是专业投资者。 <br /> <br /> 在这里都能有所收获。',
  STARTER_ABOUT_BUTTON_TEXT: '开始学习',
  STARTER_ABOUT_BUTTON_URL: 'https://pc.pozhu.com',
  STARTER_ABOUT_IMAGE_1: '/images/starter/about/about-image-01.jpg',
  STARTER_ABOUT_IMAGE_2: '/images/starter/about/about-image-02.jpg',
  STARTER_ABOUT_TIPS_1: '2000W+',
  STARTER_ABOUT_TIPS_2: '累计服务',
  STARTER_ABOUT_TIPS_3: '高知用户首选',

  // 首页价格区块
  STARTER_PRICING_ENABLE: false, // 价格区块开关
  STARTER_PRICING_TITLE: '价格表',
  STARTER_PRICING_TEXT_1: '很棒的定价计划',
  STARTER_PRICING_TEXT_2:
    '我们制定了灵活的付费模式，您可以按需选择。（NotionNext免费开源，这里仅演示产品订阅付费功能，请勿下单购买！）',

  STARTER_PRICING_1_TITLE: '入门版',
  STARTER_PRICING_1_PRICE: '19.9',
  STARTER_PRICING_1_PRICE_CURRENCY: '$',
  STARTER_PRICING_1_PRICE_PERIOD: '每月',
  STARTER_PRICING_1_HEADER: '功能点',
  STARTER_PRICING_1_FEATURES: '所有的主题,免费更新,帮助手册', // 英文逗号隔开
  STARTER_PRICING_1_BUTTON_TEXT: '立即购买',
  STARTER_PRICING_1_BUTTON_URL:
    'https://tangly1024.lemonsqueezy.com/checkout/buy/c1a38a65-362e-44c5-8065-733fee39eb54',

  STARTER_PRICING_2_TAG: '推荐',
  STARTER_PRICING_2_TITLE: '基础版',
  STARTER_PRICING_2_PRICE: '39.9',
  STARTER_PRICING_2_PRICE_CURRENCY: '$',
  STARTER_PRICING_2_PRICE_PERIOD: '每月',
  STARTER_PRICING_2_HEADER: '功能点',
  STARTER_PRICING_2_FEATURES: '包含入门版,项目源码,内部社群,技术咨询,SEO优化', // 英文逗号隔开
  STARTER_PRICING_2_BUTTON_TEXT: '立即购买',
  STARTER_PRICING_2_BUTTON_URL:
    'https://tangly1024.lemonsqueezy.com/checkout/buy/590ad70a-c3b7-4caf-94ec-9ca27bde06d4',

  STARTER_PRICING_3_TITLE: '高级版',
  STARTER_PRICING_3_PRICE: '59.9',
  STARTER_PRICING_3_PRICE_CURRENCY: '$',
  STARTER_PRICING_3_PRICE_PERIOD: '每月',
  STARTER_PRICING_3_HEADER: '功能点',
  STARTER_PRICING_3_FEATURES: '包含基础版,功能定制开发', // 英文逗号隔开
  STARTER_PRICING_3_BUTTON_TEXT: '立即购买',
  STARTER_PRICING_3_BUTTON_URL:
    'https://tangly1024.lemonsqueezy.com/checkout/buy/df924d66-09dc-42a4-a632-a6b0c5cc4f28',

  // 首页用户测评区块
  STARTER_TESTIMONIALS_ENABLE: true, // 测评区块开关
  STARTER_TESTIMONIALS_TITLE: '用户反馈',
  STARTER_TESTIMONIALS_TEXT_1: '我们的用户怎么说',
  STARTER_TESTIMONIALS_TEXT_2:
    '数千万投资者的选择，在破竹，树财经思维，做投资实操。',
  STARTER_TESTIMONIALS_STAR_ICON: '/images/starter/testimonials/icon-star.svg', // 评分图标

  // 这里不支持CONFIG和环境变量，需要一一修改此处代码。
  STARTER_TESTIMONIALS_ITEMS: [
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        '感谢破竹，课程体系丰富，老师也很专业。 ',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F22de3fcb-d90d-4271-bc01-f815f476122b%2F4FE0A0C0-E487-4C74-BF8E-6F01A27461B8-14186-000008094BC289A6.jpg?table=collection&id=a320a2cc-6ebe-4a8d-95cc-ea94e63bced9&width=200',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'Ryan_G',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '投资小白',
      STARTER_TESTIMONIALS_ITEM_URL: 'https://pozhu.cc'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        '很喜欢破竹APP的课程体系设计，让我对自己的投资体系更有把握。',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0d33d169-f932-41ff-ac6b-88a923c08e02%2F%25E5%25A4%25B4%25E5%2583%258F.jfif?table=collection&id=7787658d-d5c0-4f34-8e32-60c523dfaba3&width=400',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: '阿森',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '实战经验 3 年的交易员',
      STARTER_TESTIMONIALS_ITEM_URL: 'https://pc.pozhu.com'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        '经过一个假期的努力，终于把天行总的行业课看完了。干货满满。对未来更有确定性了。',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F6c096b44-beb9-48ee-8f92-1efdde47f3a3%2F338962f1-d352-49c7-9a1b-746e35a7005c%2Fhf.png?table=block&id=ce5a48a9-d77a-4843-a3d9-a78cd4f794ce&spaceId=6c096b44-beb9-48ee-8f92-1efdde47f3a3&width=100&userId=27074aef-7216-41ed-baef-d9b53addd870&cache=v2',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'DWIND',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '自学投资小达人',
      STARTER_TESTIMONIALS_ITEM_URL: 'https://zhouzhou.notion.site/pozhu'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        '感谢提供破竹这么好的平台，之前股票一直瞎投乱买，赔了不少钱。这里的课程设计对新手非常友好，逐渐完善了投资的知识，学费也不贵。',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd52f6766-3e32-4c3d-8529-46e1f214360f%2Ffavicon.svg?table=collection&id=7d76aad5-a2c4-4d9a-887c-c7913fae4eed&width=400',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: '付升迪',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '多年亏损的散户',
      STARTER_TESTIMONIALS_ITEM_URL: 'https://pc.pozhu.com'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        '非常感谢向子声老师的财富圈内容，极大的丰富和完善了我的投资体验与投资技能，破竹 7 年了，时间真快。',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fafb21381-f51b-4fd0-9998-800dbeb64dbe%2Favatar.png?table=block&id=195935d2-0d8d-49fc-bd81-1db42ee50840&spaceId=6c096b44-beb9-48ee-8f92-1efdde47f3a3&width=100&userId=27074aef-7216-41ed-baef-d9b53addd870&cache=v2',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: '安乔',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '破竹 5 年老用户',
      STARTER_TESTIMONIALS_ITEM_URL: 'https://appxwe1r6658464.elink.ai'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT: '听很久了，不论是宏观分析还是具体的技术操作都很受益，太感谢破竹了',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe4f391d7-7d65-4c05-a82c-c6e2c40f06e4%2Fa2a7641a26b367608c6ef28ce9b7e983_(2).png?table=block&id=a386eb0e-4c07-4b18-9ece-bba4e79ce21c&spaceId=6c096b44-beb9-48ee-8f92-1efdde47f3a3&width=100&userId=27074aef-7216-41ed-baef-d9b53addd870&cache=v2',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: '老胡',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '退休业余投资',
      STARTER_TESTIMONIALS_ITEM_URL: 'https://appxwe1r6658464.elink.ai'
    }
  ],

  //   FAQ 常见问题模块
  STARTER_FAQ_ENABLE: true, // 常见问题模块开关
  STARTER_FAQ_TITLE: '常见问题解答',
  STARTER_FAQ_TEXT_1: '有任何问题吗？请看这里',
  STARTER_FAQ_TEXT_2: '我们收集了常见的用户疑问',

  STARTER_FAQ_1_QUESTION: '1.注册/登录：如何查看学习各位的老师课程？',
  STARTER_FAQ_1_ANSWER:
    '为了保证良好学习体验，建议您下载安装破竹APP，使用微信/手机号登录破竹APP进入【已购】页面查看学习老师课程！   <br /> <br /> 平台包含财富圈、大咖视频课、深研院、音频专栏、小课、投资大学等类型课程，通过音视频、随笔、直播、在线问答等多形式提供丰富内容，通过实操案例+知识体系搭建+政策实时热点解读+实践学习运用，省时高效，帮你实现认知提升，投资框架搭建！',

  STARTER_FAQ_2_QUESTION: '2.财富圈权益：财富圈是什么？有什么内容权益？',
  STARTER_FAQ_2_ANSWER:
    '财富圈是破竹原创的多维度即时互动产品，内容形式包含研究随笔、音频课程、视频讲堂、私密直播、专属社群服务！',

  STARTER_FAQ_3_QUESTION: '3.课程有效期：订阅课程后能听多久？',
  STARTER_FAQ_3_ANSWER:
    '财富圈课程以您选择的实际订阅时长为准！  <br /> <br /> 订阅后，有效期间内您可以免费回看老师圈子已更新的全部内容（随笔/音频/视频/私密直播）！    <br /> <br /> 过期后，您仅可以回看付费订阅期间内更新的内容！',

  STARTER_FAQ_4_QUESTION: '4.消费退款：我在破竹APP消费后可以退款吗？',
  STARTER_FAQ_4_ANSWER:
    '抱歉，破竹APP财富圈课程、SVIP权益订阅等均为虚拟服务，暂不支持退款，请您谅解。    <br /> <br /> 若有疑问，您可以联系我们人工客服电话：0371-5552 9958（工作时间：工作日9:00-18:00）',

  // 团队成员区块
  STARTER_TEAM_ENABLE: true, // 团队成员区块开关
  STARTER_TEAM_TITLE: '大咖团队',
  STARTER_TEAM_TEXT_1: '我们的讲师团队',
  STARTER_TEAM_TEXT_2:
    '破竹专注于投资及教育领域的知识服务平台，先后入驻马光远、管清友、吴小平、郑毓煌、杨德龙、谭雅玲、潘向东、马红漫等知名人士，以音视频课程、直播、问答以及社群的方式向用户解答全球投资、教育、资产配置等方面的问题。',

  // 这里不支持CONFIG和环境变量，需要一一修改此处代码。
  STARTER_TEAM_ITEMS: [
    {
      STARTER_TEAM_ITEM_AVATAR:'/images/starter/team/吴小平.png',
      STARTER_TEAM_ITEM_NICKNAME: '吴小平',
      STARTER_TEAM_ITEM_DESCRIPTION: '知名经济学者、金融投资大V'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/潘向东.png',
      STARTER_TEAM_ITEM_NICKNAME: '潘向东',
      STARTER_TEAM_ITEM_DESCRIPTION: '清华应用经济学博士后、银河证券前首席经济学家'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/管清友.png',
      STARTER_TEAM_ITEM_NICKNAME: '管清友',
      STARTER_TEAM_ITEM_DESCRIPTION: '如是金融研究院院长、民生证券前副总裁'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/杨德龙.png',
      STARTER_TEAM_ITEM_NICKNAME: '杨德龙',
      STARTER_TEAM_ITEM_DESCRIPTION: '前海开源首席经济学家、清华大学金融学院全球金融博士'
    }
  ],

  // 博客文章区块
  STARTER_BLOG_ENABLE: true, // 首页博文区块开关
  STARTER_BLOG_TITLE: '我们的博客',
  STARTER_BLOG_COUNT: 3, // 首页博文区块默认展示前3篇文章
  STARTER_BLOG_TEXT_1: '最近更新',
  STARTER_BLOG_TEXT_2:
    '这里会发布一些公开直播的内容整理。',

  // 联系模块
  STARTER_CONTACT_ENABLE: true, // 联系模块开关
  STARTER_CONTACT_TITLE: '联系我们',
  STARTER_CONTACT_TEXT: '告诉我们您遇到的问题',
  STARTER_CONTACT_LOCATION_TITLE: '我们的位置',
  STARTER_CONTACT_LOCATION_TEXT: '中国, 香港',
  STARTER_CONTACT_EMAIL_TITLE: '我们如何帮助您？',
  STARTER_CONTACT_EMAIL_TEXT: '微信：pozhu33',

  // 嵌入外部表单
  STARTER_CONTACT_MSG_EXTERNAL_URL: 'https://noteforms.com/forms/contact-us-mcsw1b', // 基于NoteForm创建，将留言数据存在Notion中
  //   自定义留言表单，以下几个配置暂时废弃
  //   STARTER_CONTACT_MSG_TITLE: '向我们留言',
  //   STARTER_CONTACT_MSG_NAME: '姓名',
  //   STARTER_CONTACT_MSG_EMAIL: '邮箱地址',
  //   STARTER_CONTACT_MSG_PHONE: '联系电话',
  //   STARTER_CONTACT_MSG_TEXT: '消息内容',
  //   STARTER_CONTACT_MSG_SEND: '发送消息',
  //   STARTER_CONTACT_MSG_THANKS: '感谢您的留言',

  // 合作伙伴的图标
  STARTER_BRANDS_ENABLE: false, // 合作伙伴开关
  STARTER_BRANDS: [
    {
      IMAGE: '/images/starter/brands/graygrids.svg',
      IMAGE_WHITE: '/images/starter/brands/graygrids-white.svg',
      URL: 'https://graygrids.com/',
      TITLE: 'graygrids'
    },
    {
      IMAGE: '/images/starter/brands/lineicons.svg',
      IMAGE_WHITE: '/images/starter/brands/lineicons-white.svg',
      URL: 'https://lineicons.com/',
      TITLE: 'lineicons'
    },
    {
      IMAGE: '/images/starter/brands/uideck.svg',
      IMAGE_WHITE: '/images/starter/brands/uideck-white.svg',
      URL: 'https://uideck.com/',
      TITLE: 'uideck'
    },
    {
      IMAGE: '/images/starter/brands/ayroui.svg',
      IMAGE_WHITE: '/images/starter/brands/ayroui-white.svg',
      URL: 'https://ayroui.com/',
      TITLE: 'ayroui'
    },
    {
      IMAGE: '/images/starter/brands/tailgrids.svg',
      IMAGE_WHITE: '/images/starter/brands/tailgrids-white.svg',
      URL: '"https://tailgrids.com/',
      TITLE: 'tailgrids'
    }
  ],

  STARTER_FOOTER_SLOGAN: '树财经思维，做投资实操。',

  // 页脚三列菜单组
  STARTER_FOOTER_LINK_GROUP: [
    {
      TITLE: '关于我们',
      LINK_GROUP: [
        { TITLE: '官方主页', URL: '/#home' },
        { TITLE: '操作文档', URL: 'https://pozhu.freevip.vip/about' },
        {
          TITLE: '热门资讯',
          URL: 'https://www.pozhu.app/news'
        },
        {
          TITLE: '合作申请',
          URL: 'https://www.pozhu.app/contact'
        }
      ]
    },
    {
      TITLE: '功能特性',
      LINK_GROUP: [
        {
          TITLE: '财富圈',
          URL: 'https://pc.pozhu.com/all/15453989'
        },
        {
          TITLE: '大咖课',
          URL: 'https://pc.pozhu.com/all/17851140'
        },
        { TITLE: 'SVIP', URL: 'https://pc.pozhu.com/all/14308723/26378382' }
      ]
    },
    {
      TITLE: '友情链接',
      LINK_GROUP: [
        {
          TITLE: '米诺基金',
          URL: 'https://www.minuo.com/'
        },
        {
          TITLE: '破竹财经导航',
          URL: 'https://www.pozhu.cc'
        },
        {
          TITLE: 'Elink店铺',
          URL: 'https://https://appxwe1r6658464.elink.ai'
        }
      ]
    }
  ],

  STARTER_FOOTER_BLOG_LATEST_TITLE: '最新文章',

  STARTER_FOOTER_PRIVACY_POLICY_TEXT: '隐私政策',
  STARTER_FOOTER_PRIVACY_POLICY_URL: '/privacy-policy',

  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_TEXT: '法律声明',
  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_URL: '/legacy-notice',

  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_TEXT: '服务协议',
  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_URL: '/terms-of-use',

  // 404页面的提示语
  STARTER_404_TITLE: '我们似乎找不到您要找的页面。',
  STARTER_404_TEXT: '抱歉！您要查找的页面不存在。可能已经移动或删除。',
  STARTER_404_BACK: '回到主页',

  // 页面底部的行动呼吁模块
  STARTER_CTA_ENABLE: true,
  STARTER_CTA_TITLE: '你还在等待什么呢？',
  STARTER_CTA_TITLE_2: '现在开始吧',
  STARTER_CTA_DESCRIPTION:
    '访问我们的课程商店，挑选您喜欢的课程，开始您的投资之旅吧！',
  STARTER_CTA_BUTTON: true, // 是否显示按钮
  STARTER_CTA_BUTTON_URL:
    'https://pc.pozhu.com',
  STARTER_CTA_BUTTON_TEXT: '开始学习',

  STARTER_POST_REDIRECT_ENABLE: true, // 默認開啟重定向
  STARTER_POST_REDIRECT_URL: 'https://www.pozhu.app', // 重定向域名
  STARTER_NEWSLETTER: process.env.NEXT_PUBLIC_THEME_STARTER_NEWSLETTER || false // 是否开启邮件订阅 请先配置mailchimp功能 https://docs.tangly1024.com/article/notion-next-mailchimp
}
export default CONFIG
