import express from "express";
import url from 'url'
import path from 'path'
import http from 'http'
import { Server } from "socket.io"

const app = express()
const porta = process.env.porta || 3000

const caminhoAtual = url.fileURLToPath(import.meta.url)
const diretorioPublico = path.join(caminhoAtual, "../..", "public")

const servidorHttp = http.createServer(app)

app.use(express.static(diretorioPublico))

servidorHttp.listen(porta, () => console.log(`Servidor escutando na porta ${porta}`))

const io = new Server(servidorHttp)

export default io