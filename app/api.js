export function getUsers(){
    return fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>
    {
        if(!res.ok) throw new Error(res.status);
        return res.json()
    }
    )
}

export function getPostByUser(userId){
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then(res=>{
        if (!res.ok) throw Error (res.status)
            return res.json()
    })
}