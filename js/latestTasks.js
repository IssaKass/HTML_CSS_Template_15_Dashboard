const LatestTasks = [
  {
    title: "Record one new video",
    desc: "Record python create exe project",
    done: false,
  },
  {
    title: "Write article",
    desc: "Write low level vs high level languages",
    done: false,
  },
  {
    title: "Finish project",
    desc: "Publish academy programming project",
    done: false,
  },
  {
    title: "Attend the meeting",
    desc: "Attend the project business analysis meeting",
    done: true,
  },
  {
    title: "Finish lesson",
    desc: "Finish teaching flex box",
    done: false,
  },
];

// fill latest tasks
LatestTasks.forEach((task) => {
  const taskLayout = document.createElement("div");
  taskLayout.classList.add("task");
  if (task.done) taskLayout.classList.add("done");
  const taskContent = `
    <div class="task-data">
        <h4 class="task-title clr-text2">${task.title}</h4>
            <p class="task-desc clr-brand-muted">${task.title}</p>
    </div>
    <i class="fa-regular fa-trash-can fa-fw fa-fw delete"></i>
  `;
  taskLayout.innerHTML = taskContent;
  document.querySelector(".latest-tasks .tasks").appendChild(taskLayout);
});
