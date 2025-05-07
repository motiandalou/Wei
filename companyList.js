// 公司列表
const companyList_zh = [
  {
    id: "company01",
    title: "Gap Year",
    time: ["2024-06", "Now"],
    address: "China",
    tags: ["IELTS", "Study Abroad", "Study Tour", "Independent Development"],
    content:
      "<p>1. 辞职,上海新航道学习雅思.</p><p>2. 获得美国伯克利城市学院offer,但是上海留学签证两次被拒.</p><p>3. 加拿大,新西兰,留学未果.</p><p>4. 着手爱尔兰学习英语口语,签证被拒.</p><p>5. 最后菲律宾游学.</p>",
  },
  {
    id: "company02",
    title: "上海盾壹科技有限公司",
    time: ["2022-02", "2024-05"],
    address: "Shang Hai, China",
    tags: ["Full Time", "On Site", "20人创业团队"],
    content:
      "盾壹科技是上海盾壹科技有限公司旗下品牌。盾壹科技是一家由国内知名机构千万级天使投资的初创公司，专注于软件定义基础架构（Software Defined Infrastructure）业务的新型技术企业，盾壹科技注重科技创新，致力于以中国技术力量影响开放平台生态系统，创建自主可控的底层设施，以主流的、先进的技术和产品为客户创造价值，提供企业级分布式软件定义存储产品，帮助客户实现数据中心架构革新。",
  },
  {
    id: "company03",
    title: "上海瀚银信息技术有限公司",
    time: ["2018-09", "2022-01"],
    address: "Shang Hai, China",
    tags: ["Full Time", "On Site", "200人中厂"],
    content:
      "瀚银科技是国内领先的移动支付、互联网支付专业化运营公司,获央行颁发《支付业务许可证》,提供支付为入口、场景为基础、数据为核心、生态为方向的综合金融云服务。",
  },
];
const companyList_en = [
  {
    id: "company01",
    title: "Gap Year",
    time: ["2024-06", "Now"],
    address: "China",
    tags: ["IELTS", "Study Abroad", "Study Tour", "Independent Development"],
    content:
      "<p>1. Resigned and studied IELTS at New Channel in Shanghai.</p><p>2. Received an offer from Berkeley City College in the U.S., but was rejected twice for a student visa in Shanghai.</p><p>3. Study abroad plans in Canada and New Zealand were unsuccessful.</p><p>4. Attempted to study spoken English in Ireland, but the visa was denied.</p><p>5. Finally chose to pursue a study tour in the Philippines.</p>",
  },
  {
    id: "company02",
    title: "Shanghai Dunyitech Co., Ltd.",
    time: ["2022-02", "2024-05"],
    address: "Shanghai, China",
    tags: ["Full Time", "On Site", "20-person startup team"],
    content:
      "Dunyitech is a brand under Shanghai Dunyitech Co., Ltd., an early-stage startup invested by top-tier domestic institutions with tens of millions in angel funding. The company focuses on Software Defined Infrastructure (SDI) technologies and is committed to technological innovation. It aims to influence the open platform ecosystem with Chinese technological power, build independently controllable infrastructure, and provide enterprise-level distributed software-defined storage products. These solutions help clients transform their data center architectures using mainstream, cutting-edge technologies and products.",
  },
  {
    id: "company03",
    title: "Shanghai Hanyin Information Technology Co., Ltd.",
    time: ["2018-09", "2022-01"],
    address: "Shanghai, China",
    tags: ["Full Time", "On Site", "200-person mid-sized company"],
    content:
      "Hanyin Technology is a leading mobile and internet payment operations company in China. It holds a 'Payment Business License' issued by the People’s Bank of China. The company provides comprehensive financial cloud services built around payment as the entry point, scenario-based operations, data-centric strategies, and an ecosystem-oriented approach.",
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
      pageData = companyList_zh.slice(start, end);

      break;
    case "en":
      pageData = companyList_en.slice(start, end);

      break;

    default:
      break;
  }

  // 设置内容
  document.getElementById("dataListCompany").innerHTML = pageData
    .map(
      (item) => `
        <div class="card">
          <div class="card-header">
            <div class="job-info">
              <i class="ri-bar-chart-fill"></i>
              <div>
                  <h5>
                  ${item.title}
                    <span>| ${item.time[0] || "-"} - ${
        item.time[1] || "-"
      }</span>
                  </h5>
                  <a href="#">Engineer / Leaner</a>
                  <p>${item.address || "China"}</p>
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
  const totalPages = Math.ceil(companyList_en.length / itemsPerPage);
  const pagination03 = document.getElementById("pagination03");
  pagination03.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    const li = document.createElement("li");
    li.textContent = i;
    li.classList.toggle("active", i === currentPage);
    li.onclick = () => {
      currentPage = i;
      renderData(i);
    };
    pagination03.appendChild(li);
  }
}

renderData(currentPage);
