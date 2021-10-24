export const feedsAPI = {
    async getPhotos() {
        try {
            const response = await fetch('https://picsum.photos/v2/list');
            const json = await response.json();
            return json
        } finally {
            setLoading(false);
        }
    }
}

export const loginAPI = {
    async authMe(id) {
        const response = await fetch(`https://reqres.in/api/users/${id}`);
        const json = await response.json();
        return json.data
    },
    async login(email, password) {
        const response = await fetch('https://reqres.in/api/register', {
            method: 'POST',
            body: JSON.stringify({ email: email, password: password })
        });
        const json = await response.json();
        console.log(json);
        return json.id
    },
    async logout() {
        const response = await fetch('https://reqres.in/api/login', {method: 'DELETE'});
        const json = await response.json();
        return json
    }
}