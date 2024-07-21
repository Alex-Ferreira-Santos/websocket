
import {atualizaTextoEditor} from './documento.js'
const socket = io()


export function selecionarDocumento(nome){
  socket.emit("selecionar_documento", nome, (texto) => {
    atualizaTextoEditor(texto)
  })
}

socket.on("texto_editor_clientes", atualizaTextoEditor)

export function emitirTextoEditor(dados){
  socket.emit("texto_editor", dados)
}