import axios from 'axios'
import { authHeader } from './AuthService'

const apiRoute = 'http://localhost:8080/api/app'

class UserService {
    getTestAppContent() {
        return axios.get(apiRoute + '/test', { headers: authHeader() })
    }
}
export default new UserService()
