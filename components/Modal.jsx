import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Modal = ({ isOpen, setIsOpen, url, imgWidth, imgHeight }) => {
  const [isLandscape, setIsLandscape] = useState(null);

  useEffect(() => {
    if (imgWidth && imgHeight) {
      setIsLandscape(imgWidth > imgHeight);
    }
  }, [imgWidth, imgHeight]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className='bg-primary/20 backdrop-blur p-8 fixed inset-0 z-40 grid place-items-center overflow-y-scroll cursor-pointer'>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'tween', duration: 0.3 }}
            exit={{ scale: 0 }}
            className='p-6 rounded-lg w-full cursor-default relative overflow-hidden'>
            <Image
              src={url}
              alt='modal image'
              width={imgWidth}
              height={imgHeight}
              className={`mx-auto ${isLandscape ? 'w-[110rem]' : `w-[70rem]`} `}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
