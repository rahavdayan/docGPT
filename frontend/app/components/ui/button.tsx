import { ReactNode } from 'react';

interface ButtonProps {
    onClick: () => void,
    children: ReactNode
    className?: string
}

export default function Button({ onClick, children, className }: ButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`border border-gray-300 px-4 py-2 rounded hover:bg-gray-50 transition-colors 
                    dark:border-gray-600 dark:hover:bg-gray-700 ${className || ''}`}
        >
            {children}
        </button>
    )
}
