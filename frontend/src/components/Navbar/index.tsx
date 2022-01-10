import { ReactComponent as GithubIcon } from 'assets/img/github.svg'
import './styles.css'
function Navbar() {

    return (

        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <h1>DSMOVIE</h1>
                    <a href="https://github.com/johnyguido"></a>
                    <div className="dsmovie-contact-conteiner">
                        <GithubIcon />
                        <p className="dsmovie-contact-link">/johnyguido</p>
                    </div>
                </div>
            </nav>
        </header>

    );

}

export default Navbar;