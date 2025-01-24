document.addEventListener("DOMContentLoaded", () => {
  const avatar = document.getElementById("avatar");
  const sidebar = document.getElementById("sidebar");
  const closeSidebar = document.getElementById("closeSidebar");
  const overlay = document.getElementById("overlay");

  // Open the sidebar and show overlay
  avatar.addEventListener("click", () => {
    sidebar.classList.add("open");
    overlay.classList.add("visible");
  });

  // Close the sidebar and hide overlay
  const closeSidebarAndOverlay = () => {
    sidebar.classList.remove("open");
    overlay.classList.remove("visible");
  };

  closeSidebar.addEventListener("click", closeSidebarAndOverlay);
  overlay.addEventListener("click", closeSidebarAndOverlay);
});
