// state.js
export const state = {
  selectedUseryID: null,
  posts: [],
  searchTxt: '',
};

export function postsFilter() {
  const searchTerm = state.searchTxt.trim().toLowerCase();
  return state.posts.filter(post => post.title.toLowerCase().includes(searchTerm));
}