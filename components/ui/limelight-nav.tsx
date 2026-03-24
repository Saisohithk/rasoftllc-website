import React, { useState, useRef, useLayoutEffect, cloneElement } from 'react';

const DefaultHomeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);
const DefaultCompassIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
    <circle cx="12" cy="12" r="10" />
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
  </svg>
);
const DefaultBellIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
);

export type NavItem = {
  id: string | number;
  icon: React.ReactElement;
  label?: string;
  onClick?: () => void;
};

const defaultNavItems: NavItem[] = [
  { id: 'default-home', icon: <DefaultHomeIcon />, label: 'Home' },
  { id: 'default-explore', icon: <DefaultCompassIcon />, label: 'Explore' },
  { id: 'default-notifications', icon: <DefaultBellIcon />, label: 'Notifications' },
];

type LimelightNavProps = {
  items?: NavItem[];
  defaultActiveIndex?: number;
  onTabChange?: (index: number) => void;
  className?: string;
  limelightClassName?: string;
  iconContainerClassName?: string;
  iconClassName?: string;
};

export const LimelightNav = ({
  items = defaultNavItems,
  defaultActiveIndex = 0,
  onTabChange,
  className,
  limelightClassName,
  iconContainerClassName,
  iconClassName,
}: LimelightNavProps) => {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);
  const [isReady, setIsReady] = useState(false);
  const navItemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const limelightRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (items.length === 0) return;

    const limelight = limelightRef.current;
    const activeItem = navItemRefs.current[activeIndex];

    if (limelight && activeItem) {
      const newLeft =
        activeItem.offsetLeft +
        activeItem.offsetWidth / 2 -
        limelight.offsetWidth / 2;
      limelight.style.left = `${newLeft}px`;

      if (!isReady) {
        setTimeout(() => setIsReady(true), 50);
      }
    }
  }, [activeIndex, isReady, items]);

  if (items.length === 0) return null;

  const handleItemClick = (index: number, itemOnClick?: () => void) => {
    setActiveIndex(index);
    onTabChange?.(index);
    itemOnClick?.();
  };

  return (
    <nav
      className={`relative flex h-14 items-center rounded-full border border-white/10 bg-[#0b0e18]/90 backdrop-blur-xl px-2 ${className ?? ''}`}
    >
      {items.map(({ id, icon, label, onClick }, index) => (
        <a
          key={id}
          ref={(el) => { navItemRefs.current[index] = el; }}
          className={`relative z-20 flex h-full cursor-pointer items-center justify-center p-4 ${iconContainerClassName ?? ''}`}
          onClick={() => handleItemClick(index, onClick)}
          aria-label={label}
        >
          {cloneElement(icon, {
            className: `w-5 h-5 transition-all duration-200 ${
              activeIndex === index ? 'opacity-100 text-[#E8280B]' : 'opacity-40 text-white'
            } ${(icon.props as { className?: string }).className ?? ''} ${iconClassName ?? ''}`,
          })}
        </a>
      ))}

      <div
        ref={limelightRef}
        style={{ transition: isReady ? 'left 0.3s cubic-bezier(0.34,1.56,0.64,1)' : 'none' }}
        className={`absolute top-0 h-[2px] w-12 rounded-full bg-[#E8280B] shadow-[0_0_12px_#E8280B] ${limelightClassName ?? ''}`}
      >
        <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-[#E8280B]/15 to-transparent rounded-b-full" />
      </div>
    </nav>
  );
};
