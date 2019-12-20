require('es6-promise').polyfill();
require('isomorphic-fetch');

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
                  email: user.email,
                  street: user.address.street,
                  suite: user.address.suite,
                  city: user.address.city,
                  zipcode: user.address.zipcode,
                  phone: user.phone,
                  website: user.website,
                  company: user.company.name
                };
            }
        )
}

export default fetchUser
