'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { ChatButton } from '@/components/ui/chat-button';
import { ChatWindow } from '@/components/ui/chat-window';

interface ChatContextType {
  isOpen: boolean;
  toggleChat: () => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export function useChat() {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
}

interface ChatProviderProps {
  children: ReactNode;
}

export function ChatProvider({ children }: ChatProviderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <ChatContext.Provider value={{ isOpen, toggleChat }}>
      {children}
      <ChatButton isOpen={isOpen} onClick={toggleChat} />
      <ChatWindow isOpen={isOpen} />
    </ChatContext.Provider>
  );
} 