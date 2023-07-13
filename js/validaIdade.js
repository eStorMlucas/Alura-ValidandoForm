export default function validaIdade(input) {
  const dataNascimento = new Date(input.value)
  if (!verificaMairidade(dataNascimento)) {
    input.setCustomValidity("Menores de idade não são aceitos")
  } else {
    input.setCustomValidity("")
  }
}

function verificaMairidade(data) {
  const dataAtual = new Date();
  const dataMaior18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate())

  return dataAtual >= dataMaior18
}