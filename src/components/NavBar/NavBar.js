import "./styles.css"
import CarWidget from "../CarWidget/CarWidget";

const NavBar = () => {
    return <nav className="navbar navbar-expand-lg navbar-light fixed-top">
    <div className="container">
      <a className="navbar-brand" href="#">GoatElements</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
  
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Productos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Ustedes</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Nosotros</a>
          </li>
        </ul>
        <CarWidget/>
      </div>
    </div>
  </nav>
}

export default NavBar;