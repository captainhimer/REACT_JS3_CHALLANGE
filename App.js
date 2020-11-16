import React from 'react';
import Utama from './Components/Utama';
import {Link} from 'react-router-dom';


class App extends React.Component {
  render() {
    return(
      <div>
        <nav className="navbar navbar-expand-sm navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
        <img src="" alt="Corona Virus" ></img> 
        </a>
        <div className="collapse navbar-collapse" >
            <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Information">Information</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Kontak">Kontak</Link>
            </li>
          </ul>
        </div>
        </nav>
        <p><Utama/></p>
      </div>
      )
    }
  }

export default App;