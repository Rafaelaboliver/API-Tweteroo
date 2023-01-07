import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

//variáveis globais
const register = [];
const messages = [];


//POST sign-up:
app.post('/sign-up', (req, res) => {
    const data = req.body;

    if(!data.username || !data.avatar){
        return res.status(422).send('Todos os campos são obrigatórios!')
    }

    register.push(data)
    res.status(200).send('OK');
});

//POST tweets:
app.post('/tweets')


//ATENÇAO: configurar o servidor para rodar na porta 5000 antes de enviar o projeto!
const PORT = 5003;
app.listen(PORT, () => console. log(`suava na nave, recebendo na porta ${PORT}`));