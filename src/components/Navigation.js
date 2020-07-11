import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";


const Li = styled.li`
    width: 140px;
    margin: 10px;
    font-size: 18px;
`;

const Ul = styled.ul`
    display: flex;
    justify-content: center;
    flex-direction: row;
    width: 60%;
    margin:auto;
    flex-wrap: wrap;
`;


const Navigation = () => {
    return (
        <nav className="main-nav">
            <Ul>
              <Li><NavLink to="/taipei101">Taipei 101</NavLink></Li>
              <Li><NavLink to="/jioufen">Jioufen</NavLink></Li>
              <Li><NavLink to="/yangmingshan">Yangmingshan</NavLink></Li>
              <Li><NavLink to="/kenting">Kenting</NavLink></Li>
              <Li><NavLink to="/shifen">Shifen</NavLink></Li>
              <Li><NavLink to="/sunmoonlake">Sun Moon Lake</NavLink></Li>
              <Li><NavLink to="/qingjing">Qingjing</NavLink></Li>
              <Li><NavLink to="/Sanxiantai">Sanxiantai</NavLink></Li>
            </Ul>
           
        </nav>
    );
}

export default Navigation;