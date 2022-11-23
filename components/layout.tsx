import { ReactElement } from 'react';
import Footer from './footer';
import Navbar from './navbar';

const Layout = (props: any) => {
    const { children } = props;
    return <>
        <Navbar/>
        <main>{children}</main>
        <Footer/>
    </>
}

export default Layout;