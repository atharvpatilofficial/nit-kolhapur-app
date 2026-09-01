import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'motion/react';

interface AnimatedCounterProps {
  value: string | number;
  duration?: number;
  className?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  duration = 1.8,
  className = ''
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-20px' });
  const [displayValue, setDisplayValue] = useState<string>('0');

  useEffect(() => {
    if (!isInView) return;

    const strVal = String(value).trim();
    // Match prefix (e.g. ₹, $), numeric part (e.g. 12.5, 15,000, 40), and suffix (e.g. +, %, LPA, /-)
    const regex = /^([^0-9.]*)([0-9,.]+)(.*)$/;
    const match = strVal.match(regex);

    if (!match) {
      setDisplayValue(strVal);
      return;
    }

    const prefix = match[1] || '';
    const rawNumberStr = match[2];
    const suffix = match[3] || '';

    // Check if it contains commas
    const hasCommas = rawNumberStr.includes(',');
    // Check if it's decimal
    const isDecimal = rawNumberStr.includes('.');
    const decimalPlaces = isDecimal ? rawNumberStr.split('.')[1].length : 0;

    const targetNumber = parseFloat(rawNumberStr.replace(/,/g, ''));

    if (isNaN(targetNumber)) {
      setDisplayValue(strVal);
      return;
    }

    let startTime: number | null = null;
    let animationFrame: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentNumber = easeProgress * targetNumber;

      let formattedNumber: string;
      if (isDecimal) {
        formattedNumber = currentNumber.toFixed(decimalPlaces);
      } else {
        const rounded = Math.floor(currentNumber);
        formattedNumber = hasCommas ? rounded.toLocaleString('en-IN') : String(rounded);
      }

      if (progress >= 1) {
        if (isDecimal) {
          formattedNumber = targetNumber.toFixed(decimalPlaces);
        } else {
          formattedNumber = hasCommas ? targetNumber.toLocaleString('en-IN') : String(targetNumber);
        }
        setDisplayValue(`${prefix}${formattedNumber}${suffix}`);
      } else {
        setDisplayValue(`${prefix}${formattedNumber}${suffix}`);
        animationFrame = requestAnimationFrame(step);
      }
    };

    animationFrame = requestAnimationFrame(step);

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className={`inline-block tabular-nums font-inherit ${className}`}>
      {isInView ? displayValue : `${String(value).replace(/[0-9]/g, '0')}`}
    </span>
  );
};
