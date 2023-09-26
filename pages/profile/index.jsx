import Image from 'next/image';
import { useState } from 'react';
import Account from '@/components/profile/Account';
import Password from '@/components/profile/Password';
import Orders from '@/components/profile/Orders';

const Index = () => {
  const [tabs, setTabs] = useState(1);

  return (
    <div className="flex px-10 min-h-[calc(100vh_-_433px)] my-10 md:flex-row flex-col">
      <div className='md:w-80 w-100 flex-shrink-0'>
        <div className='relative flex flex-col items-center p-10 border border-b-0 '>
          <Image src="/images/client1.png" alt="" width={100} height={100} className='rounded-md'/>
          <span className='text-[24px] text-bold mt-2'>jon doe</span>
        </div>
        <ul className='w-full font-semibold'>
            <li onClick={() => {setTabs(1)}} className={`${tabs === 1 && 'bg-primary'} border w-full p-3 cursor-pointer hover:bg-primary list-none hover:text-white transition-all`}>
              <i className='fa fa-home'></i>
              <button className="ml-1">account</button>
            </li>
            <li onClick={() => {setTabs(2)}} className={`${tabs === 2 && 'bg-primary'} border w-full p-3 cursor-pointer hover:bg-primary list-none hover:text-white transition-all`}>
              <i className='fa fa-key'></i>
              <button className="ml-1">password</button>
            </li>
            <li onClick={() => {setTabs(3)}} className={`${tabs === 3 && 'bg-primary'} border w-full p-3 cursor-pointer hover:bg-primary list-none hover:text-white transition-all`}>
              <i className='fa fa-list'></i>
              <button className="ml-1">orders</button>
            </li>
            <li onClick={() => {setTabs(4)}} className={`${tabs === 4 && 'bg-primary'} border w-full p-3 cursor-pointer hover:bg-primary list-none hover:text-white transition-all`}>
              <i className='fa fa-sign-out'></i>
              <button className="ml-1">exit</button>
            </li>
        </ul>
      </div>

      {tabs === 1 && <Account /> }
      {tabs === 2 && <Password/> }
      {tabs === 3 && <Orders/> }
    </div>
  )
}

export default Index