import {useState} from "react"
import {useRouter} from 'next/router';
import Logo from "../ui/Logo"
import Search from "../ui/Search"
import {FaUserAlt, FaShoppingCart, FaSearch} from "react-icons/fa"
import {GiHamburgerMenu,GiCancel} from "react-icons/gi"
import Link from 'next/link';
import { useSelector} from "react-redux";

const Header = () => {
  const [isSearchModal, setIsSearchModal] = useState(false);
  const [isMenuModal, setIsMenuModal] = useState(false);
  const router = useRouter();
  const cart = useSelector((state) => state.cart);

  return (
    <div className={`h-[5.5rem] z-50 relative ${router.asPath == '/' ? 'bg-transparent' : 'bg-secondary'}`}>
      <div className="container mx-auto text-white flex justify-between items-center h-full">
        <Logo/>
        <nav className={`${isMenuModal === true && "!grid place-content-center"} h-screen sm:flex hidden sm:bg-transparent bg-white sm:static absolute top-0 left-0 sm:w-auto sm:h-auto w-full sm:text-white text-black flex-col items-center`}>
          <ul className="flex gap-x-2 sm:flex-row flex-col items-center ">
            <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer transition-all ">
              <Link href="/home">Home</Link> 
            </li>
            <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer transition-all ">
              <Link href="/menu">Menu</Link> 
            </li>
            <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer transition-all ">
              <Link href="/about">About</Link> 
            </li>
            <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer transition-all">
              <Link href="/reservation">Book Table</Link> 
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
          <Link href="/auth/login">
            <FaUserAlt className="hover:text-primary transition-all"/>
          </Link> 
          <Link href="/cart">
            <span className="relative">
              <FaShoppingCart className="hover:text-primary transition-all"/>
              <span className="absolute top-[-11px] left-2 w-4 h-4 text-xs text-secondary font-semibold  bg-primary grid place-content-center rounded-full">{cart.products.length && cart.products.length}</span>
            </span>
          </Link> 
          <button onClick={() => setIsSearchModal(true)}>
            <FaSearch className="hover:text-primary transition-all"/>
          </button> 
          <Link href="/order" className="md:inline-block hidden">
            <button className="btn-primary">Order Online</button>
          </Link> 
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