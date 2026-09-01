import React from 'react';
import { motion, type HTMLMotionProps } from 'motion/react';

interface MotionHeadingProps {
  badge?: string;
  badgeIcon?: React.ReactNode;
  badgeColor?: 'yellow' | 'blue' | 'emerald' | 'slate';
  title: string | React.ReactNode;
  highlightText?: string;
  subtitle?: string | React.ReactNode;
  align?: 'center' | 'left' | 'right';
  className?: string;
  id?: string;
}

export const MotionHeading: React.FC<MotionHeadingProps> = ({
  badge,
  badgeIcon,
  badgeColor = 'yellow',
  title,
  highlightText,
  subtitle,
  align = 'center',
  className = '',
  id
}) => {
  const alignClass =
    align === 'center' ? 'text-center items-center' : align === 'right' ? 'text-right items-end' : 'text-left items-start';

  const badgeStyles = {
    yellow: 'bg-yellow-100 text-yellow-900 border-yellow-300 shadow-2xs',
    blue: 'bg-blue-100 text-blue-900 border-blue-200 shadow-2xs',
    emerald: 'bg-emerald-100 text-emerald-900 border-emerald-300 shadow-2xs',
    slate: 'bg-slate-100 text-slate-800 border-slate-200 shadow-2xs'
  };

  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`flex flex-col ${alignClass} mb-10 md:mb-12 ${className}`}
    >
      {badge && (
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border mb-3 ${badgeStyles[badgeColor]}`}
        >
          {badgeIcon}
          {badge}
        </motion.span>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-950 tracking-tight leading-tight max-w-3xl"
      >
        {title}
        {highlightText && (
          <span className="ml-2 text-blue-700 underline decoration-yellow-400 decoration-wavy decoration-2">
            {highlightText}
          </span>
        )}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className={`mt-3 text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed ${
            align === 'center' ? 'mx-auto' : ''
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};

interface AnimatedCardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  delay?: number;
  hoverLift?: boolean;
  className?: string;
}

export const AnimatedCard: React.FC<AnimatedCardProps> = ({
  children,
  delay = 0,
  hoverLift = true,
  className = '',
  ...props
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={
        hoverLift
          ? {
              y: -4,
              transition: { duration: 0.25, ease: 'easeOut' }
            }
          : undefined
      }
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

interface AnimatedImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
  badge?: string;
  overlay?: React.ReactNode;
  delay?: number;
}

export const AnimatedImage: React.FC<AnimatedImageProps> = ({
  src,
  alt,
  className = '',
  aspectRatio = 'aspect-16/10',
  badge,
  overlay,
  delay = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`relative overflow-hidden rounded-2xl bg-slate-100 group border border-slate-200/80 shadow-xs ${aspectRatio} ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none" />

      {badge && (
        <div className="absolute top-3 left-3 z-10">
          <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-slate-950/75 backdrop-blur-sm text-yellow-300 border border-white/20 shadow-xs">
            {badge}
          </span>
        </div>
      )}

      {overlay && <div className="absolute inset-0 z-10 pointer-events-none">{overlay}</div>}
    </motion.div>
  );
};

interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({ children, className = '' }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-30px' }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.08
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
