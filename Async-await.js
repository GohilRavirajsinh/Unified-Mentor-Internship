// <h1>Async - Await</h1>
// <button id="fetch-data">Fetch User, Post & Comment Using Async-Await</button>
// <div id="output"></div>

const fetchDataBtn = document.getElementById('fetch-data')
const outputDiv = document.getElementById('output')

function appendToOutput(content) {
    const createOutput = document.createElement('p')
    createOutput.textContent = content;
    createOutput.style.color = "green";
    outputDiv.appendChild(createOutput)
} // when we use appendToOutput than create 'p' on that place with all functionality that we design on here! in short here we create a one 'p' tag in function and when we need than use this function!

async function fetchUser() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/4`);
    if (!response.ok) throw new Error('Failed User');
    return await response.json();
}

async function fetchPost(userId) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
    if (!response.ok) throw new Error('Failed Posts');
    return await response.json();
}

async function fetchComment(postId){
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${postId}/comments`);
    if (!response.ok) throw new Error('Failed Comments');
    return await response.json();
}

async function fetchUserData() {
    try {
        const user = await fetchUser();
        appendToOutput(`User: ${user.name}`) 
        
        const post = await fetchPost(user.id);
        appendToOutput(`User's Post: ${post[0].title}`)

        const comment = await fetchComment(post.id)
        appendToOutput(`User's Comment: ${comment[0].body}`)
    } catch (error) {
        appendToOutput(`Error When Fetch Data: ${error.message}`);
    }
}

fetchDataBtn.addEventListener('click' ,fetchUserData)