import React, {Component} from 'react';
import '../css/Header.css';

class Header extends Component{
    render(){
        return(
            <nav>
                <ul>
                    <li className="title"><strong>Gain<span className="z">Z</span></strong></li>
                    <li>Home</li>
                    <li>About</li>
                    <li>Login</li>
                </ul>
            </nav>
        )
    }

}

export default Header;