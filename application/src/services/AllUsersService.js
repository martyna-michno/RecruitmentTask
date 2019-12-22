require('es6-promise').polyfill();
require('isomorphic-fetch');

export function fetchAllUsers(){
    return fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(data => {
        return data.map(user => {
          return {
            id: user.id,
            name: user.name
          };
        });
      });
  };