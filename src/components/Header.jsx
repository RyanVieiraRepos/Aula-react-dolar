import { Link } from 'react-router-dom'

function Header() {



    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Calculadoras</a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation">


                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link to="CalcDollar"><a className="nav-link" href="#">Dólar</a></Link>
                    </li>

                    <li className="nav-item">
                        <Link to="CmMetros"><a className="nav-link" href="#">Centímetros p/ Metros</a></Link>
                    </li>

                    <li className="nav-item">
                        <Link to="MetrosCm"><a className="nav-link" href="#">Metros p/ Centímetros</a></Link>
                    </li>

                    <li className="nav-item">
                        <Link to="Sobre"><a className="nav-link" href="#">Sobre</a></Link>
                    </li>
                </ul>
            </div>
        </nav >

    )
}

export default Header