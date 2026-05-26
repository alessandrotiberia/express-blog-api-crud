import posts from '../imgs/posts/posts.js';

//status 200 è corretto manda posts formato json
// read index visualizza tutti gli elementi
function index(request, response) {
    response.status(200).json(posts);
}

//read show visualizza singolo elemento
function show(request, response) {
    //prendo id
    const { id } = request.params;

    const idOk = Number(id.trim());

    if (isNaN(idOk) || idOk <= 0) {
        response.status(400)
            .json({
                error: "id non trovato",
                results: "id non corrisponde al posts"
            });
        return;
    }

    const postsFiltered = posts.find((postOk) => postOk.id === idOk);

    if (postsFiltered != undefined) {
        response.status(200)
            .json({
                error: null,
                results: postOk
            });
    } else {
        response.status(404)
            .json({
                error: "id not found",
                results: null
            });
    }
}

function destroy(request, response) {
    const { id } = request.params;

    const idOk = Number(id.trim());

    if (isNaN(idOk) || idOk <= 0) {
        response.status(400).json({
            error: "Parametro id non corretto",
            results: "L'id inserito non è un numero valido"
        });
        return;
    }
    const indexPost = posts.findIndex((postOk) => postOk.id === idOk);

    // 5. Controllo se il post esiste davvero
    if (indexPost === -1) {
        // Se l'indice è -1, il post non c'è. Restituisco 404 (Not Found).
        response.status(404).json({
            error: "Post non trovato",
            results: null
        });
        return;
    }
    posts.splice(indexPost, 1);
    console.log("Post eliminato con successo. Ecco la lista dei post aggiornata:");
    console.log(posts);

    //risposta postman 
    response.sendStatus(204);
}


function store(request, response) {

    // I dati inviati da Postman, grazie ad app.use(express.json()),
    const datiInArrivo = request.body;

    
    console.log("Dati del nuovo post ricevuti da Postman:");
    console.log(datiInArrivo);

    // E poi di restituirli al client (Postman) per conferma.
    // Usiamo lo status 201 (Created), che è lo standard per la creazione di una nuova risorsa.
    response.status(201).json({
        messaggio: "Dati ricevuti e decifrati correttamente",
        dati: datiInArrivo
    });
}

export {
    index,
    show,
    destroy,
    store
}
