// src/components/Logo.tsx
import React from 'react';

interface LogoProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
}

const Logo: React.FC<LogoProps> = ({ className, ...props }) => {
    return (
        <svg
            viewBox="0 0 600 320"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            {...props}
        >
            {/* Outer border */}
            <ellipse
                cx="300"
                cy="160"
                rx="295"
                ry="155"
                fill="none"
                stroke="black"
                strokeWidth="2"
            />

            {/* White background layer */}
            <ellipse cx="300" cy="160" rx="285" ry="148" fill="white" />

            {/* Dark inner oval */}
            <ellipse cx="300" cy="160" rx="275" ry="140" fill="#1a1a1a" />

            {/* Left 'A' */}
            <path
                d="M 285,55 L 285,255 L 225,255 L 225,185 L 175,185 L 160,255 L 100,255 Q 60,160 120,55 Z M 225,135 L 225,105 L 160,105 L 148,135 Z"
                fill="white"
            />

            {/* Right 'A' (Mirrored) */}
            <g transform="scale(-1, 1) translate(-600, 0)">
                <path
                    d="M 285,55 L 285,255 L 225,255 L 225,185 L 175,185 L 160,255 L 100,255 Q 60,160 120,55 Z M 225,135 L 225,105 L 160,105 L 148,135 Z"
                    fill="white"
                />
            </g>
        </svg>
    );
};

export default Logo;