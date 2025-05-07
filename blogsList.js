// 博客列表
const blogsList_zh = [
  {
    id: "blog01",
    title: "控制台打印公司名字",
    time: "2023-09-10 ",
    tags: ["Vue2", "ElementUI"],
    content:
      "平时开发的产品,自己公司的产品,可以在控制台里面打印一些信息,比如公司 logo,校园招聘之类的,针对性还是蛮强的,一般的用户是不知道打开控制台的,它甚至都不知道控制台,能打开的一般都是搞技术的.招聘啥的,那对用户群体就比较精准了,比如下面这张百度的校园招聘.",
  },
  {
    id: "blog02",
    title: "主题换肤",
    time: "2023-09-03",
    tags: ["Vue2", "ElementUI"],
    content:
      "主题换肤,目前为止,实现的方法有很多,不管方法怎么变化,基于我目前水平,我认为就两点 第一点: 你要为每个主题写一个单独的 css 文件 第二点: 你要在什么时候引入...",
  },
  {
    id: "blog03",
    title: "RN 环境搭建,项目创建,开发中遇到的坑,打包,发布",
    time: "2023-08-27",
    tags: ["React Native"],
    content: "RN 环境搭建,项目创建,开发中遇到的坑,打包,发布",
  },
  {
    id: "blog04",
    title: "Vue2 index.html / App.vue / main.js 三者作用",
    time: "2023-08-20 ",
    tags: ["Vue2"],
    content: "Vue2 index.html / App.vue / main.js 三者作用",
  },
  {
    id: "blog05",
    title: "Vue2传值的8种方式",
    time: "2023-07-24",
    tags: ["Vue2"],
    content:
      "总结:常见使用场景可以分为三类: (1). 这 8 种方式我在项目中非常常用,但是也要根据情况而定,啥都用的话,数据不好管理,多人开发,项目非常大的话,像我们公司按年为单位来计算的开发迭代项目,时间长的话,...",
  },
  {
    id: "blog06",
    title: "基金组合的力量",
    time: "2023-07-30",
    tags: ["基金"],
    content:
      "如果你掌握了 股票基金 &#x2F; 债券基金 &#x2F; 货币基金 &#x2F; 大宗商品 等方面的知识,实际操作了股票或者基金之后,你会发现组合的力量,单个的基金,并不具备抗风险的能力,但是基金组...",
  },
  {
    id: "blog07",
    title: "如何购买股票基金--主动基金",
    time: "2023-07-30",
    tags: ["基金", "主动基金"],
    content:
      "前面的话: 我每天有个习惯,微信公众号,每天晚上九点的样子,就会去看 银行螺丝钉 每日更新基金方面的文章,我是 银行螺丝钉 的粉丝,我看过他写的两本书,他的投资价值理念,对我有启蒙作用,以及我也十分认同...",
  },
  {
    id: "blog08",
    title: "如何购买股票基金--被动基金",
    time: "2023-07-30",
    tags: ["基金", "被动基金"],
    content:
      "前面的话: 我每天有个习惯,微信公众号,每天晚上九点的样子,就会去看 银行螺丝钉 每日更新基金方面的文章,我是 银行螺丝钉 的粉丝,我看过他写的两本书,他的投资价值理念,对我有启蒙作用,以及我也十分认同...",
  },
  {
    id: "blog09",
    title: "动态配置协议,域名,端口",
    time: "2023-07-29",
    tags: ["Vue2"],
    content:
      "需求: 考虑一个成品的项目会给到各地方进行部署，而每个地方的 ip 和端口均无法保证统一，为了抽离开发人员的工作，需要对项目进行一定的配置，配置后的项目，只需要修改打包后的配置文件，填写相关的 ip 和端口，即可实现项目的部署。...",
  },
  {
    id: "blog10",
    title: "国际化(vue2 + elementUI)",
    time: "2023-07-23",
    tags: ["Vue2"],
    content:
      "第一步: 安装 先下载国际化的包:注意版本,可以去 npm 社区 直接下载对应的版本,最直接的办法,找下载数量最多的版本",
  },
  {
    id: "blog11",
    title: "filter(过滤器)属性",
    time: "2023-02-26",
    tags: ["Vue2"],
    content:
      "前言: filter属性 我在日常开发用的并不多,但是我觉得很管用,有奇效,在一些特殊的样式上,你会觉得还可以这么简单就能实现. 定义: filter...",
  },
  {
    id: "blog12",
    title: "flex弹性布局",
    time: "2023-02-18",
    tags: ["Vue2"],
    content:
      "display:flex 布局在平常 PC 端和手机端,对于其可视化区域的适配发挥着比较重要的作用,是一个我们前端日常开发会频繁使用的布局方式.接下来记录一下我在日常前端开发中接触到的属性,一共...",
  },
];
const blogsList_en = [
  {
    id: "blog01",
    title: "Print Company Name in Console",
    time: "2023-09-10 ",
    tags: ["Vue2", "ElementUI"],
    content:
      "For products developed in-house, especially your own company’s products, you can print some information in the browser console, such as the company logo or campus recruitment info. This is quite targeted, as regular users typically don’t know how to open the console—or even what it is. Those who do open it are usually tech-savvy. So for things like recruitment, this approach reaches the right audience. For example, see this campus recruitment ad from Baidu.",
  },
  {
    id: "blog02",
    title: "Theme Switching",
    time: "2023-09-03",
    tags: ["Vue2", "ElementUI"],
    content:
      "There are currently many ways to implement theme switching. Regardless of the approach, based on my current level, I think there are two key points: First: you need to write a separate CSS file for each theme. Second: you need to determine when to load it...",
  },
  {
    id: "blog03",
    title:
      "RN Environment Setup, Project Creation, Development Pitfalls, Packaging, and Publishing",
    time: "2023-08-27",
    tags: ["React Native"],
    content:
      "RN environment setup, project creation, development pitfalls, packaging, and publishing",
  },
  {
    id: "blog04",
    title: "Roles of Vue2 index.html / App.vue / main.js",
    time: "2023-08-20 ",
    tags: ["Vue2"],
    content: "Roles of Vue2 index.html / App.vue / main.js",
  },
  {
    id: "blog05",
    title: "8 Ways to Pass Data in Vue2",
    time: "2023-07-24",
    tags: ["Vue2"],
    content:
      "Summary: Common use cases can be grouped into three categories: (1) These 8 methods are very common in my projects, but you should choose based on the situation. If you use everything at once, data becomes hard to manage. In large-scale, long-term projects developed by multiple people, like the ones in our company that iterate over years,...",
  },
  {
    id: "blog06",
    title: "The Power of a Fund Portfolio",
    time: "2023-07-30",
    tags: ["Funds"],
    content:
      "If you understand stock funds / bond funds / money market funds / commodities, and you’ve actually invested in stocks or funds, you’ll realize the power of diversification. A single fund doesn’t offer much risk protection, but a fund portfolio...",
  },
  {
    id: "blog07",
    title: "How to Buy Stock Funds — Active Funds",
    time: "2023-07-30",
    tags: ["Funds", "Active Funds"],
    content:
      "Intro: I have a daily habit of checking the WeChat public account 'Bank Screwdriver' around 9 PM. I’m a fan of that account. I’ve read both books written by the author. His investment philosophy has been an inspiration to me, and I strongly agree with his views...",
  },
  {
    id: "blog08",
    title: "How to Buy Stock Funds — Passive Funds",
    time: "2023-07-30",
    tags: ["Funds", "Passive Funds"],
    content:
      "Intro: I have a daily habit of checking the WeChat public account 'Bank Screwdriver' around 9 PM. I’m a fan of that account. I’ve read both books written by the author. His investment philosophy has been an inspiration to me, and I strongly agree with his views...",
  },
  {
    id: "blog09",
    title: "Dynamic Configuration of Protocol, Domain, and Port",
    time: "2023-07-29",
    tags: ["Vue2"],
    content:
      "Requirement: Consider that a finalized project may need to be deployed in multiple locations, each with different IPs and ports. To reduce developer workload, the project should be configurable. After configuration, deployment only requires editing a config file in the packaged project and entering the correct IP and port to complete deployment...",
  },
  {
    id: "blog10",
    title: "Internationalization (Vue2 + ElementUI)",
    time: "2023-07-23",
    tags: ["Vue2"],
    content:
      "Step 1: Installation. First, download the internationalization package. Pay attention to the version. You can download it directly from the npm community. The most straightforward method is to choose the version with the most downloads.",
  },
  {
    id: "blog11",
    title: "filter Property",
    time: "2023-02-26",
    tags: ["Vue2"],
    content:
      "Intro: I don’t use the filter property very often in daily development, but I find it very handy and effective. In certain styling scenarios, you’ll be surprised how easily it can get things done. Definition: filter...",
  },
  {
    id: "blog12",
    title: "Flex Layout",
    time: "2023-02-18",
    tags: ["Vue2"],
    content:
      "display:flex layout plays an important role in adapting to visible areas on both PC and mobile. It's a layout method we frequently use in frontend development. Below are the properties I've encountered in daily work...",
  },
];
const itemsPerPage = 6; // 每页显示6条
let currentPage = 1;

function renderData(page) {
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const userLang = localStorage.getItem("language") || "en";
  let pageData = [];

  switch (userLang) {
    case "zh":
      pageData = blogsList_zh.slice(start, end);

      break;
    case "en":
      pageData = blogsList_en.slice(start, end);

      break;

    default:
      break;
  }

  // 设置内容
  document.getElementById("dataListBlog").innerHTML = pageData
    .map(
      (item) => `
        <div class="card">
          <div class="card-header">
            <div class="job-info">
              <i class="ri-news-line"></i>
              <div>
                <h5>${item.title}</h5>
                <p style="margin-top: .0504rem;">${item.time}</p>
              </div>
            </div>
          </div>
          <div class="card-tags">
           ${item.tags.map((tag) => `<span>${tag}</span>`).join("")}
          </div>
          <div class="card-desc">${item.content}</div>

          <button id=${item.id} class="seeMore cursor">
            <p class="seeMore-text">Read More</p> <p class="iconer"><svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg></p>  
          </button>
        </div>`
    )
    .join("");
  renderPagination();
}

function renderPagination() {
  const totalPages = Math.ceil(blogsList_en.length / itemsPerPage);
  const pagination02 = document.getElementById("pagination02");
  pagination02.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    const li = document.createElement("li");
    li.textContent = i;
    li.classList.toggle("active", i === currentPage);
    li.onclick = () => {
      currentPage = i;
      renderData(i);
    };
    pagination02.appendChild(li);
  }
}

renderData(currentPage);
