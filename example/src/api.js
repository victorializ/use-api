const request = (data, error, delay = 1000) => 
    new Promise((resolve, reject) => 
        setTimeout(() => error ? reject(error) : resolve(data), 
    delay)
);

const url = 'test';

const actions = {
    getAll: 'getAll',
    getById: 'getById',
    post: 'post', 
    put: 'put',
    delete: 'delete',
    error: 'error'
};

const api = {
    getAll: () => request({url}),
    getById: id => request({url, id}),
    post: (params, data) => request({url, data}),
    put: (id, data) => request({url, id, data}),
    delete: id => request({url, id}),
    error: () => request(null, 'error occurred')
};

export { api };
export default actions;