const up_btn = document.getElementById("up-btn");
up_btn.style.display = "none";

// 定义变量
let offset = 0;
let maxOffset = 0;
let minOffset = -7;
// 获取所有卡片元素并存储在数组中
const slides = Array.from(document.querySelectorAll(".time-axis-main .card"));
// 获取时钟表盘元素
const clock = document.querySelector("#clock-table");

// 设定起始年份为1997
let startYear = 1997;
let time_array = [1997, 2003, 2009, 2012, 2015, 2018, 2019, 2022];

function renderThickClockScale(startYear = 1997, time_array) {
  for (let index = 0; index < time_array.length; index++) {
    if (index < 6) {
      // 添加粗刻度
      addThickClockScale(index * 60, time_array[index]);
    }
  }
}

renderThickClockScale(startYear, time_array);

// 添加粗刻度
function addThickClockScale(degree, time) {
  // 创建一个隐藏的表格元素
  const invisibleClockTable = document.createElement("div");
  invisibleClockTable.className = "invisible-table";
  invisibleClockTable.style.transform = `rotate(${degree}deg)`;

  const thickClockScale = document.createElement("div");
  thickClockScale.className = "clock-thick";

  const scaleContent = document.createElement("span");
  // scaleContent.textContent = `${time}`;
  thickClockScale.appendChild(scaleContent);
  invisibleClockTable.appendChild(thickClockScale);
  clock.appendChild(invisibleClockTable);
}

// 上一个卡片
function slideToPrev() {
  // 更新偏移量，取最大值
  offset = Math.min(maxOffset, offset + 1);
  slides.forEach((slide) => {
    // 根据偏移量设置卡片垂直偏移效果
    slide.style.transform = `translateY(${offset * 100}%)`;
  });
  // 调用旋转时钟表盘函数
  clockRotate(offset * 60);
}

// 下一张卡片
function slideToNext() {
  offset = Math.max(minOffset, offset - 1);
  slides.forEach((slide) => {
    slide.style.transform = `translateY(${offset * 100}%)`;
  });
  clockRotate(offset * 60);
}

// 旋转时钟表盘
function clockRotate(degree) {
  if (Math.abs(degree) > 0) {
    const up_btn = document.getElementById("up-btn");
    up_btn.style.display = "inline-block";
  }
  if (Math.abs(degree) === 0) {
    const up_btn = document.getElementById("up-btn");
    up_btn.style.display = "none";
  }
  if (Math.abs(degree) === (time_array.length - 1) * 60) {
    const down_btn = document.getElementById("down-btn");
    down_btn.style.display = "none";
  }

  if (Math.abs(degree) < (time_array.length - 1) * 60) {
    const down_btn = document.getElementById("down-btn");
    down_btn.style.display = "inline-block";
  }

  // 根据角度旋转时钟表盘
  clock.style.transform = `rotate(${degree}deg)`;
}
