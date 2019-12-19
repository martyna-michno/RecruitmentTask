export const fetchPhotos = (albumId) => {
    return fetch(`onplaceholder.typicode.com/photos?albumId=${albumId}`)
        .then(response => {
            if (response.ok) {
                return response.json()
            }
        })
        .then(photos => {
            return photos.map(photo => {
                return {
                    photoId: photo.id,
                    name: photo.name,
                    url: photo.url,
                    tinyUrl: photo.thumbnailUrl
                }
            })
        })
}