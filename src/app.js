import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

//variáveis globais
const register = [];
const messages = [];

let profileImgage = {avatar: ""};

//POST sign-up:
app.post('/sign-up', (req, res) => {
    const data = req.body;
    register.push(data);

    if(!data.username || !data.avatar){
        return res.status(422).send('Todos os campos são obrigatórios!');
    }

    profileImgage.avatar = req.body.avatar;
    res.status(200).send('OK');
});

//POST tweets:
app.post('/tweets', (req, res) => {
    const data = req.body;
    const userRegistered = register.find(item => item.username === data.username); 

    if(!userRegistered) {
        return res.status(401).send('UNAUTHORIZED');
    }

    messages.push({...data, ...profileImgage});
    console.log('CHECK', messages)
    res.status(200).send('OK');
})

//GET /tweets:
app.get('/tweets', (req, res) => {
    const { messageLimit } = req.query;
    const messageReverse = messages.reverse();

    const lastMessages = messageReverse.slice(0, parseInt(messageLimit))
    res.send(lastMessages);
})


//ATENÇAO: configurar o servidor para rodar na porta 5000 antes de enviar o projeto!
const PORT = 5003;
app.listen(PORT, () => console. log(`suava na nave, recebendo na porta ${PORT}`));