const homeRoute = require('./home');
const { usersRoute, users } = require('./users');

const handleRequest = (req, res) => {
    if(req.url === '/rota1') {
        res.writeHead(200,{ 'Content-Type': 'text/plain' });
        res.end('Voce acessou a rota 1\n');
    } else if(req.url === homeRoute) {
        res.writeHead(200,{ 'Content-Type': 'text/plain' });
        res.end('Voce acessou a rota Home\n');
    }
    else if(req.url === usersRoute) {
        res.writeHead(200,{ 'Content-Type': 'application/json' });
        res.end(JSON.stringify(users));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Rota nao encontrada\n');
    }
}

module.exports = handleRequest;