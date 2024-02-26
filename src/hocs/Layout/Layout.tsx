import React, { ReactNode } from 'react';
import NavbarComponent from "../../components/Navbar/Navbar.component";

interface LayoutProps {
    children: ReactNode;
  }

const Layout = ({children} : LayoutProps) => {
 
    return (
        <div>
            <NavbarComponent></NavbarComponent>
            {children}
        </div>
    );
};

export default Layout;