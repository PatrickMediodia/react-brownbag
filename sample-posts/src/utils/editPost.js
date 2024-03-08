export default async function editPost({ id, title, body, userId }) {
    const requestHeader = {
        'Content-type': 'application/json; charset=UTF-8',
    };

    const requestBody = JSON.stringify({
        id,
        title,
        body,
        userId,
    });

    const request = {
        method: 'PUT',
        body: requestBody,
        headers: requestHeader,
    }

    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`, 
        request
    );
    
    return await response;
}
