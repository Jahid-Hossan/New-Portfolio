import myPhoto from '../assets/Jahid-Photo.jpg';

const SideBar = () => {
  return (
    <div className=''>
      <div className='size-56 overflow-hidden rounded-full mx-auto my-8' >
        <img src={myPhoto} alt="" className=' ' width={250} />
      </div>
      <div>
        <ul className='text-center text-lg '>
          <li className='py-1.5 border-t-2 hover:bg-base-color4 transition-all  delay-400'>Home</li>
          <li className='py-1.5 border-t-2 hover:bg-base-color4 transition-all  delay-400'>About</li>
          <li className='py-1.5 border-t-2 hover:bg-base-color4 transition-all  delay-400'>Skills</li>
          <li className='py-1.5 border-t-2 hover:bg-base-color4 transition-all  delay-400'>Education</li>
          <li className='py-1.5 border-t-2 hover:bg-base-color4 transition-all  delay-400'>Projects</li>
          <li className='py-1.5 border-y-2 hover:bg-base-color4 transition-all  delay-400'>Contact</li>
        </ul>
      </div>
      <div>
        <button className='py-3 bg-base-color4 w-full rounded-full text-xl my-8 hover:bg-[#1c212c] transition-all  delay-400'>Download CV</button>
      </div>
    </div>
  );
};

export default SideBar