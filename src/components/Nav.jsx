import React, { Component } from 'react';
import './nav.css';

class Nav extends Component {
    render() {
        return (
            <nav>
                <input type="search" placeholder="Search mail"/>
                <p>PRIMARY</p>
            </nav>
        );
    }
}

export default Nav;