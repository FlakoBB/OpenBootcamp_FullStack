import APIResponse from '../utils/config/axios.config'

export default function getRandomJoke() {
    return APIResponse.get('/', {
        validateStatus: (status) => {
            return status < 500
        }
    })
}