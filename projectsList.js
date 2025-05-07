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
    id: "project01",
    icon: "ri-reactjs-line",
    title: "One2data ( React )",
    time: ["2025-01", "NOW"],
    tags: ["React", "AntDesign", "NodeJs"],
    jump: "https://github.com/motiandalou/one2data",
    content:
      "Refactored the One2data project using React. Backend is built with Node.js.",
  },
  {
    id: "project02",
    icon: "ri-vuejs-fill",
    title: "One2data ( Vue2 )",
    time: ["2022-02", "2024-05"],
    tags: ["Vue2", "ElementUI"],
    jump: "https://github.com/motiandalou/one2data",
    content:
      "A self-developed project featuring second-level/active standalone and clustered backup and recovery, targeting clients such as hospitals and financial companies.",
  },
  {
    id: "project03",
    icon: "ri-google-fill",
    title: "Google Chrome Extension ( image-grabber )",
    time: ["2025-04", "2025-04"],
    tags: ["Plasmo", "Chrome"],
    jump: true,
    content: "One-click download of all images on the current webpage.",
  },
  {
    id: "project04",
    icon: "ri-code-s-slash-line",
    title: "VSCode Theme Plugin ( Pink Magic )",
    time: ["2025-04", "2025-04"],
    tags: ["Vscode", "Pink Magic"],
    jump: true,
    content: "A VSCode plugin with a pink theme.",
  },
  {
    id: "project05",
    icon: "ri-npmjs-line",
    title: "NPM Package ( dragmate )",
    time: ["2025-04", "2025-04"],
    tags: ["NPM", "dragmate"],
    jump: "https://www.npmjs.com/package/dragmate",
    content:
      "An npm package for drag and drop functionality suitable for React/Vue/Angular/Native HTML.",
  },
  {
    id: "project06",
    icon: "ri-flutter-fill",
    title: "Maizuo Movie App",
    time: ["2019-02", "2019-08"],
    tags: ["Flutter"],
    content:
      "Maizuo Movie is a mobile ticketing app that allows users to purchase tickets via mobile or tablet without going to the cinema. The project features a clean and simple layout, including Movies, Cinemas, News, and My sections.",
  },
  {
    id: "project07",
    icon: "ri-vuejs-fill",
    title: "Internal Dashboard Project",
    time: ["2018-07", "2019-02"],
    tags: ["Vue2", "chartJs"],
    content:
      "Proactively communicated with UI/Product/QA teams to redesign and rebuild the entire system from scratch.",
  },
  {
    id: "project08",
    icon: "ri-reactjs-line",
    title: "China Eastern Airlines Internal Portal",
    time: ["2021-11", "2022-01"],
    tags: ["Vue2"],
    content:
      "An internal website for China Eastern Airlines employees, showing company news, updates, and more.",
  },
  {
    id: "project09",
    icon: "ri-vuejs-fill",
    title: "Aggregated Admin Dashboard",
    time: ["2020-04", "2021-10"],
    tags: ["Vue2"],
    content:
      "A third-party payment admin dashboard for a client company, developed by our team. Although based on React, it was tailored for clients using native technologies for easier future maintenance.",
  },
  {
    id: "project10",
    icon: "ri-vuejs-fill",
    title: "HanYin Payment Admin Dashboard",
    time: ["2019-09", "2020-03"],
    tags: ["Vue2"],
    content:
      "Displays real-time daily transaction volumes, amounts, locations, and merchant data across six large company screens.",
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
