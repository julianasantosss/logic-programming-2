const input = document.getElementById("temperature");
const convert = document.querySelector(".convert");

convert.addEventListener("click", function () {
  if (input.value == "") {
    modalAlert("Enter a temperature");
  } else {
    const options = document.getElementById("options").value;
    const result = document.querySelector(".result");
    const temperature = parseInt(input.value);
    if (options == "fahrenheit") {
      result.textContent = `Fahrenheit Temperature: ${temperature * 1.8 + 32}ºF`;
    } else {
      result.textContent = `Kelvin Temperature: ${temperature + 273.15}ºK`;
    }
    input.value = "";
  }
});

input.addEventListener("input", function () {
  const inputCheck = document.getElementById("temperature").value;
  const containLetters = /[a-zA-Z]/.test(inputCheck);
  if (containLetters) {
    modalAlert("No letters allowed");
    const emptyLetters = inputCheck.replace(/[a-zA-Z]/g, "");
    this.value = emptyLetters;
  }
});

function modalAlert(message) {
  Swal.fire({
    title: "Error",
    text: message,
    icon: "error",
    confirmButtonText: "Close",
  });
}
