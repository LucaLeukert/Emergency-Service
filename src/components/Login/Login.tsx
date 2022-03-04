import { useState } from 'react'
import { toast } from 'react-toastify'
import { AuthService } from '../../auth/AuthService'

export default function Login() {
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async () => {
        if (username !== '' || password !== '') {
            toast.promise(
                AuthService.login(username, password),
                {
                    pending: 'Logging in...',
                    success: {
                        render() {
                            window.location.reload()

                            return (
                                <p>Logged in successfully with {username}.</p>
                            )
                        },
                    },
                    error: {
                        render(error: any) {
                            return (
                                <p>
                                    Fehler beim Einloggen: {error.data.message}
                                </p>
                            )
                        },
                    },
                },
                { className: 'select-none' }
            )
        } else {
            toast.error(
                'Es muss ein Benutzername und Passwort angegeben sein.',
                { className: 'select-none' }
            )
        }
    }

    return (
        <>
            <h1 className='pt-2 pl-2 select-none bg-gray-50 text-gray-600 text-sm font-bold pb-2'>
                Emergency Service
            </h1>
            <div className='bg-gray-50 shadow-md rounded-b p-8 mb-4 flex flex-col items-center'>
                <div className='mb-6 w-2/3 max-w-4xl'>
                    <label className='block select-none text-gray-600 text-sm font-bold mb-2'>
                        Username
                    </label>
                    <input
                        type='text'
                        onChange={(e) => setUserName(e.target.value)}
                        className='shadow-sm hover:shadow-md transition-shadow appearance-none border rounded border-red w-full py-2 px-3 text-gray-600 bg-gray-200 mb-3'
                    />
                </div>
                <div className='mb-6 w-2/3 max-w-4xl'>
                    <label className='block select-none text-gray-600 text-sm font-bold mb-2'>
                        Passwort
                    </label>
                    <input
                        type='password'
                        onChange={(e) => setPassword(e.target.value)}
                        className='shadow-sm hover:shadow-md transition-shadow appearance-none border rounded border-red w-full py-2 px-3 text-gray-600 bg-gray-200 mb-1'
                    />
                    {!password ? (
                        <p className='text-red-600 select-none text-xs italic text-center mt-1'>
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
                        onClick={handleLogin}
                    >
                        Einloggen
                    </button>
                </div>
            </div>
        </>
    )
}
