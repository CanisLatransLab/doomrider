'use client';

import { AnimatePresence, motion } from 'framer-motion';

function LayoutWrapper(props) {
  return (
    <AnimatePresence mode='wait'>
      <motion.main {...props}>{props.children}</motion.main>
    </AnimatePresence>
  );
}

export default LayoutWrapper;
