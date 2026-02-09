import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef, ReactNode, forwardRef } from 'react';
interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'none' | 'scale';
  amount?: number;
}
const AnimatedSection = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  amount = 0.3
}: AnimatedSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  // Remove once: true so animation replays when scrolling back
  const isInView = useInView(ref, {
    once: false,
    amount,
    margin: '-50px'
  });
  const getVariants = () => {
    const hidden = (() => {
      switch (direction) {
        case 'left':
          return {
            opacity: 0,
            x: -60
          };
        case 'right':
          return {
            opacity: 0,
            x: 60
          };
        case 'scale':
          return {
            opacity: 0,
            scale: 0.9
          };
        case 'none':
          return {
            opacity: 0
          };
        default:
          return {
            opacity: 0,
            y: 40
          };
      }
    })();
    const visible = (() => {
      switch (direction) {
        case 'left':
        case 'right':
          return {
            opacity: 1,
            x: 0
          };
        case 'scale':
          return {
            opacity: 1,
            scale: 1
          };
        case 'none':
          return {
            opacity: 1
          };
        default:
          return {
            opacity: 1,
            y: 0
          };
      }
    })();
    return {
      hidden,
      visible
    };
  };
  const {
    hidden,
    visible
  } = getVariants();
  return <motion.div ref={ref} initial="hidden" animate={isInView ? 'visible' : 'hidden'} variants={{
    hidden,
    visible
  }} transition={{
    duration: 1.2,
    delay: isInView ? delay : 0,
    ease: [0.22, 1, 0.36, 1]
  }} className={className}>
      {children}
    </motion.div>;
};

// Text reveal animation - letter by letter or word by word
interface TextRevealProps {
  text: string;
  className?: string;
  type?: 'words' | 'chars';
  staggerDelay?: number;
}
export const TextReveal = ({
  text,
  className = '',
  type = 'words',
  staggerDelay = 0.03
}: TextRevealProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.5
  });
  const items = type === 'words' ? text.split(' ') : text.split('');
  const separator = type === 'words' ? '\u00A0' : '';
  return <span ref={ref} className={`inline-block ${className}`}>
      {items.map((item, index) => <motion.span key={index} className="inline-block text-6xl" initial={{
      opacity: 0,
      y: 20
    }} animate={isInView ? {
      opacity: 1,
      y: 0
    } : {
      opacity: 0,
      y: 20
    }} transition={{
      duration: 0.8,
      delay: isInView ? index * staggerDelay : 0,
      ease: [0.22, 1, 0.36, 1]
    }}>
          {item}{separator}
        </motion.span>)}
    </span>;
};

// Parallax wrapper
interface ParallaxProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}
export const Parallax = ({
  children,
  speed = 0.5,
  className = ''
}: ParallaxProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const {
    scrollYProgress
  } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });
  const y = useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed]);
  return <motion.div ref={ref} style={{
    y
  }} className={className}>
      {children}
    </motion.div>;
};

// Line reveal animation
interface LineRevealProps {
  className?: string;
  direction?: 'left' | 'right';
}
export const LineReveal = ({
  className = '',
  direction = 'left'
}: LineRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.5
  });
  return <motion.div ref={ref} className={`h-0.5 bg-primary ${className}`} initial={{
    scaleX: 0
  }} animate={isInView ? {
    scaleX: 1
  } : {
    scaleX: 0
  }} style={{
    originX: direction === 'left' ? 0 : 1
  }} transition={{
    duration: 1.2,
    ease: [0.22, 1, 0.36, 1]
  }} />;
};
export default AnimatedSection;