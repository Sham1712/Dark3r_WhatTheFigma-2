import React, { useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

// Animation variants for different animation types
const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      duration: 0.5, 
      ease: "easeOut" 
    }
  }
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: "easeOut" 
    }
  }
};

const fadeDownVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: "easeOut" 
    }
  }
};

const fadeLeftVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.6, 
      ease: "easeOut" 
    }
  }
};

const fadeRightVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.6, 
      ease: "easeOut" 
    }
  }
};

const scaleVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.5, 
      ease: "easeOut" 
    }
  }
};

/**
 * AnimatedSection - A reusable component for adding scroll animations
 * @param {string} type - Animation type: 'fade', 'fadeUp', 'fadeDown', 'fadeLeft', 'fadeRight', 'scale'
 * @param {number} delay - Delay in seconds before animation starts
 * @param {number} threshold - Viewport threshold (0-1) for triggering animation
 * @param {string} className - Additional CSS classes 
 * @param {boolean} once - Whether animation should only trigger once
 * @param {object} children - Child components 
 */
const AnimatedSection = ({ 
  type = 'fadeUp', 
  delay = 0, 
  threshold = 0.1,
  className = "", 
  once = true,
  children,
  ...props
}) => {
  const controls = useAnimation();
  const ref = React.useRef(null);
  const inView = useInView(ref, { 
    threshold: threshold,
    triggerOnce: once
  });
  
  // Select animation variant based on type
  const getVariant = () => {
    switch(type) {
      case 'fade': return fadeInVariants;
      case 'fadeUp': return fadeUpVariants;
      case 'fadeDown': return fadeDownVariants;
      case 'fadeLeft': return fadeLeftVariants;
      case 'fadeRight': return fadeRightVariants;
      case 'scale': return scaleVariants;
      default: return fadeUpVariants;
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
      initial="hidden"
      animate={controls}
      variants={getVariant()}
      className={className}
      transition={{ delay: delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection; 