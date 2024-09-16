const inputBar = document.getElementById('inputBar');
const inputButton = document.getElementById('inputButton');
import householdItems from "./cardObjects";

inputButton.addEventListener('click', () => {
  const input = inputBar.value;
  console.log(input);});
  if (input === householdItems[0-50].name) {
    console.log(householdItems[0-50].ability);
  }


