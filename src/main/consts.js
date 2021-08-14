export default { 
    API_URL: process.env.REACT_APP_API_URL ? process.env.REACT_APP_API_URL : 'http://localhost:3003/api', 
    OAPI_URL: process.env.REACT_APP_OAPI_URL ? process.env.REACT_APP_OAPI_URL : 'http://localhost:3003/oapi' 
}