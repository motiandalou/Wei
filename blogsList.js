// 博客列表
const blogsList = [
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
const itemsPerPage = 6; // 每页显示6条
let currentPage = 1;

function renderData(page) {
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const pageData = blogsList.slice(start, end);

  // 设置内容
  document.getElementById("dataListBlog").innerHTML = pageData
    .map(
      (item) => `
        <div id=${item.id} class="card cursor">
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
           ${item.tags.map((tag) => `<a href="#">${tag}</a>`).join("")}
          </div>
          <div class="card-desc">${item.content}</div>
        </div>`
    )
    .join("");
  renderPagination();
}

function renderPagination() {
  const totalPages = Math.ceil(blogsList.length / itemsPerPage);
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
