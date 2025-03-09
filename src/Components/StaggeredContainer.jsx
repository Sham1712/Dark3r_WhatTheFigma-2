import React, { useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

/**
 * StaggeredContainer - Creates staggered animations for child elements
 * @param {number} staggerDelay - Delay between each child animation in seconds
 * @param {number} initialDelay - Initial delay before the first animation starts
 * @param {string} className - Additional CSS classes
 * @param {boolean} once - Whether animation should only trigger once
 * @param {number} threshold - Viewport threshold for triggering animation
 * @param {object} children - Child components
 */
const StaggeredContainer = ({
  staggerDelay = 0.1,
  initialDelay = 0,
  className = "",
  once = true,
  threshold = 0.1,
  children,
  ...props
}) => {
  const controls = useAnimation();
  const ref = React.useRef(null);
  const inView = useInView(ref, { 
    threshold: threshold,
    triggerOnce: once 
  });

  // Container variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: initialDelay,
        staggerChildren: staggerDelay,
      }
    }
  };

  // Child variants (these will be used by the StaggerItem component)
  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5, 
        ease: "easeOut" 
      }
    }
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else if (!once) {
      controls.start("hidden");
    }
  }, [controls, inView, once]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      {...props}
    >
      {React.Children.map(children, (child, index) => {
        // If child is a valid React element, clone it and add the variants
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            variants: childVariants,
            // Add a key to ensure proper reconciliation
            key: `stagger-child-${index}`
          });
        }
        return child;
      })}
    </motion.div>
  );
};

/**
 * StaggerItem - Individual item in a staggered animation
 */
export const StaggerItem = ({ children, className = "", ...props }) => {
  return (
    <motion.div className={className} {...props}>
      {children}
    </motion.div>
  );
};

export default StaggeredContainer; 