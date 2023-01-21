// toggle theme
document.body.setAttribute("color-scheme", "light");

const btnToggleTheme = document.getElementById("toggleTheme");

function toggleTheme() {
  document.body.setAttribute(
    "color-scheme",
    document.body.getAttribute("color-scheme") === "light" ? "dark" : "light"
  );
  btnToggleTheme.classList.contains("fa-sun")
    ? btnToggleTheme.classList.replace("fa-sun", "fa-moon")
    : btnToggleTheme.classList.replace("fa-moon", "fa-sun");
}

btnToggleTheme.addEventListener("click", toggleTheme);



