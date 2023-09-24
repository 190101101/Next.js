import Image from 'next/image';
import Title from './ui/Title';

const About = () => {
  return (
    <div className="bg-secondary py-14">
        <div className="container mx-auto flex items-center text-white gap-20  flex-wrap-reverse justify-center">
            <div className='grid place-content-center'>
              <div className="relative sm:w-[445px] w-[300px] sm:h-[600px] h-[450px] flex justify-center">
                  <Image src="/images/about-img.png" layout="fill" alt="" />
              </div>
            </div>
            <div className='md:w-1/2'>
              <Title addClass="text-[40px]">We Are Food</Title>
              <p className='my-5 flex flex-col items-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat porro laborum optio in dolore sint sapiente nulla cupiditate officiis velit alias facilis beatae quisquam adipisci ut, quas vero esse mollitia? Impedit ut modi eveniet officia ipsam! Laudantium officia accusamus odit labore sed earum sequi. Quis dolore incidunt tempora aut ipsum.</p>
              <button className='btn-primary'>Read more</button>
            </div>
        </div>
    </div>
  )
}

export default About