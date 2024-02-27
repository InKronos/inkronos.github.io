import React, { ReactNode } from 'react';
import NavbarComponent from "../../components/Navbar/Navbar.component";
import FooterComponent from '../../components/Footer/Footer.component';

interface LayoutProps {
    children: ReactNode;
  }

const Layout = ({children} : LayoutProps) => {
 
    return (
        <div>
            <NavbarComponent/>
            {children}
            <FooterComponent/>
        </div>
    );
};

export default Layout;