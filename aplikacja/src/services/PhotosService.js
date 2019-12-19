export const fetchPhotos = (albumId) => {
    return fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
        .then(response => {
            if (response.ok) {
                return response.json()
            }
        })
        .then(photos => {
            return photos.map(photo => {
                return {
                    photoId: photo.id,
                    name: photo.title,
                    url: photo.url,
                    tinyUrl: photo.thumbnailUrl
                }
            })
        })
}