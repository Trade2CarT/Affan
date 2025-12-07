// src/components/Logo.tsx
import React from 'react';
import logoImg from '../assets/Logo.png';

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
}

const Logo: React.FC<LogoProps> = ({ className, ...props }) => {
    return (
        <div
            // Created a white square container with padding
            className={`bg-white aspect-square flex items-center justify-center p-1 rounded-lg ${className || ''}`}
            {...props}
        >
            <img
                src={logoImg}
                alt="Affan Associates Logo"
                className="w-full h-full object-contain"
            />
        </div>
    );
};

export default Logo;