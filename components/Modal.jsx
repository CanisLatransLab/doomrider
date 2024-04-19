import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

const Modal = ({ isOpen, setIsOpen, url }) => {
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
            <div className=''>
              <Image
                src={url}
                alt='modal image'
                width={700}
                height={800}
                className='max-sm:w-[30rem] max-md:w-[60rem] mx-auto max-w-[80rem]'
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
