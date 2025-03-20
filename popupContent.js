const project01 = document.getElementById("project01");
project01 &&
  project01.addEventListener("click", function () {
    showModal(`
        <div class="title">one2data</div>
        <span class="label">Vue</span>
        <span class="label">ElementUI</span>
        <span class="label">WebSocket</span>
        <span class="label">Webpack</span>
        <div class="card-box">
          <p class="card-left"></p>
          <p class="card-right">
            <span class="symbol">"</span>
            <span>We are seeking a Front end Development Engineer with a passion for creating
              intuitive user interfaces. Join our dynamic team at Apple and
              contribute to innovative design projectsWe are seeking a Front
              End Developer with a passion for creating intuitive user
              interfaces. Join our dynamic team at Apple and contribute to
              innovative design projectsWe are seeking a Front end Development Engineer
              with a passion for creating intuitive user interfaces. Join our
              dynamic team at Apple and contribute to innovative design
              projectsWe are seeking a Front end Development Engineer with a passion for
              creating intuitive user interfaces. Join our dynamic team at
              Apple and contribute to innovative design projectsWe are seeking
              a Front end Development Engineer with a passion for creating intuitive user
              interfaces. Join our dynamic team at Apple and contribute to
              innovative design projects.</span>
                          </p>
          </div>

          
        
        `);
    // 关闭弹窗
    setTimeout(() => {
      document.getElementById("modal-close").onclick = hideModal;
    });
  });

// 教育--大学
const education01 = document.getElementById("education01");
education01 &&
  education01.addEventListener("click", function () {
    showModal(`
        <div class="title">安徽科学技术学院</div>
        <span class="label">Full time</span>
        <span class="label">On site</span>
        <div class="card-box-null">
          LOST RECORDS
          </div>
        `);
    // 关闭弹窗
    setTimeout(() => {
      document.getElementById("modal-close").onclick = hideModal;
    });
  });

// 教育--望江县高考复读学校
const education02 = document.getElementById("education02");
education02 &&
  education02.addEventListener("click", function () {
    showModal(`
        <div class="title">望江县高考复读学校</div>
        <span class="label">Full time</span>
        <span class="label">On site</span>
        <div class="card-box">
          <img style="width:100%;" src="high_school_repeating_school.jpg"></img>
          </div>
          
        `);
    // 关闭弹窗
    setTimeout(() => {
      document.getElementById("modal-close").onclick = hideModal;
    });
  });

// 教育--高中
const education03 = document.getElementById("education03");
education03 &&
  education03.addEventListener("click", function () {
    showModal(`
        <div class="title">望江三中</div>
        <span class="label">Full time</span>
        <span class="label">On site</span>
        <div class="card-box">
          <img style="width:100%;" src="high_school_graduation_photo.jpg"></img>
          </div>
          
        `);
    // 关闭弹窗
    setTimeout(() => {
      document.getElementById("modal-close").onclick = hideModal;
    });
  });

// 教育--初中
const education04 = document.getElementById("education04");
education04 &&
  education04.addEventListener("click", function () {
    showModal(`
        <div class="title">望江县初级中学</div>
        <span class="label">Full time</span>
        <span class="label">On site</span>
        <div class="card-box">
          <img style="width:100%;" src="junior_school_diploma_en.jpg"></img>
          </div>
        `);
    // 关闭弹窗
    setTimeout(() => {
      document.getElementById("modal-close").onclick = hideModal;
    });
  });

// 教育--吉成双语小学
const education05 = document.getElementById("education05");
education05 &&
  education05.addEventListener("click", function () {
    showModal(`
        <div class="title">吉成双语学校</div>
        <span class="label">Full time</span>
        <span class="label">On site</span>
        <div class="card-box">
          <img style="width:100%;" src="primary_school_graduation_photo.jpg"></img>
          </div>
        `);
    // 关闭弹窗
    setTimeout(() => {
      document.getElementById("modal-close").onclick = hideModal;
    });
  });

// 教育--凉西小学
const education06 = document.getElementById("education06");
education06 &&
  education06.addEventListener("click", function () {
    showModal(`
        <div class="title">凉西小学</div>
        <span class="label">Full time</span>
        <span class="label">On site</span>
        <div class="card-box-null">
          LOST RECORDS
          </div>
        `);
    // 关闭弹窗
    setTimeout(() => {
      document.getElementById("modal-close").onclick = hideModal;
    });
  });
