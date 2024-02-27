function NavBar(){
    return <div className="nav-bar">
                <a className="nav-link" href="./index.html">
                    <img src="public/mm-favicon.svg" height={22}></img>
                Eburg March Madness</a>
                <div id="nav-menu">
                    <ul id="nav-list">
                        <li className="nav-menu-item">
                            <a className="nav-link" id="nav-profile" href="/">Profile</a>
                        </li>
                        <li className="nav-menu-item">
                            <a className="nav-link" id="nav-login" href="/">Login</a>
                        </li>
                        <li className="nav-menu-item">
                            <a className="nav-link" href="/" >Picks</a>
                        </li>
                        <li className="nav-menu-item">
                            <a className="nav-link" href="/" >Standings</a>
                        </li>
                        <li className="nav-menu-item">
                            <a className="nav-link" href="/" >Rules</a>
                        </li>
                    </ul>
                </div>
            </div>
    ;
}

export default NavBar;