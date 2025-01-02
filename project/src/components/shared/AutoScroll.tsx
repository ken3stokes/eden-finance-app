import React, { useRef, useEffect } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

interface AutoScrollProps {
  children: React.ReactNode;
  className?: string;
  scrollStep?: number;
  scrollInterval?: number;
}

export const AutoScroll: React.FC<AutoScrollProps> = ({
  children,
  className = '',
  scrollStep = 1,
  scrollInterval = 50
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollingUp = useRef<boolean>(false);
  const scrollingDown = useRef<boolean>(false);
  const intervalRef = useRef<number>();

  const startScrolling = (direction: 'up' | 'down') => {
    if (direction === 'up') {
      scrollingUp.current = true;
      scrollingDown.current = false;
    } else {
      scrollingUp.current = false;
      scrollingDown.current = true;
    }

    if (!intervalRef.current) {
      intervalRef.current = window.setInterval(() => {
        if (!containerRef.current) return;

        if (scrollingUp.current) {
          containerRef.current.scrollTop -= scrollStep;
        } else if (scrollingDown.current) {
          containerRef.current.scrollTop += scrollStep;
        }
      }, scrollInterval);
    }
  };

  const stopScrolling = () => {
    scrollingUp.current = false;
    scrollingDown.current = false;
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = undefined;
    }
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div className="relative group">
      <button
        className="absolute right-2 top-2 p-2 bg-slate-700 rounded-full opacity-0 
          group-hover:opacity-100 transition-opacity z-10 hover:bg-slate-600"
        onMouseEnter={() => startScrolling('up')}
        onMouseLeave={stopScrolling}
        aria-label="Scroll up"
      >
        <ChevronUp className="w-4 h-4 text-white" />
      </button>

      <div
        ref={containerRef}
        className={`overflow-auto ${className}`}
      >
        {children}
      </div>

      <button
        className="absolute right-2 bottom-2 p-2 bg-slate-700 rounded-full opacity-0 
          group-hover:opacity-100 transition-opacity z-10 hover:bg-slate-600"
        onMouseEnter={() => startScrolling('down')}
        onMouseLeave={stopScrolling}
        aria-label="Scroll down"
      >
        <ChevronDown className="w-4 h-4 text-white" />
      </button>
    </div>
  );
};