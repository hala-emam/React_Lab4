import React from 'react'
import { useContext } from 'react'
import { useSelector } from 'react-redux'
import { themeContext } from '../../context/theme'
import './Home.css'
function Home() {
    const lang = useSelector((state) => state.language.language);
    const { theme, setTheme } = useContext(themeContext);

    return (
        <>
        </>
        // <div className={`home ${theme}`}>
        //     Home
        //     <h4>Theme is {theme}</h4>
        //     <button className='btn btn-info' onClick={() => {
        //         setTheme((theme === 'light') ? 'dark' : 'light');
        //     }}>Toggle theme</button>
        // </div>
    )
}

export default Home
