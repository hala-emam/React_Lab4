import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbare  from './Components/Navbare/Navbare.jsx'
import { useSelector } from 'react-redux'
function AppLayout() {
    const lang= useSelector((state)=>state.language.language)
    return (
        <>
       <div dir={`${(lang==="en")?'ltr':'rtl'}`}>
       <Navbare/>
        <Outlet/>
       </div>
        </>
    )
}

export default AppLayout
