const Projects = [
  {
    name: "Ministry Wikipedia	",
    finishDate: new Date("2023-05-10"),
    client: "Ministry",
    price: 5000,
    status: "Pending",
  },
  {
    name: "Elzero Shop",
    finishDate: new Date("2023-10-12"),
    client: "Elzero Company",
    price: 1500,
    status: "In Progress",
  },
  {
    name: "Bouba App",
    finishDate: new Date("2023-9-5"),
    client: "Bouba",
    price: 800,
    status: "Completed",
  },
  {
    name: "Mahmoud Website",
    finishDate: new Date("2023-5-22"),
    client: "Mahmoud",
    price: 600,
    status: "Completed",
  },
  {
    name: "Sayed Website",
    finishDate: new Date("2023-5-24"),
    client: "Sayed",
    price: 300,
    status: "Rejected",
  },
  {
    name: "Arena Application",
    finishDate: new Date("2023-3-1"),
    client: "Arena Company",
    price: 2600,
    status: "Completed",
  },
];

const projectsLayout = (project) => `
  <td class="name">${project.name}</td>
  <td class="finish-date">${project.finishDate.toDateString()}</td>
  <td class="client">${project.client}</td>
  <td class="price">$${project.price}</td>
  <td> <span class="status main-btn ${
    project.status === "Pending"
      ? "bg-warning"
      : project.status === "In Progress"
      ? "bg-info"
      : project.status === "Completed"
      ? "bg-success"
      : project.status === "Rejected"
      ? "bg-danger"
      : "bg-text1"
  }">${project.status}</span></td>
`;

Projects.forEach((project) => {
  const tr = document.createElement("tr");
  tr.innerHTML = projectsLayout(project);
  document.querySelector(".projects table tbody").appendChild(tr);
});
