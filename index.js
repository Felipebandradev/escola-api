import express from "express"; // importando o pacote 
const app = express(); // armazenando o express numa variavel para facilitar na hora da aplicação
const porta = 8080;

// Criando as rotas

// Raiz da aplicação 
app.get( '/',(req, res) =>{
    res.send(`Raiz da API NODEJs + Express + MySQL`);
});

app.get('/alunos',(req,res) =>{
    res.send(`Exibindo os dados de todos os Alunos`);
}); // para exibir os dados de todos os alunos

app.get('/alunos/:id',(req, res) =>{
    res.send(`Exibindo os dados de um aluno`);
}); // para exibir os de um aluno

app.post('/alunos',(req,res)=>{
    res.send(`Inserindo os dados de um aluno`);
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