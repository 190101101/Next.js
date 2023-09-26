import Image from 'next/image';

const index = () => {
  return (
    <div className="flex px-10 min-h-[calc(100vh_-_433px)]">
      <div className='w-80'>
        <div className='relative flex flex-col items-center p-10 border border-b-0 '>
          <Image src="/images/client1.png" alt="" width={100} height={100} className='rounded-full'/>
          <span className='text-[24px] text-bold mt-2'>jon does</span>
        </div>
        <ul className='w-full font-semibold'>
            <li className='border w-full p-3 cursor-pointer hover:bg-primary list-none hover:text-white transition-all'>
              <i className='fa fa-home'></i>
              <button className="ml-1">account</button>
            </li>
            <li className='border w-full p-3 cursor-pointer hover:bg-primary list-none hover:text-white transition-all'>
              <i className='fa fa-key'></i>
              <button className="ml-1">password</button>
            </li>
            <li className='border w-full p-3 cursor-pointer hover:bg-primary list-none hover:text-white transition-all'>
              <i className='fa fa-list'></i>
              <button className="ml-1">orders</button>
            </li>
            <li className='border w-full p-3 cursor-pointer hover:bg-primary list-none hover:text-white transition-all'>
              <i className='fa fa-sign-out'></i>
              <button className="ml-1">exit</button>
            </li>
        </ul>
      </div>

      <div></div>
    </div>
  )
}

export default index