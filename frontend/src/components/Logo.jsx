import React from 'react';

export default function Logo({ className = 'h-8 w-auto', white = false, ...props }) {
  return (
    <img
      src={white ? '/hitours-logo-white.webp' : '/hitours-logo.webp'}
      alt="Hi Tours – Say hello to the world"
      className={`${className} block select-none`}
      draggable={false}
      {...props}
    />
  );
}
