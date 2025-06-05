let display = document.getElementById("display");
let buttons = document.querySelectorAll("button");
let operations = ["+", "-", "*", "/"];
display.focus();

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let value = e.target.innerText;
    console.log(value);

    if (value === "=") {
      display.value = eval(display.value);
    } else if (value === "AC") {
      display.value = "";
    } else if (value === "DEL") {
      display.value = display.value.slice(0, -1);
    } else if (operations.includes(value)) {
      if (operations.includes(display.value.slice(-1))) {
        display.value = display.value.slice(0, -1);
        display.value = display.value + value;
      } else {
        display.value = display.value + value;
      }
    } else {
      display.value = display.value + value;
    }
  });
});

