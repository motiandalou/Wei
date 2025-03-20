// 获取所有的按钮和内容
const tabs = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".content");

// 通过 URL hash 或路由来加载初始内容
function loadContentFromUrl() {
  const hash = window.location.hash.substring(1) || "Project"; // 获取 URL 中的 hash 部分
  const targetContent = document.getElementById(hash);
  const targetButton = document.querySelector(`div[data-url="${hash}"]`);
  if (targetButton) {
    targetButton.classList.add("active");
  }

  if (targetContent) {
    // 如果 hash 匹配内容 ID，显示对应内容
    contents.forEach((content) => {
      content.classList.remove("active");
    });
    targetContent.classList.add("active");
  } else {
    // 默认显示内容1
    document.getElementById("Project").classList.add("active");
  }
}

// 为每个按钮添加点击事件
tabs.forEach((tab) => {
  tab.addEventListener("click", (event) => {
    const targetContentId = tab.getAttribute("data-target");
    const targetUrl = tab.getAttribute("data-url");

    // 隐藏所有内容
    contents.forEach((content) => {
      content.classList.remove("active");
    });

    // 显示目标内容
    const targetContent = document.getElementById(targetContentId);
    if (targetContent) {
      targetContent.classList.add("active");
    }

    // 更新浏览器 URL
    window.history.pushState({}, "", "#" + targetUrl);

    // 高亮当前按钮
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");

    // 强制浏览器进行重排以确保样式更新立即生效
    requestAnimationFrame(() => {
      // 这部分确保浏览器能够立即处理样式更新
    });
  });
});

// 加载初始内容
loadContentFromUrl();

// 监听浏览器的前进和后退
window.addEventListener("popstate", loadContentFromUrl);
