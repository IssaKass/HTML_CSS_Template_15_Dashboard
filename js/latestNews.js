const LatestNews = [
  {
    imgFile: "imgs/news-01.png",
    title: "Created SASS section",
    desc: "New SASS examples & tutorials",
    date: new Date("January 18, 2023 17:45:00"),
  },
  {
    imgFile: "imgs/news-02.png",
    title: "Changed the design",
    desc: "A brand new website design",
    date: new Date("January 16, 2023 12:00:00"),
  },
  {
    imgFile: "imgs/news-03.png",
    title: "Team increased",
    desc: "3 Developers joined the team",
    date: new Date("January 14, 2023 13:20:00"),
  },
  {
    imgFile: "imgs/news-04.png",
    title: "Added payment gateway",
    desc: "Many new payment gateways added",
    date: new Date("January 12, 2023 15:30:00"),
  },
];

const getPassedTime = (date) => {
  const daysInMs = 1000 * 3600 * 24;
  var now = new Date();
  return parseInt((now.getTime() - date.getTime()) / daysInMs);
};

const newsLayout = (news) => `
  <img src="${news.imgFile}" alt="" />
  <div class="news-data">
    <h4 class="news-title clr-text2">${news.title}</h4>
    <p class="news-desc clr-brand-muted">${news.desc}</p>
  </div>
  <span class="main-btn-ghost clr-text2">${getPassedTime(
    news.date
  )} Days Ago</span>
`;

LatestNews.sort((a, b) => b.date.getTime() - a.date.getTime());

LatestNews.forEach((news) => {
  const item = document.createElement("div");
  item.classList.add("news");
  item.innerHTML = newsLayout(news);
  document.querySelector(".latest-news .news-list").appendChild(item);
});
