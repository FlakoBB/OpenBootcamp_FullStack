import APIRequest from './../utils/config/axios.config' // * el nombre de la importacion puede ser cualquiera

export default function getRandomUser() {
    return APIRequest.get('/', {
        validateStatus: function(status) {
            return status < 500 // ? Resolve only if status code is less than 500
        }
    })
}