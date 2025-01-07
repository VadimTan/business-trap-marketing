import { ReactTyped } from 'react-typed';
import '../styles/intro.css';
import { InfoCard } from './reusable/InfoCard';
import { Slide } from 'react-awesome-reveal';
import { useState, useEffect } from 'react';

export const Intro = () => {
  const [showSlides, setShowSlides] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSlides(true);
    }, 1650);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='flex flex-col justify-center overflow-hidden'>
      <ReactTyped
        strings={[
          `<h1 class='text-[96px] text-center select-none text-[#3b3b3b] font-[Audiowide]'>Business Trap Marketing</h1>`,
        ]}
        typeSpeed={40}
        backSpeed={50}
        showCursor={false}
      />

      {showSlides && (
        <div className='flex gap-10 px-5'>
          <Slide
            triggerOnce
            direction='left'
            delay={600}
            damping={0.2}>
            <InfoCard
              text={`Standard chunk of Lorem Ipsum used since the 1500s is showed below for
          those interested.`}
              title={'Products'}
            />
          </Slide>
          <Slide
            delay={800}
            direction='up'
            triggerOnce
            damping={0.2}>
            <InfoCard
              text={`Standard chunk of Lorem Ipsum used since the 1500s is showed below for
          those interested.`}
              title={'About Us'}
            />
          </Slide>
          <Slide
            delay={1000}
            direction='right'
            triggerOnce
            damping={0.2}>
            <InfoCard
              text={`Standard chunk of Lorem Ipsum used since the 1500s is showed below for
          those interested.`}
              title={'Marketing'}
            />
          </Slide>
        </div>
      )}
    </div>
  );
};
