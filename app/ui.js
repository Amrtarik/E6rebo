
const userSelect      = document.getElementById('user-select');
const postsContainer  = document.getElementById('posts-container');
const loadingState    = document.getElementById('loading-state');
const alertBox        = document.getElementById('alert-box');
const alertMessage    = document.getElementById('alert-message');
const emptyState      = document.getElementById('empty-state');
const sectionTitle    = document.getElementById('section-title');
const postCount       = document.getElementById('post-count');


export function renderUsers(users){
    userSelect.innerHTML='';
    const defaultOpt= document.createElement('option')
    defaultOpt.value=''
    defaultOpt.textContent='-Pick a user'
    defaultOpt.disabled=true
    defaultOpt.selected=true
    userSelect.appendChild(defaultOpt)


    users.forEach(user => {
        const opt = document.createElement('option')
        opt.value= user.id;
        opt.textContent=user.name
        opt.dataset.username= user.username
        userSelect.appendChild(opt)       
    });
}


export function renderPostCards(posts, str=''){
    if (posts.length===0)
      {  emptyState.classList.add('empty-state--visible')
       postCount.textContent=''
       return;
    }
    emptyState.classList.remove('empty-state--visible');
    postCount.textContent = `${posts.length} post${posts.length !== 1 ? 's' : ''} found`;

    posts.forEach((post, index) => {
    postsContainer.innerHTML += `
      <div class="post-card">
        <div class="card-index"># ${index + 1}</div>
        <div class="card-title">${post.title}</div>
        <div class="card-body">${post.body}</div>
      </div>
    `;
  });

}

export function showAlert(message) {
  alertMessage.textContent = message;
  alertBox.classList.add('alert-box--visible');
}

export function hideAlert() {
  alertBox.classList.remove('alert-box--visible');
}

export function setLoading(isLoading) {
  if (isLoading) {
    loadingState.classList.add('loading-state--visible');
    postsContainer.innerHTML = '';
    emptyState.classList.remove('empty-state--visible');
  } else {
    loadingState.classList.remove('loading-state--visible');
  }
}

export function updateSectionTitle(name) {
  sectionTitle.textContent = `${name}'s Posts`;
}

