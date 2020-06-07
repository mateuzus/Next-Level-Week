const express = require("express")
const server = express()

//configurar pasta publica
server.use(express.static("public"))


//utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("/src/views", {
    express: server,
    noCache: true

})


//confirgurar caminhos da minha aplicação
//pagina inicial
//req : Requisição
//res: Resposta
server.get("/", (req, res) => {
res.render("index.html")
})

server.get("/create-point", (req, res) => {
   return res.render("create-point.html")
    })

    server.get("/search-results", (req, res) => {
     return res.sendFile(__dirname + "/views/search-results.html")
        })


// ligar o servidor
server.listen(3000)

