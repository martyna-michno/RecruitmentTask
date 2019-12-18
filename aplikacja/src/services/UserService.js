export const fetchUser = () => {

    const {math: { params }} = this.props

    fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
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