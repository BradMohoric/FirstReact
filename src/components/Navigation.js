import React from 'react';

export default class Navigation extends React.Component {
    render() {
        return ( <nav className="navbar navbar-dark bg-dark">
        <ul className="nav">
        <li className="nav-item">
          <a className="nav-link active" href="#">Login</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
      </ul>
      </nav>
        )
    }
}