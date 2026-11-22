import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { inboxMessages } from '@shared/data';
import { Mail, MailOpen } from 'lucide-react-native';
import Animated, { FadeInDown, Layout, FadeInUp } from 'react-native-reanimated';

export default function Inbox() {
  const [messages, setMessages] = useState(inboxMessages);

  const markAsRead = (id: number) => {
    setMessages(messages.map(msg => 
      msg.id === id ? { ...msg, unread: false } : msg
    ));
  };

  const unreadCount = messages.filter(m => m.unread).length;

  return (
    <View className="flex-1 bg-gray-50">
      {/* Header Info */}
      <Animated.View 
        entering={FadeInUp.duration(400)}
        className="p-4 bg-white border-b border-gray-200 flex-row justify-between items-center shadow-sm z-10"
      >
        <Text className="text-sm text-gray-500 font-medium">Total: {messages.length}</Text>
        {unreadCount > 0 && (
          <View className="bg-blue-100 px-3 py-1 rounded-full">
            <Text className="text-xs font-bold text-blue-700">{unreadCount} Unread</Text>
          </View>
        )}
      </Animated.View>

      <Animated.FlatList
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ padding: 16, paddingBottom: 40 }}
        renderItem={({ item, index }) => (
          <Animated.View
            entering={FadeInDown.delay(index < 10 ? index * 50 : 0).duration(400)}
            layout={Layout.springify()} // Smooth transition when unread state changes
          >
            <TouchableOpacity 
              onPress={() => markAsRead(item.id)}
              className={`rounded-xl border p-4 mb-3 shadow-sm flex-row gap-3 active:opacity-80 ${
                item.unread ? 'bg-white border-blue-200' : 'bg-gray-50 border-gray-200'
              }`}
            >
              {/* Avatar / Icon */}
              <View className={`w-10 h-10 rounded-full items-center justify-center ${
                item.unread ? 'bg-gray-900' : 'bg-gray-200'
              }`}>
                <Text className={`font-bold ${item.unread ? 'text-white' : 'text-gray-500'}`}>
                  {item.sender.charAt(0)}
                </Text>
              </View>

              {/* Content */}
              <View className="flex-1">
                <View className="flex-row justify-between items-center mb-1">
                  <Text className={`text-sm ${item.unread ? 'font-bold text-gray-900' : 'font-medium text-gray-600'}`}>
                    {item.sender}
                  </Text>
                  <Text className="text-[10px] text-gray-400">{item.time}</Text>
                </View>
                <Text className={`text-sm mb-1 ${item.unread ? 'font-semibold text-gray-800' : 'text-gray-500'}`} numberOfLines={1}>
                  {item.subject}
                </Text>
                <View className="flex-row items-center gap-2">
                  {item.unread ? (
                    <Mail size={12} color="#2563EB" />
                  ) : (
                    <MailOpen size={12} color="#9CA3AF" />
                  )}
                  <Text className="text-xs text-gray-400 flex-1" numberOfLines={1}>
                    {item.message}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </Animated.View>
        )}
      />
    </View>
  );
}