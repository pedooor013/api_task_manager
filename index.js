import http from 'http';
import {v4} from 'uuid';

const port = 3000;
const tasks = [];

const server = http.createServer((request, res) =>{
    
    const {method, url} = request;
    let body = "";
    request.on('data', chuck =>{
        body += chuck.toString();
    });
    
    request.on('end', () =>{
        const id = url.split('/')[2];


        //Criacao do metodo GET
        if(url === "/grades" && method === "GET"){
            res.writeHead(200, {'content-type': 'application/json'});
            res.end(JSON.stringify(tasks));
        }

        //Caso a rota nao seja encontrada
        else{
            res.writeHead(404, {'content-type': 'application/json'});
            res.end(JSON.stringify({message: 'Route not found'}));
        }
    });
});

server.listen(port, () =>{
    console.log(`Server running in port ${port}`)
})