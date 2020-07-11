import React, { Component } from 'react';
import styled from "styled-components";


const Container = styled.div`
  display: flex;
  height: 60px;
  align-items: center;
  justify-content: center;  
  margin-left: auto;
  margin-right: auto;
  background-color: #edeff0;
  box-shadow: 0 -1px 5px 1px rgba(0, 0, 0, .1);
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const CopyRight = styled.div`
  margin-left: 30px;
  font-family: 'Inter beta', sans-serif;
  color: #5f6368;
  font-style: normal;
  font-weight: 300;
`;

const Mail = styled.a`
  padding: 5px;
`;

const Img = styled.img`
  height: 30px;
  width: 30px;
`;

const Icon = styled.a`
  margin-left: 15px;
  padding: 10px;
`;


export default class Footer extends Component{

    render(){
        return (
            <div id="Footer" className="footer">
                <Container>
                    <Wrapper>
                        <Mail href="mailto:hic.ch.ntu@gmail.com">
                            <Img src="images/mail.png" alt="mail"/>
                        </Mail>
                        <Icon  href="https://github.com/mickey7799" target="_blank" rel="noopener noreferrer" className="Footer__InstagramLink-sc-1mb098p-0 bBdLAF">
                            <Img src="images/github.svg" alt="github"/>
                        </Icon>
                        <CopyRight>© 2020 Vickey Lee</CopyRight>
                    </Wrapper>
                </Container>
            </div>
        );
    }
}