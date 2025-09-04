import React from 'react';

interface ElementButtonProps {
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
}

export default function ElementButton({ label, icon, onClick }: ElementButtonProps) {
  return (
    <button
      type="button"
      aria-label={`Add ${label} form element`}
      onClick={onClick}
      className="flex flex-col items-center justify-center h-24 border border-gray-300 rounded-lg bg-white text-gray-900 font-medium hover:border-blue-500 hover:bg-gray-50 transition"
    >
      <div className="text-lg sm:text-xl mb-2">{icon}</div>
      <span className="text-xs sm:text-sm md:text-base">{label}</span>
    </button>
  );
}
