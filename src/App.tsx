import './styles/App.css'
import HomeScreen from './components/HomeScreen/HomeScreen'
import Login from './components/Login/Login'
import { useState } from 'react'

function App() {
    const [token, setToken] = useState('')

    return (
        <div className='App'>
            {token ? <HomeScreen /> : <Login setToken={setToken} />}
        </div>
    )
}

export default App
