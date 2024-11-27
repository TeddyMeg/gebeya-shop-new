import React from 'react';

interface FooterColumnProps {
  title: React.ReactNode;
  children: React.ReactNode;
}

export function FooterColumn({ title, children }: FooterColumnProps) {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-white mb-2">{title}</h3>
      {children}
    </div>
  );
}