import express from 'express';

const app = express();
const port = process.env.SERVER_PORT || 3000;

app.listen(port, (Error) => {
    if(Error ) {
        console.error("errore nel caricamento");
        return;
    }
    console.log(`server aperto porta ${port}`);
});

