import Logo from '../UI/Logo'
import {FaUserAlt, FaShoppingCart, FaSearch} from 'react-icons/fa'

const Header = () => {
  return (
    <div className='h-[5.5rem] bg-secondary flex justify-between'>
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
            <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer transition-all ">
              <a href="">Book Table</a> 
            </li>
          </ul>
        </div>
        <div className='flex items-center gap-x-4 text-white'>
          <a href="">
            <FaUserAlt/>
          </a> 
          <a href="">
            <FaShoppingCart/>
          </a> 
          <a href="">
            <FaSearch/>
          </a> 
          <a href="">
            <button className="btn-primary">Order Online</button>
          </a> 
        </div>
      </div>
    </div>
  )
}

export default Header