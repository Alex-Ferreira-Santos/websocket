
import {atualizaTextoEditor} from './documento.js'
const socket = io()

socket.on("texto_editor_clientes", atualizaTextoEditor)

export function emitirTextoEditor(texto){
  socket.emit("texto_editor", texto)
}