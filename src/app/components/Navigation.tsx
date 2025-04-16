import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface NavigationProps {
    logoPath: string;
    logoAlt?: string;
    links?: Array<{ href: string; label: string }>;
}

const Navigation: React.FC<NavigationProps> = ({
    logoPath = "/images/nextPhase-logo-white.png",
    logoAlt = "NextPhase Logo",
    links = [
        { href: "/", label: "Home" },
        { href: "/camps", label: "Camps" }
    ]
}) => {
    return (
        <nav className="absolute z-50 w-full flex justify-between items-center px-4 py-4 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-r from-[#09131D]/[0.3] to-[#0046CC]/[0.3] -z-10 px-48" />

            {/* Content */}
            <div className="flex-shrink-0">
                <Image
                    src={logoPath}
                    alt={logoAlt}
                    width={96}
                    height={96}
                    className="h-8 w-auto hidden"
                />
                <span className=''> Next Phase Athletics</span>
            </div>
            <div className="flex space-x-6 text-white font-medium">
                {links.map((link, index) => (
                    <React.Fragment key={link.href}>
                        <Link
                            href={link.href}
                            className="hover:text-blue-300 transition-colors duration-200"
                        >
                            {link.label}
                        </Link>
                        {index < links.length - 1 && (
                            <span className="text-gray-400">|</span>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </nav>
    );
};

export default Navigation;