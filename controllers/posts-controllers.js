import posts from '../imgs/posts/posts.js';

function index(request, response) {
    response.status(200).json(posts);
}


export {
    index
}
