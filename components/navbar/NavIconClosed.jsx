import React from 'react';
import { motion } from 'framer-motion';

export default function NavIconClosed(props) {
  return (
    <motion.div className='relative'>
      <motion.svg
        initial={{ rotate: 0 }}
        animate={{ rotate: 180 }}
        exit={{ rotate: 0 }}
        transition={{ type: 'spring' }}
        xmlns='http://www.w3.org/2000/svg'
        width='39'
        height='33'
        viewBox='0 0 39 33'
        {...props}>
        <path
          d='M2 2L37 31'
          stroke='currentColor'
          strokeWidth='4'
          strokeLinecap='round'
        />
        <path
          d='M2 31L36 2'
          stroke='currentColor'
          strokeWidth='4'
          strokeLinecap='round'
        />
      </motion.svg>
    </motion.div>
  );
}
