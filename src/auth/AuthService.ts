import axios, { AxiosResponse } from 'axios'
import { User } from '../interfaces/User'

const apiRoute = 'http://localhost:8080/api/auth'

class AuthService {
    static async login(username: string, password: string): Promise<User> {
        return axios
            .post(`${apiRoute}/login`, {
                username,
                password,
            })
            .then((response: AxiosResponse<User>) => {
                if (response.data.accessToken) {
                    localStorage.setItem('user', JSON.stringify(response.data))
                }
                return response.data
            })
    }

    static logout(): void {
        localStorage.removeItem('user')
        window.location.reload()
    }

    static getUser(): User | null {
        return JSON.parse(localStorage.getItem('user') as string) as User
    }
}

function authHeader(): { Authorization: string } | {} {
    const user = JSON.parse(localStorage.getItem('user') as string)
    if (user && user.accessToken) {
        return { Authorization: 'Bearer ' + user.accessToken }
    } else {
        return {}
    }
}

export { AuthService, authHeader }
