import express from "express"; // importando o pacote 
import { inserir, ler } from './src/aluno.js'; // importando a função
const app = express(); // armazenando o express numa variavel para facilitar na hora da aplicação
const porta = 8080;

// adicionando suporte ao formato json
app.use(express.json());

// adionando suporte a dados vindos de formularios 
app.use(express.urlencoded({extended : true}));



// Criando as rotas

// Raiz da aplicação 
app.get( '/',(req, res) =>{
    res.send(`Raiz da API NODEJs + Express + MySQL`);
});

app.get('/alunos',(req,res) =>{
    // res.send(`Exibindo os dados de todos os Alunos`);
    ler(res);
}); // para exibir os dados de todos os alunos

app.get('/alunos/:id',(req, res) =>{
    res.send(`Exibindo os dados de um aluno`);
}); // para exibir os de um aluno

app.post('/alunos',(req,res)=>{
    // res.send(`Inserindo os dados de um novo aluno`);
    const novo_aluno = req.body;
    inserir(novo_aluno, res);
}); // para inserir um aluno

app.patch('/alunos/:id', (req, res)=>{
    res.send(`Atualizando os dados de um aluno`);
}) // para atualizar um aluno

app.delete('/alunos/:id',(req, res)=>{
    res.send(`Para deletar um aluno`);
});

// Executando 

app.listen(porta, ()=>{
    console.log(`Servidor NodeJs rodando na porta ${porta}`);
});