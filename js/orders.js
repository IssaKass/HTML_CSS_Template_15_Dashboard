const Orders = [
  {
    productName: "Foldable Mini Drone",
    productNumber: "85361",
    paymentSatuts: "Due",
    shipping: "Pending",
  },
  {
    productName: "LAVENDER KF102 Drone",
    productNumber: "36378",
    paymentSatuts: "Refunded",
    shipping: "Declined",
  },
  {
    productName: "Ruko F11 Prod Drone",
    productNumber: "49345",
    paymentSatuts: "Due",
    shipping: "Pending",
  },
  {
    productName: "Drone with Camera",
    productNumber: "96996",
    paymentSatuts: "Paid",
    shipping: "Delivered",
  },
  {
    productName: "GPS 4K Drone",
    productNumber: "22813",
    paymentSatuts: "Paid",
    shipping: "Delivered",
  },
  {
    productName: "DJI Air 2S",
    productNumber: "81457",
    paymentSatuts: "Paid",
    shipping: "Pending",
  },
  {
    productName: "Lozenge Drone",
    productNumber: "08243",
    paymentSatuts: "Paid",
    shipping: "Delivered",
  },
];

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
  document.querySelector(".recent-orders table tbody").appendChild(tr);
});
