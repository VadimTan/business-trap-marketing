import {
  faInstagram,
  faLinkedin,
  faTelegram,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Footer = () => {
  return (
    <div className='flex w-full flex-wrap relative bottom-0 z-50 bg-[#131313] pt-10 pb-3 px-3'>
      <div className='flex flex-col gap-2'>
        <div className='flex flex-col'>
          <a href='/home'>
            <h3 className='text-[#ffffff] font-semibold text-[24px] m-0 p-0'>
              businesstrapmarketing.com
            </h3>
          </a>
          <p className='text-[#ffffff] font-thin text-[16px] text-wrap'>
            Professional development and marketing agency. Trust us to design
            branding, SMM, web-apps, e-shop and other tools.
          </p>
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
        <a
          className='text-purple-500 underline break-all'
          href='mailto:businesstrapmarketing@gmail.com'>
          businesstrapmarketing@gmail.com
        </a>
      </div>
      <div className='flex'>second block</div>
      <div className='flex'>third block</div>
      <div className='flex w-full justify-center'>
        <p className='text-[#9a9a9a] text-[15px] tracking-tight m-0'>
          © All rights reserved. Copyright 2025-2027
        </p>
      </div>
    </div>
  );
};
