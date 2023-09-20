import conexao from "./banco.js";
// Vem do modulo mysql2
// CRUD 

// Ler e exibir todos os alunos

function ler(res) {

    const sql = "SELECT * FROM alunos ORDER BY nome";

    conexao.query(sql, (erro, resultados) =>{
        // criar verificação para ver sew está vazio

        if (resultados.length === 0){
            res.status(204).end(); // é importantante trabalhar com status http. 204 = sem conteúdo. .end()encerra a execução
            return;
        } 

        if (erro) {
            res.status(400).json(erro.code); // BAD Request
        } else {
            res.status(200).json(resultados);
        }
    })
};

// inserirndo alunos no banco de dados
function inserir(aluno, res){
    const sql = "INSERT INTO alunos SET ?";   // '?' =  faz com que receba os dados na ordem

    conexao.query(sql, aluno, (erro) => {
        if(erro){
            res.status(400).json(erro.code);
        } else {
            res.status(201).json({"Status" : "Alunos Inserido"});
            // res.status(201).end(); = só assim funciona tbm

        }
    })

};


export { ler, inserir };
