const friendsContainer = document.querySelector(".friends");

const Friends = [
  {
    name: "Ahmed Nasser",
    profileImg: "imgs/friend-01.jpg",
    job: "JavaScript Developer",
    friends: 99,
    projects: 15,
    atricles: 25,
    joinDate: new Date("2021-10-02"),
    vip: true,
  },
  {
    name: "Omar Fathy",
    profileImg: "imgs/friend-02.jpg",
    job: "Cloud Developer",
    friends: 30,
    projects: 11,
    atricles: 12,
    joinDate: new Date("2021-08-02"),
    vip: false,
  },
  {
    name: "Omar Ahmed",
    profileImg: "imgs/friend-03.jpg",
    job: "Mobile Developer",
    friends: 80,
    projects: 20,
    atricles: 18,
    joinDate: new Date("2022-10-02"),
    vip: false,
  },
  {
    name: "Shady Nabil",
    profileImg: "imgs/friend-04.jpg",
    job: "Back-End Developer",
    friends: 70,
    projects: 30,
    atricles: 18,
    joinDate: new Date("2022-06-28"),
    vip: false,
  },
  {
    name: "Mohamed Ibrahim",
    profileImg: "imgs/friend-05.jpg",
    job: "Algorithm Developer",
    friends: 80,
    projects: 30,
    atricles: 18,
    joinDate: new Date("2022-08-28"),
    vip: false,
  },
  {
    name: "Amr Hendawy",
    profileImg: "imgs/friend-04.jpg",
    job: "Back-End Developer",
    friends: 70,
    projects: 30,
    atricles: 18,
    joinDate: new Date("2023-01-04"),
    vip: false,
  },
  {
    name: "Mahmoud Adel",
    profileImg: "imgs/friend-02.jpg",
    job: "Cloud Developer",
    friends: 30,
    projects: 11,
    atricles: 12,
    joinDate: new Date("2022-12-16"),
    vip: false,
  },
  {
    name: "Ahmed Abuzaid",
    profileImg: "imgs/friend-05.jpg",
    job: "Content Creator",
    friends: 80,
    projects: 30,
    atricles: 18,
    joinDate: new Date("2022-05-19"),
    vip: true,
  },
  {
    name: "Gareeb Elshiekh",
    profileImg: "imgs/friend-01.jpg",
    job: "JavaScript Developer",
    friends: 90,
    projects: 15,
    atricles: 25,
    joinDate: new Date("2022-03-21"),
    vip: true,
  },
  {
    name: "Hamza",
    profileImg: "imgs/friend-03.jpg",
    job: "Front-End Developer",
    friends: 80,
    projects: 20,
    atricles: 18,
    joinDate: new Date("2022-06-17"),
    vip: false,
  },
];

const friendLayout = (friend) => `
<div class="friend widget">
	<div class="friend-contact">
		<a href="#" class="bg-neutral clr-muted">
			<i class="fa-solid fa-phone fa-fw icon"></i>
		</a>
		<a href="#" class="bg-neutral clr-muted">
			<i class="fa-solid fa-envelope fa-fw icon"></i>
		</a>
	</div>
	<div class="friend-data">
		<img src="${friend.profileImg}" alt="" class="friend-img profile-img" />
		<h3 class="friend-name">${friend.name}</h3>
		<p class="friend-job clr-muted">${friend.job}</p>
	</div>
	<ul class="friend-info">
		<li class="friend-friends">
			<i class="fa-regular fa-face-smile fa-fw icon"></i>${friend.friends} Friends
		</li>
		<li class="friend-projects">
			<i class="fa-solid fa-code-commit fa-fw icon"></i>${friend.projects} Projects
		</li>
		<li class="friend-articles">
			<i class="fa-regular fa-newspaper fa-fw icon"></i>${friend.atricles} Articles
		</li>
	</ul>
	<div class="friend-settings">
		<p class="friend-join clr-muted">Joined ${friend.joinDate.toLocaleDateString()}</p>
		<div>
			<a href="#" class="main-btn bg-info">Profile</a>
			<a href="#" class="main-btn bg-danger">Remove</a>
		</div>
	</div>
</div>
`;

Friends.forEach((friend) => {
  var item = document.createElement("div");
  item.classList.add("friend", "widget");
  item.innerHTML = friendLayout(friend);
  friendsContainer.appendChild(item);

  if (friend.vip) {
    var vipSymbol = document.createElement("span");
    vipSymbol.classList.add("vip");
    vipSymbol.innerText = "VIP";
    item.querySelector(".friend-info").appendChild(vipSymbol);
  }
});
