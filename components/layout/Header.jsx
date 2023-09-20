import {useState} from 'react'

import {FaUserAlt, FaShoppingCart, FaSearch} from 'react-icons/fa'

import Logo from '../UI/Logo'
import Search from '../UI/Search'

const Header = () => {
  const [isSearchModal, setIsSearchModal] = useState(false);

  return (
    <div className='h-[5.5rem] bg-secondary'>
      <div className='container mx-auto flex justify-between items-center h-full'>
        <div>
            <Logo/>
        </div>
        <div>
          <ul className="flex gap-x-2 text-white">
            <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer transition-all ">
              <a href="">Home</a> 
            </li>
            <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer transition-all ">
              <a href="">Menu</a> 
            </li>
            <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer transition-all ">
              <a href="">About</a> 
            </li>
            <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer transition-all">
              <a href="">Book Table</a> 
            </li>
          </ul>
        </div>
        <div className='flex items-center gap-x-4 text-white'>
          <a href="">
            <FaUserAlt className='hover:text-primary transition-all'/>
          </a> 
          <a href="">
            <FaShoppingCart className='hover:text-primary transition-all'/>
          </a> 
          <button onClick={() => setIsSearchModal(true)}>
            <FaSearch className='hover:text-primary transition-all'/>
          </button> 
          <a href="">
            <button className="btn-primary">Order Online</button>
          </a> 
        </div>
      </div>
      
      {isSearchModal && 
        <Search 
          isSearchModal={isSearchModal} 
          setIsSearchModal={setIsSearchModal}
        />
      }

    </div>
  )
}

export default Header