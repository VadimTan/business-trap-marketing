import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faLinkedin,
  faTelegram,
} from '@fortawesome/free-brands-svg-icons';
import Logo from '../assets/images/Business-Trap-Marketing-Logo-Fixed-Inverted.png';

export const Navigation = () => {
  return (
    <div className='flex sticky backdrop-filter backdrop-blur-[20px] top-0 w-full z-50 bg-[rgba(20,20,20,0.20)] justify-between items-center px-10 py-3'>
      <a
        className='cursor-pointer'
        onClick={() => window.location.reload()}>
        <img
          className='max-w-none h-[90px]'
          src={Logo}
        />
      </a>
      <div className='flex gap-20'>
        <div className='flex gap-20'>
          <a
            className='relative text-white group'
            href=''>
            home
            <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-purple-700 transition-all group-hover:w-full'></span>
          </a>
          <a
            className='relative text-white group'
            href=''>
            services
            <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-purple-700 transition-all group-hover:w-full'></span>
          </a>
          <a
            className='relative text-white group'
            href=''>
            projects
            <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-purple-700 transition-all group-hover:w-full'></span>
          </a>
          <a
            className='relative text-white group'
            href=''>
            about us
            <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-purple-700 transition-all group-hover:w-full'></span>
          </a>
          <a
            className='relative text-white group'
            href=''>
            how we work
            <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-purple-700 transition-all group-hover:w-full'></span>
          </a>
          <a
            className='relative text-white group'
            href=''>
            contact us
            <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-purple-700 transition-all group-hover:w-full'></span>
          </a>
        </div>
        <div className='flex gap-5'>
          <a
            className='text-blue-400'
            href=''>
            <FontAwesomeIcon
              size='xl'
              icon={faTelegram}
            />
          </a>
          <a
            className='text-blue-400'
            href=''>
            <FontAwesomeIcon
              size='xl'
              icon={faLinkedin}
            />
          </a>
          <a
            className='text-blue-400'
            href=''>
            <FontAwesomeIcon
              size='xl'
              icon={faInstagram}
            />
          </a>
        </div>
      </div>
    </div>
  );
};
