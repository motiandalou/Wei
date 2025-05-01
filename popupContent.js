// 项目
document.querySelector("#dataListProject").addEventListener("click", (e) => {
  // e.target.closest: 获取点击元素外层的元素
  const el = e.target.closest("[id^='project']");
  if (!el) return;

  const id = el.id;

  const modalContent = {
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

  if (modalContent[id]) {
    // 渲染
    showModal(modalContent[id]);
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

  const modalContent = {
    blog01: `
      <div class="title">控制台打印公司名字</div>
      <span class="label">Vue2</span>
      <span class="label">ElementUI</span>
      <span class="label">Console.log</span>
      <div style="margin-top:0.1408rem">
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
      <div style="margin-top:0.0704rem">
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
      <div>
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
      <div class="card-box">
        <p class="card-left"></p>
        <p class="card-right">
          <span class="symbol">"</span>
          <span>一款主打赛博朋克荧光色的 VS Code 粉色主题插件。</span>
        </p>
      </div>
    `,
    blog05: `
      <div class="title">vue2传值的8种方式</div>
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
    blog06: `
      <div class="title">基金组合的力量</div>
      <span class="label">Vue2</span>
      <div>
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
      <div>
        前面的话: 我每天有个习惯,微信公众号,每天晚上九点的样子,就会去看 银行螺丝钉 每日更新基金方面的文章,我是 银行螺丝钉 的粉丝,我看过他写的两本书,他的投资价值理念,对我有启蒙作用,以及我也十分认同这种投资理念.并且实际生活中我的大部分资金也都是按照这个理念进行投资的,算是没见过面的老师吧.很感谢,作为自己个人,把书中,基于目前自己的学识与眼见,能读到的知识进行了整理,并且记录了一下.好记性不如烂笔头,并且书嘛,常看常新.

书籍:主动基金投资指南

购买主动基金( 非常看基金经理的能力 )

公式: 好品种 + 好价格 + 长期持有 = 好收益
(1). 如何选 好品种?( 书中常谈: 买基金就是买基金经理 )

—常见基金公司( 打开支付宝基金模块基本都是好公司 )–不同的公司有不同的投资风格( 价值,均衡,成长 ),本人( 坚持价值风格 ),从风格找公司,再找公司优秀的基金经理.

—优秀的基金经理: 老将( 年化收益率 >= 15%(股票基金平均年收益率是 14%) + 从业时间 >= 10 年 + 管理资金规模 >= 20 亿 ) + 黑马(老将的徒弟 / 从业时间–黑马暂时看不出来,凭直觉… )

(2). 如何选 好价格?

—按风格( 支付宝–>): 价值风格参考(沪深 300,价值 300 指数等前面带价值两个字的 ),价值风格要买低估的,当指数是低估的,往往价值风格的基金也是低估的

–螺丝钉等级(微信号: 银行螺丝钉–>指数估值–>今日估值 ) 获取螺丝钉等级,4-5 星定投

(3). 长期持有

低估的时候,坚持定投即可.
更千万别频繁买卖,追涨杀跌.不用每天看,一个月看一次就行了.心态很重要.其实我天天看,涨和跌对我来言,只是每天的一个消遣工具.现在,涨和跌完全不会影响我的任何情绪.不以物喜,不以己悲 这是我一辈子的修行,生活中我一直都在做一些刻意修炼.
⭐ 螺丝钉等级:

4-5 星( 最佳,但是机会很少 ),低估的时候主要定投 股票基金
3 星,考虑止盈,让股票基金占比( 100 - 你的年龄 ),将盈利的资金投入债券基金, 继续达到开始的占比: 股票基金 : 债券基金 = (100-年龄) : 年龄
2 星,股票基金比例降到 30%
1 星,股票基金止盈,全部卖出.全部买入债券基金
⭐ 投资风格: 三个大类

价值风格: 低市盈率,低市净率(一句话总结: 股票是最便宜的)
成长风格: 高市盈率,高市净率,高盈利成长,高盈利增长速度(一句话总结: 长的高位,最后一哆嗦)
均衡风格: 估值没有特别高,特别低,在正常的那种(一句话总结: 既要价值风格的低价格,又要成长风格的好公司(挑选又好又便宜的股票))
看指数的低估: 支付宝–>基金–>指数选基–>指数排行–随便点开一个指数就可以看见是否低估.
      </div>
    `,
    blog08: `
      <div class="title">如何购买股票基金--被动基金</div>
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
    blog09: `
      <div class="title">动态配置协议,域名,端口</div>
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
    blog10: `
      <div class="title">国际化(Vue2 + ElementUI)</div>
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
    blog11: `
      <div class="title">filter(过滤器)属性</div>
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
    blog12: `
      <div class="title">flex弹性布局</div>
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

  if (modalContent[id]) {
    // 渲染
    showModal(modalContent[id]);
    // 关闭弹窗
    setTimeout(() => {
      document.getElementById("modal-close").onclick = hideModal;
    });
  }
});

// 教育--大学
const education01 = document.getElementById("education01");
education01 &&
  education01.addEventListener("click", function () {
    showModal(`
        <div class="title">安徽科学技术学院</div>
        <span class="label">Full time</span>
        <span class="label">On site</span>
        <div class="card-box-null">
          LOST RECORDS
          </div>
        `);
    // 关闭弹窗
    setTimeout(() => {
      document.getElementById("modal-close").onclick = hideModal;
    });
  });

// 教育--高中
const education03 = document.getElementById("education03");
education03 &&
  education03.addEventListener("click", function () {
    showModal(`
        <div class="title">望江三中</div>
        <span class="label">Full time</span>
        <span class="label">On site</span>
        <div class="card-box">
          <img style="width:100%;" src="high_school_graduation_photo.jpg"></img>
          </div>
          
        `);
    // 关闭弹窗
    setTimeout(() => {
      document.getElementById("modal-close").onclick = hideModal;
    });
  });

// 教育--初中
const education04 = document.getElementById("education04");
education04 &&
  education04.addEventListener("click", function () {
    showModal(`
        <div class="title">望江县初级中学</div>
        <span class="label">Full time</span>
        <span class="label">On site</span>
        <div class="card-box">
          <img style="width:100%;" src="junior_school_diploma_en.jpg"></img>
          </div>
        `);
    // 关闭弹窗
    setTimeout(() => {
      document.getElementById("modal-close").onclick = hideModal;
    });
  });

// 教育--吉成双语小学
const education05 = document.getElementById("education05");
education05 &&
  education05.addEventListener("click", function () {
    showModal(`
        <div class="title">吉成双语学校</div>
        <span class="label">Full time</span>
        <span class="label">On site</span>
        <div class="card-box">
          <img style="width:100%;" src="primary_school_graduation_photo.jpg"></img>
          </div>
        `);
    // 关闭弹窗
    setTimeout(() => {
      document.getElementById("modal-close").onclick = hideModal;
    });
  });

// 教育--凉西小学
const education06 = document.getElementById("education06");
education06 &&
  education06.addEventListener("click", function () {
    showModal(`
        <div class="title">凉西小学</div>
        <span class="label">Full time</span>
        <span class="label">On site</span>
        <div class="card-box-null">
          LOST RECORDS
          </div>
        `);
    // 关闭弹窗
    setTimeout(() => {
      document.getElementById("modal-close").onclick = hideModal;
    });
  });
