import Api from './api';

const UserService = {
    register: (params) => Api.post('/users/register', params),
    login: async (params) => {
        const response = await Api.post('/users/login', params)
        localStorage.setItem("id", response.data.user._id)
        localStorage.setItem("user", response.data.user.username)
        localStorage.setItem("email", response.data.user.email)
        localStorage.setItem("token", response.data.token);
    },
    update1: async (id, params) => {
        const res = await Api.put(`users/${id}`, params)
        localStorage.setItem("user", res.data.user.username)
        localStorage.setItem("email", res.data.user.email)
    },
    update: async (params) => {
        const response = await Api.put("/users", params, {
            headers: { 'x-access-token': localStorage.getItem('token') }
        })
        localStorage.setItem('user', response.data.username);
        localStorage.setItem('email',response.data.email);
    },
    updatePassword: async (params) => {
        await Api.put("/users/password", params, {
            headers: { 'x-access-token': localStorage.getItem('token') }
        })
    },
    delete: async () => {
        await Api.delete("/users", {
            headers: { 'x-access-token': localStorage.getItem('token') }
        })
        localStorage.removeItem('user', null);
        localStorage.removeItem('token', null);
    },
    logout: () => {
        localStorage.removeItem("user", null);
        localStorage.removeItem("token", null);
        localStorage.removeItem("email", null);
    }
}


export default UserService