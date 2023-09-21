import Image from 'next/image';
import Title from './Title';
import {MdShoppingCart} from 'react-icons/md';

const CampaignsItem = ({image}) => {
  return (
    <div className='bg-secondary flex-1 rounded-md py-5 px-[15px] flex items-center gap-x-4'>
      <div className="relative md:w-44 md:h-44 w-36 h-36 content-[''] absolute w-full -h-full border-[5px] border-primary rounded-full overflow-hidden gap-x-4">
        <Image 
          src={image} 
          alt='' 
          layout='fill' 
          objectFit='cover' 
          className="hover:scale-105 transition-all"
        />
      </div>
      <div className='text-white'>
          <Title addClass="text-2xl">Tasty Thursdays</Title>
          <div className='font-dancing my-4'>
            <span className='text-[40px]'>20%</span>
            <span className='text-sm inline-block ml-1'>Off</span>
          </div>
          <button className="btn-primary flex items-center gap-x-2">
            <MdShoppingCart size={20}/>
            Order Now
          </button>
      </div>
    </div>
  );
} 

const Campaigns = () => {
  return (
    <div className="flex container mx-auto py-20 gap-6 flex-wrap">
      <CampaignsItem image={"/images/o1.jpg"}/>
      <CampaignsItem image={"/images/o2.jpg"}/>
    </div>
  )
}

export default Campaigns