'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface FlipTextProps {
  /**
   * Array of phrases to cycle through (use \n for line breaks)
   */
  phrases?: string[];
  /**
   * Children string if used as single phrase
   */
  children?: string;
  /**
   * Hold time on each phrase in milliseconds before flipping
   * @default 4200
   */
  interval?: number;
  /**
   * Duration of each character flip animation in seconds (slower = more elegant)
   * @default 0.65
   */
  flipSpeed?: number;
  /**
   * Additional CSS classes
   */
  className?: string;
}

export function FlipText({
  phrases = [
    'Designing journeys\nfrom scratch',
    'Turning 0 into 1,\none screen at a time',
  ],
  children,
  interval = 4200,
  flipSpeed = 0.65,
  className = '',
}: FlipTextProps) {
  const phraseList = children ? [children] : phrases;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (phraseList.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % phraseList.length);
    }, interval);

    return () => clearInterval(timer);
  }, [phraseList.length, interval]);

  const currentPhrase = phraseList[currentIndex] || '';
  const lines = currentPhrase.split('\n');

  return (
    <div
      className={`flip-text-container relative inline-block ${className}`}
      style={{ perspective: '1000px' }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="flex flex-col"
        >
          {lines.map((lineText, lineIdx) => {
            const words = lineText.split(' ');
            return (
              <div key={lineIdx} className="flex flex-wrap items-center">
                {words.map((word, wordIdx) => (
                  <span
                    key={wordIdx}
                    className="inline-flex mr-[0.28em] whitespace-nowrap"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {word.split('').map((char, charIdx) => {
                      const globalCharOffset = lineIdx * 15 + wordIdx * 4 + charIdx;

                      return (
                        <motion.span
                          key={charIdx}
                          variants={{
                            hidden: {
                              opacity: 0,
                              y: 18,
                              rotateX: -90,
                              filter: 'blur(3px)',
                            },
                            visible: {
                              opacity: 1,
                              y: 0,
                              rotateX: 0,
                              filter: 'blur(0px)',
                              transition: {
                                duration: flipSpeed,
                                ease: [0.25, 1, 0.5, 1], // Smooth custom cubic-bezier
                              },
                            },
                            exit: {
                              opacity: 0,
                              y: -18,
                              rotateX: 90,
                              filter: 'blur(3px)',
                              transition: {
                                duration: flipSpeed * 0.75,
                                ease: [0.4, 0, 1, 1],
                              },
                            },
                          }}
                          transition={{
                            delay: globalCharOffset * 0.028,
                          }}
                          className="inline-block transform-gpu origin-center"
                          style={{
                            transformStyle: 'preserve-3d',
                            backfaceVisibility: 'hidden',
                          }}
                        >
                          {char}
                        </motion.span>
                      );
                    })}
                  </span>
                ))}
              </div>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default FlipText;
