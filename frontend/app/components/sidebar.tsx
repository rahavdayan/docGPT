"use client";

import { useState } from 'react';
import Button from "./ui/button";

interface Chat {
    id: number,
    title: string,
    messages: Message[]
}

interface Message {
    sender: "user" | "bot",
    content: string
}

export default function Sidebar() {
    const [chats, setChats] = useState<Chat[]>([]);
    return (
        <div className="flex-col w-screen">
            <Button onClick={() => {
                setChats(
                    [...chats, {
                        id: Date.now(),
                        title: "New Chat",
                        messages: []
                    }]);
            }}>
                New Chat
            </Button>
            {chats.map((chat) => (
                <Button onClick={() => {}} key={chat.id}>
                    {chat.title}
                </Button>  
            ))}
        </div>
    );
}