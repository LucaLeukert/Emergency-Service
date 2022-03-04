import Login from './components/Login/Login'
import HomeScreen from './components/HomeScreen'
import useAuth from './hook/useAuth'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { AuthService } from './auth/AuthService'

function App() {
    console.log(AuthService.getUser())
    return (
        <>
            <div className='overflow-hidden'>
                {AuthService.getUser() ? <HomeScreen /> : <Login />}
                {AuthService.getUser() ? (
                    <button
                        className='fixed top-0 rounded bg-gray-200 p-3 right-0 m-3 font-bold shadow-sm hover:shadow-md hover:bg-gray-300 transition-all'
                        onClick={() => AuthService.logout()}
                    >
                        Logout
                    </button>
                ) : (
                    <></>
                )}
            </div>
            <ToastContainer
                position='top-right'
                autoClose={2000}
                hideProgressBar={false}
                closeOnClick={true}
                pauseOnHover={false}
            />
        </>
    )
}

export default App
