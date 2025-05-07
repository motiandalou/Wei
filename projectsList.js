// 项目列表
const projectsList_zh = [
  {
    id: "project01",
    icon: "ri-reactjs-line",
    title: "One2data ( React )",
    time: ["2025-01", "NOW"],
    tags: ["React", "AntDesign", "NodeJs"],
    jump: "https://github.com/motiandalou/one2data",
    content: "用React语言重构One2data项目.后台自己用的nodejs",
  },
  {
    id: "project02",
    icon: "ri-vuejs-fill",
    title: "One2data ( Vue2 )",
    time: ["2022-02", "2024-05"],
    tags: ["Vue2", "ElementUI"],
    jump: "https://github.com/motiandalou/one2data",
    content:
      "公司自研项目, 秒级/主动 单机备份/集群备份/恢复,客户群体(医院/金融公司)的数据",
  },
  {
    id: "project03",
    icon: "ri-google-fill",
    title: "谷歌扩展插件 ( image-grabber )",
    time: ["2025-04", "2025-04"],
    tags: ["Plasmo", "Chrome"],
    jump: true,
    content: "当前网页的所有图片,一键下载.",
  },
  {
    id: "project04",
    icon: "ri-code-s-slash-line",
    title: "VSCODE主题插件 ( Pink Magic )",
    time: ["2025-04", "2025-04"],
    tags: ["Vscode", "Pink Magic"],
    jump: true,
    content: "A VSCode plugin with a pink theme.",
  },
  {
    id: "project05",
    icon: "ri-npmjs-line",
    title: "NPM包 ( dragmate )",
    time: ["2025-04", "2025-04"],
    tags: ["NPM", "dragmate"],
    jump: "https://www.npmjs.com/package/dragmate",
    content:
      "An npm package for drag and drop functionality Suitable for React/Vue/Angular/Native HTML.",
  },
  {
    id: "project06",
    icon: "ri-flutter-fill",
    title: "卖座电影",
    time: ["2019-02", "2019-08"],
    tags: ["Flutter"],
    content:
      "卖座电影是一个移动端购票软件,通过手机,平板等移动端设备即可实现不去电影院购票.项目提供了简介清新的页面架构,并且包含电影,影院,资讯,我的. ",
  },
  {
    id: "project07",
    icon: "ri-vuejs-fill",
    title: "公司内部大屏项目",
    time: ["2018-07", "2019-02"],
    tags: ["Vue2", "chartJs"],
    content: "与UI/产品/测试,主动积极充分沟通,项目从0到1进行整体系统设计重构.",
  },
  {
    id: "project08",
    icon: "ri-reactjs-line",
    title: "东航内部官网",
    time: ["2021-11", "2022-01"],
    tags: ["Vue2"],
    content: "东航公司内部员工的网站,最近内部动态,新闻等等.",
  },
  {
    id: "project09",
    icon: "ri-vuejs-fill",
    title: "聚合后台管理",
    time: ["2020-04", "2021-10"],
    tags: ["Vue2"],
    content:
      "项目是跟公司合作的客户,包给我们来做.也是一个第三方支付的后台管理 PC 端项目.基于react 的.因为客户公司用的都是原生,react 后面他们会好维护一些.",
  },
  {
    id: "project10",
    icon: "ri-vuejs-fill",
    title: "瀚银支付后台管理",
    time: ["2019-09", "2020-03"],
    tags: ["Vue2"],
    content:
      "公司每天实时的交易笔数,交易金额,交易地点,商户的交易数据等等,呈现在公司的6块大屏上.",
  },
];
const projectsList_en = [
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

function openNewPage(url) {
  // 确保url是安全的，可以在这里进行一些验证
  if (url.startsWith("http://") || url.startsWith("https://")) {
    window.open(url, "_blank"); // 在新标签页中打开
  } else {
    console.error("Invalid URL");
  }
}

function renderData(page) {
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const userLang = localStorage.getItem("language") || "en";
  let pageData = [];

  switch (userLang) {
    case "zh":
      pageData = projectsList_zh.slice(start, end);

      break;
    case "en":
      pageData = projectsList_en.slice(start, end);

      break;

    default:
      break;
  }

  // 设置内容
  document.getElementById("dataListProject").innerHTML = pageData
    .map(
      (item) => `
        <div  class="card">
          <div class="card-header">
            <div class="job-info">
              <i class="${item.icon || "ri-price-tag-line"}"></i>
              <div>
                <h5>${item.title} <span>| ${item.time[0] || "-"} - ${
        item.time[1] || "-"
      }</span></h5>
               <span>Front end Development Engineer</span>
                  <p>Shang Hai, China</p>
              </div>
            </div>
            ${
              item.jump
                ? `<a href="${item.jump}" target="_blank"><i style="font-size:0.1408rem" class="ri-guide-fill""></i></a>`
                : ""
            }

          </div>
          <div class="card-tags">
           ${item.tags.map((tag) => `<span>${tag}</span>`).join("")}
          </div>
          <div class="card-desc">${item.content}</div>

          <button id="${item.id}" class="seeMore cursor">
            <p class="seeMore-text">Read More</p>
            <p class="iconer">
              <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path>
              </svg>
            </p>
          </button>
        </div>`
    )
    .join("");
  renderPagination();
}

function renderPagination() {
  const totalPages = Math.ceil(projectsList_en.length / itemsPerPage);
  const pagination01 = document.getElementById("pagination01");
  pagination01.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    const li = document.createElement("li");
    li.textContent = i;
    li.classList.toggle("active", i === currentPage);
    li.onclick = () => {
      currentPage = i;
      renderData(i);
    };
    pagination01.appendChild(li);
  }
}

renderData(currentPage);
