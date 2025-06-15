const translations = {
  // 英文
  en: {
    keyword: "Life",
    project: "Project",
    blog: "Blog",
    company: "Company",
    education: "Education",
    timeline: "Timeline",
    lang: "Lang",
    theme: "Theme",
    sun: "Sun",
    userMenu: "Menu",
    moon: "Moon",
    ResumeDownload: "CV download",
    english: "EN",
    chinese: "CN",
    career: "Front end Development Engineer",
    name: "Wei.Jiang",
    skills: "Skills and Expertise",
    projectTitle:
      "👋Participate in the company or create independently The project.",
    projectSubTitle:
      "One needs courage, confidence, and perseverance to be oneself.",
    blogTitle: "👋Every time is a harvest.",
    blogSubTitle: "Without small steps, one cannot reach a thousand miles.",
    companyTitle: "👋Grateful for our encounter.",
    companySubTitle: "Embrace challenges and break through oneself.",
    educationTitle: "👋Life learning experience.",
    educationSubTitle: "Thank you for every choice you make.",
  },

  // 中文
  zh: {
    keyword: "活着",
    project: "项目",
    blog: "博客",
    company: "公司",
    education: "教育",
    timeline: "人生时刻",
    lang: "语言",
    theme: "主题",
    userMenu: "用户菜单",
    sun: "朝朝",
    moon: "暮暮",
    ResumeDownload: "简历下载",
    english: "英文",
    chinese: "中文",
    career: "前端开发工程师",
    name: "姜伟",
    skills: "技能和专业知识",
    projectTitle: "👋参与公司项目或独立创建项目。",
    projectSubTitle: "人需要勇气,自信,坚持去做自己。",
    blogTitle: "👋每一次都是收获。",
    blogSubTitle: "不积跬步，无以至千里。",
    companyTitle: "👋感恩我们的相遇。",
    companySubTitle: "拥抱挑战，突破自我。",
    educationTitle: "👋人生的学习历程。",
    educationSubTitle: "感谢你所做的每一个选择。",
  },
};

function updateTranslations(lang) {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    el.textContent = translations[lang][key] || key;
  });
}

// 页面加载时，从 localStorage 读取语言并翻译
const userLang = localStorage.getItem("language") || "en";
updateTranslations(userLang);

// 切换语言函数（例如绑定在按钮上）
function changeLanguage(lang) {
  localStorage.setItem("language", lang);
  location.reload(); // 语言切换后刷新一次
}
