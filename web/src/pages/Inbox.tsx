import { useState } from 'react';
import { inboxMessages } from '@shared/data';
import { Mail, MailOpen } from 'lucide-react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';

// Define type based on data
interface Message {
  id: number;
  sender: string;
  subject: string;
  message: string;
  time: string;
  unread: boolean;
}

export default function Inbox() {
  // Local state to handle read/unread status
  const [messages, setMessages] = useState<Message[]>(inboxMessages);

  const markAsRead = (id: number) => {
    setMessages(messages.map(msg => 
      msg.id === id ? { ...msg, unread: false } : msg
    ));
  };

  const unreadCount = messages.filter(m => m.unread).length;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const messageVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 300 } }
  };

  return (
    <div className="space-y-6 max-w-4xl">
      {/* Animated Header */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Inbox</h1>
          <p className="text-sm text-gray-500 mt-1">Your messages and notifications.</p>
        </div>
        
        {/* Unread Badge */}
        {unreadCount > 0 && (
          <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full">
            {unreadCount} Unread
          </span>
        )}
      </motion.div>

      {/* Messages Container */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col divide-y divide-gray-100"
      >
        <AnimatePresence>
          {messages.map((msg) => (
            <motion.div 
              key={msg.id} 
              variants={messageVariants}
              layout // Smooth layout transition when unread state changes
              onClick={() => markAsRead(msg.id)}
              className={`p-5 flex gap-4 cursor-pointer transition-colors duration-300 relative group ${
                msg.unread ? 'bg-blue-50/40 hover:bg-blue-50/70' : 'hover:bg-gray-50'
              }`}
            >
              {/* Unread Indicator Dot */}
              {msg.unread && (
                <div className="absolute left-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-blue-600"></div>
              )}

              {/* Avatar */}
              <div className={`w-10 h-10 shrink-0 rounded-full flex items-center justify-center font-bold text-sm transition-colors duration-300 ${
                msg.unread 
                  ? 'bg-gray-900 text-white shadow-md' 
                  : 'bg-gray-100 text-gray-600'
              }`}>
                {msg.sender.charAt(0)}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center mb-1">
                  <div className="flex items-center gap-2">
                    <h3 className={`text-sm ${msg.unread ? 'font-bold text-gray-900' : 'font-medium text-gray-700'}`}>
                      {msg.sender}
                    </h3>
                    {/* Icon indicating Read/Unread */}
                    {msg.unread ? (
                      <Mail size={12} className="text-blue-600" />
                    ) : (
                      <MailOpen size={12} className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </div>
                  <span className={`text-xs ${msg.unread ? 'text-blue-600 font-medium' : 'text-gray-400'}`}>
                    {msg.time}
                  </span>
                </div>
                
                <p className={`text-sm truncate ${msg.unread ? 'font-semibold text-gray-800' : 'text-gray-600'}`}>
                  {msg.subject}
                </p>
                <p className={`text-sm mt-0.5 truncate ${msg.unread ? 'text-gray-600' : 'text-gray-400'}`}>
                  {msg.message}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        
        {messages.length === 0 && (
          <div className="p-12 text-center flex flex-col items-center">
            <MailOpen size={48} className="text-gray-200 mb-3" strokeWidth={1.5} />
            <p className="text-gray-500 font-medium">Your inbox is empty</p>
          </div>
        )}
      </motion.div>
    </div>
  );
}