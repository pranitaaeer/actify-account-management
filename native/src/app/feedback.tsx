import { View, Text, ScrollView } from 'react-native';
import { feedbackList } from '@shared/data';
import { Star, MessageSquareQuote } from 'lucide-react-native';

export default function Feedback() {
  return (
    <ScrollView className="flex-1 bg-gray-50 p-4">
      {feedbackList.map((f) => (
        <View key={f.id} className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm mb-4">
          <View className="flex-row justify-between items-start mb-3">
            <View className="flex-row items-center gap-3">
              <View className="w-10 h-10 rounded-full bg-gray-100 items-center justify-center">
                <Text className="font-bold text-gray-700">{f.user.charAt(0)}</Text>
              </View>
              <View>
                <Text className="font-bold text-gray-900">{f.user}</Text>
                <View className="flex-row mt-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={12} 
                      color={i < f.rating ? "#FBBF24" : "#E5E7EB"} 
                      fill={i < f.rating ? "#FBBF24" : "transparent"} 
                    />
                  ))}
                </View>
              </View>
            </View>
            <Text className="text-xs text-gray-400">{f.date}</Text>
          </View>
          
          <View className="flex-row gap-2 mt-2">
            <MessageSquareQuote size={16} color="#D1D5DB" />
            <Text className="text-sm text-gray-600 italic flex-1">"{f.comment}"</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}