import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <nav className='navbar bg-primary mb-4'>
                <div className="container-fluid">
                    <Link className='navbar-brand' to="/">
                        Movies {/*Qui inserire immagine se necessario*/}
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default Header;