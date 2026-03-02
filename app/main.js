// main.js — Connects everything together

import { getUsers, getPostByUser } from './api.js';
import { renderUsers, renderPostCards, showAlert, hideAlert, setLoading, updateSectionTitle } from './ui.js';
import { state, postsFilter } from './state.js';

const userSelect  = document.getElementById('user-select');
const searchInput = document.getElementById('search-input');
const reloadBtn   = document.getElementById('reload-btn');
const retryBtn    = document.getElementById('retry-btn');


// 1. Load users when page opens
getUsers()
  .then(users => renderUsers(users))
  .catch(err  => showAlert('Could not load users: ' + err.message));


// 2. User picks someone from dropdown → fetch their posts
userSelect.addEventListener('change', function () {
  state.selectedUseryID = userSelect.value;
  state.searchTxt       = '';
  searchInput.value     = '';
  updateSectionTitle(userSelect.selectedOptions[0].textContent);
  loadPosts(state.selectedUseryID);
});


// 3. User types in search → filter without fetching
searchInput.addEventListener('input', function () {
  state.searchTxt = searchInput.value;
  renderPostCards(postsFilter());
});


// 4. Reload / Retry buttons
reloadBtn.addEventListener('click', () => loadPosts(state.selectedUseryID));
retryBtn.addEventListener('click',  () => { hideAlert(); loadPosts(state.selectedUseryID); });


// 5. The main fetch function
function loadPosts(userId) {
  if (!userId) return;
  hideAlert();
  setLoading(true);

  getPostByUser(userId)
    .then(data => { state.posts = data; renderPostCards(postsFilter());})
    .catch(err  => showAlert('Could not load posts: ' + err.message))
    .finally(   () => setLoading(false));
}