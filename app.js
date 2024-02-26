const express = require("express")
const app = express()

app.listen(8081, function(){
    console.log("Servidor Rodando na porta 8081")
})

app.get("/", function(req, res){
    res.end("Pag Inicial")
})

app.get("/cadastrar/:produto", function(req, res){
    res.end("Produto: " + req.params.produto)
})

app.get("/pesquisar/:produto/:modelo", function(req, res){
    res.end("Produto: " + req.params.produto + " modelo: " + req.params.modelo)
})

app.get("/contato/:sac/:produto", function(req, res){
    res.end("Sac: " + req.params.sac + " produto: " + req.params.produto)
})