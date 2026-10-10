const display = document.getElementById("display");


function appendValue(value) {
  display.value += value;
}


function clearDisplay() {
  display.value = "";
}


function deleteLast() {
  display.value = display.value.slice(0, -1);
}


function calculate() {
  try {
    if (display.value === "") return; 

    
    let result = eval(display.value);

    
    if (result === undefined || isNaN(result)) {
      display.value = "Error";
    } else {
      display.value = result;
    }
  } catch (error) {
    display.value = "Error";
  }
}


document.addEventListener("keydown", (e) => {
  
  if (!isNaN(e.key) || ["+", "-", "*", "/", "."].includes(e.key)) {
    appendValue(e.key);
  }
  
  else if (e.key === "Enter") {
    e.preventDefault();
    calculate();
  }
  
  else if (e.key === "Backspace") {
    deleteLast();
  }
  
  else if (e.key === "Escape") {
    clearDisplay();
  }
});
