export let selectedUseryID = null;
export let posts=[];
export let searchTxt = "";

export function postsFilter(){
    const searchTerm = searchTxt.trim().toLowerCase();
    return posts.filter(post => post.title.toLowerCase().includes(searchTerm))
}