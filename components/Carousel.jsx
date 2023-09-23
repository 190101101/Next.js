import Image from "next/image";
import Slider from "react-slick";
import Title from "./ui/Title";

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        autoplay:true,
        autoplaySpeed:5000,
        appenDots:(dots)=>{
            <div style={{
                color:'yellow', 
                padding:"0"
            }}>
                <ul style={{marginTop:"10px"}}>{dots}</ul>
            </div>
        },
    
        customPaging: (i) => (
            <div className="w-3 h-3 border bg-white rounded-full mt-10"></div>
        ),
    };

  return (
    <div className="h-screen w-full container mx-auto -mt-[88px]">
        <div className="absolute top-0 left-0 w-full h-full">
            <div className="relative h-full w-full">
                <Image 
                    src="/images/hero-bg.jpg" 
                    alt=""
                    layout="fill" 
                    objectFit="cover"
                />
            </div>
        </div>
        {/*  */}
        <Slider {...settings}>
            <dir>
                <div className="text-white mt-48 flex flex-col items-start gap-y-10">
                    <Title addClass="text-6xl">Fast Food Restaurant</Title>
                    <p className="text-sm sm:w-2/5 w-full">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, nihil aliquid iste laudantium sequi reprehenderit nobis suscipit ipsum facilis beatae soluta a. Accusantium libero qui reiciendis voluptatem ullam praesentium sunt.</p>
                    <button className="btn-primary">Order Now</button>
                </div>
            </dir>
                        
            <dir>
                <div className="text-white mt-48 flex flex-col items-start gap-y-10">
                    <Title addClass="text-6xl">Fast Food Restaurant</Title>
                    <p className="text-sm sm:w-2/5 w-full">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, nihil aliquid iste laudantium sequi reprehenderit nobis suscipit ipsum facilis beatae soluta a. Accusantium libero qui reiciendis voluptatem ullam praesentium sunt.</p>
                    <button className="btn-primary">Order Now</button>
                </div>
            </dir>
        </Slider>
    </div>
  )
}

export default Carousel