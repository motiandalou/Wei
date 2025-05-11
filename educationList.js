// 大学
const educationList_zh = [
  {
    id: "education01",
    title: "安徽工程科技学院",
    time: ["2014-09", "2018-07"],
    address: "Anhui, China",
    tags: ["Full Time"],
    content: "本科-计算机科学与技术",
  },
];
const educationList_en = [
  {
    id: "education01",
    title: "Anhui Polytechnic University",
    time: ["2014-09", "2018-07"],
    address: "Anhui, China",
    tags: ["Full Time"],
    content: "Bachelor’s Degree in Computer Science and Technology",
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
      pageData = educationList_zh.slice(start, end);

      break;
    case "en":
      pageData = educationList_en.slice(start, end);

      break;

    default:
      break;
  }

  // 设置内容
  document.getElementById("dataListEducation").innerHTML = pageData
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
  const totalPages = Math.ceil(educationList_en.length / itemsPerPage);
  const pagination03 = document.getElementById("pagination04");
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
