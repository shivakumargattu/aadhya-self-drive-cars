import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md'; 

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
    <div className='flex flex-row justify-between px-5'>
    <p className='text-white font-bold text-lg'>Follw Us </p>
    <div className="mt-3  flex space-x-4">
    <a href="mailto:example@gmail.com" className="text-3xl mb-5">
            <MdEmail /> {/* Gmail (Email) Icon */}
          </a>
          <a href="#" className="text-3xl mb-5">
            <FaFacebook />
          </a>
          <a href="#" className="text-3xl mb-5">
            <FaTwitter />
          </a>
          <a href="#" className="text-3xl mb-5">
            <FaInstagram />
          </a>
        </div>
        </div>
    <hr/>
      <div className="container mx-auto py-3 flex flex-row justify-around  ">
        <div className="text-3xl font-semibold">
        <img src="https://i.ibb.co/yQNKFfP/Aadhya-self-drive-logo.jpg" className='logo-imge' alt="logo"/>
         
        </div>
        <div className="mt-4 flex flex-col text-start text-lg">
          <p>Contact Us:</p>
          <p className='mt-4 text-sm text-start  text-gray-400'>Phone: 7093087731 </p>
        
          <p className='mt-4 text-sm text-start text-gray-400'>Insta: aadhya_selfdrive_cars</p>
          </div>
        <div className="mt-4 flex flex-col text-lg">
          <p className='mt-4 text-sm text-start text-gray-400'><FaMapMarkerAlt className="inline  text-yellow-500 mr-2" /> 1-9-1236/A-15 SRI RAMA RAO COLONY HUNTERROAD</p>
          
          <p className='mt-4 text-sm text-start text-gray-400'>HANAMKONDA WARANGAL-606001</p>
        </div>
        
       </div>
       <div className="mt-4 text-sm text-center text-gray-400">&copy; {new Date().getFullYear()} My Website. All Rights Reserved.</div>
      
    </footer>
  );
}

export default Footer;
