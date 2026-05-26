import express from 'express';
import router from './routers/posts-routers';

const app = express();
const port = process.env.SERVER_PORT || 3000;

app.use('/posts', posts-router); // ricevi richiesta get vai a postrouter

app.listen(port, (Error) => {
    if(Error ) {
        console.error("errore nel caricamento");
        return;
    }
    console.log(`server aperto porta ${port}`);
});

