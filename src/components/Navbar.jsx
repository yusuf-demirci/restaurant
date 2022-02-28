

function Navbar() {
  return (
    <nav>
        <div className="nav-brand">
            Restaurant
        </div>
        <div className="nav-bar">
            <ul className="nav-list">
                <li className="nav-list-item">
                    <a className="nav-link" href="#">Home</a>
                </li>
                <li className="nav-list-item">
                    <a className="nav-link" href="#">Menu</a>
                </li>
                <li className="nav-list-item">
                    <a className="nav-link" href="#">Contact</a>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar