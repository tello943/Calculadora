let peso
let altura
let imc
let resultado


const calcular = (event) => {
  event.preventDefault();

  peso = document.getElementById("peso").value
  altura = document.getElementById("altura").value
  resultado = document.getElementById("resultado")

  imc = peso / (altura * altura)

  if (imc < 17) {
    resultado.innerHTML = `<br> seu resultado foi: ${imc.toFixed(2)}. Muito abaixo do peso!`
  } else if (imc >= 17 && imc <= 18.49) {
    resultado.innerHTML = `<br> seu resultado foi: ${imc.toFixed(2)}. Abaixo do peso!`
  } else if (imc >= 18.5 && imc < 24.99) {
    resultado.innerHTML = `<br> seu resultado foi: ${imc.toFixed(2)}. Peso ideal!`
  } else if (imc > 25 && imc <= 29.99) {
    resultado.innerHTML = `<br> seu resultado foi: ${imc.toFixed(2)}. Acima do peso!`
  } else {
    resultado.innerHTML = `<br> seu resultado foi: ${imc.toFixed(2)}. Obesidade!`
  }

}