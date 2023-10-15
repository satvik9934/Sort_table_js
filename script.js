let allrows = document.querySelectorAll(".content tbody tr");
let ArrayOfRows = Array.from(allrows);
let select = document.querySelector("#sort");
let message = document.querySelector(".onBasicOf");
document.querySelector("button").addEventListener("click", () => {
  if (select.value == "name") {
    sorting(ArrayOfRows, 1);
    message.innerText = "Sorted on the basis of Name";
  } else if (select.value == "age") {
    sorting(ArrayOfRows, 2);
    message.innerText = "Sorted on the basis of Age";
  } else {
    sorting(ArrayOfRows, 4);
    message.innerText = "Sorted on the basis of Salary";
  }

  document.querySelector(".content tbody").replaceChildren(...ArrayOfRows);
});
function sorting(ArrayOfRows, idx) {
  ArrayOfRows.sort((a, b) => {
    if (a.children[idx].innerText < b.children[idx].innerText) {
      return -1;
    }
    if (b.children[idx].innerText < a.children[idx].innerText) {
      return 1;
    }
    return 0;
  });
}