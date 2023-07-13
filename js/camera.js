const botaoCamera = document.querySelector("[data-video-botao]")
const camera = document.querySelector("[data-camera]")
const video = document.querySelector("[data-video]")
const botaoFoto = document.querySelector("[data-tirar-foto]")
const canvas = document.querySelector("[data-video-canvas]")
const mensagem = document.querySelector("[data-mensagem]")
const enviar = document.querySelector("[data-enviar]")

let imagemURL = ''; 

botaoCamera.addEventListener("click", async () => {
  const iniciarVideo = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });

  botaoCamera.style.display = "none"
  camera.style.display = "block"

  video.scrObject = iniciarVideo;
})

botaoFoto.addEventListener('click', () => {
  canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height)

  imagemURL = canvas.toDataURL('image/jpeg', 1.0)

  camera.style.display = "none"
  mensagem.style.display = "block" 
})

enviar.addEventListener("click", () => {
  const recebeDadosExistente = localStorage.getItem("cadastro")
  const converteDados = JSON.parse(recebeDadosExistente)

  converteDados.image = imagemURL

  localStorage.setItem("cadastro", JSON.stringify(converteDados))

  window.location.href = "./abrir-conta-form-3.html"
})