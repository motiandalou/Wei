// 项目
document.querySelector("#dataListProject").addEventListener("click", (e) => {
  // e.target.closest: 获取点击元素外层的元素
  const el = e.target.closest("[id^='project']");
  if (!el) return;

  const id = el.id;

  // 项目--中文
  const modalContent_zh = {
    project01: `
      <div class="title">One2data(React)</div>
      <span class="label">Vue</span>
      <span class="label">ElementUI</span>
      <span class="label">WebSocket</span>
      <span class="label">Webpack</span>
      <div class="card-box">
        <p class="card-left"></p>
        <p class="card-right">
          <span class="symbol">"</span>
          <span>公司自研项目，提供单机/集群备份与恢复，面向医院、金融等行业客户。</span>
        </p>
      </div>
    `,
    project02: `
      <div class="title">One2data(Vue2)</div>
      <span class="label">Vue</span>
      <span class="label">ElementUI</span>
      <span class="label">WebSocket</span>
      <span class="label">Webpack</span>
      <div class="card-box">
        <p class="card-left"></p>
        <p class="card-right">
          <span class="symbol">"</span>
          <span>Vue 版本实现的数据备份/恢复项目。</span>
        </p>
      </div>
    `,
    project03: `
      <div class="title">谷歌扩展插件(image-grabber)</div>
      <span class="label">Vue</span>
      <span class="label">ElementUI</span>
      <span class="label">WebSocket</span>
      <span class="label">Webpack</span>
      <div class="card-box">
        <p class="card-left"></p>
        <p class="card-right">
          <span class="symbol">"</span>
          <span>一键下载当前页面所有图片的浏览器插件。</span>
        </p>
      </div>
    `,
    project04: `
      <div class="title">VSCODE主题插件(Pink Magic)</div>
      <span class="label">Vue</span>
      <span class="label">ElementUI</span>
      <span class="label">WebSocket</span>
      <span class="label">Webpack</span>
      <div class="card-box">
        <p class="card-left"></p>
        <p class="card-right">
          <span class="symbol">"</span>
          <span>一款主打赛博朋克荧光色的 VS Code 粉色主题插件。</span>
        </p>
      </div>
    `,
    project05: `
      <div class="title">NPM包(dragmate)</div>
      <span class="label">NPM</span>
      <span class="label">dragmate</span>
      <div class="card-box">
        <p class="card-left"></p>
        <p class="card-right">
          <span class="symbol">"</span>
          <span>通用拖拽库，适用于 React / Vue / Angular / 原生 HTML。</span>
        </p>
      </div>
    `,
    project06: `
      <div class="title">卖座电影</div>
      <span class="label">Vue2</span>
      <div class="card-box">
        <p class="card-left"></p>
        <p class="card-right">
          <span class="symbol">"</span>
          <span>一个移动端购票平台，覆盖电影、影院、我的等模块。</span>
        </p>
      </div>
    `,
    project07: `
      <div class="title">公司内部大屏项目</div>
      <span class="label">Vue</span>
      <span class="label">chart.js</span>
      <div class="card-box">
        <p class="card-left"></p>
        <p class="card-right">
          <span class="symbol">"</span>
          <span>从0到1主导开发，负责重构设计与对接多方需求。</span>
        </p>
      </div>
    `,
    project08: `
      <div class="title">东航内部官网</div>
      <span class="label">HTML</span>
      <span class="label">CSS</span>
      <span class="label">JavaScript</span>
      <div class="card-box">
        <p class="card-left"></p>
        <p class="card-right">
          <span class="symbol">"</span>
          <span>公司员工使用的新闻与公告内部门户网站。</span>
        </p>
      </div>
    `,
    project09: `
      <div class="title">聚合后台管理</div>
      <span class="label">Vue</span>
      <span class="label">ElementUI</span>
      <div class="card-box">
        <p class="card-left"></p>
        <p class="card-right">
          <span class="symbol">"</span>
          <span>对接客户的后台管理项目，基于 React 开发。</span>
        </p>
      </div>
    `,
    project10: `
      <div class="title">瀚银支付后台管理</div>
      <span class="label">Vue</span>
      <span class="label">ElementUI</span>
      <div class="card-box">
        <p class="card-left"></p>
        <p class="card-right">
          <span class="symbol">"</span>
          <span>实时交易数据可视化展示在公司大屏系统上。</span>
        </p>
      </div>
    `,
  };

  // 项目--英文
  const modalContent_en = {
    project01: `
      <div class="title">One2data(React)</div>
      <span class="label">React</span>
      <span class="label">ElementUI</span>
      <span class="label">WebSocket</span>
      <span class="label">Webpack</span>
      <div class="card-box">
        <p class="card-left"></p>
        <p class="card-right">
          <span class="symbol">"</span>
          <span>A self-developed project by the company, providing single-machine/cluster backup and recovery, targeting customers in industries such as hospitals and finance.</span>
        </p>
      </div>
    `,
    project02: `
      <div class="title">One2data(Vue2)</div>
      <span class="label">Vue</span>
      <span class="label">ElementUI</span>
      <span class="label">WebSocket</span>
      <span class="label">Webpack</span>
      <div class="card-box">
        <p class="card-left"></p>
        <p class="card-right">
          <span class="symbol">"</span>
          <span>A data backup/recovery project implemented with Vue.</span>
        </p>
      </div>
    `,
    project03: `
      <div class="title">Google Extension Plugin(image-grabber)</div>
      <span class="label">Vue</span>
      <span class="label">ElementUI</span>
      <span class="label">WebSocket</span>
      <span class="label">Webpack</span>
      <div class="card-box">
        <p class="card-left"></p>
        <p class="card-right">
          <span class="symbol">"</span>
          <span>A browser plugin for downloading all images on the current page with one click.</span>
        </p>
      </div>
    `,
    project04: `
      <div class="title">VSCODE Theme Plugin(Pink Magic)</div>
      <span class="label">Vue</span>
      <span class="label">ElementUI</span>
      <span class="label">WebSocket</span>
      <span class="label">Webpack</span>
      <div class="card-box">
        <p class="card-left"></p>
        <p class="card-right">
          <span class="symbol">"</span>
          <span>A VS Code pink theme plugin featuring cyberpunk neon colors.</span>
        </p>
      </div>
    `,
    project05: `
      <div class="title">NPM Package(dragmate)</div>
      <span class="label">NPM</span>
      <span class="label">dragmate</span>
      <div class="card-box">
        <p class="card-left"></p>
        <p class="card-right">
          <span class="symbol">"</span>
          <span>A general-purpose drag-and-drop library suitable for React/Vue/Angular/native HTML.</span>
        </p>
      </div>
    `,
    project06: `
      <div class="title">Movie Ticketing Platform</div>
      <span class="label">Vue2</span>
      <div class="card-box">
        <p class="card-left"></p>
        <p class="card-right">
          <span class="symbol">"</span>
          <span>A mobile ticketing platform covering movies, cinemas, and personal modules.</span>
        </p>
      </div>
    `,
    project07: `
      <div class="title">Internal Company Dashboard Project</div>
      <span class="label">Vue</span>
      <span class="label">chart.js</span>
      <div class="card-box">
        <p class="card-left"></p>
        <p class="card-right">
          <span class="symbol">"</span>
          <span>From 0 to 1, I led the development, responsible for redesigning and interfacing with multiple parties' requirements.</span>
        </p>
      </div>
    `,
    project08: `
      <div class="title">Internal Company Website</div>
      <span class="label">HTML</span>
      <span class="label">CSS</span>
      <span class="label">JavaScript</span>
      <div class="card-box">
        <p class="card-left"></p>
        <p class="card-right">
          <span class="symbol">"</span>
          <span>An internal company website for employees to access news and announcements.</span>
        </p>
      </div>
    `,
    project09: `
      <div class="title">Backend Management for Aggregation</div>
      <span class="label">Vue</span>
      <span class="label">ElementUI</span>
      <div class="card-box">
        <p class="card-left"></p>
        <p class="card-right">
          <span class="symbol">"</span>
          <span>A backend management project for customers, developed with React.</span>
        </p>
      </div>
    `,
    project10: `
      <div class="title">Backend Management for HanYin Payment</div>
      <span class="label">Vue</span>
      <span class="label">ElementUI</span>
      <div class="card-box">
        <p class="card-left"></p>
        <p class="card-right">
          <span class="symbol">"</span>
          <span>Real-time transaction data visualization displayed on the company's dashboard system.</span>
        </p>
      </div>
    `,
  };

  // 当前语言
  const userLang = localStorage.getItem("language") || "en";
  let modal = {};
  // 切换中文/英文
  switch (userLang) {
    // 英文
    case "en":
      modal = modalContent_en;
      break;
    // 中文
    case "zh":
      modal = modalContent_zh;
      break;

    default:
      break;
  }
  if (modal[id]) {
    // 渲染
    showModal(modal[id]);
    // 关闭弹窗
    setTimeout(() => {
      document.getElementById("modal-close").onclick = hideModal;
    });
  }
});

// 博客
document.querySelector("#dataListBlog").addEventListener("click", (e) => {
  // e.target.closest: 获取点击元素外层的元素
  const el = e.target.closest("[id^='blog']");
  if (!el) return;

  const id = el.id;

  const modalContent_zh = {
    blog01: `
      <div class="title">控制台打印公司名字</div>
      <span class="label">Vue2</span>
      <span class="label">ElementUI</span>
      <span class="label">Console.log</span>
      <div class="modal-body-content">
        <p>啰嗦的话:</p>
        <p>平时开发的产品,自己公司的产品,可以在控制台里面打印一些信息,比如公司 logo,校园招聘之类的,针对性还是蛮强的,一般的用户是不知道打开控制台的,它甚至都不知道控制台,能打开的一般都是搞技术的.招聘啥的,那对用户群体就比较精准了,比如下面这张百度的校园招聘.</p>
        </p>
        <img style="width:100%;margin-top:0.1408rem;border-radius: 0.1408rem;" src="https://motiandalou.github.io/images/31.png" />
        <p>下面介绍如何在控制台制作一个公司 logo 以及你想要表达的信息,就以上面这张图片的百度举例吧.</p>

        <strong style="display: block;margin-top:0.0704rem">第一步:</strong>
        <p>打开网站</p>
        <a style="font-size:0.15rem" href="https://patorjk.com/software/taag/#p=display&f=Graffiti&t=Type%20Something%20">https://patorjk.com/software/taag/#p=display&f=Graffiti&t=Type%20Something%20</a>
        <img style="width:100%;margin-top:0.1408rem;border-radius: 0.1408rem;" src="https://motiandalou.github.io/images/32.png"/>

        <strong style="display: block;margin-top:0.0704rem">第二步:</strong>
        <p>在电脑桌面新建一个空的 word 文档,将在网站生成的 baidu 字母复制出来,然后粘贴在 word 里面 –> Ctrl + H 键</p>

        <p>\ 替换成 \\ (转义)</p>
        <p>替换成 替换成 ‘(或者在前面加个\防止转义)</p>
        <img style="width:100%;margin-top:0.1408rem;border-radius: 0.1408rem;" src="https://motiandalou.github.io/images/33.png"/>
        <p>ps: 放在 console.log 里面,我这边安装了 vetur 插件,无法转义会报错.手动改一下就行了</p>

        <strong style="display: block;margin-top:0.0704rem">第三步:</strong>
        <p>将 word 替换好的字母,放在控制台显示即可.</p>
        <pre><code>
        console.log("
          _           _     _ 
        | |         (_)   | | 
        | |__   __ _ _  __| |_   _ 
        | '_ \\  / _\` | /| _\` | | | | 
        | |_) | (_| | | (_| | |_| | 
        |_.__/ \\__,_|_|\\__,_|\\__,_| 

        这是一个最好的时代，
        科技的发展给予了每个人创造价值的可能性；
        这也是一个最充满想象的时代，
        每一位心怀梦想的人，终会奔向星辰大海。
        百度与你们一起仰望星辰大海，携手共筑未来！");

        console.log('%c百度2023校园招聘简历投递:', 'color: red', 'https://talent.baidu.com/jobs/list');
        </code></pre>

       <img style="width:100%;margin-top:0.1408rem;" src="https://motiandalou.github.io/images/34.png"/>
      </div>
    `,
    blog02: `
      <div class="title">主题换肤</div>
      <span class="label">Vue2</span>
      <span class="label">ElementUI</span>
      <span class="label">Theme</span>
      <div class="modal-body-content">
        <p>主题换肤,目前为止,实现的方法有很多,不管方法怎么变化,基于我目前水平,我认为就两点</p>
        <p>第一点: 你要为每个主题写一个单独的 css 文件</p>
        <p>第二点: 你要在什么时候引入.</p>
        <p style="margin-top:0.0704rem">实现这两个,换肤功能也就实现了.其它的就是不同方法的加载用户体验的问题了</p>
        <p>第一点没什么优化的空间,第二点,引入的时间可以变化变化</p>

        <p style="margin-top:0.0704rem">啰嗦的话: 做该功能调研的时候,我也看了一些目前基于 vue 新的实现方式,但是我不确定兼容性,因为 vue2/3 要求的浏览器版本就已经比较高了.我个人的话不推荐,还是采用工程化的传统方法.换肤功能并不难,主要是麻烦,尤其是你项目如果开发到 70% 的情况下,再做这个功能,那就比较难受了.</p>

        <strong style="display: block;margin-top:0.0704rem">第一种实现方式: 牺牲首屏加载时间,进入首页的时候就将所有的换肤的 css 文件加载,切换的时候就很快.</strong>
        <p>1. 实现思想: 每次切换主题,直接把 body 标签的 class 换成对应的主题名称,相当于直接做了样式覆盖</p>

        <div style="width:100%;background:#111;color:#ccc;border-radius:0.1408rem;margin-top:0.1408rem">
          <pre><code>
            /* 主题--白 */
            body.day .box {
              color: #f90;
              background: #fff;
            }
            /* 主题--黑 */
            body.dark .box {
              color: #eee;
              background: #333;
            }
            .box {
              width: 100px;
              height: 100px;
              border: 1px solid #000;
            }
            &lt;/style&gt;

            &lt;div class="box"&gt;
              &lt;p&gt;hello&lt;/p&gt;
            &lt;/div&gt;

            &lt;p&gt;
              选择样式：
              &lt;button onclick="change('day')"&gt;day&lt;/button&gt;
              &lt;button onclick="change('dark')"&gt;dark&lt;/button&gt;
            &lt;/p&gt;

            function change(theme) {
              document.body.className = theme;
            }
        </code></pre>

        </div>
      

        <strong style="display: block;margin-top:0.0704rem">第二种实现方式: 牺牲切换时间,首屏加载就小了一部分压力.按需加载文件,比如我要蓝色就加载蓝色主题的文件,黑色主题的就要黑色主题的.</strong>
        <p>1. 啰嗦的话: 这个方法我看张鑫旭的博客他介绍过,比如我们没用 vue,react 这些框架之前,写一个 index.html 文件,html 放在 body 标签 里面,js 放在 script 标签 里面,css 通过 link 标签 引入( link 标签是一个引入外部资源的标签 ).</p>
        <p>2. 实现思想: 创建一个 link 标签,切换主题的时候,动态切换 link 标签的 href 属性.即可实现该方式.</p>


        <div style="width:100%;background:#111;color:#ccc;border-radius:0.1408rem;margin-top:0.1408rem">
           <pre><code>
            function writeLink(id = 'linkCss', href) {
                const oldStyleDom = document.getElementById(id)
                const linkDom = document.createElement('link')
                linkDom.href = href
                linkDom.rel = "stylesheet"
                linkDom.type = "text/css"
                linkDom.id = id
                oldStyleDom ? document.head.replaceChild(linkDom, oldStyleDom) : document.head.appendChild(linkDom)
            }
           </code></pre>
        </div>
        

        <strong style="display: block;margin-top:0.0704rem">第三种实现方式: 使用 elementUI 和 AntDesign /</strong>
        <p>1. 现在我们做项目,大部分都是使用 elementUI 和 AntDesign 这些样式组件,搭配 vue 或者 react 做</p>
        <p>2. 实现思想: 白/黑主题,各写一个 css 文件,里面定义各个用功能划分的颜色,在具体的组件里面使用 var(…).</p>
        <p>3. 底层实现原理: 各个组件去遍历对应的 css 文件,找到同名的颜色变量名称,对应显示.</p>

        <img style="width:100%;margin-top:0.1408rem;" src="https://motiandalou.github.io/images/29.png"/>

        <img style="width:100%;margin-top:0.1408rem;" src="https://motiandalou.github.io/images/30.png"/>

        <strong style="display: block;margin-top:0.0704rem">第四种实现方式: vue3 的新方式</strong>
        <p>1. 这个方式虽然有局限性(只能在 vue 使用),但是提供了也挺好的,相当于给 css 写活了,可以自己全局封装一下,用变量控制.不然像 vue2 或者其它框架没有提供这个方法,只能写原生 js,来动态控制了.</p>
        <p>2. 实现思想: 其实就是给元素绑定 CSS 变量，在绑定的数据更新时调用 CSSStyleDeclaration.setProperty 更新 CSS 变量值.</p>

          <div style="width:100%;background:#111;color:#ccc;border-radius:0.1408rem;margin-top:0.1408rem">
           <pre><code>
              &lt;script setup&gt;
                const theme = {
                  color: 'red'
                }
              &lt;/script&gt;

              &lt;template&gt;
                &lt;p&gt;hello&lt;/p&gt;
              &lt;/template&gt;

              &lt;style scoped&gt;
                p {
                  color: v-bind('theme.color');
                }
              &lt;/style&gt;
          </code></pre>
        </div>

         <p style="margin-top:0.0704rem">结语: 新的技术出来,还有新的方法(比如: SCSS + mixin + 类名切换 / CSS 变量+动态 setProperty),没有最好,只有最适合.</p>
      </div>
    `,
    blog03: `
      <div class="title">RN 环境搭建,项目创建,开发中遇到的坑,打包,发布</div>
      <span class="label">React Native</span>
      <div class="modal-body-content">
        <p class='mt20'>背景: 公司自研的容灾项目,有配套的小程序和 APP</p>

        <strong style="display: block;margin-top:0.0704rem">1. 环境搭建</strong>

        <p class='mt20'>(1). 前提: 需要一个代理,用来科学上网,因为有外国的网站下载,会比较慢,我用的代理,还是比较快的,上个公司薅的.哈哈, 1 个小时就全部下的差不多了.</p>
        <p>(2). 必需的三个软件: Node(版本大于等于 14) , JDK(版本 1.8 及其以上) , Android Studio(国外网站)</p>
        <p>(3). 引用网址:https://blog.csdn.net/jin_mu_yan/article/details/130729266
        引用别人的文章,写的挺好的,从头跟到尾,一路下载安装环境即可.</p>
        

        <strong style="display: block;margin-top:0.0704rem">2. 项目创建</strong>


        <p>引用网址: https://zhuanlan.zhihu.com/p/213878203</p>
        <p>创建一个 RN 项目,从文章的后半部分看即可,创建之后可能有些坑,我总结一下我踩的坑</p>

        <p class='mt20'>创建项目,指定一个版本,默认是安装最新的,有些依赖版本会报错,命令: npx react-native init MyApp –version 0.68.2</p>

        <p>1. Android studio 模拟器卡死: https://blog.csdn.net/jackzhouyu/article/details/129118272</p>

        <p>2. Unable to start the daemon process: https://blog.csdn.net/m0_65065082/article/details/130347653</p>

        <p>3. 任何一级文件目录,都不要使用中文!!!!(巨坑,报的错瞎报,我看 cmd 窗口里面,路径没有解析出来,才想到不能写中文…)</p>

        <p class='mt20'>ps: 创建项目: npx react-native init MyApp –version 0.68.2</p>

        <p>ps: 启动项目: yarn react-native run-android</p>

        <p>ps: 建议用 yarn</p>
        <p class='mt20'>项目中间遇到的坑:</p>

        <p>持续更新中…</p>
        <p class='mt20'>打包: 项目刚开始,还没到这里…后续完善</p>

        <p>安卓打包: http://www.taodudu.cc/news/show-1153293.html?action=onClick</p>

        <p>ios 打包:</p>

        <p>持续更新中…</p>
        <p class='mt20'>发布: 最后发布到应用商店,项目刚开始,还没到这里…</p>

        <p>持续更新中…</p>
      </div>
    `,
    blog04: `
      <div class="title">Vue2 index.html / App.vue / main.js 三者作用</div>
      <span class="label">Vue2</span>
      <span class="label">ElementUI</span>
      <div class="modal-body-content">
        <p>vue 创建任何一个项目,都会默认有这三个文件.</p>
        <p>这里整理一下,有些小的东西,看似不起眼.</p>
        <p>理清了,也有贯穿上下文,承上启下的作用.尤其是看源码的时候,文件从哪里进来,怎么挂载,你要是自己写一个 vue,第一步的思路就有了.</p>
        
        <strong style="display: block;margin-top:0.0704rem">index.html–主页,项目入口.</strong>

        <p>作用: 网站页面的总入口</p>
        <p>你打开一个 vue 网站,第一件事就是打开这个页面,条件允许的情况下,也就是 vue 没有加载好的情况下(可能发生在一些性能较差的电脑或者网络不好的等等情况下),短暂的显示 index.html 中正文的内容(没写就是空白)</p>

        <img style="width:100%;margin-top:0.1408rem;" src="https://motiandalou.github.io/images/26.png"/>

        <strong style="display: block;margin-top:0.0704rem">App.vue–根组件</strong>

        <p>作用: 你要写的 vue 项目的主组件</p>

        <p>App.vue 用来写初始的模板代码,你写的页面和组件, 都要挂载在这个 DOM 元素上,你可以理解它为你的整个 vue 项目.</p>

        <img style="width:100%;margin-top:0.1408rem;" src="https://motiandalou.github.io/images/28.png"/>

        <strong style="display: block;margin-top:0.0704rem">main.js</strong>

        <p>作用: main.js 用来 New Vue 对象，同时将 App.vue 中的模板内容挂载到 index.html 中(index.html,没有 vue 这个框架,它就在. 要让作者写的 vue 框架起作用,即怎么显示? 作为一个 DOM 插入到网页中即可)。</p>

        <p>在项目运行中，main.js 作为项目的入口文件，运行中，找到其实例需要挂载的位置，即 index.html 中，这样 vue 这个框架,第一步就成功了，源码就可以继续往下写了…</p>

        <p>index.html 的挂载点处的内容会被显示，但是随后就被实例(new Vue())中的组件(componets: App)中的模板中的内容所取代，所以我们会看到有那么一瞬间会显示出 index.html 中正文的内容。</p>

        <p>这个文件也同时是引入外部文件进来的地方,比如饿了么组件,axios 等等</p>

        <img style="width:100%;margin-top:0.1408rem;" src="https://motiandalou.github.io/images/27.png"/>


        <p class="mt20">这三个都不是孤立的,都可以串联起来.</p>
      </div>
    `,
    blog05: `
      <div class="title">vue2传值的8种方式</div>
      <span class="label">NPM</span>
      <span class="label">dragmate</span>
      <div class="modal-body-content">
      总结：<br/>
      常见使用场景可以分为三类：<br/>
      (1). 这 8 种方式我在项目中非常常用，但是也要根据情况而定，啥都用的话，数据不好管理，多人开发，项目非常大的话，像我们公司按年为单位来计算的开发迭代项目，时间长的话，就成屎山了。<br/>
      (2). 我个人算是个极简主义者，代码量和代码方式，越简单越好，这样越方便管理，一个功能的实现逻辑和方式有很多，团队的话，商量之后，尽量用一种。这样你同事请假，今天必须帮他改个 bug，这种开发成本就最低了。同伙之间平时多沟通。<br/>
      (3). 团队合作，代码方便管理永远放第一位。<br/>
      <br/>

      1. 父子组件通信：5 个：props；$parent / $children；provide / inject；ref；$attrs / $listeners<br/>
      2. 兄弟组件通信：2 个<br/>
      eventBus Vuex，子>>父>>子（不推荐多层嵌套）<br/>
      3. 跨级通信：4 个<br/>
      eventBus Vuex provide / inject 、$attrs / $listeners<br/>
      <br/>

      第一种: 父子组件传值:props 子父组件传值:$emit<br/>
      第二种: $children / $parent<br/>
      第三种: provide/ inject 局部刷新<br/>
      第四种: ref / refs<br/>
      第五种: eventBus<br/>
      第六种: Vuex<br/>
      第七种: localStorage / sessionStorage<br/>
      第八种: $attrs 与 $listeners<br/>

      <strong style="display: block;margin-top:0.0704rem">第一种：父子组件传值 子父组件传值</strong>
      父子组件传值：props<br/>
      <img style="width:100%;margin-top:0.1408rem;" src="https://motiandalou.github.io/images/1.png"/>

      子父组件传值：$emit<br/>
      <img style="width:100%;margin-top:0.1408rem;" src="https://motiandalou.github.io/images/2.png"/>

      父子组件传值进阶版：<br/>
      修饰符<br/>
      <pre style="width:100%;background:#111;color:#ccc;border-radius:0.1408rem;margin-top:0.1408rem">
        &lt;HelloWorld :money.sync="dataApp"&gt;&lt;/HelloWorld&gt;
      </pre>

      <br/>
      等同于：两句作用等同<br/>
      <pre style="width:100%;background:#111;color:#ccc;border-radius:0.1408rem;margin-top:0.1408rem">
        &lt;HelloWorld :money="dataApp" v-on:update:money="dataApp = $event"/&gt;
      </pre>
      <br/>
      <img style="width:100%;margin-top:0.1408rem;" src="https://motiandalou.github.io/images/3.png"/>

      <strong style="display: block;margin-top:0.0704rem">第二种：$children / $parent 只能进行父子组件之间进行传值</strong>
      <br/>

      父子组件可以相互之间获取彼此之间所有的方法和data，就像访问一样<br/>
      子组件访问父组件：this.$parent<br/>
      父组件访问子组件：this.$children[0]<br/>
      <br/>
      <img style="width:100%;margin-top:0.1408rem;" src="https://motiandalou.github.io/images/4.png"/>


      <strong style="display: block;margin-top:0.0704rem">第三种：provide/ inject</strong>
      概念：
      <br/>

      provide/ inject 是 vue2.2.0 新增的 api，简单来说就是父组件中通过 provide 来提供变量，然后再子组件中通过 inject 来注入变量。<br/>
      注意：这里不论子组件嵌套有多深，只要调用了 inject 那么就可以注入 provide 中的数据，而不局限于只能从当前父组件的 props 属性中回去数据<br/>
      举例：一共三个组件 A–>B–>–C （A 是父组件 B 是子组件 C 是孙组件） A 组件 provide 注入一个值，B 组件，C 组件 inject 都可以获取到该值.<br/>
      优点：不局限于父子组件传值，父孙传值也可以实现.不用写 props.<br/>
      缺点：父孙传值多了个没用的子组件.<br/>
      <img style="width:100%;margin-top:0.1408rem;" src="https://motiandalou.github.io/images/5.png"/>
      如果多人开发，可以配合 mixin 混合组件开发<br/>
      <br/>

      <strong style="display: block;margin-top:0.0704rem">第四种：ref / refs</strong>

      <br/>
      <a style="font-size:0.15rem" href="https://www.cnblogs.com/goloving/p/9404099.html">https://www.cnblogs.com/goloving/p/9404099.html</a><br/>
      两种方式：<br/>
      ref：<br/>
      第一种方式：如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素；<br/>
      普通的元素分为：<br/>
      ref 作用在子组件外面的元素上，都是指向 dom 元素，不同 this 指向父组件实例<br/>
      ref 作用在子组件里面的元素上，都是指向 dom 元素，不同 this 指向子组件实例<br/>
      第二种方式：如果用在子组件上，引用就指向组件实例，可以通过实例直接调用组件的方法或访问数据，<br/>
      <img style="width:100%;margin-top:0.1408rem;" src="https://motiandalou.github.io/images/6.png"/>
      工作实战：如何利用 v-for 和 ref 获取一组数组或者 dom 节点（比如 类似多个饿了么手风琴）<br/>
      <br/>
      <img style="width:100%;margin-top:0.1408rem;" src="https://motiandalou.github.io/images/7.png"/>


      <strong style="display: block;margin-top:0.0704rem">第五种：eventBus</strong>

      所有组件共用相同的事件中心，可以向该中心注册发送事件或接收事件，所有组件都可以通知其他组件。<br/>
      缺点：当项目较大，就容易造成难以维护的灾难.（可能自己都找不到自己写的发送事件）<br/>
      使用方式：<br/>
      情况描述：eventBus，当第一次通过路由跳转页面的时候控制台是没有任何输出的，只有第二次跳转开始控制台才有输出<br/>
      原因：vue-router 切换的时候，会先加载新的组件，当新的组件渲染好但是还没 mount 的时候，销毁旧组件，然后再挂载新组件，也就是说当 B 页面的生命周期进行到 beforeMount 的时候，下一步走到的就是 A 页面的 beforeDestory 方法和接下去的 destroyed 方法<br/>
      eventBus 的执行生命周期：<br/>
      <img style="width:100%;margin-top:0.1408rem;" src="https://motiandalou.github.io/images/8.png"/>

      解析：<br/>
      其实，可以通过结果清楚看到，当我们还在页面 A 的时候，页面 B 还没生成，也就是页面 B 中的 created 中所监听的来自于 A 中的事件还没有被触发。这个时候当你 A 中 emit 事件的时候，B 其实是没有监听到的。<br/>
      再看一下，红色的是 B 页面组件，当你从页面 A 到页面 B 跳转的时候，发生了什么？首先是先 B 组件先 created 然后 beforeMount 接着 A 组件才被销毁，A 组件才执行 beforeDestory，以及 destoryed.<br/>
      所以，我们可以把 A 页面组件中的 emit 事件写在 beforeDestory 中去。因为这个时候，B 页面组件已经被 created 了，也就是我们写的$on事件已经触发了。所以可以，在beforeDestory的时候，$emit 事件。<br/>

      <div style="width:100%;background:#111;color:#ccc;border-radius:0.1408rem;margin-top:0.1408rem">

      <pre>
      <code>
            第一步：在 main.js 里面全局定义：<br/>
            //全局定义，可以将 eventBus 绑定到 vue 实例的原型上，也可以直接绑定到 window 对象上.<br/>
            Vue.prototype.$EventBus = new Vue();<br/>
            第二步：在想要发送信息的页面，发送事件<br/>
            beforeDestroy() {<br/>
            // 第一种办法：<br/>
            setTimeout(() => {<br/>
            //传多个值，用{}包裹键值对<br/>
            this.$EventBus.$emit("new", "lsy");<br/>
            }, 0);<br/>
            // 第二种办法：<br/>
            this.$nextTick(()=>{<br/>
                  //传多个值，用{}包裹键值对<br/>
                  this.$EventBus.$emit("new", "lsy");<br/>
            })<br/>
            }<br/>
            第三步：在想要获取信息的页面，获取信息<br/>
            mounted() {<br/>
            //必须要在 mounted 以及之前的周期里面写，不然获取不到 eventbus 信息<br/>
            //这里不用箭头函数的话，this 会丢失。也可以先保存一份：<br/>
            this.$EventBus.$on("new", (e) => {<br/>
            this.name = e;<br/>
            console.log(e);<br/>
            });<br/>
            }<br/>
            beforeDestroy() {<br/>
            //移除监听<br/>
            //on 事件是不会自动清除的，也就是说你切换的次数越多 on 监听也会越来越多<br/>
            //解决的方法是需要在 B 页面的 beforeDestroy 里面手动使用 off 去关闭监听：<br/>
            this.$EventBus.$off("new", "");<br/>
            }<br/>
      </code>
      </pre>
      </div>


      <br/>

      <strong style="display: block;margin-top:0.0704rem">第六种：Vuex</strong>


      Vuex 是什么？<br/>
      Vuex 是一个专为 Vue 程序开发的状态管理模式。<br/>
      Vuex 解决了什么问题？<br/>
      两个问题：<br/>
      问题一：多个视图依赖于同一状态<br/>
      问题二：来自不同视图的行为需要变更同一状态<br/>
      将开发者的精力聚焦于数据的更新而不是数据在组件之间的传递上<br/>
      Vuex 详细 5 个模块：<br/>
      1.state：将需要进行管理的共享数据，放入 state 中，使其形似为全局变量（全局状态）<br/>
      2.getters：相当于 computed 计算属性，用于加工处理 state 状态数据，有其两个默认参数，第一个默认参数为 state，第二个默认参数为 getters。条件：如果很多组件都使用这个过滤后的数据.<br/>
      3.mutations：同步提交数据<br/>
      4.actions：actions 的异步操作<br/>
      5.modules：模块化 Vuex，为了方便后期对于项目的管理，可以让每一个模块拥有自己的 state、mutation、action、getters，使得结构非常清晰，方便管理。<br/>
      index.js<br/>
      <img style="width:100%;margin-top:0.1408rem;" src="https://motiandalou.github.io/images/9.png"/>
      <img style="width:100%;margin-top:0.1408rem;" src="https://motiandalou.github.io/images/10.png"/>


      模块化：<br/>
      <img style="width:50%;margin-top:0.1408rem;" src="https://motiandalou.github.io/images/11.png"/>
      <img style="width:100%;margin-top:0.1408rem;" src="https://motiandalou.github.io/images/12.png"/>
      <img style="width:100%;margin-top:0.1408rem;" src="https://motiandalou.github.io/images/13.png"/>
      <img style="width:100%;margin-top:0.1408rem;" src="https://motiandalou.github.io/images/14.png"/>
      <img style="width:100%;margin-top:0.1408rem;" src="https://motiandalou.github.io/images/15.png"/>

      <br/>

      <strong style="display: block;margin-top:0.0704rem">第七种：localStorage / sessionStorage
      </strong>

      缺点：这种通信比较简单，缺点是数据和状态比较混乱，不太容易维护。<br/>
      解决方法：localStorage / sessionStorage 可以结合 Vuex，实现数据的持久保存，同时使用 Vuex 解决数据和状态混乱问题。实际工作中也就是这么用。<br/>
      业务情景 1：<br/>
      1.填写表单数据，点击提交按钮，然后将 v-model 获取的表单数据，本地存储到本地。<br/>
      2.再将值放到 Vuex 里面也进行保存一份<br/>
      3.Vuex，里面的 state 很清晰地管理全局状态了。同时再次初始化的时候，会优先使用本地存储。<br/>
      4.实际工作中，可能是后端返回给你前端的一个 token,用来验证登录的.你每次用这个用来登录用.

      举例用法：<br/><br/>
      <img style="width:100%;margin-top:0.1408rem;" src="https://motiandalou.github.io/images/16.png"/>
      <img style="width:100%;margin-top:0.1408rem;" src="https://motiandalou.github.io/images/17.png"/>
      <img style="width:100%;margin-top:0.1408rem;" src="https://motiandalou.github.io/images/18.png"/>
      <img style="width:100%;margin-top:0.1408rem;" src="https://motiandalou.github.io/images/19.png"/>

      <strong style="display: block;margin-top:0.0704rem">第八种: $attrs 与 $listeners</strong>

      解决问题:隔代组件传参:X 套 Y,Y 套 Z X 传属性值给 Z 或者 Z 传方法给 X(实际也是传值) 这样就实现双向隔代传值<br/>
      正常思路：<br/>
      思路一:使用 props 绑定来进行一级一级的信息传递, 如果 D 组件中状态改变需要传递数据给 A, 使用事件系统一级级往上传递<br/>
      思路二:使用 eventBus,这种情况下还是比较适合使用, 但是碰到多人合作开发时, 代码维护性较低, 可读性也低<br/>
      思路三:使用 Vuex 来进行数据管理, 但是如果仅仅是传递数据, 而不做中间处理,使用 Vuex 处理感觉有点大材小用了.<br/>

      正向:$attrs<br/>
      <img style="width:100%;margin-top:0.1408rem;" src="https://motiandalou.github.io/images/20.png"/>
      <img style="width:100%;margin-top:0.1408rem;" src="https://motiandalou.github.io/images/21.png"/>
      <img style="width:100%;margin-top:0.1408rem;" src="https://motiandalou.github.io/images/22.png"/>

      逆向:$listeners<br/>
      <img style="width:100%;margin-top:0.1408rem;" src="https://motiandalou.github.io/images/23.png"/>
      <img style="width:100%;margin-top:0.1408rem;" src="https://motiandalou.github.io/images/24.png"/>
      <img style="width:100%;margin-top:0.1408rem;" src="https://motiandalou.github.io/images/25.png"/>


      关于 Vue 的 inheritAttrs 的理解,<br/>
      <a style="font-size:0.15rem" href="https://blog.csdn.net/qq_38211541/article/details/105824684">https://blog.csdn.net/qq_38211541/article/details/105824684</a><br/>

      <strong style="display: block;margin-top:0.0704rem">自己总结:现在要 X 通过$attrs属性传值,Z组件会接收到所有的属性,两种情况:
      </strong>

      情况一:当inheritAttrs=true Z组件会接收到所有的属性<br/>
      情况二:当inheritAttrs=false Z组件不会接收到任何属性<br/>
      inheritAttrs=true/false都不会影响$attrs 传值.都有值.只是子组件 DOM 节点上是否继承父组件的属性<br/>
      用法:加在 Y,Z 继承组件上.<br/>
      </div>
    `,
    blog06: `
      <div class="title">基金组合的力量</div>
      <span class="label">Vue2</span>
      <div class="modal-body-content">
      <p class="mt20">
        如果你掌握了 股票基金 / 债券基金 / 货币基金 / 大宗商品 等方面的知识,实际操作了股票或者基金之后,你会发现组合的力量,单个的基金,并不具备抗风险的能力,但是基金组合有,正确的投资组合,可能每年下来,能稳定的进行增长.举个例子: A 股里面不是所有的股票都是同时涨的,或者跌的,有些正相关,负相关,进行基金组合,比买单个的抗风险能力强很多. 当然,组合里面的基金要选好.这是另外一个话题了.</p>

        <strong style="display: block;margin-top:0.0704rem">⭐1. 策略一: 瑞-达利殴–全天候策略</strong>
        <p>–股票(30%): 选取沪深 300</p>
        <p>–债券(55%): 选取中证全债</p>
        <p>–黄金(7.5%): 选取黄金 ETF</p>
        <p>–大宗商品(7.5%): 选取大宗商品 ETF</p>
        <p>每年至少进行一次再平衡</p>

        <strong style="display: block;margin-top:0.0704rem">⭐2. 策略二: 低相关性</strong>
        <p>股票型基金</p>
        <p>债券型基金</p>
        <p>大宗商品型基金</p>

        <p>持有比例?
        <p>1.稳健型:20%股基 + 60%债基 + 20%大宗商品</p>
        <p>2.进取型:50%股基 + 30%债基 + 20%大宗商品</p>
        <p>3.激进型:70%股基 + 10%债基 + 20%大宗商品</p>

        <p>每年至少进行一次再平衡</p>

        <strong style="display: block;margin-top:0.0704rem">如何选取对应的品种?</strong>
        <strong style="display: block;margin-top:0.0704rem">(1). 股票型基金?</strong>
        <p>双十基金经理(5 只基金): 任期超过十年 + 年化收益率超过 10% + 最大回撤不超过 35%</p>
        <p>5 年超额收益基金经理(5 只基金): 任期大于 5 年小于 10 年 + 年化收益率超过 25%</p>
        <p>新兴基金经理(5 只基金): 任期大于 3 年小于 5 年 + 年化收益率超过 50%</p>

        <strong style="display: block;margin-top:0.0704rem">(2). 债券型基金(5 只基金)?</strong>


        <p>最大回撤不超过 5%,年收益在 6% 以上为标准</p>


        <strong style="display: block;margin-top:0.0704rem">(3). 宗商品型基金?</strong>
        <p>成立在 3 年以上的 5 只大宗商品型基金 (大宗商品 + 白银基金 + 黄金 ETF + 商品 ETF + 嘉实原油)</p>
        <p>大宗商品基金的作用是: 防止股票和债券基金双杀(都低)</p>
      </div>
    `,
    blog07: `
      <div class="title">如何购买股票基金--主动基金</div>
      <span class="label">Vue</span>
      <span class="label">chart.js</span>
      <div class="modal-body-content">
        前面的话:  
我每天有个习惯,微信公众号,每天晚上九点的样子,就会去看 银行螺丝钉 每日更新基金方面的文章,我是 银行螺丝钉 的粉丝,我看过他写的两本书,他的投资价值理念,对我有启蒙作用,以及我也十分认同这种投资理念.<br/>并且实际生活中我的大部分资金也都是按照这个理念进行投资的,算是没见过面的老师吧.<br/>很感谢,作为自己个人,把书中,基于目前自己的学识与眼见,能读到的知识进行了整理,并且记录了一下.<br/>好记性不如烂笔头,并且书嘛,常看常新<br/><br/>  

书籍: 主动基金投资指南<br/><br/>  

购买主动基金( 非常看基金经理的能力 )<br/><br/>  

公式: 好品种 + 好价格 + 长期持有 = 好收益<br/><br/>  

(1). 如何选 好品种?( 书中常谈: 买基金就是买基金经理 )<br/>— 常见基金公司( 打开支付宝基金模块基本都是好公司 )<br/>– 不同的公司有不同的投资风格( 价值,均衡,成长 ),本人( 坚持价值风格 ),从风格找公司,再找公司优秀的基金经理<br/><br/>— 优秀的基金经理: 老将( 年化收益率 >= 15%(股票基金平均年收益率是 14%) + 从业时间 >= 10 年 + 管理资金规模 >= 20 亿 )<br/>+ 黑马(老将的徒弟 / 从业时间–黑马暂时看不出来,凭直觉… )<br/><br/>  
(2). 如何选 好价格?<br/>— 按风格( 支付宝–()): 价值风格参考(沪深 300,价值 300 指数等前面带价值两个字的 ),价值风格要买低估的,当指数是低估的,往往价值风格的基金也是低估的<br/><br/>– 螺丝钉等级(微信号: 银行螺丝钉–>指数估值–>今日估值 ) 获取螺丝钉等级,4-5 星定投<br/><br/>  
(3). 长期持有<br/>低估的时候,坚持定投即可.<br/>更千万别频繁买卖,追涨杀跌.<br/>不用每天看,一个月看一次就行了.<br/>心态很重要.<br/>其实我天天看,涨和跌对我来言,只是每天的一个消遣工具.<br/>现在,涨和跌完全不会影响我的任何情绪.<br/>不以物喜,不以己悲 这是我一辈子的修行,生活中我一直都在做一些刻意修炼<br/><br/>  

⭐ 螺丝钉等级:<br/>4-5 星( 最佳,但是机会很少 ),低估的时候主要定投 股票基金<br/>3 星,考虑止盈,让股票基金占比( 100 - 你的年龄 ),将盈利的资金投入债券基金, 继续达到开始的占比: 股票基金 : 债券基金 = (100-年龄) : 年龄<br/>2 星,股票基金比例降到 30%<br/>1 星,股票基金止盈,全部卖出.<br/>全部买入债券基金<br/><br/>  

⭐ 投资风格: 三个大类<br/>价值风格: 低市盈率,低市净率(一句话总结: 股票是最便宜的)<br/>成长风格: 高市盈率,高市净率,高盈利成长,高盈利增长速度(一句话总结: 长的高位,最后一哆嗦)<br/>均衡风格: 估值没有特别高,特别低,在正常的那种(一句话总结: 既要价值风格的低价格,又要成长风格的好公司(挑选又好又便宜的股票))<br/><br/>  

看指数的低估: 支付宝–>基金–>指数选基–>指数排行–随便点开一个指数就可以看见是否低估.
      </div>
    `,
    blog08: `
      <div class="title">如何购买股票基金--被动基金</div>
      <span class="label">HTML</span>
      <span class="label">CSS</span>
      <span class="label">JavaScript</span>
      <div class="modal-body-content">
        前面的话: 我每天有个习惯,微信公众号,每天晚上九点的样子,就会去看 银行螺丝钉 每日更新基金方面的文章,我是 银行螺丝钉 的粉丝,我看过他写的两本书,他的投资价值理念,对我有启蒙作用,以及我也十分认同这种投资理念.<br/>并且实际生活中我的大部分资金也都是按照这个理念进行投资的,算是没见过面的老师吧.<br/>很感谢,作为自己个人,把书中,基于目前自己的学识与眼见,能读到的知识进行了整理,并且记录了一下.<br/>好记性不如烂笔头,并且书嘛,常看常新<br/><br/>  

书籍: 指数基金投资指南<br/><br/>  

有哪些方法? 2 种( 盈利收益率法 / 博格公式法 )<br/>  
1. 盈利收益率法<br/>  
2. 博格公式法(市盈率)<br/>  
3. 博格公式法(市净率<br/><br/>  

哪些指数,用哪些方法呢<br/><br/>  

盈利收益率法:<br/>  
上证 50 指数,上证红利指数,上证 50AH 指数,中证红利指数,基本面 50 指数,央视 50 指数,恒生指数,H 股指数<br/><br/>  

博格公式法(市盈率):<br/>  
沪深 300 指数,中证 500 指数,创业板指数,红利机会指数,必须消费行业指数,可选消费行业指数,医药行业指数,养老行业指数<br/><br/>  

博格公式法(市净率):<br/>  
证券行业指数,金融行业指数,非银金融行业指数,地产行业指数<br/><br/>  

什么是盈利收益率法,博格公式法(市盈率),博格公式法(市净率)?<br/><br/>  

盈利收益率法: 公司盈利稳定,看指标盈利收益率(X)<br/>  
1. X > 10% 时,分批投资<br/>  
2. 6.4% < X < 10% 不再买入,坚持已有的基金份额<br/>  
3. X < 6.4% 分批卖出基金(分批分散风险<br/><br/>  

博格公式法(市盈率)<br/>  
1. 公司盈高速增长,即低估的时候买入,市盈率小于 10,且股息率高<br/><br/>  

博格公式法(市净率,建议暂时先别使用,盈利不稳定,不好判断)<br/>  
1. 公司盈利不稳定/周期性变化的情况下,市净率,即低估的时候买入<br/><br/>  

如何购买–债券基金?<br/>  
十年国债利率: 大于 3.5%,买入长债券基金基金, 低于 3.5%, 大于 3.2% 买入短债券基金 / 即也要同时减持股票基金 (因为债券基金和股票基金是反的)<br/>  
十年国债利率:当十年国债利率跌破 2.6% 的时候果断卖出<br/><br/>  

如何选一只对应的指数基金产品?<br/>  
—费用低,跟踪误差低(越低越好),规模最少一亿(防止清盘<br/><br/>  

⭐ 国内各种基金长期平均收益率:<br/>  
1. 货币基金:2%-3%(短期定投选择--放些平时用的闲钱即可)<br/>  
2. 债券基金: 6.4%(中期定投选择)<br/>  
3. 股票基金(主动):14%(长期定投选择) 股票基金(被动):10%(长期定投选择<br/><br/>  

⭐ 是否是高股息率: 4%<br/>  
5% 属于高股息,至少在 3% 才能投资<br/><br/>  

⭐ 个人: 最直接的办法,我投 指数基金 这块,直接看的螺丝钉的每日更新文章,每月发工资了进行定投.<br/>
      </div>
    `,
    blog09: `
      <div class="title">动态配置协议,域名,端口</div>
      <span class="label">Vue</span>
      <span class="label">ElementUI</span>
      <div class="modal-body-content">
        前面的话:  
        Vue 项目, public/static 文件夹存放的是静态资源.<br/>  
        webpack 不会打包 public/static 文件夹下面的文件, 只是简单的复制 copy, 打包之后, 你会直接在包里面看到一个跟 public/static 一模一样的文件夹, 里面存放着你的静态文件.<br/>  
        publib 和 static 都是可以配置的, 哪些文件夹不进行打包. 你一般开一个项目都是叫 static. 这都可以参考公司其它的项目怎么写的, 团队写作嘛. 大家看见一个文件名, 都知道是什么意思. 也可以减少其它同伙的阅读成本<br/><br/>  

        实现步骤:  
        在自己开发的 vue 项目, public/static 文件夹下面, 新建一个 config.js 文件, 用来配置协议, 域名, 端口.<br/>  
        再将该文件, 引入到 index.html 入口文件里面. 拿到 config.js 全局的配置变量 PLATFORM_CONFIG<br/>  
        axios 配置文件 应用一下这个 baseURL 即可<br/><br/>  

        config.js 文件

         <div style="width:100%;background:#111;color:#ccc;border-radius:0.1408rem;margin-top:0.1408rem">
          <pre>
            <code>
              /**
               * @desc 协议, 不填写则默认取头部的协议
               * @value 'http:', 'https:'
               *  */
              const protocol = "";
              /**
               * @desc 域名或者IP地址，不填写则默认当前地址
               *  */
              const host = "10.0.3.169";
              /**
               * @desc 端口，不填写则默认当前端口
               *  */
              const port = "8089";

              //API 接口配置信息
              const api_protocol = protocol || window.location.protocol;
              const api_host = host || window.location.hostname;
              const api_port = port || window.location.port;

              let PLATFORM_CONFIG = {
                // 基础URL
                baseURL: api_protocol + "//" + api_host + ":" + api_port,
                // 接口请求超长时间
                timeout: "1000"
              };
            </code>
          </pre>
        </div>

        index.html 文件<br/>
        <div>
        
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>代码展示</title>
            <style>
                .code-container {
                    background: #111;
                    border: 1px solid #ddd;
                    border-radius: 4px;
                    padding: 15px;
                    font-family: Consolas, Monaco, 'Courier New', monospace;
                    white-space: pre;
                    overflow-x: auto;
                    color: #ccc;
                    line-height: 1.5;
                    margin: 0.1408rem;                    
                }
            </style>
        </head>
        <body>
            <div class="code-container">
        &lt;!DOCTYPE html&gt;
        &lt;html&gt;
            &lt;head&gt;
                &lt;meta charset=&quot;utf-8&quot; /&gt;
                &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width,initial-scale=1.0&quot; /&gt;
                &lt;title&gt;个人网站&lt;/title&gt;
                &lt;!-- 引入接口配置文件 --&gt;
                &lt;script src=&quot;./public/config.js&quot;&gt;&lt;/script&gt;
            &lt;/head&gt;
            &lt;body&gt;
                &lt;div id=&quot;app&quot;&gt;&lt;/div&gt;
            &lt;/body&gt;
        &lt;/html&gt;
            </div>
        </body>
        </html>
        
        </div>
      

              


      </div>
    `,
    blog10: `
      <div class="title">国际化(Vue2 + ElementUI)</div>
      <span class="label">Vue</span>
      <span class="label">ElementUI</span>
      <div class="modal-body-content">
        <!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Vue I18n 国际化配置指南</title>
    <style>
        
        h1, h2, h3 {
            color: #2c3e50;
        }
        pre {
            background-color: #f5f5f5;
            padding: 15px;
            border-radius: 4px;
            overflow-x: auto;
            font-family: 'Courier New', monospace;
        }
        code {
            background-color: #f5f5f5;
            padding: 2px 4px;
            border-radius: 3px;
            font-family: 'Courier New', monospace;
        }
        .code-block {
            background-color: #f8f8f8;
            border-left: 4px solid #42b983;
            padding: 15px;
            margin: 15px 0;
            overflow-x: auto;
        }
        .note {
            background-color: #e7f5ff;
            border-left: 4px solid #1890ff;
            padding: 12px;
            margin: 15px 0;
        }
    </style>
</head>
<body>
    <h1>Vue I18n 国际化配置指南</h1>

    <h2>第一步：安装</h2>
    <p>先下载国际化的包，注意版本：</p>
    <pre><code>npm i vue-i18n@8.28.2</code></pre>

    <h2>第二步：配置及使用</h2>
    <h3>语言包文件结构</h3>
    <p>在 <code>src</code> 目录新建 <code>i18n</code> 目录，包含以下语言包文件：</p>

    <h4>en.json（英文）</h4>
    <pre><code>{
  "common": {
    "username": "username: {name}",
    "password": "password",
    "save": "save",
    "edit": "edit",
    "update": "update",
    "delete": "delete",
    "forever": "forever",
    "expired": "expired"
  }
}</code></pre>

    <h4>zh.json（简体中文）</h4>
    <pre><code>{
  "common": {
    "username": "用户名: {name}",
    "password": "密码",
    "save": "保存",
    "edit": "编辑",
    "update": "更新",
    "delete": "删除",
    "forever": "永久",
    "expired": "过期"
  }
}</code></pre>

    <h4>tw.json（繁体中文）</h4>
    <pre><code>{
  "common": {
    "username": "用戶名: {name}",
    "password": "密碼",
    "save": "保存",
    "edit": "編輯",
    "update": "更新",
    "delete": "刪除",
    "forever": "永久",
    "expired": "過期"
  }
}</code></pre>

    <h3>i18n 配置文件</h3>
    <p>在 <code>i18n</code> 目录下新建 <code>index.js</code> 文件：</p>
    <pre><code>import Vue from "vue";
import VueI18n from "vue-i18n";
// 导入Element UI语言包
import elementEnLocale from "element-ui/lib/locale/lang/en";
import elementZhLocale from "element-ui/lib/locale/lang/zh-CN";
// 导入项目语言包
import enLocale from "./en";
import zhLocale from "./zh";

Vue.use(VueI18n);

const messages = {
  en: {
    ...enLocale,
    ...elementEnLocale
  },
  zh: {
    ...zhLocale,
    ...elementZhLocale
  }
};

const i18n = new VueI18n({
  locale: localStorage.getItem("language") || "zh",
  messages,
  fallbackLocale: "zh",
  numberFormats: {
    en: {
      currency: {
        style: "currency",
        currency: "USD"
      }
    },
    zh: {
      currency: {
        style: "currency",
        currency: "JPY",
        currencyDisplay: "symbol"
      }
    }
  },
  dateTimeFormats: {
    en: {
      short: {
        year: "numeric",
        month: "short",
        day: "numeric"
      },
      long: {
        year: "numeric",
        month: "short",
        day: "numeric",
        weekday: "short",
        hour: "numeric",
        minute: "numeric"
      }
    },
    zh: {
      short: {
        year: "numeric",
        month: "short",
        day: "numeric"
      },
      long: {
        year: "numeric",
        month: "short",
        day: "numeric",
        weekday: "short",
        hour: "numeric",
        minute: "numeric"
      }
    }
  }
});

export default i18n;</code></pre>

    <h2>第三步：主入口文件配置</h2>
    <p>在 <code>main.js</code> 中引入国际化配置：</p>
    <pre><code>import Vue from "vue";
import App from "./App";
import router from "./router";
import "@/assets/css/common.css";
import "@/assets/css/cover.less";
import ElementUI from "element-ui";
import { i18n, loadLanguageAsync } from "./i18n";

Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
  el: "#app",
  router,
  components: { App },
  i18n,
  template: "&lt;App/&gt;"
});

// 路由拦截
router.beforeEach((to, from, next) => {
  const lang = to.params.lang || "zh";
  loadLanguageAsync(lang).then(() => next());
});</code></pre>

    <h2>Vue I18n 使用方法</h2>
    <h3>基本用法</h3>
    
    <div class="code-block">
        <p><strong>1. 模板中使用：</strong></p>
        <code>{{ $t('common.save') }}</code>
    </div>

    <div class="code-block">
        <p><strong>2. JavaScript中使用：</strong></p>
        <code>this.$t('common.save')</code>
    </div>

    <h3>动态传参</h3>
    <pre><code>{{ $t("common.username", { name: "刘亦菲" }) }}</code></pre>

    <h3>日期格式化</h3>
    <pre><code>&lt;!-- 2023年7月23日 --&gt;
&lt;p&gt;{{ $d(new Date(), "short") }}&lt;/p&gt;

&lt;!-- 2023年7月23日周日 21:32 --&gt;
&lt;p&gt;{{ $d(new Date(), "long") }}&lt;/p&gt;</code></pre>

    <h3>数字格式化</h3>
    <pre><code>&lt;!-- $100.00 --&gt;
&lt;p&gt;{{ $n(100, 'currency') }}&lt;/p&gt;

&lt;!-- ￥100 --&gt;
&lt;p&gt;{{ $n(100, 'currency', 'zh') }}&lt;/p&gt;</code></pre>

    <h2>动态加载语言包</h2>
    <pre><code>// 设置国际化语言
function setI18nLanguage(lang) {
  i18n.locale = lang;
  axios.defaults.headers.common["Accept-Language"] = lang;
  document.querySelector("html").setAttribute("lang", lang);
  return lang;
}

export function loadLanguageAsync(lang) {
  if (i18n.locale === lang) {
    return Promise.resolve(setI18nLanguage(lang));
  }

  if (loadedLanguages.includes(lang)) {
    return Promise.resolve(setI18nLanguage(lang));
  }

  return import("./lang/lang.json").then(messages => {
    i18n.setLocaleMessage(lang, messages.default);
    loadedLanguages.push(lang);
    return setI18nLanguage(lang);
  });
}</code></pre>

    <h2>开发工具推荐</h2>
    <p>使用 VS Code 插件 <a href="https://marketplace.visualstudio.com/items?itemName=antfu.i18n-ally" target="_blank">i18n Ally</a> 可以简化国际化开发：</p>
    <pre><code>&lt;!-- 使用前 --&gt;
&lt;div&gt;{{ $t("common.edit") }}&lt;/div&gt;

&lt;!-- 使用后 --&gt;
&lt;div&gt;{{ $t("编辑") }}&lt;/div&gt;</code></pre>

    <div class="note">
        <p>更多详情请参考 <a href="https://kazupon.github.io/vue-i18n/zh/" target="_blank">Vue I18n 官方文档</a></p>
    </div>
</body>
</html>
      </div>
    `,
    blog11: `
      <div class="title">filter(过滤器)属性</div>
      <span class="label">Vue</span>
      <span class="label">ElementUI</span>
      <div class="modal-body-content">
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Filter 属性的使用</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
        }
        h1, h2 {
            color: #333;
        }
        p, ul {
            color: #666;
        }
        code {
            background-color: #f9f9f9;
            border: 1px solid #ddd;
            padding: 2px 5px;
            font-family: monospace;
        }
        li {
            margin-bottom: 15px; /* 增加每个列表项之间的间距 */
        }
    </style>
</head>
<body>
    <h1>前言</h1>
    <p>filter属性我在日常开发用的并不多，但是我觉得很管用，有奇效，在一些特殊的样式上，你会觉得还可以这么简单就能实现。</p>

    <h2>定义</h2>
    <p>filter 属性定义了元素（通常是img标签）的可视效果（例如：模糊与饱和度）。</p>

    <h2>语法</h2>
    <p><code>filter: none | blur() | brightness() | contrast() | drop-shadow() | grayscale() | hue-rotate() | invert() | opacity() | saturate() | sepia() | url();</code></p>

    <h2>常用属性及语法</h2>
    <ul>
        <li><strong>blur 高斯模糊（常用）</strong></li>
        <ul>
            <li><code>filter: blur(4px);</code></li>
            <li>模糊度。默认为0，值(px，不能写百分比)越大，越模糊。</li>
        </ul>
        <li><strong>brightness 亮度（常用）</strong></li>
        <ul>
            <li><code>filter: brightness(200%);</code></li>
            <li>亮度。默认为1/100%，图片没有变化，0是图片全黑，1是默认值颜色不变，值越大，图片越亮（即发白）。</li>
        </ul>
        <li><strong>contrast 对比度（常用）</strong></li>
        <ul>
            <li><code>filter: contrast(200%);</code></li>
            <li>对比度。默认为1/100%，图片没有变化，0是图片全黑，1是默认值颜色不变，值越大，对比度（即绿色更绿，黄色更黄）。</li>
        </ul>
        <li><strong>drop-shadow 阴影（重点）</strong></li>
        <ul>
            <li><code>filter: drop-shadow(8px 8px 10px red);</code></li>
            <li>第一个参数（必填）：X轴水平位置（8px，即阴影向右移8px，负值相反）</li>
            <li>第二个参数（必填）：Y轴水平位置（8px，即阴影向上移8px，负值相反）</li>
            <li>第三个参数（选填）：模糊度（默认为0，值需要大于0），值越大，越模糊</li>
            <li>第四个参数（选填）：阴影颜色</li>
            <li>ps：与box-shadow的区别：inset + spread + 阴影叠加</li>
            <li><code>box-shadow: (inset,8px 8px 10px spread red);</code></li>
            <li>inset：不填写，默认是向外阴影，设置inset（即内部阴影）</li>
            <li>spread：默认值0（阴影和元素尺寸一致），控制阴影的范围扩大（值 > 0，值越大，阴影越大）或者缩小（值 < 0，阴影缩小）</li>
            <li>阴影叠加：box-shadow值可以用逗号隔开，第一个层级（z-index）最高（8px（即阴影半径）），其次16px，最后24px。我们可以理解成一个圆心的靶子。</li>
            <li><code>box-shadow: 0 0 0 8px #f0f, 0 0 0 16px #d00, 0 0 0 24px #cdd;</code></li>
        </ul>
        <li><strong>grayscale 灰度（常用）</strong></li>
        <ul>
            <li><code>filter: grayscale(50%);</code></li>
            <li>灰度。默认为0（图像无变化），最大值100%（完全变灰色）。</li>
        </ul>
        <li><strong>hue-rotate 应用色相（不常用）</strong></li>
        <ul>
            <li><code>filter: hue-rotate(90deg);</code></li>
            <li>给图像应用色相旋转。默认为0deg（图像没有变化），一圈（0deg-360deg）效果循环，基本找不出规律（除非你对颜色很有研究），随着值的变化，你可以看到，粉色，紫色，棕色，粉红色，橙色……各种美丽的颜色。</li>
        </ul>
        <li><strong>invert 反转输入图像（不常用）</strong></li>
        <ul>
            <li><code>filter: invert(100%);</code></li>
            <li>反转输入图像。默认为0（图像没有变化），50%（灰色），100%（医院拍CT的片子一样）。</li>
        </ul>
        <li><strong>opacity 透明度（常用）</strong></li>
        <ul>
            <li><code>filter: opacity(30%);</code></li>
            <li>透明度。默认为0（图像没有变化），最大值100%（完全透明），值越大，透明度越高。</li>
        </ul>
        <li><strong>saturate 图像饱和度（不常用）</strong></li>
        <ul>
            <li><code>filter: saturate(800%);</code></li>
            <li>转换图像饱和度。默认为100%（图像无变化），0（完全不饱和），值越大，饱和度越大（即颜色越鲜艳）。</li>
        </ul>
        <li><strong>sepia 将图像转换为深褐色（常用）</strong></li>
        <ul>
            <li><code>filter: sepia(100%);</code></li>
            <li>将图像转换为深褐色。默认为0（图像无变化），最大值100%（完全变深褐色）。</li>
        </ul>
        <li><strong>url（没用过，不知道退役之前能不能用上）</strong></li>
        <ul>
            <li><code>filter: url(svg-url#element-id);</code></li>
            <li>默认为0，值(px，不能写百分比)越大，越模糊。</li>
        </ul>
    </ul>

    <h2>日常前端开发需要注意的点</h2>
    <ul>
        <li><code>grayscale</code>，可以用在网页一些特殊日子，网页全部变成灰色。</li>
        <li><code>drop-shadow</code>可以与<code>box-shadow</code>可以按需求，交替/对比使用，日常开发中，会有意想不到的效果。</li>
        <li><code>opacity</code>（所有元素都具有透明度）/<code>rgba</code>（背景出现透明效果，但上面的文字不透明）进行设置透明度，可以按需求，交替/对比使用。</li>
        <li><code>sepia</code>可以做成有年代感照片的效果。</li>
    </ul>
</body>
</html>
      </div>
    `,
    blog12: `
      <div class="title">flex弹性布局</div>
      <span class="label">Vue</span>
      <span class="label">ElementUI</span>
      <div class="modal-body-content">
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        h1, h2 {
            color: #333;
        }
        p, ul {
            color: #666;
        }
        code {
            background-color: #f9f9f9;
            border: 1px solid #ddd;
            padding: 2px 5px;
            font-family: monospace;
        }
        li {
            margin-bottom: 15px; /* 增加每个列表项之间的间距 */
        }
    </style>
</head>
<body>
    <h1>Flexbox 布局的重要性</h1>
    <p>display:flex 布局在平常 PC 端和手机端，对于其可视化区域的适配发挥着比较重要的作用，是一个我们前端日常开发会频繁使用的布局方式。</p>
    <p>接下来记录一下我在日常前端开发中接触到的属性，一共 7 个。</p>

    <h2>常用属性及语法</h2>
    <ul>
        <li><strong>flex-direction（极常用）</strong></li>
        <ul>
            <li><code>flex-direction: row(默认值) | row-reverse | column | column-reverse</code></li>
            <li>row：横向从左到右排列（左对齐），默认的排列方式。</li>
            <li>row-reverse：反转横向排列（右对齐，从后往前排，最后一项排在最前面）。</li>
            <li>column：纵向排列。</li>
            <li>column-reverse：反转纵向排列，从后往前排，最后一项排在最上面。</li>
        </ul>
        <li><strong>flex-wrap（极常用）</strong></li>
        <ul>
            <li><code>flex-wrap: nowrap(默认值)|wrap|wrap-reverse|initial|inherit;</code></li>
            <li>nowrap - 默认不换行，弹性容器为单行。该情况下弹性子项可能会溢出容器。</li>
            <li>wrap - 换行，弹性容器为多行。该情况下弹性子项溢出的部分会被放置到新行，子项内部会发生断行。</li>
            <li>wrap-reverse - 换行且反转，即反转 wrap 排列。</li>
        </ul>
        <li><strong>justify-content（极常用）</strong></li>
        <ul>
            <li><code>justify-content: flex-start | flex-end | center | space-between | space-around</code></li>
            <li>flex-start：弹性项目向行头紧挨着填充。这个是默认值。第一个弹性项的 main-start 外边距边线被放置在该行的 main-start 边线，而后续弹性项依次平齐摆放。</li>
            <li>flex-end：弹性项目向行尾紧挨着填充。第一个弹性项的 main-end 外边距边线被放置在该行的 main-end 边线，而后续弹性项依次平齐摆放。</li>
            <li>center：弹性项目居中紧挨着填充。（如果剩余的自由空间是负的，则弹性项目将在两个方向上同时溢出）。</li>
            <li>space-between：弹性项目平均分布在该行上。如果剩余空间为负或者只有一个弹性项，则该值等同于 flex-start。否则，第 1 个弹性项的外边距和行的 main-start 边线对齐，而最后 1 个弹性项的外边距和行的 main-end 边线对齐，然后剩余的弹性项分布在该行上，相邻项目的间隔相等。</li>
            <li>space-around：弹性项目平均分布在该行上，两边留有一半的间隔空间。如果剩余空间为负或者只有一个弹性项，则该值等同于 center。否则，弹性项目沿该行分布，且彼此间隔相等（比如是 20px），同时首尾两边和弹性容器之间留有一半的间隔（1/2*20px=10px）。</li>
        </ul>
        <li><strong>align-items（极常用）</strong></li>
        <ul>
            <li><code>align-items: flex-start | flex-end | center | baseline | stretch</code></li>
            <li>flex-start：弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴起始边界。</li>
            <li>flex-end：弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴结束边界。</li>
            <li>center：弹性盒子元素在该行的侧轴（纵轴）上居中放置。（如果该行的尺寸小于弹性盒子元素的尺寸，则会向两个方向溢出相同的长度）。</li>
            <li>baseline：如弹性盒子元素的行内轴与侧轴为同一条，则该值与’flex-start’等效。其它情况下，该值将参与基线对齐。</li>
            <li>stretch：如果指定侧轴大小的属性值为’auto’，则其值会使项目的边距盒的尺寸尽可能接近所在行的尺寸，但同时会遵照’min/max-width/height’属性的限制。</li>
        </ul>
        <li><strong>align-content（极常用）</strong></li>
        <ul>
            <li><code>align-content: flex-start | flex-end | center | space-between | space-around | stretch</code></li>
            <li>stretch - 默认。各行将会伸展以占用剩余的空间。</li>
            <li>flex-start - 各行向弹性盒容器的起始位置堆叠。</li>
            <li>flex-end - 各行向弹性盒容器的结束位置堆叠。</li>
            <li>center - 各行向弹性盒容器的中间位置堆叠。</li>
            <li>space-between - 各行在弹性盒容器中平均分布。</li>
            <li>space-around - 各行在弹性盒容器中平均分布，两端保留子元素与子元素之间间距大小的一半。</li>
        </ul>
        <li><strong>align-self（一般性使用）</strong></li>
        <ul>
            <li><code>align-self: auto | flex-start | flex-end | center | baseline | stretch</code></li>
            <li>auto：如果’align-self’的值为’auto’，则其计算值为元素的父元素的’align-items’值，如果其没有父元素，则计算值为’stretch’。</li>
            <li>flex-start：弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴起始边界。</li>
            <li>flex-end：弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴结束边界。</li>
            <li>center：弹性盒子元素在该行的侧轴（纵轴）上居中放置。（如果该行的尺寸小于弹性盒子元素的尺寸，则会向两个方向溢出相同的长度）。</li>
            <li>baseline：如弹性盒子元素的行内轴与侧轴为同一条，则该值与’flex-start’等效。其它情况下，该值将参与基线对齐。</li>
            <li>stretch：如果指定侧轴大小的属性值为’auto’，则其值会使项目的边距盒的尺寸尽可能接近所在行的尺寸，但同时会遵照’min/max-width/height’属性的限制。</li>
        </ul>
        <li><strong>flex（不常用，难点）</strong></li>
        <ul>
            <li><code>flex: auto | initial | none | inherit | [ flex-grow ] || [ flex-shrink ] || [ flex-basis ]</code></li>
            <li>flex-start：弹性项目向行头紧挨着填充。这个是默认值。第一个弹性项的 main-start 外边距边线被放置在该行的 main-start 边线，而后续弹性项依次平齐摆放。</li>
            <li>flex-end：弹性项目向行尾紧挨着填充。第一个弹性项的 main-end 外边距边线被放置在该行的 main-end 边线，而后续弹性项依次平齐摆放。</li>
            <li>center：弹性项目居中紧挨着填充。（如果剩余的自由空间是负的，则弹性项目将在两个方向上同时溢出）。</li
      </div>
    `,
  };

  const modalContent_en = {
    blog01: `
      <div class="title">Printing Company Name in Console</div>
<span class="label">Vue2</span>
<span class="label">ElementUI</span>
<span class="label">Console.log</span>
<div class="modal-body-content">
  <p>Verbose:</p>
  <p>For products we develop, especially our own company's products, we can print some information in the console, such as the company logo or campus recruitment information. This is quite targeted. Most users don't know how to open the console, and some may not even know what a console is. Those who can open it are generally technical. For recruitment, the target audience is quite precise, such as the following Baidu campus recruitment.</p>
  <img style="width:100%;margin-top:0.1408rem;border-radius: 0.1408rem;" src="https://motiandalou.github.io/images/31.png" />
  <p>Below is how to create a company logo and the information you want to express in the console, using the above Baidu image as an example.</p>

  <strong style="display: block;margin-top:0.0704rem">Step 1:</strong>
  <p>Open the website</p>
  <a style="font-size:0.15rem" href="https://patorjk.com/software/taag/#p=display&f=Graffiti&t=Type%20Something%20">Text to ASCII Art Generator (TAAG)</a>
  <img style="width:100%;margin-top:0.1408rem;border-radius: 0.1408rem;" src="https://motiandalou.github.io/images/32.png" />

  <strong style="display: block;margin-top:0.0704rem">Step 2:</strong>
  <p>Create a new empty Word document on the desktop, copy the generated "baidu" letters from the website, and then paste them into the Word document -> Ctrl + H key</p>
  <p>Replace \ with \\ (escape)</p>
  <p>Replace ' with \' (or add a \ in front to prevent escaping)</p>
  <img style="width:100%;margin-top:0.1408rem;border-radius: 0.1408rem;" src="https://motiandalou.github.io/images/33.png" />
  <p>PS: When using console.log, I installed the Vetur plugin, which throws an error if it can't escape. Just manually change it.</p>

  <strong style="display: block;margin-top:0.0704rem">Step 3:</strong>
  <p>Place the replaced letters from Word into the console display.</p>
  <pre><code>
  console.log("
    _           _     _ 
  | |         (_)   | | 
  | |__   __ _ _  __| |_   _ 
  | '_ \\  / _\` | /| _\` | | | | 
  | |_) | (_| | | (_| | |_| | 
  |_.__/ \\__,_|_|\\__,_|\\__,_| 

  This is the best of times,
  The development of technology has given everyone the possibility to create value;
  This is also an age full of imagination,
  Every dreamer will eventually reach for the stars and the sea.
  Baidu is with you to look up at the stars and the sea, and build the future together!");

  console.log('%cBaidu 2023 Campus Recruitment Resume Submission:', 'color: red', 'https://talent.baidu.com/jobs/list');
  </code></pre>
  <img style="width:100%;margin-top:0.1408rem;" src="https://motiandalou.github.io/images/34.png" />
</div>
    `,
    blog02: `
      <div class="title">Theme Switching</div>
<span class="label">Vue2</span>
<span class="label">ElementUI</span>
<span class="label">Theme</span>
<div class="modal-body-content">
  <p>Theme switching, so far, there are many ways to implement it. No matter how the method changes, based on my current level, I think there are two points.</p>
  <p>First point: You need to write a separate CSS file for each theme.</p>
  <p>Second point: When to introduce it.</p>
  <p style="margin-top:0.0704rem">Implement these two, and the theme switching function is realized. The rest is just a matter of different methods of loading user experience.</p>
  <p>The first point has little room for optimization. The second point, the timing of introduction can change.</p>

  <p style="margin-top:0.0704rem">Verbose: When researching this feature, I also looked at some new implementation methods based on Vue. But I'm not sure about the compatibility because Vue2/3 already require a higher browser version. Personally, I don't recommend it and still use the traditional engineering method. The theme switching feature is not difficult; it's just troublesome, especially if you start this feature when the project is already 70% developed. That would be quite painful.</p>

  <strong style="display: block;margin-top:0.0704rem">First method: Sacrifice initial load time, load all theme CSS files on the home page, and switching will be fast.</strong>
  <p>1. Implementation idea: Each time you switch themes, simply change the class of the body tag to the corresponding theme name, effectively overriding the styles.</p>

  <div style="width:100%;background:#111;color:#ccc;border-radius:0.1408rem;margin-top:0.1408rem">
    <pre><code>
      /* Theme--Light */
      body.day .box {
        color: #f90;
        background: #fff;
      }
      /* Theme--Dark */
      body.dark .box {
        color: #eee;
        background: #333;
      }
      .box {
        width: 100px;
        height: 100px;
        border: 1px solid #000;
      }
      &lt;/style&gt;

      &lt;div class="box"&gt;
        &lt;p&gt;hello&lt;/p&gt;
      &lt;/div&gt;

      &lt;p&gt;
        Select style:
        &lt;button onclick="change('day')"&gt;day&lt;/button&gt;
        &lt;button onclick="change('dark')"&gt;dark&lt;/button&gt;
      &lt;/p&gt;

      function change(theme) {
        document.body.className = theme;
      }
    </code></pre>
  </div>

  <strong style="display: block;margin-top:0.0704rem">Second method: Sacrifice switch time, reduce the initial load pressure. Load files on demand, for example, if I want blue, load the blue theme file, and if I want black, load the black theme file.</strong>
  <p>1. Verbose: I saw this method introduced on Zhang Xinxu's blog. For example, before we used Vue or React, we wrote an index.html file with HTML in the body tag, JS in the script tag, and CSS introduced through the link tag (the link tag is a tag for introducing external resources).</p>
  <p>2. Implementation idea: Create a link tag and dynamically switch the href attribute of the link tag when switching themes.</p>

  <div style="width:100%;background:#111;color:#ccc;border-radius:0.1408rem;margin-top:0.1408rem">
    <pre><code>
      function writeLink(id = 'linkCss', href) {
          const oldStyleDom = document.getElementById(id)
          const linkDom = document.createElement('link')
          linkDom.href = href
          linkDom.rel = "stylesheet"
          linkDom.type = "text/css"
          linkDom.id = id
          oldStyleDom ? document.head.replaceChild(linkDom, oldStyleDom) : document.head.appendChild(linkDom)
      }
    </code></pre>
  </div>

  <strong style="display: block;margin-top:0.0704rem">Third method: Using ElementUI and AntDesign</strong>
  <p>1. Now most of our projects are built using ElementUI and AntDesign, paired with Vue or React.</p>
  <p>2. Implementation idea: For light and dark themes, write a separate CSS file for each, defining colors for each functional category, and use var(...) in specific components.</p>
  <p>3. Underlying implementation principle: Each component traverses the corresponding CSS file, finds the same-named color variable, and displays it accordingly.</p>

  <img style="width:100%;margin-top:0.1408rem;" src="https://motiandalou.github.io/images/29.png" />
  <img style="width:100%;margin-top:0.1408rem;" src="https://motiandalou.github.io/images/30.png" />

  <strong style="display: block;margin-top:0.0704rem">Fourth method: New way in Vue3</strong>
  <p>1. Although this method has limitations (it can only be used in Vue), it is quite good, equivalent to making CSS dynamic. You can encapsulate it globally and control it with variables. Otherwise, like Vue2 or other frameworks that do not provide this method, you have to write vanilla JS to dynamically control it.</p>
  <p>2. Implementation idea: Essentially, bind CSS variables to elements and call CSSStyleDeclaration.setProperty to update the CSS variable values when the bound data is updated.</p>

  <div style="width:100%;background:#111;color:#ccc;border-radius:0.1408rem;margin-top:0.1408rem">
    <pre><code>
      &lt;script setup&gt;
        const theme = {
          color: 'red'
        }
      &lt;/script&gt;

      &lt;template&gt;
        &lt;p&gt;hello&lt;/p&gt;
      &lt;/template&gt;

      &lt;style scoped&gt;
        p {
          color: v-bind('theme.color');
        }
      &lt;/style&gt;
    </code></pre>
  </div>

  <p style="margin-top:0.0704rem">Conclusion: With the emergence of new technologies and new methods (such as SCSS + mixin + class switching / CSS variables + dynamic setProperty), there is no best method, only the most suitable one.</p>
</div>
    `,
    blog03: `
      <div class="title">RN Environment Setup, Project Creation, Development Pitfalls, Packaging, and Release</div>
<span class="label">React Native</span>
<div class="modal-body-content">
  <p class='mt20'>Background: The company's self-developed disaster recovery project has accompanying mini-programs and APPs.</p>

  <strong style="display: block;margin-top:0.0704rem">1. Environment Setup</strong>

  <p class='mt20'>(1). Prerequisite: Need a proxy for scientific internet access, as downloading from foreign websites can be slow. The proxy I used is relatively fast, and it took about an hour to download everything.</p>
  <p>(2). Essential software: Node (version >= 14), JDK (version >= 1.8), Android Studio (foreign website)</p>
  <p>(3). Reference URL: <a style="font-size:0.15rem" href="https://blog.csdn.net/jin_mu_yan/article/details/130729266">https://blog.csdn.net/jin_mu_yan/article/details/130729266</a>
  This article is well-written and covers the entire process of downloading and installing the environment.</p>
  

  <strong style="display: block;margin-top:0.0704rem">2. Project Creation</strong>

  <p>Reference URL: <a style="font-size:0.15rem" href="https://zhuanlan.zhihu.com/p/213878203">https://zhuanlan.zhihu.com/p/213878203</a></p>
  <p>Create an RN project by following the second half of the article. After creation, there may be some pitfalls, which I summarize below.</p>

  <p class='mt20'>Create a project with a specified version. By default, it installs the latest version, and some dependencies may report errors. Command: npx react-native init MyApp –version 0.68.2</p>

  <p>1. Android studio emulator freeze: <a style="font-size:0.15rem" href="https://blog.csdn.net/jackzhouyu/article/details/129118272">https://blog.csdn.net/jackzhouyu/article/details/129118272</a></p>

  <p>2. Unable to start the daemon process: <a style="font-size:0.15rem" href="https://blog.csdn.net/m0_65065082/article/details/130347653">https://blog.csdn.net/m0_65065082/article/details/130347653</a></p>

  <p>3. Do not use Chinese in any directory level!!!! (Huge pitfall, the errors reported are misleading. I realized it was due to the path not being resolved in the CMD window, so I thought it couldn't be written in Chinese...)</p>

  <p class='mt20'>PS: Create a project: npx react-native init MyApp –version 0.68.2</p>

  <p>PS: Start the project: yarn react-native run-android</p>

  <p>PS: It is recommended to use yarn.</p>
  <p class='mt20'>Pitfalls encountered during the project:</p>

  <p>Continuously updating...</p>
  <p class='mt20'>Packaging: Just started the project, haven't gotten here yet... will be improved later.</p>

  <p>Android packaging: <a style="font-size:0.15rem" href="http://www.taodudu.cc/news/show-1153293.html?action=onClick">http://www.taodudu.cc/news/show-1153293.html?action=onClick</a></p>

  <p>iOS packaging:</p>

  <p>Continuously updating...</p>
  <p class='mt20'>Release: Finally release to the app store, just started the project, haven't gotten here yet...</p>

  <p>Continuously updating...</p>
</div>
    `,
    blog04: `
     <div class="title">Vue2 index.html / App.vue / main.js Roles</div>
<span class="label">Vue2</span>
<span class="label">ElementUI</span>
<div class="modal-body-content">
  <p>When creating any Vue project, there are three default files.</p>
  <p>Here, I will organize some minor details that seem unnoticeable.</p>
  <p>Clarifying these helps to connect the context and serve as a bridge between sections. Especially when reading the source code, understanding how files are loaded and mounted, and if you were to write your own Vue, the first step would be clear.</p>
  
  <strong style="display: block;margin-top:0.0704rem">index.html - Home Page, Project Entry Point</strong>

  <p>Role: The main entry point of the website.</p>
  <p>When you open a Vue website, the first thing that happens is opening this page. If conditions permit, that is, if Vue has not loaded yet (which may happen on computers with poor performance or in poor network conditions), it will briefly display the content of index.html (blank if not written).</p>

  <img style="width:100%;margin-top:0.1408rem;" src="https://motiandalou.github.io/images/26.png" />

  <strong style="display: block;margin-top:0.0704rem">App.vue - Root Component</strong>

  <p>Role: The main component of your Vue project.</p>

  <p>App.vue is used to write the initial template code. All pages and components you write will be mounted on this DOM element. You can think of it as your entire Vue project.</p>

  <img style="width:100%;margin-top:0.1408rem;" src="https://motiandalou.github.io/images/28.png" />

  <strong style="display: block;margin-top:0.0704rem">main.js</strong>

  <p>Role: main.js is used to create a new Vue instance and mount the template content from App.vue to index.html (index.html exists independently of Vue. To make the Vue framework work, that is, how to display it, it needs to be inserted as a DOM element into the webpage).</p>

  <p>During project runtime, main.js serves as the entry file. It finds the instance's mounting point in index.html, allowing the Vue framework to take its first step successfully. The source code can then continue to be written...</p>

  <p>The content at the mounting point in index.html will be displayed, but it will soon be replaced by the content in the template of the component (components: App) in the new Vue instance, which is why we see the content of index.html for a moment.</p>

  <p>This file is also the place where external files are introduced, such as ElementUI, axios, etc.</p>

  <img style="width:100%;margin-top:0.1408rem;" src="https://motiandalou.github.io/images/27.png" />

  <p class="mt20">These three are not isolated and can be connected.</p>
</div>
    `,
    blog05: `
     <div class="title">8 Methods of Data Transfer in Vue 2</div>
<span class="label">NPM</span>
<span class="label">dragmate</span>
<div class="modal-body-content">
Summary:<br/>
Common usage scenarios can be categorized into three types:<br/>
(1). These 8 methods are frequently used in projects, but usage should depend on context. If everything is used indiscriminately, data management becomes chaotic. In large team projects that evolve over years, this can lead to a "code mountain".<br/>
(2). I'm personally a minimalist — the simpler the code structure and logic, the better for maintenance. There are many ways to implement a function. Within a team, it's best to discuss and stick to one approach. That way, if your colleague is on leave and you need to fix a bug for them, it reduces development overhead. Team communication is key.<br/>
(3). In team collaboration, maintainable code should always be the top priority.<br/><br/>

1. Parent-child communication: 5 methods — props, $parent/$children, provide/inject, ref, $attrs/$listeners<br/>
2. Sibling communication: 2 methods — eventBus, Vuex via child → parent → child (deep nesting not recommended)<br/>
3. Cross-level communication: 4 methods — eventBus, Vuex, provide/inject, $attrs/$listeners<br/><br/>

1st Method: Parent to Child: props; Child to Parent: $emit<br/>
2nd Method: $children / $parent<br/>
3rd Method: provide / inject (local updates)<br/>
4th Method: ref / refs<br/>
5th Method: eventBus<br/>
6th Method: Vuex<br/>
7th Method: localStorage / sessionStorage<br/>
8th Method: $attrs and $listeners<br/>

<strong>Method 1: Parent to Child & Child to Parent Communication</strong><br/>
Parent to Child: props<br/>
<img src="https://motiandalou.github.io/images/1.png" style="width:100%;margin-top:0.1408rem;" />

Child to Parent: $emit<br/>
<img src="https://motiandalou.github.io/images/2.png" style="width:100%;margin-top:0.1408rem;" />

Advanced: With modifiers<br/>
<pre>
  &lt;HelloWorld :money.sync="dataApp"&gt;&lt;/HelloWorld&gt;
</pre>
Equivalent to:<br/>
<pre>
  &lt;HelloWorld :money="dataApp" v-on:update:money="dataApp = $event"/&gt;
</pre>
<img src="https://motiandalou.github.io/images/3.png" style="width:100%;margin-top:0.1408rem;" />

<strong>Method 2: $children / $parent</strong><br/>
Only works between parent and child components.<br/>
Child can access parent via this.$parent<br/>
Parent can access child via this.$children[0]<br/>
<img src="https://motiandalou.github.io/images/4.png" style="width:100%;margin-top:0.1408rem;" />

<strong>Method 3: provide / inject</strong><br/>
Concept:<br/>
Introduced in Vue 2.2.0, provide allows a parent to expose data, and inject allows any descendant to receive it—regardless of nesting depth. No need to pass via props.<br/>
Example: Component A → B → C. A provides, both B and C can inject the same value.<br/>
Pros: Allows grandparent-grandchild communication without props.<br/>
Cons: Adds an unnecessary layer when skipping generations.<br/>
<img src="https://motiandalou.github.io/images/5.png" style="width:100%;margin-top:0.1408rem;" />
In teams, this can be combined with mixins for scalable development.<br/>

<strong>Method 4: ref / refs</strong><br/>
<a href="https://www.cnblogs.com/goloving/p/9404099.html" style="font-size:0.15rem">https://www.cnblogs.com/goloving/p/9404099.html</a><br/>
Two main use cases:<br/>
- On regular DOM elements: ref points to the DOM node.<br/>
- On child components: ref points to the component instance, allowing access to its methods and data.<br/>
Use case: Using v-for with ref to collect a list of DOM nodes (e.g., accordion panels).<br/>
<img src="https://motiandalou.github.io/images/6.png" style="width:100%;margin-top:0.1408rem;" />
<img src="https://motiandalou.github.io/images/7.png" style="width:100%;margin-top:0.1408rem;" />

<strong>Method 5: eventBus</strong><br/>
All components share a central event hub for emitting/listening.<br/>
Cons: Hard to maintain in large projects (events get lost).<br/>
Issue: On first page route switch, no output in console; only appears from second navigation onward. Reason: Component lifecycle.<br/>
Solution: Emit events in beforeDestroy of the source component.<br/>
<img src="https://motiandalou.github.io/images/8.png" style="width:100%;margin-top:0.1408rem;" />

Explanation: Page B isn’t created when A emits the event, so B doesn’t receive it. But if you emit in A’s beforeDestroy, B has already mounted.<br/>
Code setup:
<pre><code>
// Step 1: In main.js
Vue.prototype.$EventBus = new Vue();

// Step 2: Emit in the source component
beforeDestroy() {
  setTimeout(() => {
    this.$EventBus.$emit("new", "lsy");
  }, 0);
  // OR
  this.$nextTick(() => {
    this.$EventBus.$emit("new", "lsy");
  });
}

// Step 3: Listen in target component
mounted() {
  this.$EventBus.$on("new", (e) => {
    this.name = e;
    console.log(e);
  });
}
beforeDestroy() {
  // Unregister listener
  this.$EventBus.$off("new", "");
}
</code></pre>

<strong>Method 6: Vuex</strong><br/>
What is Vuex?<br/>
Vuex is a state management pattern designed specifically for Vue.<br/>
Solves two problems:<br/>
1. Multiple views depend on the same state<br/>
2. Actions from different views affect the same state<br/>
It shifts focus from data flow to state changes.<br/>

Vuex includes 5 core modules:<br/>
1. state: Stores shared/global data<br/>
2. getters: Like computed properties for processing state data<br/>
3. mutations: Synchronous state updates<br/>
4. actions: Asynchronous operations<br/>
5. modules: Organize store into separate submodules with their own state, mutations, etc.<br/>
index.js:<br/>
<img src="https://motiandalou.github.io/images/9.png" style="width:100%;margin-top:0.1408rem;" />
<img src="https://motiandalou.github.io/images/10.png" style="width:100%;margin-top:0.1408rem;" />

Modular structure:<br/>
<img src="https://motiandalou.github.io/images/11.png" style="width:50%;margin-top:0.1408rem;" />



      <!-- 模块化展示 -->
<h3>Modularization:</h3>
<img style="width:50%;margin-top:0.1408rem;" src="https://motiandalou.github.io/images/11.png"/>
<img style="width:100%;margin-top:0.1408rem;" src="https://motiandalou.github.io/images/12.png"/>
<img style="width:100%;margin-top:0.1408rem;" src="https://motiandalou.github.io/images/13.png"/>
<img style="width:100%;margin-top:0.1408rem;" src="https://motiandalou.github.io/images/14.png"/>
<img style="width:100%;margin-top:0.1408rem;" src="https://motiandalou.github.io/images/15.png"/>

<!-- localStorage / sessionStorage -->
<h3 style="margin-top:1em;">Method 7: localStorage / sessionStorage</h3>
<p>
  <strong>Disadvantage:</strong> This communication method is simple, but the downside is that the data and state can become messy and hard to maintain.<br/>
  <strong>Solution:</strong> Combine <code>localStorage</code> or <code>sessionStorage</code> with Vuex. Store data persistently using localStorage, and use Vuex to manage global state clearly. This is a common practice in real-world projects.
</p>

<p><strong>Use Case 1:</strong></p>
<ol>
  <li>Fill out form data using <code>v-model</code> and save it locally when the submit button is clicked.</li>
  <li>At the same time, store the same value in Vuex.</li>
  <li>Vuex's <code>state</code> clearly manages global state, and upon reinitialization, it will prioritize localStorage.</li>
  <li>In practice, you might receive a token from the backend which is stored locally and used for login verification on every request.</li>
</ol>

<img style="width:100%;margin-top:0.1408rem;" src="https://motiandalou.github.io/images/16.png"/>
<img style="width:100%;margin-top:0.1408rem;" src="https://motiandalou.github.io/images/17.png"/>
<img style="width:100%;margin-top:0.1408rem;" src="https://motiandalou.github.io/images/18.png"/>
<img style="width:100%;margin-top:0.1408rem;" src="https://motiandalou.github.io/images/19.png"/>

<!-- $attrs / $listeners -->
<h3 style="margin-top:1em;">Method 8: $attrs and $listeners</h3>

<p>
  <strong>Problem Solved:</strong> Passing props or methods across multiple component levels. For example: X → Y → Z, where X needs to pass props to Z, or Z needs to pass a method back to X.
</p>

<p><strong>Typical Approaches:</strong></p>
<ul>
  <li><strong>Option 1:</strong> Use props to pass values level by level. If component D wants to update component A, use events to emit upward one level at a time.</li>
  <li><strong>Option 2:</strong> Use an eventBus. This works in some cases, but in collaborative development, it’s hard to maintain and lacks readability.</li>
  <li><strong>Option 3:</strong> Use Vuex. However, if you're just passing data without processing, Vuex might be overkill.</li>
</ul>

<p><strong>Forward binding with <code>$attrs</code>:</strong></p>
<img style="width:100%;margin-top:0.1408rem;" src="https://motiandalou.github.io/images/20.png"/>
<img style="width:100%;margin-top:0.1408rem;" src="https://motiandalou.github.io/images/21.png"/>
<img style="width:100%;margin-top:0.1408rem;" src="https://motiandalou.github.io/images/22.png"/>

<p><strong>Reverse binding with <code>$listeners</code>:</strong></p>
<img style="width:100%;margin-top:0.1408rem;" src="https://motiandalou.github.io/images/23.png"/>
<img style="width:100%;margin-top:0.1408rem;" src="https://motiandalou.github.io/images/24.png"/>
<img style="width:100%;margin-top:0.1408rem;" src="https://motiandalou.github.io/images/25.png"/>

<!-- inheritAttrs -->
<h3 style="margin-top:1em;">Understanding <code>inheritAttrs</code> in Vue</h3>
<p>
  For more details: 
  <a style="font-size:0.15rem" href="https://blog.csdn.net/qq_38211541/article/details/105824684" target="_blank">
    https://blog.csdn.net/qq_38211541/article/details/105824684
  </a>
</p>

<p><strong>Summary:</strong> When X passes props using <code>$attrs</code>, component Z will receive all the attributes. Two scenarios:</p>
<ul>
  <li><strong>Scenario 1:</strong> When <code>inheritAttrs = true</code>, Z will inherit all attributes.</li>
  <li><strong>Scenario 2:</strong> When <code>inheritAttrs = false</code>, Z will not inherit any attributes on its DOM node.</li>
</ul>
<p>Note: Both values of <code>inheritAttrs</code> do not affect the value of <code>$attrs</code> itself. It only controls whether DOM inherits the parent’s attributes.<br/>
Usage: Add it to components Y and Z.</p>

      </div>
    `,
    blog06: `
      <div class="title">The Power of Fund Portfolios</div>
<span class="label">Vue2</span>
<div class="modal-body-content">
  <p class="mt20">
    Once you've gained knowledge of stock funds, bond funds, money market funds, and commodities — and have started actually investing — you'll realize the power of portfolio diversification. A single fund doesn't offer much risk resistance, but a well-constructed portfolio does. A properly balanced investment portfolio can achieve steady growth over time.
    For example, in the A-shares market, not all stocks rise or fall together. Some are positively correlated, while others are negatively correlated. A diversified fund portfolio offers much better risk resistance than buying a single fund. Of course, selecting the right funds in the portfolio is key — but that's a topic for another time.
  </p>

  <strong style="display: block;margin-top:0.0704rem">⭐1. Strategy One: Ray Dalio's All-Weather Strategy</strong>
  <p>– Stocks (30%): Track CSI 300 Index</p>
  <p>– Bonds (55%): Track ChinaBond Composite Index</p>
  <p>– Gold (7.5%): Use a Gold ETF</p>
  <p>– Commodities (7.5%): Use a Commodities ETF</p>
  <p>Rebalance at least once a year.</p>

  <strong style="display: block;margin-top:0.0704rem">⭐2. Strategy Two: Low Correlation</strong>
  <p>Equity Funds</p>
  <p>Bond Funds</p>
  <p>Commodity Funds</p>

  <p>How to allocate?</p>
  <p>1. Conservative: 20% equity + 60% bonds + 20% commodities</p>
  <p>2. Aggressive: 50% equity + 30% bonds + 20% commodities</p>
  <p>3. Highly Aggressive: 70% equity + 10% bonds + 20% commodities</p>

  <p>Rebalance at least once a year.</p>

  <strong style="display: block;margin-top:0.0704rem">How to choose the right fund types?</strong>

  <strong style="display: block;margin-top:0.0704rem">(1). Equity Funds:</strong>
  <p>"Double Ten" Fund Managers (5 funds): Track records of over 10 years + Annualized returns over 10% + Max drawdown under 35%</p>
  <p>5-Year Outperformers (5 funds): Tenure between 5 and 10 years + Annualized returns over 25%</p>
  <p>Emerging Managers (5 funds): Tenure between 3 and 5 years + Annualized returns over 50%</p>

  <strong style="display: block;margin-top:0.0704rem">(2). Bond Funds (5 funds):</strong>
  <p>Maximum drawdown under 5%, with annual returns above 6% as the standard.</p>

  <strong style="display: block;margin-top:0.0704rem">(3). Commodity Funds:</strong>
  <p>Select 5 funds that have been established for over 3 years, including Commodity Funds, Silver Funds, Gold ETFs, Commodity ETFs, and the Harvest Crude Oil Fund.</p>
  <p>The role of commodity funds is to prevent a double drawdown in both stocks and bonds.</p>
</div>

    `,
    blog07: `
      <div class="title">How to Buy Stock Funds -- Active Funds</div>
<span class="label">Vue</span>
<span class="label">chart.js</span>
<div class="modal-body-content">
  Preface:  
  I have a daily habit. Every night around 9 p.m., I check the WeChat public account "Bank Screw" for daily updates on fund-related articles. I am a fan of "Bank Screw". I have read the two books he wrote. His investment value philosophy enlightened me, and I highly agree with it.<br/>
  In fact, most of my funds in real life are invested according to this philosophy. He is like a teacher I’ve never met.<br/>
  I'm very grateful. Personally, I have organized the knowledge from the books based on my current knowledge and vision, and documented it.<br/>
  A good memory is not as reliable as a written note. Also, books always bring new insights when reread.<br/><br/>

  Book: Guide to Active Fund Investing<br/><br/>

  Buying active funds (heavily depends on the ability of the fund manager)<br/><br/>

  Formula: Good Fund + Good Price + Long-Term Holding = Good Return<br/><br/>

  (1). How to choose a good fund? (As mentioned often in the book: buying a fund is buying the fund manager)<br/>
  — Common fund companies (those shown in the Alipay fund section are usually good companies)<br/>
  — Different companies have different investment styles (value, balanced, growth). I personally (stick to value style), find the company by style, then find excellent fund managers within the company.<br/><br/>
  — Excellent fund managers: veterans (annualized return ≥ 15% (average stock fund annual return is 14%) + experience ≥ 10 years + fund size ≥ 2 billion yuan)<br/>
  + dark horses (apprentices of veterans / short experience – can’t be seen for now, just based on intuition...)<br/><br/>

  (2). How to choose a good price?<br/>
  — By style (Alipay): value style refers to CSI 300, Value 300 index, and other indexes that start with the word "value". Value-style funds should be bought when undervalued. When the index is undervalued, value-style funds are usually also undervalued.<br/><br/>
  — Screw Rating (WeChat ID: Bank Screw → Index Valuation → Today's Valuation) to get Screw Rating. Do SIP (Systematic Investment Plan) at 4–5 stars.<br/><br/>

  (3). Long-term holding<br/>
  When undervalued, stick to periodic investment.<br/>
  Never buy and sell frequently or chase highs and sell lows.<br/>
  No need to check every day. Once a month is enough.<br/>
  Mindset is very important.<br/>
  Actually, I check every day. For me, ups and downs are just a daily pastime.<br/>
  Now, ups and downs don’t affect my emotions at all.<br/>
  Not delighted by external gains, not saddened by personal losses — this is my lifelong practice. In life, I always deliberately train myself.<br/><br/>

  ⭐ Screw Rating:<br/>
  4–5 stars (best, but rare opportunity), do SIP in stock funds when undervalued<br/>
  3 stars, consider taking profit, adjust stock fund ratio to (100 - your age), invest the profit into bond funds, maintain original ratio: stock fund : bond fund = (100 - age) : age<br/>
  2 stars, reduce stock fund ratio to 30%<br/>
  1 star, take profit on stock funds, sell all<br/>
  Buy all bond funds<br/><br/>

  ⭐ Investment Styles: Three main categories<br/>
  Value Style: low P/E ratio, low P/B ratio (in one sentence: stocks are cheapest)<br/>
  Growth Style: high P/E ratio, high P/B ratio, high profit growth, high growth rate (in one sentence: final rise after peaking)<br/>
  Balanced Style: valuation is neither high nor low, in the normal range (in one sentence: want low price of value style and good company of growth style — pick good and cheap stocks)<br/><br/>

  Check if an index is undervalued: Alipay → Funds → Index Selection → Index Ranking → click any index to see if it's undervalued.
</div>

    `,
    blog08: `
      <div class="title">How to Buy Stock Funds -- Passive Funds</div>
<span class="label">HTML</span>
<span class="label">CSS</span>
<span class="label">JavaScript</span>
<div class="modal-body-content">
  Preface: I have a daily habit. Every night around 9 p.m., I check the WeChat public account "Bank Screw" for daily updates on fund-related articles. I am a fan of "Bank Screw". I have read the two books he wrote. His investment value philosophy enlightened me, and I highly agree with it.<br/>
  In fact, most of my funds in real life are invested according to this philosophy. He is like a teacher I’ve never met.<br/>
  I'm very grateful. Personally, I have organized the knowledge from the books based on my current knowledge and vision, and documented it.<br/>
  A good memory is not as reliable as a written note. Also, books always bring new insights when reread.<br/><br/>

  Book: Guide to Index Fund Investing<br/><br/>

  What methods are there? Two types (Earnings Yield Method / Bogle Formula Method)<br/>
  1. Earnings Yield Method<br/>
  2. Bogle Formula Method (P/E Ratio)<br/>
  3. Bogle Formula Method (P/B Ratio)<br/><br/>

  Which indexes, and which methods should be used?<br/><br/>

  Earnings Yield Method:<br/>
  Shanghai 50 Index, Shanghai Dividend Index, Shanghai 50AH Index, China Dividend Index, Fundamental 50 Index, CCTV 50 Index, Hang Seng Index, H Shares Index<br/><br/>

  Bogle Formula Method (P/E Ratio):<br/>
  CSI 300 Index, CSI 500 Index, ChiNext Index, Dividend Opportunity Index, Consumer Staples Sector Index, Consumer Discretionary Sector Index, Healthcare Sector Index, Pension Sector Index<br/><br/>

  Bogle Formula Method (P/B Ratio):<br/>
  Securities Industry Index, Financial Sector Index, Non-Banking Financial Sector Index, Real Estate Sector Index<br/><br/>

  What is Earnings Yield Method, Bogle Formula Method (P/E Ratio), and Bogle Formula Method (P/B Ratio)?<br/><br/>

  Earnings Yield Method: Company earnings are stable. Look at the earnings yield (X)<br/>
  1. When X > 10%, invest in phases<br/>
  2. When 6.4% < X < 10%, stop buying, maintain existing fund shares<br/>
  3. When X < 6.4%, gradually sell the fund (to diversify risk)<br/><br/>

  Bogle Formula Method (P/E Ratio):<br/>
  1. When the company is growing rapidly, buy when undervalued (P/E ratio < 10 and high dividend yield)<br/><br/>

  Bogle Formula Method (P/B Ratio, recommended not to use for now, due to unstable earnings and difficulty in judgment):<br/>
  1. When a company’s earnings are unstable or cyclical, P/B ratio should be used to buy when undervalued<br/><br/>

  How to buy bond funds?<br/>
  Ten-year government bond interest rate: above 3.5%, buy long-duration bond funds. Below 3.5%, above 3.2%, buy short-duration bond funds (also reduce stock funds at the same time, since bond funds and stock funds move inversely).<br/>
  Ten-year government bond interest rate: when it falls below 2.6%, sell immediately.<br/><br/>

  How to choose an appropriate index fund product?<br/>
  — Low fees, low tracking error (the lower, the better), fund size at least 100 million yuan (to prevent liquidation)<br/><br/>

  ⭐ Long-term average returns of various funds in China:<br/>
  1. Money Market Funds: 2%–3% (for short-term SIP, use idle money)<br/>
  2. Bond Funds: 6.4% (for medium-term SIP)<br/>
  3. Stock Funds (Active): 14% (for long-term SIP) Stock Funds (Passive): 10% (for long-term SIP)<br/><br/>

  ⭐ Is the dividend yield high? 4%<br/>
  5% is considered high dividend, at least 3% is necessary to invest.<br/><br/>

  ⭐ Personally: The most direct approach, I invest in index funds by following the daily updates of *Bank Screw*, and do SIP with each month’s salary.<br/>
</div>

    `,
    blog09: `
       <div class="title">Dynamically Configure Protocol, Domain, and Port</div>
<span class="label">Vue</span>
<span class="label">ElementUI</span>
<div class="modal-body-content">
  Preface:  
  In a Vue project, the "public/static" folder is used to store static assets.<br/>  
  Webpack does not bundle files under the " public/static"  folder; it simply copies them. After building, you will see a folder in the package that looks exactly like " public/static" , containing your static files.<br/>  
  Both " public"  and " static"  folders can be configured to exclude them from bundling. Typically, projects use " static"  as the folder name. You can refer to how other projects in your company are set up—this is team writing. When everyone sees a filename, they immediately understand its meaning. It also reduces the reading cost for teammates.<br/><br/>  

  Implementation Steps:  
  In your custom Vue project, under the " public/static"  folder, create a " config.js"  file to configure protocol, domain, and port.<br/>  
  Then include this file in the " index.html"  entry file. This allows you to access the global configuration variable " PLATFORM_CONFIG"  defined in " config.js" .<br/>  
  Apply this " baseURL"  in your Axios config file.<br/><br/>  

  config.js file

  <div style="width:100%;background:#111;color:#ccc;border-radius:0.1408rem;margin-top:0.1408rem">
    <pre>
      <code>
        /**
         * @desc Protocol. If not set, defaults to current protocol.
         * @value 'http:', 'https:'
         *  */
        const protocol = "";
        /**
         * @desc Domain or IP address. If not set, defaults to current address.
         *  */
        const host = "10.0.3.169";
        /**
         * @desc Port. If not set, defaults to current port.
         *  */
        const port = "8089";

        // API configuration
        const api_protocol = protocol || window.location.protocol;
        const api_host = host || window.location.hostname;
        const api_port = port || window.location.port;

        let PLATFORM_CONFIG = {
          // Base URL
          baseURL: api_protocol + "//" + api_host + ":" + api_port,
          // API request timeout
          timeout: "1000"
        };
      </code>
    </pre>
  </div>

  index.html file<br/>
  <div>

  <!DOCTYPE html>
  <html>
  <head>
      <meta charset="utf-8">
      <title>Code Demo</title>
      <style>
          .code-container {
              background: #111;
              border: 1px solid #ddd;
              border-radius: 4px;
              padding: 15px;
              font-family: Consolas, Monaco, 'Courier New', monospace;
              white-space: pre;
              overflow-x: auto;
              color: #ccc;
              line-height: 1.5;
              margin: 0.1408rem;                    
          }
      </style>
  </head>
  <body>
      <div class="code-container">
  &lt;!DOCTYPE html&gt;
  &lt;html&gt;
      &lt;head&gt;
          &lt;meta charset=&quot;utf-8&quot; /&gt;
          &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width,initial-scale=1.0&quot; /&gt;
          &lt;title&gt;Personal Website&lt;/title&gt;
          &lt;!-- Import the API config file --&gt;
          &lt;script src=&quot;./public/config.js&quot;&gt;&lt;/script&gt;
      &lt;/head&gt;
      &lt;body&gt;
          &lt;div id=&quot;app&quot;&gt;&lt;/div&gt;
      &lt;/body&gt;
  &lt;/html&gt;
      </div>
  </body>
  </html>

  </div>
</div>
    `,
    blog10: `
      <div class="title">Internationalization (Vue2 + ElementUI)</div>
<span class="label">Vue</span>
<span class="label">ElementUI</span>
<div class="modal-body-content">
  <!DOCTYPE html>
  <html>
  <head>
      <meta charset="UTF-8">
      <title>Vue I18n Internationalization Configuration Guide</title>
      <style>
          
          h1, h2, h3 {
              color: #2c3e50;
          }
          pre {
              background-color: #f5f5f5;
              padding: 15px;
              border-radius: 4px;
              overflow-x: auto;
              font-family: 'Courier New', monospace;
          }
          code {
              background-color: #f5f5f5;
              padding: 2px 4px;
              border-radius: 3px;
              font-family: 'Courier New', monospace;
          }
          .code-block {
              background-color: #f8f8f8;
              border-left: 4px solid #42b983;
              padding: 15px;
              margin: 15px 0;
              overflow-x: auto;
          }
          .note {
              background-color: #e7f5ff;
              border-left: 4px solid #1890ff;
              padding: 12px;
              margin: 15px 0;
          }
      </style>
  </head>
  <body>
      <h1>Vue I18n Internationalization Configuration Guide</h1>

      <h2>Step 1: Install</h2>
      <p>First download the internationalization package, note the version:</p>
      <pre><code>npm i vue-i18n@8.28.2</code></pre>

      <h2>Step 2: Configuration and Usage</h2>
      <h3>Language Package File Structure</h3>
      <p>Create a new <code>i18n</code> directory in the <code>src</code> directory, containing the following language package files:</p>

      <h4>en.json (English)</h4>
      <pre><code>{
  "common": {
    "username": "username: {name}",
    "password": "password",
    "save": "save",
    "edit": "edit",
    "update": "update",
    "delete": "delete",
    "forever": "forever",
    "expired": "expired"
  }
}</code></pre>

      <h4>zh.json (Simplified Chinese)</h4>
      <pre><code>{
  "common": {
    "username": "用户名: {name}",
    "password": "密码",
    "save": "保存",
    "edit": "编辑",
    "update": "更新",
    "delete": "删除",
    "forever": "永久",
    "expired": "过期"
  }
}</code></pre>

      <h4>tw.json (Traditional Chinese)</h4>
      <pre><code>{
  "common": {
    "username": "用戶名: {name}",
    "password": "密碼",
    "save": "保存",
    "edit": "編輯",
    "update": "更新",
    "delete": "刪除",
    "forever": "永久",
    "expired": "過期"
  }
}</code></pre>

      <h3>i18n Configuration File</h3>
      <p>Create a new <code>index.js</code> file in the <code>i18n</code> directory:</p>
      <pre><code>import Vue from "vue";
import VueI18n from "vue-i18n";
// Import Element UI language packs
import elementEnLocale from "element-ui/lib/locale/lang/en";
import elementZhLocale from "element-ui/lib/locale/lang/zh-CN";
// Import project language packs
import enLocale from "./en";
import zhLocale from "./zh";

Vue.use(VueI18n);

const messages = {
  en: {
    ...enLocale,
    ...elementEnLocale
  },
  zh: {
    ...zhLocale,
    ...elementZhLocale
  }
};

const i18n = new VueI18n({
  locale: localStorage.getItem("language") || "zh",
  messages,
  fallbackLocale: "zh",
  numberFormats: {
    en: {
      currency: {
        style: "currency",
        currency: "USD"
      }
    },
    zh: {
      currency: {
        style: "currency",
        currency: "JPY",
        currencyDisplay: "symbol"
      }
    }
  },
  dateTimeFormats: {
    en: {
      short: {
        year: "numeric",
        month: "short",
        day: "numeric"
      },
      long: {
        year: "numeric",
        month: "short",
        day: "numeric",
        weekday: "short",
        hour: "numeric",
        minute: "numeric"
      }
    },
    zh: {
      short: {
        year: "numeric",
        month: "short",
        day: "numeric"
      },
      long: {
        year: "numeric",
        month: "short",
        day: "numeric",
        weekday: "short",
        hour: "numeric",
        minute: "numeric"
      }
    }
  }
});

export default i18n;</code></pre>

      <h2>Step 3: Main Entry File Configuration</h2>
      <p>Import the internationalization configuration in <code>main.js</code>:</p>
      <pre><code>import Vue from "vue";
import App from "./App";
import router from "./router";
import "@/assets/css/common.css";
import "@/assets/css/cover.less";
import ElementUI from "element-ui";
import { i18n, loadLanguageAsync } from "./i18n";

Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
  el: "#app",
  router,
  components: { App },
  i18n,
  template: "&lt;App/&gt;"
});

// Router interception
router.beforeEach((to, from, next) => {
  const lang = to.params.lang || "zh";
  loadLanguageAsync(lang).then(() => next());
});</code></pre>

      <h2>Vue I18n Usage</h2>
      <h3>Basic Usage</h3>
      
      <div class="code-block">
          <p><strong>1. In Template:</strong></p>
          <code>{{ $t('common.save') }}</code>
      </div>

      <div class="code-block">
          <p><strong>2. In JavaScript:</strong></p>
          <code>this.$t('common.save')</code>
      </div>

      <h3>Dynamic Parameters</h3>
      <pre><code>{{ $t("common.username", { name: "Liu Yifei" }) }}</code></pre>

      <h3>Date Formatting</h3>
      <pre><code>&lt;!-- July 23, 2023 --&gt;
&lt;p&gt;{{ $d(new Date(), "short") }}&lt;/p&gt;

&lt;!-- Sun, Jul 23, 2023 21:32 --&gt;
&lt;p&gt;{{ $d(new Date(), "long") }}&lt;/p&gt;</code></pre>

      <h3>Number Formatting</h3>
      <pre><code>&lt;!-- $100.00 --&gt;
&lt;p&gt;{{ $n(100, 'currency') }}&lt;/p&gt;

&lt;!-- ￥100 --&gt;
&lt;p&gt;{{ $n(100, 'currency', 'zh') }}&lt;/p&gt;</code></pre>

      <h2>Dynamically Load Language Pack</h2>
      <pre><code>// Set internationalization language
function setI18nLanguage(lang) {
  i18n.locale = lang;
  axios.defaults.headers.common["Accept-Language"] = lang;
  document.querySelector("html").setAttribute("lang", lang);
  return lang;
}

export function loadLanguageAsync(lang) {
  if (i18n.locale === lang) {
    return Promise.resolve(setI18nLanguage(lang));
  }

  if (loadedLanguages.includes(lang)) {
    return Promise.resolve(setI18nLanguage(lang));
  }

  return import("./lang/lang.json").then(messages => {
    i18n.setLocaleMessage(lang, messages.default);
    loadedLanguages.push(lang);
    return setI18nLanguage(lang);
  });
}</code></pre>

      <h2>Recommended Development Tools</h2>
      <p>Using the VS Code plugin <a style="font-size:0.15rem" href="https://marketplace.visualstudio.com/items?itemName=antfu.i18n-ally" target="_blank">i18n Ally</a> can simplify internationalization development:</p>
      <pre><code>&lt;!-- Before --&gt;
&lt;div&gt;{{ $t("common.edit") }}&lt;/div&gt;

&lt;!-- After --&gt;
&lt;div&gt;{{ $t("编辑") }}&lt;/div&gt;</code></pre>

      <div class="note">
          <p>For more details, please refer to the <a style="font-size:0.15rem" href="https://kazupon.github.io/vue-i18n/zh/" target="_blank">Vue I18n Official Documentation</a></p>
      </div>
  </body>
  </html>
</div>

    `,
    blog11: `
     <div class="title">filter(Filter) Property</div>
<span class="label">Vue</span>
<span class="label">ElementUI</span>
<div class="modal-body-content">
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Usage of Filter Property</title>
      <style>
          h1, h2 {
              color: #333;
          }
          p, ul {
              color: #666;
          }
          code {
              background-color: #f9f9f9;
              border: 1px solid #ddd;
              padding: 2px 5px;
              font-family: monospace;
          }
          li {
              margin-bottom: 15px;
          }
      </style>
  </head>
  <body>
      <h1>Introduction</h1>
      <p>I don't use the filter property much in daily development, but I find it very useful, even magical. For some special styles, you'll find it's surprisingly simple to implement.</p>

      <h2>Definition</h2>
      <p>The filter property defines visual effects (like blur and saturation) on an element, commonly the <code>img</code> tag.</p>

      <h2>Syntax</h2>
      <p><code>filter: none | blur() | brightness() | contrast() | drop-shadow() | grayscale() | hue-rotate() | invert() | opacity() | saturate() | sepia() | url();</code></p>

      <h2>Common Properties and Syntax</h2>
      <ul>
          <li><strong>blur Gaussian blur (commonly used)</strong></li>
          <ul>
              <li><code>filter: blur(4px);</code></li>
              <li>Blur amount. Default is 0. The larger the value (in px), the blurrier it gets. Percentages are not allowed.</li>
          </ul>
          <li><strong>brightness Brightness (commonly used)</strong></li>
          <ul>
              <li><code>filter: brightness(200%);</code></li>
              <li>Brightness. Default is 1/100% (no change). 0 means fully black, 1 means no change. Higher values increase brightness (whiter).</li>
          </ul>
          <li><strong>contrast Contrast (commonly used)</strong></li>
          <ul>
              <li><code>filter: contrast(200%);</code></li>
              <li>Contrast. Default is 1/100% (no change). 0 means fully black. Higher values increase contrast (green is greener, yellow is yellower).</li>
          </ul>
          <li><strong>drop-shadow Shadow (important)</strong></li>
          <ul>
              <li><code>filter: drop-shadow(8px 8px 10px red);</code></li>
              <li>First parameter (required): X-axis offset (8px shifts right, negative values shift left)</li>
              <li>Second parameter (required): Y-axis offset (8px shifts down, negative values shift up)</li>
              <li>Third parameter (optional): Blur radius (default is 0). Must be > 0. Larger values increase blur.</li>
              <li>Fourth parameter (optional): Shadow color</li>
              <li>ps: Difference with box-shadow: inset + spread + multiple shadows</li>
              <li><code>box-shadow: (inset,8px 8px 10px spread red);</code></li>
              <li>inset: By default it's outer shadow. Set to inset for inner shadow.</li>
              <li>spread: Default is 0 (same size as element). Positive values expand shadow size, negative values shrink it.</li>
              <li>Multiple shadows: box-shadow values can be comma-separated. First one has highest z-index. Example: 8px, 16px, 24px like a target bullseye.</li>
              <li><code>box-shadow: 0 0 0 8px #f0f, 0 0 0 16px #d00, 0 0 0 24px #cdd;</code></li>
          </ul>
          <li><strong>grayscale Grayscale (commonly used)</strong></li>
          <ul>
              <li><code>filter: grayscale(50%);</code></li>
              <li>Grayscale. Default is 0 (no change). 100% is fully gray.</li>
          </ul>
          <li><strong>hue-rotate Hue rotation (not commonly used)</strong></li>
          <ul>
              <li><code>filter: hue-rotate(90deg);</code></li>
              <li>Applies hue rotation. Default is 0deg (no change). A full circle is 360deg. Effect varies and is hard to predict unless you know color theory.</li>
          </ul>
          <li><strong>invert Invert image (not commonly used)</strong></li>
          <ul>
              <li><code>filter: invert(100%);</code></li>
              <li>Inverts image. Default is 0 (no change), 50% is gray, 100% looks like a CT scan.</li>
          </ul>
          <li><strong>opacity Transparency (commonly used)</strong></li>
          <ul>
              <li><code>filter: opacity(30%);</code></li>
              <li>Opacity. Default is 0 (no change). 100% is fully transparent. Higher values = more transparent.</li>
          </ul>
          <li><strong>saturate Saturation (not commonly used)</strong></li>
          <ul>
              <li><code>filter: saturate(800%);</code></li>
              <li>Adjusts image saturation. Default is 100% (no change), 0 is fully desaturated. Higher values = more vibrant colors.</li>
          </ul>
          <li><strong>sepia Sepia tone (commonly used)</strong></li>
          <ul>
              <li><code>filter: sepia(100%);</code></li>
              <li>Applies sepia tone. Default is 0 (no change), 100% is fully sepia-toned.</li>
          </ul>
          <li><strong>url (Never used before, not sure if I’ll ever use it)</strong></li>
          <ul>
              <li><code>filter: url(svg-url#element-id);</code></li>
              <li>Default is 0. The larger the value (px), the blurrier it gets. Percentages not allowed.</li>
          </ul>
      </ul>

      <h2>Points to Note in Daily Frontend Development</h2>
      <ul>
          <li><code>grayscale</code> can be used to turn the entire site grayscale for special dates.</li>
          <li><code>drop-shadow</code> and <code>box-shadow</code> can be alternated or compared as needed for unexpected effects.</li>
          <li><code>opacity</code> (transparency for all elements) vs <code>rgba</code> (transparent backgrounds but opaque text) can be alternated as needed.</li>
          <li><code>sepia</code> can be used to create vintage-style photo effects.</li>
      </ul>
  </body>
  </html>
</div>

    `,
    blog12: `
      <div class="title">Flexbox Layout</div>
<span class="label">Vue</span>
<span class="label">ElementUI</span>
<div class="modal-body-content">
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <style>
        h1,
        h2 {
          color: #333;
        }
        p,
        ul {
          color: #666;
        }
        code {
          background-color: #f9f9f9;
          border: 1px solid #ddd;
          padding: 2px 5px;
          font-family: monospace;
        }
        li {
          margin-bottom: 15px;
        }
      </style>
    </head>
    <body>
      <h1>The Importance of Flexbox Layout</h1>
      <p>
        The <code>display: flex</code> layout plays a key role in adapting to
        visual areas on both PC and mobile platforms. It is a layout method we
        frontend developers frequently use in daily development.
      </p>
      <p>Here are 7 properties I often encounter in development:</p>

      <h2>Common Properties and Syntax</h2>
      <ul>
        <li><strong>flex-direction (very common)</strong></li>
        <ul>
          <li>
            <code
              >flex-direction: row (default) | row-reverse | column |
              column-reverse</code
            >
          </li>
          <li>row: Arranged horizontally from left to right (left aligned).</li>
          <li>
            row-reverse: Reversed horizontal arrangement (right aligned, last
            item appears first).
          </li>
          <li>column: Arranged vertically.</li>
          <li>
            column-reverse: Reversed vertical arrangement, last item appears on
            top.
          </li>
        </ul>
        <li><strong>flex-wrap (very common)</strong></li>
        <ul>
          <li>
            <code
              >flex-wrap: nowrap (default) | wrap | wrap-reverse | initial |
              inherit;</code
            >
          </li>
          <li>
            nowrap - No wrapping (single line). Flex items may overflow.
          </li>
          <li>
            wrap - Wrap to multiple lines. Overflowing items move to new line.
          </li>
          <li>wrap-reverse - Wraps in reverse order.</li>
        </ul>
        <li><strong>justify-content (very common)</strong></li>
        <ul>
          <li>
            <code
              >justify-content: flex-start | flex-end | center | space-between |
              space-around</code
            >
          </li>
          <li>
            flex-start: Items are packed toward the start of the main axis
            (default).
          </li>
          <li>
            flex-end: Items are packed toward the end of the main axis.
          </li>
          <li>
            center: Items are centered along the main axis. May overflow both
            sides if space is negative.
          </li>
          <li>
            space-between: Items are evenly distributed with first and last item
            aligned to container edges.
          </li>
          <li>
            space-around: Items are evenly distributed with equal spacing around
            them; edges get half spacing.
          </li>
        </ul>
        <li><strong>align-items (very common)</strong></li>
        <ul>
          <li>
            <code
              >align-items: flex-start | flex-end | center | baseline |
              stretch</code
            >
          </li>
          <li>
            flex-start: Items align to the start of the cross axis (vertical).
          </li>
          <li>flex-end: Items align to the end of the cross axis.</li>
          <li>
            center: Items are centered on the cross axis. May overflow both
            directions.
          </li>
          <li>
            baseline: Align based on text baseline if inline and cross axis are
            the same.
          </li>
          <li>
            stretch: Items stretch to fill the cross axis space, respecting
            min/max-width/height.
          </li>
        </ul>
        <li><strong>align-content (very common)</strong></li>
        <ul>
          <li>
            <code
              >align-content: flex-start | flex-end | center | space-between |
              space-around | stretch</code
            >
          </li>
          <li>stretch - Default. Lines stretch to fill remaining space.</li>
          <li>
            flex-start - Lines stack at the start of the flex container.
          </li>
          <li>flex-end - Lines stack at the end of the flex container.</li>
          <li>center - Lines stack in the center of the flex container.</li>
          <li>space-between - Lines are evenly distributed.</li>
          <li>
            space-around - Lines are evenly distributed with half spacing at the
            edges.
          </li>
        </ul>
        <li><strong>align-self (occasionally used)</strong></li>
        <ul>
          <li>
            <code
              >align-self: auto | flex-start | flex-end | center | baseline |
              stretch</code
            >
          </li>
          <li>
            auto: Inherits from parent’s <code>align-items</code> or defaults to
            stretch.
          </li>
          <li>
            flex-start: Aligns item to the start of the cross axis of its line.
          </li>
          <li>
            flex-end: Aligns item to the end of the cross axis of its line.
          </li>
          <li>
            center: Centers item on the cross axis. May overflow if space is too
            small.
          </li>
          <li>
            baseline: Aligns with the baseline of the line or similar to
            flex-start.
          </li>
          <li>
            stretch: Item stretches to fit the cross axis if size is set to
            auto.
          </li>
        </ul>
        <li><strong>flex (uncommon, tricky)</strong></li>
        <ul>
          <li>
            <code
              >flex: auto | initial | none | inherit | [flex-grow] ||
              [flex-shrink] || [flex-basis]</code
            >
          </li>
          <li>
            flex-start: Items are packed toward the start of the main axis
            (default).
          </li>
          <li>flex-end: Items are packed toward the end of the main axis.</li>
          <li>
            center: Items are centered along the main axis. May overflow both
            sides if space is negative.
          </li>
        </ul>
      </ul>
    </body>
  </html>
</div>

    `,
  };

  // 当前语言
  const userLang = localStorage.getItem("language") || "en";
  let modal = {};
  // 切换中文/英文
  switch (userLang) {
    // 英文
    case "en":
      modal = modalContent_en;
      break;
    // 中文
    case "zh":
      modal = modalContent_zh;
      break;

    default:
      break;
  }

  if (modal[id]) {
    // 渲染
    showModal(modal[id]);
    // 关闭弹窗
    setTimeout(() => {
      document.getElementById("modal-close").onclick = hideModal;
    });
  }
});

// 公司
document.querySelector("#dataListCompany").addEventListener("click", (e) => {
  // e.target.closest: 获取点击元素外层的元素
  const el = e.target.closest("[id^='company']");
  if (!el) return;

  const id = el.id;

  const modalContent_zh = {
    company01: `
      <div class="title">Gap Year</div>
      <span class="label">IELTS</span>
      <span class="label">Study Abroad</span>
      <span class="label">Study Tour</span>
      <span class="label">Independent Development</span>
      <div class="modal-body-content">
        <p class='mt20'>1. 辞职,上海新航道学习雅思.</p>
        <p>2. 获得美国伯克利城市学院offer,但是上海留学签证两次被拒.</p>
        <p>3. 加拿大,新西兰,留学未果.</p>
        <p>4. 着手爱尔兰学习英语口语,签证被拒.</p>
        <p>5. 最后菲律宾游学.</p>
      </div>
    `,
    company02: `
      <div class="title">上海盾壹科技有限公司</div>
      <span class="label">Full Time</span>
      <span class="label">On Site</span>
      <div class="card-box">
        <p class="card-left"></p>
        <p class="card-right">
          <span class="symbol">"</span>
          <span>盾壹科技是上海盾壹科技有限公司旗下品牌。盾壹科技是一家由国内知名机构千万级天使投资的初创公司，专注于软件定义基础架构（Software Defined Infrastructure）业务的新型技术企业，盾壹科技注重科技创新，致力于以中国技术力量影响开放平台生态系统，创建自主可控的底层设施，以主流的、先进的技术和产品为客户创造价值，提供企业级分布式软件定义存储产品，帮助客户实现数据中心架构革新。</span>
        </p>
      </div>
    `,
    company03: `
      <div class="title">上海瀚银信息技术有限公司</div>
      <span class="label">Full Time</span>
      <span class="label">On Site</span>
      <div class="card-box">
        <p class="card-left"></p>
        <p class="card-right">
          <span class="symbol">"</span>
          <span>瀚银科技是国内领先的移动支付、互联网支付专业化运营公司,获央行颁发《支付业务许可证》,提供支付为入口、场景为基础、数据为核心、生态为方向的综合金融云服务。</span>
        </p>
      </div>
    `,
  };
  const modalContent_en = {
    company01: `
      <div class="title">Gap Year</div>
      <span class="label">IELTS</span>
      <span class="label">Study Abroad</span>
      <span class="label">Study Tour</span>
      <span class="label">Independent Development</span>
      <div class="modal-body-content">
        <p class='mt20'>1. Resigned and studied IELTS at New Channel School in Shanghai.</p>
        <p>2. Received an offer from Berkeley City College (USA), but the student visa was rejected twice in Shanghai.</p>
        <p>3. Failed attempts to study in Canada and New Zealand.</p>
        <p>4. Planned to study spoken English in Ireland, but the visa was rejected.</p>
        <p>5. Eventually went to the Philippines for a study tour.</p>
      </div>
    `,
    company02: `
      <div class="title">Shanghai Dunyii Technology Co., Ltd.</div>
      <span class="label">Full Time</span>
      <span class="label">On Site</span>
      <div class="card-box">
        <p class="card-left"></p>
        <p class="card-right">
          <span class="symbol">"</span>
          <span>Dunyii Technology is a brand under Shanghai Dunyii Technology Co., Ltd. It is a startup company backed by tens of millions of angel investment from well-known domestic institutions, focusing on Software Defined Infrastructure (SDI). Dunyii emphasizes technological innovation and is committed to using Chinese technical capabilities to influence the open platform ecosystem. The company aims to build independent and controllable infrastructure, providing enterprise-level distributed software-defined storage products to help clients modernize their data center architecture.</span>
        </p>
      </div>
    `,
    company03: `
      <div class="title">Shanghai Hanyin Information Technology Co., Ltd.</div>
      <span class="label">Full Time</span>
      <span class="label">On Site</span>
      <div class="card-box">
        <p class="card-left"></p>
        <p class="card-right">
          <span class="symbol">"</span>
          <span>Hanyin Technology is a leading domestic professional operator in mobile and internet payments. It is licensed by the People's Bank of China and offers integrated financial cloud services based on payment entry points, real-world scenarios, and data as the core, aiming to build an ecosystem.</span>
        </p>
      </div>
    `,
  };
  // 当前语言
  const userLang = localStorage.getItem("language") || "en";
  let modal = {};
  // 切换中文/英文
  switch (userLang) {
    // 英文
    case "en":
      modal = modalContent_en;
      break;
    // 中文
    case "zh":
      modal = modalContent_zh;
      break;

    default:
      break;
  }

  if (modal[id]) {
    // 渲染
    showModal(modal[id]);
    // 关闭弹窗
    setTimeout(() => {
      document.getElementById("modal-close").onclick = hideModal;
    });
  }
});

// 学校
document.querySelector("#dataListEducation").addEventListener("click", (e) => {
  // e.target.closest: 获取点击元素外层的元素
  const el = e.target.closest("[id^='education']");
  if (!el) return;

  const id = el.id;

  const modalContent_zh = {
    education01: `
      <div class="title">安徽工程科技学院</div>
      <span class="label">Full Time</span>
      <div class="modal-body-content">
        <img style="width:100%" src="biyezhao1.jpg" />
          <img style="width:100%" src="biyezhao2.jpg" />
      </div>
    
    `,
  };
  const modalContent_en = {
    education01: `
      <div class="title">Anhui Polytechnic University</div>
      <span class="label">Full Time</span>
      <div class="modal-body-content">
        <img style="width:100%" src="biyezhao1.jpg" />
          <img style="width:100%" src="biyezhao2.jpg" />
      </div>
    `,
  };
  // 当前语言
  const userLang = localStorage.getItem("language") || "en";
  let modal = {};
  // 切换中文/英文
  switch (userLang) {
    // 英文
    case "en":
      modal = modalContent_en;
      break;
    // 中文
    case "zh":
      modal = modalContent_zh;
      break;

    default:
      break;
  }

  if (modal[id]) {
    // 渲染
    showModal(modal[id]);
    // 关闭弹窗
    setTimeout(() => {
      document.getElementById("modal-close").onclick = hideModal;
    });
  }
});
