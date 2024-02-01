const tableBody = document.querySelector("tbody");

const updateDisplay = () => {
  let row = document.createElement("tr");
  row.innerHTML = `
            <td>1:</td>
            <td>${localStorage.getItem("size")}</td>
            <td>${localStorage.getItem("quantity")}</td>
            <td>
                   ${localStorage.getItem("color")}
            </td>`;
  tableBody.appendChild(row);
};
updateDisplay();
