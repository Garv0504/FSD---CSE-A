const http = require('http')
const PORT = 2527

const server = http.createServer((req,res) => {
    res.setHeader('Content-Type', 'text/html')
    res.write('<h2 style="color: red; background-color: black; width: fit-content">Welocome to node server</h2>')
    res.end()
})

server.listen(PORT)