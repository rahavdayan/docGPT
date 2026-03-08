"use client";

import { useState } from 'react';
import Button from "./ui/button";
import { PencilSquareIcon } from '@heroicons/react/24/outline';

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
    const [selectedChat, setSelectedChat] = useState<Chat>();
    return (
        <div>
            <Button className="flex" onClick={() => {
                setChats(
                    [...chats, {
                        id: Date.now(),
                        title: "New Chat",
                        messages: []
                    }]);
            }}>
                <PencilSquareIcon className="w-5 h-5"/>
                New Chat
            </Button>
            {chats.map((chat) => (
                <Button className="w-full" onClick={() => {
                    setSelectedChat(chat);
                }} key={chat.id}>
                    {chat.title}
                </Button>
            ))}
        </div>
    );
}