import Campaigns from "@/components/Campaigns"
import Carousel from "@/components/Carousel"
import MenuWrapper from "../../components/product/MenuWrapper"
import  About from '@/pages/About'

const home = () => {
  return (
    <div className="">
      <Carousel/>
      <Campaigns/>
      <MenuWrapper/>
      <About/>
    </div>
  )
}

export default home