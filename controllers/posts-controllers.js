import posts from '../imgs/posts/posts';

function index(request, response) {
    response.json(posts);
}


export {
    index
}
