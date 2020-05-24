import React from 'react';

import useApi, { api } from './api';

import './App.css';

function App() {
    const [response, request] = useApi(api.getUsers);

    const getFirstUser = () => {
        return request(api.getUserById, 1);
    };

    const createUser = () => {
        request(api.newUser, null, 'user');
    };

    const generateError = () => {
        return request(api.error);
    };

    return(
        <>
            { response.loading && <div>Loading...</div> }
            { response.error && <div>{response.error}</div> }
            { response.data && <div>{JSON.stringify(response.data)}</div> }

            <button onClick={getFirstUser}>Get First User</button>
            <button onClick={createUser}>New User</button>
            <button onClick={generateError}>Error</button>
        </>
    );
}

export default App;