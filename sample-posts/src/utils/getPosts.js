export default async function getPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.org/posts');
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}
