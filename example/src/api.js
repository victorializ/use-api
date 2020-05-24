import useApi from '../../useApi';

const fakeRequest = (data, error, delay = 1000) => 
    new Promise((resolve, reject) => 
        setTimeout(() => error ? reject(error) : resolve(data), 
    delay)
);

const baseUrl = 'test';

const methods = {
    getAll: 'getAll',
    getById: 'getById',
    post: 'post', 
    put: 'put',
    delete: 'delete',
    error: 'error'
};

const api = {
    [methods.getAll]: () => fakeRequest({method: 'get', baseUrl}),
    [methods.getById]: id => fakeRequest({method: 'get', baseUrl, id}),
    [methods.post]: (params, data) => fakeRequest({method: 'post', baseUrl, data}),
    [methods.put]: (id, data) => fakeRequest({method: 'post', baseUrl, id, data}),
    [methods.delete]: id => fakeRequest({method: 'delete', baseUrl, id}),
    [methods.error]: () => fakeRequest(null, 'error occurred')
};

export default useApi(api);
export {methods as api};