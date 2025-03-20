// 显示模态对话框并设置内容
function showModal(content) {
  if (!content) return;
  // 动态设置内容
  document.getElementById("modal-body").innerHTML = content;
  document.getElementById("modal-overlay").style.display = "block";
  document.getElementById("modal-content").style.display = "block";

  setTimeout(() => {
    document.getElementById("modal-content").classList.add("active"); // 添加动画类（需要延迟以触发过渡效果）
  }, 10); // 微小延迟确保 display 已生效
}

// 隐藏模态对话框
function hideModal() {
  setTimeout(() => {
    document.getElementById("modal-overlay").style.display = "none";
    // 隐藏弹窗
    document.getElementById("modal-content").classList.remove("active");
  }, 10); // 微小延迟确保 display 已生效
}
