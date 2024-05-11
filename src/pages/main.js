import React , {useEffect, useState} from 'react'
import Header from '../component/header'
import Footer from '../component/footer'
import { useNavigate , Outlet, useLocation } from 'react-router-dom';
import { motion } from "framer-motion";

export default function Main({user,logout}) {
  const {pathname} = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <Header user={user} path={pathname} logout={logout} />
          <Outlet />
      <Footer />
    </div>
  )
}
