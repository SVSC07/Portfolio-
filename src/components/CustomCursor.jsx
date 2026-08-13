import React, { useEffect, useRef, useState } from 'react';
import './CustomCursor.css';

const CustomCursor = ({ color = '#000000' }) => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  // Use refs for positions to avoid state updates on every frame
  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const requestRef = useRef();

  // We don't want to show the cursor until it actually moves to avoid it being stuck at 0,0
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const onMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };

      if (!isVisible) {
        setIsVisible(true);
        // Instant update ring on first move so it doesn't fly from 0,0
        ring.current = { x: e.clientX, y: e.clientY };
      }

      // Update dot instantly
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    const render = () => {
      // Lerp for the ring with a slight smooth trailing delay
      ring.current.x += (mouse.current.x - ring.current.x) * 0.15;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.15;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0)`;
      }

      requestRef.current = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    requestRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      cancelAnimationFrame(requestRef.current);
    };
  }, [isVisible]);

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    // Handle hover states on interactive elements
    const handleMouseOver = (e) => {
      // Find closest interactive element
      const target = e.target.closest('a, button, input, select, textarea, [role="button"]');
      setIsHovering(!!target);
    };

    // Use mouseout to clear hover state when leaving window/interactive elements
    const handleMouseOut = (e) => {
      if (!e.relatedTarget) {
        // Left the window
        setIsHovering(false);
      }
    };

    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  if (isTouchDevice) return null;

  return (
    <>
      <div
        ref={ringRef}
        className="custom-cursor-ring-wrapper"
        style={{ opacity: isVisible ? 1 : 0 }}
      >
        <div
          className={`custom-cursor-ring ${isHovering ? 'hovering' : ''}`}
          style={{ borderColor: color }}
        />
      </div>
      <div
        ref={dotRef}
        className="custom-cursor-dot-wrapper"
        style={{ opacity: isVisible ? 1 : 0 }}
      >
        <div
          className={`custom-cursor-dot ${isClicking ? 'clicking' : ''}`}
          style={{ backgroundColor: color }}
        />
      </div>
    </>
  );
};

export default CustomCursor;
