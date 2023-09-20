import mysql2 from 'mysql2';

// armazenando os dados da conexão em uma contante
const conexao = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'escola'
});

// efetivando a conexao

// conexao.connect();

conexao.connect( erro =>{
    if(erro){
        console.error(`Erro ao conectar: ${erro.message}`)
    } else {
        console.log(`Banco de dados conectado com sucesso!!`)
    }
});

export default conexao;