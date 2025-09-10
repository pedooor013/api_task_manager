import http from 'http';
import {v4} from 'uuid';

const port = 3000;
const tasks = [];

const server = http.createServer((request, response) =>{
    
    const {method, url} = request;
    let body = "";
    request.on('data', chuck =>{
        body += chuck.toString();
    });
    
    request.on('end', () =>{
        const id = url.split('/')[2];
        
    })

});