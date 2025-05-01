// 项目列表
const projectsList = [
  {
    id: "project01",
    icon: "ri-reactjs-line",
    title: "One2data ( React )",
    time: ["2025-01", "NOW"],
    tags: ["React", "AntDesign", "NodeJs"],
    content: "用React语言重构One2data项目.后台自己用的nodejs",
  },
  {
    id: "project02",
    icon: "ri-vuejs-fill",
    title: "One2data ( Vue2 )",
    time: ["2022-02", "2024-05"],
    tags: ["Vue2", "ElementUI"],
    content:
      "公司自研项目, 秒级/主动 单机备份/集群备份/恢复,客户群体(医院/金融公司)的数据",
  },
  {
    id: "project03",
    icon: "ri-google-fill",
    title: "谷歌扩展插件 ( image-grabber )",
    time: ["2025-04", "2025-04"],
    tags: ["Plasmo", "Chrome"],
    content: "当前网页的所有图片,一键下载.",
  },
  {
    id: "project04",
    icon: "ri-code-s-slash-line",
    title: "VSCODE主题插件 ( Pink Magic )",
    time: ["2025-04", "2025-04"],
    tags: ["Vscode", "Pink Magic"],
    content: "A VSCode plugin with a pink theme.",
  },
  {
    id: "project05",
    icon: "ri-npmjs-line",
    title: "NPM包 ( dragmate )",
    time: ["2025-04", "2025-04"],
    tags: ["NPM", "dragmate"],
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
const itemsPerPage = 6; // 每页显示6条
let currentPage = 1;

function renderData(page) {
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const pageData = projectsList.slice(start, end);

  // 设置内容
  document.getElementById("dataListProject").innerHTML = pageData
    .map(
      (item) => `
        <div id=${item.id} class="card cursor">
          <div class="card-header">
            <div class="job-info">
              <i class="${item.icon || "ri-price-tag-line"}"></i>
              <div>
                <h5>${item.title} <span>| ${item.time[0] || "-"} - ${
        item.time[1] || "-"
      }</span></h5>
               <a href="#">Front end Development Engineer</a>
                  <p>Shang Hai, CHINA</p>
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
  const totalPages = Math.ceil(projectsList.length / itemsPerPage);
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
