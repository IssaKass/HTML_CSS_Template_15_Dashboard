const plansContainer = document.querySelector(".plans");

const Plans = [
  {
    name: "Free",
    price: 0,
    status: "success",
    list: [
      { item: "Access All Text Lessons", available: true },
      { item: "Access All Videos Lessons", available: true },
      { item: "Appear On Leaderboard", available: true },
      { item: "Access All Text Lessons", available: false },
      { item: "Browse Content Without Ads", available: false },
      { item: "Access All Assignments", available: false },
      { item: "Get Daily Prizes", available: false },
      { item: "Earn Certificate", available: false },
      { item: "1 GB Space For Hosting Files", available: false },
      { item: "Access Badge System", available: false },
    ],
  },
  {
    name: "Basic",
    price: 7.99,
    status: "info",
    list: [
      { item: "Access All Text Lessons", available: true },
      { item: "Access All Videos Lessons", available: true },
      { item: "Appear On Leaderboard", available: true },
      { item: "Access All Text Lessons", available: true },
      { item: "Browse Content Without Ads", available: true },
      { item: "Access All Assignments", available: true },
      { item: "Get Daily Prizes", available: true },
      { item: "Earn Certificate", available: true },
      { item: "1 GB Space For Hosting Files", available: false },
      { item: "Access Badge System", available: false },
    ],
  },
  {
    name: "Platinum",
    price: 19.99,
    status: "brand",
    list: [
      { item: "Access All Text Lessons", available: true },
      { item: "Access All Videos Lessons", available: true },
      { item: "Appear On Leaderboard", available: true },
      { item: "Access All Text Lessons", available: true },
      { item: "Browse Content Without Ads", available: true },
      { item: "Access All Assignments", available: true },
      { item: "Get Daily Prizes", available: true },
      { item: "Earn Certificate", available: true },
      { item: "1 GB Space For Hosting Files", available: true },
      { item: "Access Badge System", available: true },
    ],
  },
];

Plans.forEach((plan) => {
  var planItem = document.createElement("div");
  planItem.classList.add("plan", "widget");

  var header = document.createElement("div");
  header.classList.add("plan-header", `bg-${plan.status}`);

  var name = document.createElement("h2");
  name.classList.add("plan-name");
  name.innerText = plan.name;
  header.appendChild(name);

  var price = document.createElement("strong");
  price.classList.add("plan-price");
  price.innerHTML = `<sup>$</sup>${plan.price.toFixed(2)}`;
  header.appendChild(price);

  planItem.appendChild(header);

  var list = document.createElement("ul");
  list.classList.add("plan-list");
  plan.list.forEach((l) => {
    var item = document.createElement("li");
    item.classList.add("plan-item");

    var icon = document.createElement("i");
    icon.classList.add(
      "fa-solid",
      l.available ? "fa-check" : "fa-xmark",
      "fa-fw",
      l.available ? "clr-success" : "clr-danger"
    );

    var span = document.createElement("span");
    span.innerText = l.item;

    var help = document.createElement("i");
    help.classList.add(
      "fa-solid",
      "fa-circle-info",
      "fa-fw",
      "help",
      "clr-muted"
    );

    item.appendChild(icon);
    item.appendChild(span);
    item.appendChild(help);
    list.appendChild(item);
  });
  planItem.appendChild(list);

  var join = document.createElement("a");
  join.classList.add("main-btn", `bg-${plan.status}`);
  join.innerText = "Join";
  planItem.appendChild(join);

  plansContainer.appendChild(planItem);
});
