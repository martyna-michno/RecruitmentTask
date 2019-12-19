function fetchUser(id) {

    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        })
        .then(user => {
                return {
                  id: user.id,
                  name: user.name,
                  username: user.username,
                };
            }
        )
}

export default fetchUser
