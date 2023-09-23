import Image from 'next/image';

const CustomerItem = ({image}) => {

  return (
    <div className='mt-5 mx-4'>
      <div className='p-6 bg-secondary text-white rounded-[5px]'>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et iste quos molestias modi dolorum, possimus, natus repudiandae cupiditate sed, placeat iure excepturi itaque. Culpa neque provident commodi nobis dolores cumque?
        </span>  
        <div className='flex flex-col mt-4'>
          <span className='text-lg font-semibold'></span>
          <span className='text-[15px]'>magna aliqua</span>
        </div>
      </div>
  
      <div className="relative w-28 h-28 border-4 border-primary rounded-full mt-8 before:content-[''] before:absolute before:bg-primary before:top-1 before:w-5 before:h-5  before:-translate-y-4  before:rotate-45 flex justify-center">
        <Image 
          src={image} 
          alt="" 
          layout="fill" 
          objectFit='cover'
          className='rounded-full'
        />
      </div> 
    </div>
  )
}

export default CustomerItem