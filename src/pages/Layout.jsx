import { Outlet, Link } from 'react-router-dom'

import Menu from '../components/Menu'
import Titulo from '../components/Titulo'
import Footer from '../components/Footer'
import Menu from '../components/Menu'


function Layout() {
    return (
        <>
            <div className="container">
                <Titulo />
                <Menu />
                <Outlet />
            </div>
            <Footer />
        </>
    )
}
export default Layout