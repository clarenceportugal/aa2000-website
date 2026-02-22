import { motion } from 'framer-motion';
import { pageTransition } from '../../lib/animations';

interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
}

/** Page transition: dahan-dahan na reveal ng content */
const PageTransition = ({ children, className = '' }: PageTransitionProps) => {
  return (
    <motion.div
      initial={pageTransition.initial}
      animate={pageTransition.animate}
      exit={pageTransition.exit}
      transition={pageTransition.transition}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
