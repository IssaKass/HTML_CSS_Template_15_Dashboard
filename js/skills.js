const skillsContainer = document.querySelector(".my-skills .skills");

const Skills = [
  {
    list: ["HTML", "Pugjs", "HAML"],
  },
  {
    list: ["CSS", "SASS", "Stylus"],
  },
  {
    list: ["JavaScript", "TypeScript"],
  },
  {
    list: ["Vuejs", "Reactjs"],
  },
  {
    list: ["Jest", "Jasmine"],
  },
  {
    list: ["PHP", "Laravel"],
  },
  {
    list: ["Python", "Django"],
  },
];

Skills.forEach((skill) => {
  var li = document.createElement("li");
  skill.list.forEach((l) => {
    var span = document.createElement("span");
    span.classList.add("skill", "main-btn", "bg-neutral");
    span.innerText = l;
    li.appendChild(span);
  });
  skillsContainer.appendChild(li);
});
