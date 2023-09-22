import Campaigns from "@/components/Campaigns"
import Carousel from "@/components/Carousel"
import MenuWrapper from "../../components/product/MenuWrapper"
import  About from '@/pages/About'
import Reservation from "@/components/Reservation"

const home = () => {
  return (
    <div className="">
      <Carousel/>
      <Campaigns/>
      <MenuWrapper/>
      <About/>
      <Reservation/>
    </div>
  )
}

export default home