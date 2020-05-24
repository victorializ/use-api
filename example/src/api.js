import useApi from '../../useApi';

const fakeRequest = (data, error, delay = 1000) => 
    new Promise((resolve, reject) => 
        setTimeout(() => error ? reject(error) : resolve(data), 
    delay)
);

const baseUrl = 'user';

function getUsers() {
    return fakeRequest({method: 'get', baseUrl});
}

function getUserById(id) {
    return fakeRequest({method: 'get', baseUrl, id});
}

function newUser(params, data) {
    return fakeRequest({method: 'post', baseUrl, data});
}

function updateUser(id, data) {
    return fakeRequest({method: 'put', baseUrl, id, data});
}

function deleteUser(id) {
    return fakeRequest({method: 'delete', baseUrl, id});
}

function error() {
    return fakeRequest(null, 'error occurred');
}

const api = {
    getUsers,
    getUserById,
    newUser,
    updateUser,
    deleteUser,
    error
};

const methods = {
    getUsers: 'getUsers',
    getUserById: 'getUserById',
    newUser: 'newUser', 
    updateUser: 'updateUser',
    deleteUser: 'deleteUser',
    error: 'error'
};

export default useApi(api);
export {methods as api};