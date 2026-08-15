import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { splashContainerVariants, counterVariants } from '../animations/splashAnimations';
import AnimatedLogo from './AnimatedLogo';

export default function SplashLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Fast counter from 0 to 100
    const duration = 2000; // 2 seconds total loading time
    const intervalTime = 20; // update every 20ms
    const totalSteps = duration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const currentProgress = Math.floor((currentStep / totalSteps) * 100);

      if (currentProgress >= 100) {
        setProgress(100);
        clearInterval(timer);
        // Add a tiny delay before triggering complete so the user sees 100%
        setTimeout(() => {
          onComplete();
        }, 300);
      } else {
        setProgress(currentProgress);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="splash-container"
      variants={splashContainerVariants}
      initial="initial"
      exit="exit"
    >
      <div className="splash-logo-wrapper">
        <AnimatedLogo className="splash-logo" />
      </div>

      <motion.div
        className="splash-counter"
        variants={counterVariants}
        initial="initial"
        animate="animate"
      >
        {progress}%
      </motion.div>
    </motion.div>
  );
}
