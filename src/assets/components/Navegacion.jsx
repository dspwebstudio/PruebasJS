import { Component } from 'react'
import './Navegacion.css'

class Navegacion extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                  <div className="container d-flex align-items-center">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" href="#" aria-current="page">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                        </ul>
                    </div>
              </div>
            </nav> 
        )
    }
}
export default Navegacion
