const Reminders = [
  {
    title: "Check my tasks list",
    schedule: new Date("January 30, 2023 12:00"),
    type: "info",
  },
  {
    title: "Check my projects",
    schedule: new Date("February 04, 2023 03:00"),
    type: "success",
  },
  {
    title: "Call all my clients",
    schedule: new Date("February 06, 2023 12:00"),
    type: "warning",
  },
  {
    title: "Finish the development workshop",
    schedule: new Date("January 24, 2023 06:00"),
    type: "danger",
  },
];

const reminderLayout = (reminder) => `
  <span class = "reminder-key bg-${reminder.type}"></span>
  <div class = "reminder-data">
    <h4 class = "reminder-title clr-text2">${reminder.title}</h4>
    <p class = "reminder-schedule clr-brand-muted">${reminder.schedule.toLocaleString()}</p>
  </div>
`;

Reminders.sort((a, b) => a.schedule.getTime() - b.schedule.getTime());

Reminders.forEach((reminder) => {
  const item = document.createElement("div");
  item.classList.add("reminder");
  item.innerHTML = reminderLayout(reminder);
  document.querySelector(".reminders .reminders-list").appendChild(item);
});
