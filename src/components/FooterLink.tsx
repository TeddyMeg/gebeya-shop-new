import React from 'react';

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

export function FooterLink({ href, children }: FooterLinkProps) {
  return (
    <a
      href={href}
      className="text-white hover:text-gray-200 transition-colors"
    >
      {children}
    </a>
  );
}