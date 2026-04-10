'use client';

import { ChatMessage } from '@/types';

interface ChatMessagesProps {
  messages: ChatMessage[];
  loading: boolean;
  emptyText: string;
}

export default function ChatMessages({ messages, loading, emptyText }: ChatMessagesProps) {
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-3">
      {messages.length === 0 && (
        <p className="text-stone-400 text-sm text-center mt-8">{emptyText}</p>
      )}
      {messages.map((msg, i) => (
        <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
          <div
            className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm ${
              msg.role === 'user'
                ? 'bg-amber-600 text-white rounded-br-sm'
                : 'bg-stone-100 text-stone-800 rounded-bl-sm'
            }`}
          >
            {msg.content}
          </div>
        </div>
      ))}
      {loading && (
        <div className="flex justify-start">
          <div className="bg-stone-100 rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1">
            {(['', 'bounce-delay-1', 'bounce-delay-2'] as const).map((delay, i) => (
              <span
                key={i}
                className={`w-2 h-2 bg-stone-400 rounded-full animate-bounce ${delay}`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
