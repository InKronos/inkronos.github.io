import React, { FC } from 'react';
import { CDBBox, CDBBtn, CDBIcon, CDBContainer } from 'cdbreact';
import './Footer.component.scss'
import { Link } from 'react-router-dom';

interface FooterProps {}

const FooterComponent: FC<FooterProps> = () => (
    <div 
        className="shadow w-100 "
        style={{width: '100%'}}
        >
    <CDBBox
      display="flex"
      justifyContent="between"
      alignItems="center"
      className="py-4 flex-wrap px-5"
      style={{ width: '100%' }}
    >
      <CDBBox display="flex" alignItems="center">
        <a href="/" className="d-flex align-items-center p-0 text-dark">
          <span className="ms-4 h5 mb-0 font-weight-bold">InChronos</span>
        </a>
        <small className="ms-2">&copy; Paweł Piórkowski, 2024. All rights reserved.</small>
      </CDBBox>
      <CDBBox display="flex">
      <Link to="https://www.linkedin.com/in/pawe%C5%82-pi%C3%B3rkowski-084b2518b/">
        <CDBBtn flat color="dark" className="p-2">
          <CDBIcon fab icon="linkedin" />
        </CDBBtn>
      </Link>
      <Link to="https://github.com/InKronos">
        <CDBBtn flat color="dark" className="mx-3 p-2">
          <CDBIcon fab icon="github" />
        </CDBBtn>
      </Link>
      </CDBBox>
    </CDBBox>
  </div>
);

export default FooterComponent;
