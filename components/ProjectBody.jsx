'use client';

import MotionWrapper from '@/components/MotionWrapper';
import Image from 'next/image';
import Modal from '@/components/Modal';
import { useState } from 'react';
import DoomriderLogo from '@/components/navbar/DoomriderLogo';

function ProjectBody({ data, title }) {
  const [isOpen, setIsOpen] = useState(false);
  const [img, setImg] = useState('');
  const [imgWidth, setImgWidth] = useState('');
  const [imgHeight, setImgHeight] = useState('');
  const [imgAspect, setImgAspect] = useState('');

  const handleClick = (url, width, height, aspect) => {
    setImg(url);
    setImgWidth(width);
    setImgHeight(height);
    setImgAspect(aspect);

    setIsOpen(true);
  };

  return (
    <main className='p-[20px] w-full flex flex-col h-screen overflow-y-auto'>
      <div className='sm:hidden ml-auto pt-3'>
        <DoomriderLogo />
      </div>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        url={img}
        imgWidth={imgWidth}
        imgHeight={imgHeight}
        imgAspect={imgAspect}
      />

      <h1 className='max-sm:pt-[5rem] text-[4rem] font-bold mx-auto text-primary'>
        {title}
      </h1>
      <div className=' sm:pl-[8rem] grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-5'>
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
              onClick={() =>
                handleClick(
                  image.secure_url,
                  image.width,
                  image.height,
                  image.aspect_ratio
                )
              }
              src={image.secure_url}
              alt={image.public_id}
              priority
              fill={true}
              sizes='(max-width: 640px) 540px, (min-width: 640px) 430px'
              className='object-cover cursor-pointer'
            />
          </MotionWrapper>
        ))}
      </div>
    </main>
  );
}

export default ProjectBody;
