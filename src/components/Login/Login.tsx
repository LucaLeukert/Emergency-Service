import { FormEvent, useState } from 'react'
import { AuthService } from '../../auth/AuthService'

async function loginUser({
    username,
    password,
}: {
    username: string
    password: string
}) {
    AuthService.login({username, password}).
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
        const token = await loginUser({
            username,
            password,
        })
        setToken(token)
    }

    return (
        <>
            <h1 className='mt-2 ml-2 select-none text-gray-600 text-sm font-bold mb-2'>
                Emergency Service
            </h1>
            <div className='bg-white shadow-md rounded p-8 mb-4 flex flex-col items-center'>
                <div className='mb-6'>
                    <label className='block select-none text-gray-600 text-sm font-bold mb-2'>
                        Username
                    </label>
                    <input
                        type='text'
                        onChange={(e) => setUserName(e.target.value)}
                        className='shadow appearance-none border rounded border-red w-full py-2 px-3 text-gray-600 mb-3'
                    />
                </div>
                <div className='mb-6'>
                    <label className='block select-none text-gray-600 text-sm font-bold mb-2'>
                        Passwort
                    </label>
                    <input
                        type='password'
                        onChange={(e) => setPassword(e.target.value)}
                        className='shadow appearance-none border rounded border-red w-full py-2 px-3 text-gray-600 mb-1'
                    />
                    {!password ? (
                        <p className='text-red-600 select-none text-xs italic text-center'>
                            Bitte wählen sie ein sicheres Passwort.
                        </p>
                    ) : (
                        <></>
                    )}
                </div>
                <div className='mb-6'>
                    <button
                        className='bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded transition-colors'
                        type='submit'
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </>
    )
}
