require('es6-promise').polyfill();
require('isomorphic-fetch');

export function fetchAlbums(id){
    return fetch(`https://jsonplaceholder.typicode.com/albums?userId=${id}`)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        })
        .then(albums => {
            return albums.map(album => {
                return {
                    id: album.userId,
                    albumId: album.id,
                    name: album.title
                }
            })
        })
}

export function fetchAlbum(albumId){
    return fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}`)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        })
        .then(album => {
                return {
                    name: album.title
                }
        }
        )
}
