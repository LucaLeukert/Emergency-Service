import axios from 'axios'
import { User } from '../interfaces/User'

const apiRoute = 'http://localhost:8080/api/auth'

class AuthService {
    static async login({
        username,
        password,
    }: {
        username: string
        password: string
    }): Promise<User> {
        const response = await axios.post(`${apiRoute}/login`, {
            username,
            password,
        })
        if (response.data.accessToken) {
            sessionStorage.setItem('user', JSON.stringify(response.data))
        }
        return response.data as User
    }

    static logout(): void {
        sessionStorage.removeItem('user')
    }

    static getUser(): string | null {
        return JSON.parse(sessionStorage.getItem('user') as string)
    }
}

function authHeader(): { Authorization: string } | {} {
    const user = JSON.parse(sessionStorage.getItem('user') as string)
    if (user && user.accessToken) {
        return { Authorization: 'Bearer ' + user.accessToken }
    } else {
        return {}
    }
}

export { AuthService, authHeader }
