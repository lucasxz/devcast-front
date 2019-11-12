import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return (
            <nav class="navbar is-transparent is-dark" role="navigation" aria-label="main navigation" style={{backgroundColor: 'transparent'}}>
                <div class="navbar-brand">
                    <a class="navbar-item" href="">
                        devCast
      </a>

                    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>;
        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" class="navbar-menu">
                    <div class="navbar-start">

                    </div>
                    <div class="navbar-end">
                        <div class="navbar-item">
                            <Link to="/profile">profile</Link>
                        </div>
                        <div class="navbar-item">
                            <Link to="/">home</Link>
                        </div>
                    </div>
                </div>
            </nav>
        );
    };
}

export default Navbar;
