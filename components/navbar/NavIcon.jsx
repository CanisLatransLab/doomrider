import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

function NavIcon(props) {
  return (
    <motion.div className='relative size-[6rem]'>
      <motion.svg
        initial={{ rotate: 90 }}
        animate={{ rotate: 0 }}
        exit={{ rotate: 90 }}
        transition={{ type: 'spring' }}
        xmlns='http://www.w3.org/2000/svg'
        width='43'
        height='33'
        viewBox='0 0 43 33'
        {...props}>
        <path
          d='M2 2L41 2'
          stroke='currentColor'
          strokeWidth='4'
          strokeLinecap='round'
        />
        <path
          d='M2 17H31'
          stroke='currentColor'
          strokeWidth='4'
          strokeLinecap='round'
        />
        <path
          d='M2 31H17'
          stroke='currentColor'
          strokeWidth='4'
          strokeLinecap='round'
        />
      </motion.svg>

      <motion.div
        initial={{ x: '-200%', y: '-13px' }}
        animate={{
          x: '-8px',
          y: '-13px',
          transition: { type: 'spring', delay: 0.5 },
        }}
        exit={{ x: '-100%', y: '-13px' }}
        className='absolute -z-10 inset-0 size-[6rem] w-full h-full bg-primary -translate-x-[8px] -translate-y-[13px]'></motion.div>
    </motion.div>
  );
}

export default NavIcon;
