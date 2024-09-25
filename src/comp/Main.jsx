
import img from './IMG-20240611-WA0163.jpg'
import {TypeAnimation} from 'react-type-animation'
import {FaFacebook,FaInstagram,FaTwitter,FaWhatsapp }from 'react-icons/fa'
const Main = () => {
  return (
    <div>
       <img style={{objectPosition:"25% 25%"}}  className=' flex w-full object-cover h-screen   scale-x-[-1]  justify-center items-center' src={img} alt="" />
       <div className='w-full h-screen absolute top-0 bg-black/50'>
       <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
        <h1 className='sm:text-5xl text-4xl text-white '>I'm HASSAN OLA</h1>
        
        <h2  className='flex sm:3xl text-2xl text-gray-300'>I'm a 
        <TypeAnimation
      sequence={[
        'Frontend-Developer',
        2000,
        'Backend-Developer',
        2000,
        'Computer Engineer',
        2000,
      ]}
      wrapper='div'
      cursor={true}
      speed={50}
      style={{ fontSize: '1em', paddingLeft:'5px' }}
      repeat={Infinity}
    />
        </h2>
        <div className='flex justify-between item-center text-gray-300 pt-6 max-w-[200px] w-full'>
          <FaWhatsapp   size={20} className='cursor-pointer'/>
          <FaFacebook  size={20} className='cursor-pointer'/>
          <FaInstagram size={20} className='cursor-pointer'/>
          <FaTwitter   size={20} className='cursor-pointer'/>
        </div>
       </div>
       </div>
    </div>
  )
}

export default Main

