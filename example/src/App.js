import React from 'react';

import useApi from './useApi';
import api from './api';

import './App.css';

function App() {
    const [response, request] = useApi(api.getAll);
    return(
        <>
            { response.loading && <div>Loading...</div> }
            { response.error && <div>{response.error}</div> }
            { response.data && <div>{JSON.stringify(response.data)}</div> }
            <button onClick={() => request(api.getById, 1)}>Get By Id 1</button>
            <button onClick={() => request(api.post, null, {post: 'post'})}>Post</button>
            <button onClick={() => request(api.error)}>Error</button>
        </>
    );
}

export default App;