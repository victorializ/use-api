## useApi hook
Custom React hook that takes care of fetching and submitting data

### Usage
The idea is to create a service that encapsulates API calls and let custom hook call this service

#### Create api service

Functions in service should follow the signature:   
`methodName(params, body) { ... return Promise}`  

Example:  
```
function getUsers() { return axios.get('/user') }
function getUserById(id) { ... }
function newUser(params, user) { ... }
function updateUser(id, user) { ... }
api = {  
  getUsers, 
  getUserById,
  newUser,
  updateUser 
}
```

#### Pass service to useApi

useApi is a function that takes api service and returns hook  
`useUserApi = useApi(api)`

#### Use hook in components 

Hook returns `[response, request]`  

`respose` is an object with properties: `data`, `loading`, `error`  

`request (method, params, body)`  
`method` is a name of the method in the api service
`params` and `body` are optional

Example:  
```
function App() {
    const [response, request] = useUserApi('getUsers'); // fetch data after mounting

    const handleClick = id => request('updateUser, 1, user); // fetch data in the event handler

    return (
      response.loader ? <Loader /> : <Data /> //render depending on the response  
      ...
    )
}
```
Check full usage example in `example` folder

### Run an example
To run an example in development mode:  
`cd example`  
`npm install`  
`npm start`  
Open http://localhost:3000 to view app in the browser
