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
        const actualDate = new Date();
        const formatedDate = actualDate.toLocaleDateString('pt-BR');
        const id = url.split('/')[2];


        //Criacao do metodo GET
        if(url === "/tasks" && method === "GET"){
            res.writeHead(200, {'content-type': 'application/json'});
            res.end(JSON.stringify(tasks));
        }
        //Criacao do metodo POST
        else if(url === "/tasks" && method === "POST"){
            const {taskName, taskDescription, finish, dateCreate} = JSON.parse(body);
            const newTask = {id: v4(), taskName, taskDescription, finish, dateCreate: formatedDate};
            tasks.push(newTask);  
            res.writeHead(201, {'Content-Type': 'application/json'});
            res.end(JSON.stringify(newTask));
        }
        
        //Criacao do metodo PUT
        else if(url.startsWith("/tasks/") && method==="PUT"){

            if(!body){
            response.writeHead(400, {"Content-Type": "application/json"});
            return response.end(JSON.stringify({message: "Request body is required"}))
        }

        let data;

        try{
            data = JSON.parse(body);
        }catch{
            res.writeHead(400, {'Content-Type': 'application/json'});
            return res.end(JSON.stringify({message: "Invalid JSON format"}));
        }
        const {taskName, taskDescription, finish, dateCreate} = data;
        const taskToUpdate = tasks.find((t) => t.id === id);

        if(taskToUpdate){
            taskToUpdate.taskName = taskName;
            taskToUpdate.taskDescription = taskDescription;
            taskToUpdate.finish = finish;
            taskToUpdate.dateCreate = dateCreate;   
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify(taskToUpdate));
        }else{
            res.writeHead(404, {'content-type': 'application/json'});
            res.end(JSON.stringify({message: 'Task not found '}));
        }
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