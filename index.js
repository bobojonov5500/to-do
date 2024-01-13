let Cars = [
  // { id: 1, name: "Kia", model: "Seltos", price: "35000$" },
  // { id: 2, name: "Honda", model: "Accord", price: "25000$" },
  // { id: 3, name: "Toyota", model: "Corolla", price: "15000$" },
  // { id: 4, name: "Mercedes", model: "S-Class", price: "20000$" },
  // { id: 5, name: "Audi", model: "A4", price: "15000$" },
  // { id: 6, name: "BMW", model: "M3", price: "25000$" },
];

const tbody = document.getElementById("tbody");
const exampleInputName = document.getElementById("exampleInputName1");
const exampleInputModel = document.getElementById("exampleInputModel1");
const examplePrice = document.getElementById("examplePrice1");
const form = document.getElementById("form");


form.addEventListener("submit", addData);
function addData(e) {
  e.preventDefault();
  let newObj = {
    id: Cars.length + 1,
    name: exampleInputName.value,
    model: exampleInputModel.value,
    price: examplePrice.value + `${"$"}`,
  };
  if (examplePrice.value > 0) {
    Cars.push(newObj);
    show(Cars);
    exampleInputName.value = "";
    exampleInputModel.value = "";
    examplePrice.value = "";
  } else {
    alert("Narxni musbat sonda kiriting");
  }
}

function show(Cars) {
  tbody.innerHTML = "";
  for (let i = 0; i < Cars.length; i++) {
    let tr = document.createElement("tr");
    tr.innerHTML = `<th scope="row">${Cars[i].id}</th>
      <td>${Cars[i].name}</td>
      <td>${Cars[i].model}</td>
      <td>${Cars[i].price}</td>
      <button onclick="DeleteData(${Cars[i].id})" class="btn-danger border rounded">X</button>
      `;
    tbody.appendChild(tr);
  }
}
show(Cars);

DeleteData = (id) => {
  const newArr = [];
  for (let i = 0; i < Cars.length; i++) {
    if (Cars[i].id !== id) {
      newArr.push(Cars[i]);
    }
  }
  Cars = newArr;
  show(newArr);
};
