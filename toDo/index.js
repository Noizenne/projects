const inputV = document.querySelector("input");
const list = document.querySelector(".list");
const addBtn = document.querySelector("button");

addBtn.addEventListener("click", addTask);

function addTask(e) {
  e.preventDefault();
  
  const inputValue = inputV.value;
  inputV.value = "";
  const paragraph = document.createElement("p");
  list.appendChild(paragraph);

  paragraph.classList.add("item");
  paragraph.innerText += inputValue;

  paragraph.onclick = () => {
    paragraph.style.textDecoration = "line-through";
  };

  const deleteX = document.createElement("p");
  paragraph.appendChild(deleteX);

  deleteX.innerText = "X";

  deleteX.style.color = "red";
  deleteX.style.fontWeight = "bold";
  deleteX.style.cursor = "pointer";

  deleteX.onclick = () => {
    paragraph.remove();
  };
}
