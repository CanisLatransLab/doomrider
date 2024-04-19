'use client';
import React, { useEffect, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import { useMediaQuery } from 'usehooks-ts';

// const imgs = [
//   '/imgs/nature/1.jpg',
//   '/imgs/nature/2.jpg',
//   '/imgs/nature/3.jpg',
//   '/imgs/nature/4.jpg',
//   '/imgs/nature/5.jpg',
//   '/imgs/nature/6.jpg',
//   '/imgs/nature/7.jpg',
// ];

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: 'spring',
  mass: 3,
  stiffness: 400,
  damping: 50,
};

export const SwipeCarousel = ({ imgs }) => {
  const [imgIndex, setImgIndex] = useState(0);
  const isMobile = useMediaQuery('(max-width: 640px)');

  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setImgIndex((pv) => {
          if (pv === imgs.length - 1) {
            return 0;
          }
          return pv + 1;
        });
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, []);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  return (
    <div className='relative overflow-hidden bg-bgWhite py-8'>
      <motion.div
        drag='x'
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: isMobile ? `-${imgIndex * 79}%` : `-${imgIndex * 100}%`,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className='flex cursor-grab items-center active:cursor-grabbing'>
        <Images imgIndex={imgIndex} imgs={imgs} />
      </motion.div>

      <Dots imgIndex={imgIndex} imgs={imgs} setImgIndex={setImgIndex} />
      {/* <GradientEdges /> */}
    </div>
  );
};

const Images = ({ imgIndex, imgs }) => {
  return (
    <>
      {imgs.map((imgSrc, idx) => {
        return (
          <motion.div
            key={idx}
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
            }}
            animate={{
              scale: imgIndex === idx ? 0.95 : 0.85,
            }}
            transition={SPRING_OPTIONS}
            className='w-[30rem] sm:w-[80rem] md:w-[120rem] h-[40rem] md:h-[80rem] shrink-0  bg-bgWhite object-contain bg-no-repeat'
          />
        );
      })}
    </>
  );
};

const Dots = ({ imgIndex, setImgIndex, imgs }) => {
  return (
    <div className='mt-4 flex w-full justify-center gap-2'>
      {imgs.map((_, idx) => {
        return (
          <button
            key={idx}
            onClick={() => setImgIndex(idx)}
            className={`h-3 w-3 rounded-full transition-colors ${
              idx === imgIndex ? 'bg-neutral-50' : 'bg-neutral-500'
            }`}
          />
        );
      })}
    </div>
  );
};
