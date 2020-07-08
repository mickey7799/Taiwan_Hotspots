import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";


const Li = styled.li`
    width: 100px;
    margin: 10px;
`;

const Ul = styled.ul`
    display: flex;
    justify-content: center;
    flex-direction: row;
`;


const Navigation = () => {
    return (
        <nav className="main-nav">
            <Ul>
              <Li><NavLink to="/quokka">Quokka</NavLink></Li>
              <Li><NavLink to="/Koala">Koala</NavLink></Li>
              <Li><NavLink to="/Dingo">Dingo</NavLink></Li>
              <Li><NavLink to="/Kangaroo">Kangaroo</NavLink></Li>
            </Ul>
           
        </nav>
    );
}

export default Navigation;