const projectsContainer = document.querySelector(".projects");

const Projects = [
  {
    name: "Elzero Dashboard",
    desc: "Elzero dashboard project design and programming and hosting",
    finishDate: new Date("2022-10-15"),
    team: 5,
    skills: ["Programming", "Design", "Hosting", "Marketing"],
    price: 2500,
    progress: 42,
  },
  {
    name: "Academy Portal",
    desc: "Academy portal project design and programming",
    finishDate: new Date("2022-11-04"),
    team: 3,
    skills: ["Programming", "Design"],
    price: 1500,
    progress: 78,
  },
  {
    name: "Chatting Application",
    desc: "Chatting application project design",
    finishDate: new Date("2022-12-12"),
    team: 3,
    skills: ["Programming", "Design"],
    price: 950,
    progress: 94,
  },
  {
    name: "Ahmed Dashboard",
    desc: "Ahmed dashboard project design and programming and hosting",
    finishDate: new Date("2023-01-05"),
    team: 4,
    skills: ["Programming", "Design", "Hosting", "Marketing"],
    price: 1700,
    progress: 19,
  },
  {
    name: "Ahmed Portal",
    desc: "Ahmed portal project design and programming",
    finishDate: new Date("2023-01-10"),
    team: 3,
    skills: ["Programming", "Design"],
    price: 850,
    progress: 48,
  },
  {
    name: "Mohamed Application",
    desc: "Mohamed application project design",
    finishDate: new Date("2023-01-12"),
    team: 2,
    skills: ["Design"],
    price: 950,
    progress: 36,
  },
  {
    name: "Mohamed Dashboard",
    desc: "Mohamed dashboard project design and programming and hosting",
    finishDate: new Date("2023-01-14"),
    team: 5,
    skills: ["Programming", "Design", "Hosting", "Markteing"],
    price: 1950,
    progress: 100,
  },
  {
    name: "Mohamed Portal",
    desc: "Mohamed portal project design and programming",
    finishDate: new Date("2022-12-24"),
    team: 3,
    skills: ["Programming", "Design"],
    price: 1650,
    progress: 66,
  },
  {
    name: "Ahmed Application",
    desc: "Ahmed application project design",
    finishDate: new Date("2023-01-03"),
    team: 1,
    skills: ["Design"],
    price: 950,
    progress: 26,
  },
];

Projects.forEach((project) => {
  project.skills.sort();
});

Projects.forEach((project) => {
  const item = document.createElement("div");
  item.classList.add("project", "widget");

  var date = document.createElement("p");
  date.classList.add("project-finish-date", "clr-brand-muted");
  date.innerText = project.finishDate.toLocaleDateString();

  var name = document.createElement("h3");
  name.classList.add("project-name");
  name.innerText = project.name;

  var desc = document.createElement("p");
  desc.classList.add("project-desc");
  desc.innerText = project.desc;

  var team = document.createElement("div");
  team.classList.add("project-team");
  for (let i = 1; i <= project.team; i++) {
    var img = document.createElement("img");
    img.classList.add("profile-img");
    img.src = `imgs/team-0${i}.png`;
    team.appendChild(img);
  }

  var todo = document.createElement("div");
  todo.classList.add("project-do");
  project.skills.forEach((skill) => {
    var span = document.createElement("span");
    span.classList.add("main-btn", "bg-neutral");
    span.innerText = skill;
    todo.appendChild(span);
  });

  var info = document.createElement("div");
  info.classList.add("project-info");

  var progress = document.createElement("div");
  progress.classList.add("project-progress", "bg-neutral");
  var prog = document.createElement("span");
  prog.style.width = `${project.progress}%`;
  prog.classList.add(
    project.progress >= 90
      ? "bg-success"
      : project.progress >= 45
      ? "bg-info"
      : project.progress >= 30
      ? "bg-warning"
      : "bg-danger"
  );
  progress.appendChild(prog);

  var price = document.createElement("span");
  price.classList.add("project-price", "clr-brand-muted");
  price.innerText = `$${project.price}`;

  info.append(progress);
  info.append(price);

  item.appendChild(date);
  item.appendChild(name);
  item.appendChild(desc);
  item.appendChild(team);
  item.appendChild(todo);
  item.appendChild(info);

  projectsContainer.appendChild(item);
});
