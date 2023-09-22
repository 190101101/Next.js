import Campaigns from "@/components/Campaigns"
import Carousel from "@/components/Carousel"
import MenuWrapper from "@/components/product/MenuWrapper"

const home = () => {
  return (
    <div className="">
      <Carousel/>
      <Campaigns/>
      <MenuWrapper/>
    </div>
  )
}

export default home