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

// fill orders in table
Orders.forEach((order) => {
  const tr = document.createElement("tr");
  const trContent = `
    <td>${order.productName}</td>
    <td>${order.productNumber}</td>
    <td>${order.paymentSatuts}</td>
    <td class="${
      order.shipping === "Declined"
        ? "clr-danger"
        : order.shipping === "Pending"
        ? "clr-warning"
        : "clr-success"
    }">${order.shipping}</td>
    <td class="clr-info">Details</td>
  `;

  tr.innerHTML = trContent;
  document.querySelector("table tbody").appendChild(tr);
});
