import React from 'react';

export default function Logo({ className = 'h-8 w-auto', white = false, tagline = false, ...props }) {
  return (
    <img
      src={white ? '/hitours-white.webp' : tagline ? '/hitours-logo.webp' : '/hitours-dark.webp'}
      alt="Hi Tours"
      className={`${className} block select-none`}
      draggable={false}
      {...props}
    />
  );
}
