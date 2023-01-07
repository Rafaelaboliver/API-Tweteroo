import express from "express";
import cors from "cors";

//para persistir os dados, devo utilizar VARIÁVEIS GLOBAIS em memória e conferir os formatos para usuário e tweet

const app = express();
app.use(express.json());
app.use(cors());

//POST sign-up:
app.post('/sign-up', (req, res) => {
    const data = req.body;

    res.status(200).send(data);
});


//ATENÇAO: configurar o servidor para rodar na porta 5000 antes de enviar o projeto!
const PORT = 5003;
app.listen(PORT, () => console. log(`suava na nave, recebendo na porta ${PORT}`));