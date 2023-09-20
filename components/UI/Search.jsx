import OutsideClickHandler from 'react-outside-click-handler';
import Title from './Title'
import Image from 'next/image'
import {GiCancel} from 'react-icons/gi';

const Search = ({isSearchModal, setIsSearchModal}) => {
  return (
    <div className="fixed w-screen h-screen z-50 left-0 top-0 
    after:content-[''] after:w-screen after:h-screen after:bg-white after:absolute
    after:top-0 after:left-0 after:opacity-0 grid place-content-center">
      <OutsideClickHandler onOutsideClick={() => setIsSearchModal(false)}>
        <div className='w-full h-full grid place-content-center'>
          <div className="relative z-50 md:w-[600px] w-[370px] bg-white border-2 p-10 rounded-3xl">
            <Title addClass="text-[40px] text-center">search</Title>
            <input placeholder='search...' className='border w-full my-10'/>
            <ul>
              <li className='flex items-center justify-between p-1 hover:bg-primary transition-all'>
                <div className='relative flex'>
                  <Image 
                    src="/images/f1.png" 
                    alt="image" 
                    width={48} 
                    height={48} 
                  />
                </div>
                <span className="font-bold">Good Pizza</span>
                <span className="font-bold">10$</span>
              </li>

              <li className='flex items-center justify-between p-1 hover:bg-primary transition-all'>
                <div className='relative flex'>
                  <Image 
                    src="/images/f2.png" 
                    alt="image" 
                    width={48} 
                    height={48} 
                  />
                </div>
                <span className="font-bold">Can Burger</span>
                <span className="font-bold">15$</span>
              </li>
            </ul>

              <button 
                className='absolute top-4 right-4' 
                onClick={() => setIsSearchModal(false)}
              >
                <GiCancel size={25}/>
              </button>
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default Search;
