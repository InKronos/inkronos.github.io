import React, { FC } from 'react';
import { CDBBox, CDBBtn, CDBIcon, CDBContainer } from 'cdbreact';

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
        <CDBBtn flat color="dark" className="p-2">
          <CDBIcon fab icon="linkedin" />
        </CDBBtn>
        <CDBBtn flat color="dark" className="mx-3 p-2">
          <CDBIcon fab icon="github" />
        </CDBBtn>
      </CDBBox>
    </CDBBox>
  </div>
);

export default FooterComponent;
