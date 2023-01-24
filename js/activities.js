const activitiesContainer = document.querySelector(
  ".latest-activities .activities"
);

const Activities = [
  {
    name: "Store",
    desc: "Bought The Mastering Python Course",
    img: "imgs/activity-01.png",
    date: "18:10",
    from: "Yesterday",
  },
  {
    name: "Academy",
    desc: "Got The PHP Certificate",
    img: "imgs/activity-02.png",
    date: "16:05",
    from: "Yesterday",
  },
  {
    name: "Badges",
    desc: "Unloced The 10 Skills Badge",
    img: "imgs/activity-03.png",
    date: "18:05",
    from: "Yesterday",
  },
  {
    name: "Store",
    desc: "Bought The Typescript Course",
    img: "imgs/activity-01.png",
    date: "12:05",
    from: "Yesterday",
  },
];

const activityLayout = (activity) => `
	<img src="${activity.img}" alt="" />
	<div class="activity-data">
		<h4 class="activity-name">${activity.name}</h4>
		<p class="activity-desc clr-muted">${activity.desc}</p>
	</div>
	<div class="activity-date">
		<p>${activity.date}</p>
		<span class="clr-muted">${activity.from}</span>
	</div>
`;

Activities.forEach((activity) => {
  var item = document.createElement("div");
  item.classList.add("activity");
  item.innerHTML = activityLayout(activity);
  activitiesContainer.appendChild(item);
});
