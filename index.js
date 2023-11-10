// server.js
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')

server.use(router)
server.listen(process.env.PORT || 3000, process.env.IP, () => {
  console.log('JSON Server is running')
})