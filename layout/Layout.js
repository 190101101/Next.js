import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import React from 'react';
import {useRouter} from 'next/router';

const Layout = ({children}) => {
  const router = useRouter();

  return (
    <React.Fragment>
        <Header/>
          {children}
      {router.asPath !== '/' && <Footer/>}
    </React.Fragment>
  )
}

export default Layout