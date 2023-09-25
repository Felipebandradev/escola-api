import mysql2 from 'mysql2';

/* // armazenando os dados da conexão em uma contante
const conexao = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'escola'
}); */

//BANCO DE DADOS DB4FREE

const conexao = mysql2.createConnection({
    host: 'db4free.net',
    user: 'felipemsena',
    password: 'senac123',
    database: 'escolaapi80'
});

// efetivando a conexao

// conexao.connect();

conexao.connect( erro =>{
    if(erro){
        console.error(`Erro ao conectar: ${erro.message}`)
    } else {
        console.log(`Banco de dados conectado em: ${conexao.config.host}`)
    }
});

export default conexao;