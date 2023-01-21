const LatestNews = [
  {
    imgFile: "imgs/news-01.png",
    title: "Created SASS section",
    desc: "New SASS examples & tutorials",
    date: new Date("January 18, 2023 17:44:12"),
  },
  {
    imgFile: "imgs/news-02.png",
    title: "Changed the design",
    desc: "A brand new website design",
    date: new Date("January 16, 2023 08:32:34"),
  },
  {
    imgFile: "imgs/news-03.png",
    title: "Team increased",
    desc: "3 Developers joined the team",
    date: new Date("January 14, 2023 01:03:56"),
  },
  {
    imgFile: "imgs/news-04.png",
    title: "Added payment gateway",
    desc: "Many new payment gateways added",
    date: new Date("January 12, 2023 03:34:06"),
  },
];

const getPassedTime = (date) => {
  var now = new Date();
  var diffInTime = now.getTime() - date.getTime();
  var diffInDays = diffInTime / (1000 * 3600 * 24);
  return parseInt(diffInDays);
};

// sort latest news by date
LatestNews.sort((a, b) => getPassedTime(a.date) - getPassedTime(b.date));

// fill latest news
LatestNews.forEach((news) => {
  const newsLayout = document.createElement("div");
  newsLayout.classList.add("news");
  const newsContent = `
    <img src="${news.imgFile}" alt="" />
    <div class="news-data">
        <h4 class="news-title clr-text2">${news.title}</h4>
        <p class="news-desc clr-brand-muted">${news.desc}</p>
    </div>
    <span class="main-btn-ghost clr-text2">${getPassedTime(
      news.date
    )} Days Ago</span>
  `;
  newsLayout.innerHTML = newsContent;
  document.querySelector(".latest-news .all-news").appendChild(newsLayout);
});
