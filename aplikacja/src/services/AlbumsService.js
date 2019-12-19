export const fetchAlbums = id => {
    return fetch(`https://jsonplaceholder.typicode.com/albums?userId=${id}`)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        })
        .then(data => {
            return data.map(album => {
            return {
                id: album.userId,
                albumId: album.id,
                name: album.title
            }}
            )
        })
}
