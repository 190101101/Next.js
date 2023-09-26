import Image from 'next/image';
import { useState } from 'react';
import Product from '@/components/admin/product';
import Order from '@/components/admin/Order';

const Index = () => {
  const [tabs, setTabs] = useState(1);

  return (
    <div className="flex px-10 min-h-[calc(100vh_-_433px)] my-10 md:flex-row flex-col">
      <div className='md:w-80 w-100 flex-shrink-0'>
        <div className='relative flex flex-col items-center p-10 border border-b-0'>
          <div className='relative w-[120px] h-[120px]'>
            <Image src="/images/client2.png" alt="" layout="fill" objectFit='cover' className='rounded-full'/>
          </div>
          <span className='text-[24px] text-bold mt-2'>admin</span>
        </div>
        <ul className='w-full font-semibold'>
            <li onClick={() => {setTabs(1)}} className={`${tabs === 1 && 'bg-primary'} border w-full p-3 cursor-pointer hover:bg-primary list-none hover:text-white transition-all`}>
              <i className='fa fa-cutlery'></i>
              <button className="ml-1">product</button>
            </li>
            <li onClick={() => {setTabs(2)}} className={`${tabs === 2 && 'bg-primary'} border w-full p-3 cursor-pointer hover:bg-primary list-none hover:text-white transition-all`}>
              <i className='fa fa-list'></i>
              <button className="ml-1">orders</button>
            </li>
            <li onClick={() => {setTabs(3)}} className={`${tabs === 3 && 'bg-primary'} border w-full p-3 cursor-pointer hover:bg-primary list-none hover:text-white transition-all`}>
              <i className='fa fa-list'></i>
              <button className="ml-1">category</button>
            </li>
            <li onClick={() => {setTabs(4)}} className={`${tabs === 4 && 'bg-primary'} border w-full p-3 cursor-pointer hover:bg-primary list-none hover:text-white transition-all`}>
              <i className='fa fa-window-maximize'></i>
              <button className="ml-1">footer</button>
            </li>
           
            <li onClick={() => {setTabs(5)}} className={`${tabs === 5 && 'bg-primary'} border w-full p-3 cursor-pointer hover:bg-primary list-none hover:text-white transition-all`}>
              <i className='fa fa-sign-out'></i>
              <button className="ml-1">exit</button>
            </li>
        </ul>
      </div>

      {tabs === 1 && <Product/> }
      {tabs === 2 && <Order/> }
    </div>
  )
}

export default Index