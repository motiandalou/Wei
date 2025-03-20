const translations = {
  // 英文
  en: {
    project: "project",
    blog: "Blog",
    company: "Company",
    education: "Education",
    timeline: "Timeline",
    lang: "Lang",
    theme: "Theme",
    sun: "Sun",
    moon: "Moon",
    ResumeDownload: "CV download",
    english: "EN",
    chinese: "CN",
  },

  // 中文
  zh: {
    project: "项目",
    blog: "博客",
    company: "公司",
    education: "教育",
    timeline: "人生时刻",
    lang: "语言",
    theme: "主题",
    sun: "朝朝",
    moon: "暮暮",
    ResumeDownload: "简历下载",
    english: "英文",
    chinese: "中文",
  },

  // 繁体 https://tool.lu/zhconvert/
  tc: {
    project: "項目",
    blog: "博客",
    company: "公司",
    education: "教育",
    timeline: "人生時刻",
    lang: "語言",
    theme: "主題",
    sun: "朝朝",
    moon: "暮暮",
    ResumeDownload: "簡歷下載",
    english: "英文",
    chinese: "中文",
  },
};

function updateTranslations(lang) {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    el.textContent = translations[lang][key] || key;
  });
}

const userLang = localStorage.getItem("language") || "en";

// 默认英文
updateTranslations(userLang);
