import { View, Text, TouchableOpacity } from 'react-native';
import { contacts } from '@shared/data';
import { Building } from 'lucide-react-native';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';

export default function Contacts() {
  return (
    <View className="flex-1 bg-gray-50">
      {/* Animated List */}
      <Animated.FlatList
        data={contacts}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ padding: 16, paddingBottom: 40 }}
        renderItem={({ item, index }) => (
          <Animated.View 
            entering={FadeInDown.delay(index < 10 ? index * 50 : 0).duration(400)}
          >
            <TouchableOpacity className="bg-white rounded-xl border border-gray-200 p-4 mb-3 shadow-sm flex-row items-center gap-4 active:bg-gray-50 transition-colors">
              {/* Avatar */}
              <View className="w-12 h-12 rounded-full bg-gray-900 items-center justify-center">
                <Text className="text-lg font-bold text-white">{item.name.charAt(0)}</Text>
              </View>
              
              {/* Info */}
              <View className="flex-1">
                <Text className="text-base font-bold text-gray-900">{item.name}</Text>
                <View className="flex-row items-center gap-1.5 mt-1">
                  <Building size={12} color="#6B7280" />
                  <Text className="text-xs text-gray-500">{item.company}</Text>
                </View>
              </View>
            </TouchableOpacity>
          </Animated.View>
        )}
      />
    </View>
  );
}