  
const env = process.env.NODE_ENV || 'development'

switch (env) {
    case 'development':
        require('dotenv').config({
            path: process.cwd() + '/.env'
        })
        break;
    case 'test':
        require('dotenv').config({
            path: process.cwd() + '/.env.test'
        })
}

const app = require('../app')
const http = require('http')
const server = http.createServer(app)
const PORT = process.env.PORT

server.listen(PORT, () => {
    console.log('run on PORT ' + PORT);
})