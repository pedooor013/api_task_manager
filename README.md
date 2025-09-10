# 📌 API Task Manager
API simples de **gerenciamento de tarefas**, desenvolvida apenas com **Node.js puro**, sem frameworks externos. As tarefas são armazenadas em **memória (array)**, funcionando como um CRUD básico para aprendizado e prática.

## 🚀 Funcionalidades
- **Criar tarefa** (`POST /tasks`)
- **Listar todas as tarefas** (`GET /tasks`)
- **Atualizar uma tarefa** (`PUT /tasks/:id`)
- **Remover uma tarefa** (`DELETE /tasks/:id`)

## 🛠 Tecnologias Utilizadas
- [Node.js](https://nodejs.org/)
- [uuid](https://www.npmjs.com/package/uuid) → geração de IDs únicos
- [readline](https://nodejs.org/api/readline.html) → interação básica no console

## 📦 Instalação
Clone o repositório:
```bash
git clone https://github.com/pedooor013/api_task_manager.git
cd api_task_manager
