import Title from "../ui/Title"
import CustomerItem from "./CustomerItem"
import Slider from "react-slick";
import {
  IoIosArrowBack, 
  IoIosArrowForward
} from "react-icons/io";

const Customers = () => {

  const NextBtn = ({onClick}) => {
    return (
      <button className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white absolute -bottom-12 left-1/2" onClick={onClick}>
        <IoIosArrowForward/>
      </button>
    )
  }
  
  const PrevBtn = ({onClick}) => {
    return (
      <button className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white absolute -bottom-12 right-1/2 mr-2" onClick={onClick}>
        <IoIosArrowBack/>
      </button>
    )
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay:true,
    autoplaySpeed:4000,
    arrows:true,
    nextArrow: <NextBtn/>,
    prevArrow: <PrevBtn/>,
    responsive: [
      {
        breakpoin: 768,
        settings:{
          slidesToShow:1,
          arrows:false
        },
      },
    ],
  };

  return (
    <div className="container mx-auto mb-20 mt-12">
        <div>
            <Title addClass={"text-[40px] text-center"}>What Says Our Customers</Title>
        </div>
        <div className="gap-x-10">
            <Slider {...settings}>
                <CustomerItem image={"/images/client1.png"}/>
                <CustomerItem image={"/images/client2.png"}/>
                <CustomerItem image={"/images/client1.png"}/>
                <CustomerItem image={"/images/client2.png"}/>
                <CustomerItem image={"/images/client1.png"}/>
                <CustomerItem image={"/images/client2.png"}/>
            </Slider>
        </div>
    </div>
  )
}

export default Customers