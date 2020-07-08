import React from "react";
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
            <ul>
              <li><NavLink to="/quokka">Quokka</NavLink></li>
              <li><NavLink to="/quokka">Koala</NavLink></li>
              <li><NavLink to="/quokka">Dingo</NavLink></li>
              <li><NavLink to="/quokka">Kangaroo</NavLink></li>
            </ul>
           
        </nav>
    );
}

export default Navigation;