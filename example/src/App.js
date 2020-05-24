import React from 'react';

import useApi, { api } from './api';

import './App.css';

function App() {
    const [response, request] = useApi(api.getUsers);
    return(
        <>
            { response.loading && <div>Loading...</div> }
            { response.error && <div>{response.error}</div> }
            { response.data && <div>{JSON.stringify(response.data)}</div> }
            <button onClick={() => request(api.getUserById, 1)}>Get First User</button>
            <button onClick={() => request(api.newUser, null, 'user')}>New User</button>
            <button onClick={() => request(api.error)}>Error</button>
        </>
    );
}

export default App;