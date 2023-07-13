import validaCPF from "./validaCpf.js";
import validaIdade from "./validaIdade.js";
import validaCampo from "./validaCampo.js";

const inputs = document.querySelectorAll("[required]")
const formulario = document.querySelector("[data-formulario]")

formulario.addEventListener("submit", e => {
  e.preventDefault() 

  const listaDeDados = {
    "nome": e.target.elements["nome"].value,
    "email": e.target.elements["email"].value,
    "rg": e.target.elements["rg"].value,
    "cpf": e.target.elements["cpf"].value,
    "aniversario": e.target.elements["aniversario"].value,
  }

  localStorage.setItem("cadastro", JSON.stringify(listaDeDados))

  window.location.href = "./abrir-conta-form-2.html";
})

inputs.forEach(input => {
  input.addEventListener("blur", () => identificaCampo(input))
});

function identificaCampo(campo) {
  if (campo.name === "cpf" && campo.value.length >= 11) {
    validaCPF(campo)
  }
  if (campo.name === "aniversario" && campo.value != "") {
    validaIdade(campo)
  }
  
  validaCampo(campo)
}
