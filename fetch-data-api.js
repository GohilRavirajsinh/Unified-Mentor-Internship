// https://jsonplaceholder.typicode.com/todos/

{/* <h1>Chaining Promises</h1>
<button id="fetch-callback">Fetch User, Posts & Comments</button>
<div id="output"></div> */}

const fetchDataBtn = document.getElementById('fetch-callback')
const outputDiv = document.getElementById('output')

function appendToOutput(content) {
    const p = document.createElement("p");
    p.textContent = content;
    p.style.color = "blue"
    outputDiv.appendChild(p);
}

function fetchUser() {
    return fetch(`https://jsonplaceholder.typicode.com/users/1`)
        .then((response) => {
            if (!response.ok) throw new Error("Failed to fetch user");
            return response.json();
        }
        )
}

function fetchPosts(userId) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        .then((response) => {
            if (!response.ok) throw new Error("Failed to fetch Posts");
            return response.json();
        })
}

function fetchComments(postId) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${postId}/comments`)
        .then((response) => {
            if (!response.ok) throw new Error("Failed to fetch Comments");
            return response.json();
        })
}

function fetchUserData() {
    fetchUser()
        .then((user) => {  // Promise Chaining
            appendToOutput(`User: ${user.name}`);
            return fetchPosts(user.id);
        })
        .then((posts) => {
            appendToOutput(`User's Post: ${posts[0].title}`);
            return fetchComments(posts.id)
        })
        .then((comment) => {
            appendToOutput(`User's Comment: ${comment[0].body}`);
        }).catch((err) => {
            appendToOutput(`Error: ${err}`)
        })
}

fetchDataBtn.addEventListener('click', fetchUserData)