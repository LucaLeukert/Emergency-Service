import Login from './components/Login/Login'
import { useState } from 'react'
import HomeScreen from './components/HomeScreen'

function App() {
    const [token, setToken] = useState('')

    return (
        <div className='overflow-hidden'>
            {token ? <HomeScreen /> : <Login setToken={setToken} />}
        </div>
    )
}

export default App
