// src/components/Logo.tsx
import React, { useId } from 'react';

interface LogoProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
}

const Logo: React.FC<LogoProps> = ({ className, ...props }) => {
    const idPrefix = useId().replace(/:/g, ""); // Ensure unique IDs for gradients/filters

    return (
        <svg
            viewBox="0 0 600 320"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            {...props}
        >
            <defs>
                <linearGradient id={`${idPrefix}-luxuryLeather`} x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "#4a3b32", stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: "#241812", stopOpacity: 1 }} />
                </linearGradient>

                <linearGradient id={`${idPrefix}-antiqueGold`} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "#cfb57a", stopOpacity: 1 }} />
                    <stop offset="40%" style={{ stopColor: "#e8dcb5", stopOpacity: 1 }} />
                    <stop offset="60%" style={{ stopColor: "#a38647", stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: "#cfb57a", stopOpacity: 1 }} />
                </linearGradient>

                <filter id={`${idPrefix}-softShadow`} x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
                    <feOffset dx="0" dy="2" result="offsetblur" />
                    <feComponentTransfer>
                        <feFuncA type="linear" slope="0.4" />
                    </feComponentTransfer>
                    <feMerge>
                        <feMergeNode />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>

            <g filter={`url(#${idPrefix}-softShadow)`}>
                <ellipse
                    cx="300"
                    cy="160"
                    rx="295"
                    ry="155"
                    fill={`url(#${idPrefix}-luxuryLeather)`}
                    stroke="#1a110d"
                    strokeWidth="2"
                />
                <ellipse
                    cx="300"
                    cy="160"
                    rx="275"
                    ry="140"
                    fill="none"
                    stroke="#1a110d"
                    strokeWidth="3"
                    opacity="0.6"
                />
                <ellipse
                    cx="300"
                    cy="160"
                    rx="275"
                    ry="140"
                    fill="none"
                    stroke="#dccbb6"
                    strokeWidth="2"
                    strokeDasharray="6,6"
                    opacity="0.9"
                />
                <ellipse
                    cx="300"
                    cy="160"
                    rx="262"
                    ry="128"
                    fill="none"
                    stroke={`url(#${idPrefix}-antiqueGold)`}
                    strokeWidth="1.5"
                />
                <g fill={`url(#${idPrefix}-antiqueGold)`}>
                    <path d="M 288,60 L 288,255 L 230,255 L 230,185 L 175,185 L 160,255 L 100,255 Q 65,160 125,60 Z M 230,135 L 230,115 L 168,115 L 158,135 Z" />
                    <g transform="scale(-1, 1) translate(-600, 0)">
                        <path d="M 288,60 L 288,255 L 230,255 L 230,185 L 175,185 L 160,255 L 100,255 Q 65,160 125,60 Z M 230,135 L 230,115 L 168,115 L 158,135 Z" />
                    </g>
                </g>
            </g>
        </svg>
    );
};

export default Logo;