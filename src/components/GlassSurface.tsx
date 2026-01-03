import type { ReactNode } from 'react';

interface GlassSurfaceProps {
  children: ReactNode;
  blur?: number;
  opacity?: number;
  borderRadius?: number;
  className?: string;
  style?: React.CSSProperties;
}

const GlassSurface = ({ 
  children, 
  blur = 10, 
  opacity = 0.8, 
  borderRadius = 16,
  className = '',
  style = {}
}: GlassSurfaceProps) => {
  return (
    <div
      className={className}
      style={{
        background: `rgba(255, 255, 255, ${opacity})`,
        backdropFilter: `blur(${blur}px)`,
        WebkitBackdropFilter: `blur(${blur}px)`,
        borderRadius: `${borderRadius}px`,
        border: '1px solid rgba(255, 255, 255, 0.3)',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15), inset 0 0 0 1px rgba(255, 255, 255, 0.2)',
        ...style
      }}
    >
      {children}
    </div>
  );
};

export default GlassSurface;

