const loadPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    const posts = data;
    displayPosts(posts);
}

const displayPosts = posts =>{
    const postContainer = document.getElementById('post-container');
    postContainer.textContent = '';

    posts.forEach(post =>{
        const postCard = document.createElement('div');
        postCard.classList = `card bg-gray-200 text-black p-4 shadow-xl`;
        postCard.innerHTML = `
        <div class="card-body">
          <h1 class="text-4xl">${post.id}</h1>
          <h2 class="card-title">Country: ${post.title}</h2>
          <p>${post.body}</p>
      </div>
        `;
        postContainer.appendChild(postCard);
    })
}
loadPosts();