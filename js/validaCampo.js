export default function validaCampo(campo) {
  const estado = campo.validity;
  const exibeErro = campo.parentNode.querySelector(".mensagem-erro")
  
  if (!campo.checkValidity()) {
    tiposErros.forEach(erro => {
      if (estado[erro] == true) {
        let mensagem = mensagens[campo.name][erro]

        exibeErro.innerText = mensagem
      } 
    })
  } else {
    exibeErro.innerText = ""
  }
}

const tiposErros = [
  "valueMissing",
  "typeMismatch",
  "patternMismatch",
  "tooShort",
  "customError"
]

const mensagens = {
  nome: {
      valueMissing: "O campo de nome não pode estar vazio.",
      patternMismatch: "Por favor, preencha um nome válido.",
      tooShort: "Por favor, preencha um nome válido."
  },
  email: {
      valueMissing: "O campo de e-mail não pode estar vazio.",
      typeMismatch: "Por favor, preencha um email válido.",
      tooShort: "Por favor, preencha um e-mail válido."
  },
  rg: {
      valueMissing: "O campo de RG não pode estar vazio.",
      patternMismatch: "Por favor, preencha um RG válido.",
      tooShort: "O campo de RG não tem caractéres suficientes."
  },
  cpf: {
      valueMissing: 'O campo de CPF não pode estar vazio.',
      patternMismatch: "Por favor, preencha um CPF válido.",
      customError: "O CPF digitado não existe.",
      tooShort: "O campo de CPF não tem caractéres suficientes."
  },
  aniversario: {
      valueMissing: 'O campo de data de nascimento não pode estar vazio.',
      customError: 'Você deve ser maior que 18 anos para se cadastrar.'
  },
  termos: {
      valueMissing: 'Você deve aceitar nossos termos antes de continuar.',
  }
}
