import logo from './images/airbnp.png'

export default function Header(){
    return (
        <header>
            <nav className='header-nav'>
                <img src={ logo } className='nav-logo' alt='Airbnp Logo'></img>
            </nav>
        </header>
    );
}