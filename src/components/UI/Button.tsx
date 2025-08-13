"use client";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

export default function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={`bg-red-700 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-full shadow-lg border-2 border-white hover:scale-105 transition-transform ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
