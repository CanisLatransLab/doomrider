'use client';

import { motion } from 'framer-motion';

function Grid(props) {
  return (
    <motion.div transition={{ layout: { duration: 1 } }} {...props}>
      {props.children}
    </motion.div>
  );
}

export default Grid;
