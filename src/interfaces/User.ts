export interface User {
    id: number
    serviceId: number
    username: string
    roles: ['admin', 'user']
    accessToken: string
}
