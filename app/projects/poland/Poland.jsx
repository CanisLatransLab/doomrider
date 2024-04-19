'use client';

import MotionWrapper from '@/components/MotionWrapper';
import Image from 'next/image';
import Modal from '@/components/Modal';
import { useState } from 'react';
import DoomriderLogo from '@/components/navbar/DoomriderLogo';

function Poland({ data }) {
  const [isOpen, setIsOpen] = useState(false);
  const [img, setImg] = useState('');

  const handleClick = (url) => {
    setImg(url);
    setIsOpen(true);
  };

  return (
    <main className='p-[20px] flex flex-col w-full h-screen overflow-y-auto'>
      <div className='sm:hidden ml-auto pt-3'>
        <DoomriderLogo />
      </div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} url={img} />
      <div className='max-sm:pt-[8rem] sm:pl-[8rem] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5'>
        {data.resources.map((image, i) => (
          <MotionWrapper
            key={image.public_id}
            initial={{ opacity: 0, translateY: -20 }}
            animate={{
              opacity: 1,
              translateY: 0,
              transition: { duration: 1, delay: i * 0.05 },
            }}
            className='relative overflow-hidden h-96 w-full'>
            <Image
              onClick={() => handleClick(image.secure_url)}
              src={image.secure_url}
              alt={image.public_id}
              fill={true}
              className='object-cover cursor-pointer'
            />
          </MotionWrapper>
        ))}
      </div>
    </main>
  );
}

export default Poland;
