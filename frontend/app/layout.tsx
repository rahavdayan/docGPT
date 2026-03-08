import { ReactNode } from 'react';
import './globals.css';
import Sidebar from "./components/sidebar";

export default function RootLayout({ children }: {children: ReactNode;}) {
    return (
        <html>
            <body className="flex h-screen">
                <div className="w-64">
                    <Sidebar />
                </div>
                <main className="flex-1">{children}</main>
            </body>
        </html>
    );
}