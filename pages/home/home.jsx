import React from "react";
import Campaigns from "@/components/Campaigns"
import Carousel from "@/components/Carousel"
import MenuWrapper from "../../components/product/MenuWrapper"
import  About from '@/pages/About'
import Reservation from "@/components/Reservation"
import Customers from "@/components/customers/Customers"
import Footer from "@/components/layout/Footer";

const home = () => {
  return (
    <React.Fragment>
      <Carousel/>
      <Campaigns/>
      <MenuWrapper/>
      <About/>
      <Reservation/>
      <Customers/>
      <Footer/>
    </React.Fragment>
  )
}

export default home