export interface User {
    id: number
    serviceId: number
    username: string
    roles: ['ADMIN', 'USER']
    accessToken: string
}
