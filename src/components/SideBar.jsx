import myPhoto from '../assets/Jahid-Photo.jpg';
import { Link as ScrollLink } from 'react-scroll';

const SideBar = () => {
  return (
    <div className=''>
      <div className='size-56 overflow-hidden rounded-full mx-auto my-8' >
        <img src={myPhoto} alt="" className=' ' width={250} />
      </div>
      <div>
        <ul className='text-center text-lg '>
          <li className='py-1.5 border-t-2  transition-all  delay-400 border-base-color1 hover:bg-base-color1 hover:text-dark-color1  hover:translate-y-[-1px] hover:shadow-[0px_5px_10px_0px_#fec64450]'>
            <ScrollLink to="home" >Home</ScrollLink>
          </li>
          <li className='py-1.5 border-t-2  transition-all  delay-400 border-base-color1 hover:bg-base-color1 hover:text-dark-color1  hover:translate-y-[-1px] hover:shadow-[0px_5px_10px_0px_#fec64450]'><ScrollLink to='about'>About</ScrollLink></li>
          <li className='py-1.5 border-t-2  transition-all  delay-400 border-base-color1 hover:bg-base-color1 hover:text-dark-color1  hover:translate-y-[-1px] hover:shadow-[0px_5px_10px_0px_#fec64450]'>Skills</li>
          <li className='py-1.5 border-t-2  transition-all  delay-400 border-base-color1 hover:bg-base-color1 hover:text-dark-color1  hover:translate-y-[-1px] hover:shadow-[0px_5px_10px_0px_#fec64450]'>Education</li>
          <li className='py-1.5 border-t-2  transition-all  delay-400 border-base-color1 hover:bg-base-color1 hover:text-dark-color1  hover:translate-y-[-1px] hover:shadow-[0px_5px_10px_0px_#fec64450]'>Projects</li>
          <li className='py-1.5 border-y-2  transition-all  delay-400 border-base-color1 hover:bg-base-color1 hover:text-dark-color1  hover:translate-y-[-1px] hover:shadow-[0px_5px_10px_0px_#fec64450]'>Contact</li>
        </ul>
      </div>
      <div>
        <button className='py-3 w-full rounded-full text-xl my-8  transition-all  delay-400 border-2 border-base-color1 hover:bg-base-color1 hover:text-dark-color1  hover:translate-y-[-1px] hover:shadow-[0px_5px_10px_0px_#fec64450]'>Download CV</button>
      </div>
    </div>
  );
};

export default SideBar