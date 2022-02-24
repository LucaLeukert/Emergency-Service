import HomeScreenApp from '../HomeScreenApp/HomeScreenApp'
import { Gi3DGlasses } from 'react-icons/gi'
import './HomeScreen.css'

export default function HomeScreen() {
    return (
        <div className='desktop'>
            <div className='taskbar'></div>
            <div className='app-container'>
                <HomeScreenApp
                    icon={<Gi3DGlasses />}
                    name={'test'}
                    onClick={() => {}}
                />
                <HomeScreenApp
                    icon={<Gi3DGlasses />}
                    name={'test'}
                    onClick={() => {}}
                />
                <HomeScreenApp
                    icon={<Gi3DGlasses />}
                    name={'test'}
                    onClick={() => {}}
                />
                <HomeScreenApp
                    icon={<Gi3DGlasses />}
                    name={'test'}
                    onClick={() => {}}
                />
                <HomeScreenApp
                    icon={<Gi3DGlasses />}
                    name={'test'}
                    onClick={() => {}}
                />
                <HomeScreenApp
                    icon={<Gi3DGlasses />}
                    name={'test'}
                    onClick={() => {}}
                />
            </div>
        </div>
    )
}
