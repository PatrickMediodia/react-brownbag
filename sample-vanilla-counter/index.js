const addButton = document.getElementById("add");
const subtractButton = document.getElementById("subtract");
const countParagraph = document.getElementById("count");

let count = 0;
countParagraph.innerText = count;

const printCount = () => {
    countParagraph.innerText = count;
};

const handleAdd = () => {
  count = count + 1;
  printCount();
};

const handleSubtract = () => {
  count = count - 1;
  printCount();
};

addButton.addEventListener("click", handleAdd);
subtractButton.addEventListener("click", handleSubtract);





