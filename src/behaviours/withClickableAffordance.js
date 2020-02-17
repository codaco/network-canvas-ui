import React from 'react';
import { motion } from 'framer-motion';

const withClickableAffordance = Component => props => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Component {...props} />
  </motion.div>
);

export default withClickableAffordance;
