'use client';

import { motion } from 'framer-motion';

function MotionWrapper(props) {
  return <motion.div {...props}>{props.children}</motion.div>;
}

export default MotionWrapper;
