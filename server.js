import express from 'express';
import router from './routers/posts-routers.js';

const app = express();
const port = process.env.SERVER_PORT || 3000;

// Aggiungiamo il body-parser integrato in Express
// Questo passaggio è fondamentale: senza questo, request.body risulterà undefined
app.use(express.json());

app.use('/posts',router); // ricevi richiesta get vai a postrouter

app.listen(port, (Error) => {
    if(Error ) {
        console.error("errore nel caricamento");
        return;
    }
    console.log(`server aperto porta ${port}`);
});

