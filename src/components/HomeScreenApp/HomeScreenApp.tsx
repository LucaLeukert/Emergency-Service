import './HomeScreenApp.module.css'
import { IconBaseProps } from 'react-icons'

function HomeScreenApp({
    icon,
    name,
    onClick,
}: {
    icon: IconBaseProps
    name: string
    onClick: () => void
}) {
    return (
        <div className='app-box' onClick={onClick}>
            <div className='app-icon'>{icon}</div>
            <h1 className='app-text'>{name}</h1>
        </div>
    )
}

export default HomeScreenApp
