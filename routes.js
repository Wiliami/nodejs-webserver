const handlRequest = (req, res) => {
    if(req.url === '/rota1') {
        res.writeHead(200,{ 'Content-Type': 'text/plain' });
        res.end('Você acessou a rota 1\n');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Rota não encontrada\n');
    }
}

module.exports = handlRequest;