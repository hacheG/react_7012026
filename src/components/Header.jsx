import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'

export function Header(){
    const [count, setCount] = useState(0)
    return(
        <header>
            <div>
                <a href="https://vitejs.dev" target='blank'>
                    <img src={viteLogo} className='logo' alt="Vite logo" />
                </a>
                <a href="https://reactjs.org" target='blank'>
                    <img src={reactLogo} className='logo' alt="React logo" />
                </a>
            </div>
            Header
        </header>
    )
}