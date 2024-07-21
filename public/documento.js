const socket = io()

const textoEditor = document.getElementById('editor-texto')

textoEditor.addEventListener("keyup",(e) => {
  socket.emit("texto_editor", textoEditor.value)
})