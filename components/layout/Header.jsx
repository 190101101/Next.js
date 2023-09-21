import {useState} from "react"

import {FaUserAlt, FaShoppingCart, FaSearch} from "react-icons/fa"
import {GiHamburgerMenu,GiCancel} from "react-icons/gi"

import Logo from "../UI/Logo"
import Search from "../UI/Search"

import {useRouter} from 'next/router';

const Header = () => {
  const [isSearchModal, setIsSearchModal] = useState(false);
  const [isMenuModal, setIsMenuModal] = useState(false);
  const router = useRouter();
  console.log(router)

  return (
    <div className={`h-[5.5rem] z-50 relative ${router.asPath == '/' ? 'bg-transparent' : 'bg-secondary'}`}>
      <div className="container mx-auto text-white flex justify-between items-center h-full">
        <Logo/>
        <nav className={`${isMenuModal === true && "!grid place-content-center"} h-screen sm:flex hidden sm:bg-transparent bg-white sm:static absolute top-0 left-0 sm:w-auto sm:h-auto w-full h-full sm:text-white text-black flex-col items-center`}>
          <ul className="flex gap-x-2 sm:flex-row flex-col items-center ">
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
          
          {isMenuModal && (
            <button 
              className='absolute top-4 right-4 z-50' 
              onClick={() => setIsMenuModal(false)}
            >
              <GiCancel size={25}/>
            </button>
          )}
        </nav>
        <div className="flex items-center gap-x-4 text-white">
          <a href="">
            <FaUserAlt className="hover:text-primary transition-all"/>
          </a> 
          <a href="">
            <FaShoppingCart className="hover:text-primary transition-all"/>
          </a> 
          <button onClick={() => setIsSearchModal(true)}>
            <FaSearch className="hover:text-primary transition-all"/>
          </button> 
          <a className="md:inline-block hidden" href="">
            <button className="btn-primary">Order Online</button>
          </a> 
          <button className="md:hidden inline-block" onClick={() => setIsMenuModal(true)}>
            <GiHamburgerMenu className="hover:text-primary transition-all"/>
          </button>

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