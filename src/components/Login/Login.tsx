import React, { FormEvent, useState } from 'react'

async function loginUser({
    username,
    password,
}: {
    username: string
    password: string
}) {
    return fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(username + ':' + password),
    }).then((data) => data.json())
}

export default function Login({
    setToken,
}: {
    setToken: (token: string) => void
}) {
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault()
        const token = await loginUser({
            username,
            password,
        })
        setToken(token)
    }

    return (
        <div className='Login'>
            <form className='login-form' onSubmit={handleSubmit}>
                <label className='username-lable'>
                    <p>Username</p>
                    <input
                        type='text'
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </label>
                <label className='password-lable'>
                    <p>Password</p>
                    <input
                        type='password'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
