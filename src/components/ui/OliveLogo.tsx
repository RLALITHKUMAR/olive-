"use client";

import * as React from "react";

interface OliveLogoProps {
  className?: string;
  size?: number;
}

export function OliveLogo({ className = "", size = 48 }: OliveLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Tooth outline */}
      <path
        d="M32 4C22 4 16 12 16 20C16 24 17 28 18 32C19 36 20 40 20 44C20 48 21 56 24 56C26 56 27 52 28 48C29 44 30 40 32 40C34 40 35 44 36 48C37 52 38 56 40 56C43 56 44 48 44 44C44 40 45 36 46 32C47 28 48 24 48 20C48 12 42 4 32 4Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      
      {/* Left leaf */}
      <path
        d="M18 16C14 12 8 12 4 16C4 20 8 24 14 24C12 20 14 16 18 16Z"
        fill="#7FA99B"
        stroke="#7FA99B"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Left leaf vein */}
      <path
        d="M10 14C10 18 12 22 14 22"
        stroke="#5D8A73"
        strokeWidth="1"
        strokeLinecap="round"
      />
      
      {/* Right leaf */}
      <path
        d="M46 16C50 12 56 12 60 16C60 20 56 24 50 24C52 20 50 16 46 16Z"
        fill="#7FA99B"
        stroke="#7FA99B"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Right leaf vein */}
      <path
        d="M54 14C54 18 52 22 50 22"
        stroke="#5D8A73"
        strokeWidth="1"
        strokeLinecap="round"
      />
      
      {/* Small stem left */}
      <path
        d="M18 18C16 16 14 16 12 16"
        stroke="#7FA99B"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      
      {/* Small stem right */}
      <path
        d="M46 18C48 16 50 16 52 16"
        stroke="#7FA99B"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function OliveLogoWithText({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <OliveLogo size={40} className="text-white" />
      <div className="flex flex-col">
        <span className="font-serif text-xl font-bold tracking-wide text-white">
          OLIVE
        </span>
        <span className="text-xs tracking-[0.3em] text-[#7FA99B] font-light -mt-1">
          DENTAL CARE
        </span>
      </div>
    </div>
  );
}
