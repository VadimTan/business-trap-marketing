import { ReactTyped } from 'react-typed';
import '../styles/intro.css';

export const Intro = () => {
  return (
    <div className='flex justify-center'>
      <ReactTyped
        strings={[
          `<h1 class='text-[96px] select-none text-[#3b3b3b] font-[Audiowide]'>Business Trap Marketing</h1>`,
        ]}
        typeSpeed={40}
        backSpeed={50}
        showCursor={false}
      />
    </div>
  );
};
