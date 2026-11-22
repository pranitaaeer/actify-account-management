import { View, Text, FlatList } from 'react-native';
import { deals } from '@shared/data';

export default function Deals() {
  return (
    <View className="flex-1 bg-gray-50">
      <FlatList
        data={deals}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ padding: 16, paddingBottom: 40 }}
        renderItem={({ item }) => (
          <View className="bg-white rounded-xl border border-gray-200 p-4 mb-3 shadow-sm">
            <View className="flex-row items-center justify-between mb-1">
              <Text className="text-base font-bold text-gray-900">{item.name}</Text>
              <Text className="text-lg font-bold text-emerald-600">${item.amount.toLocaleString()}</Text>
            </View>
            
            <Text className="text-sm text-gray-600 mb-3">{item.account}</Text>
            
            <View className="flex-row items-center justify-between border-t border-gray-100 pt-3">
              <View className="bg-gray-100 px-2.5 py-1 rounded-full">
                <Text className="text-[10px] font-bold text-gray-700 uppercase tracking-wider">
                  {item.stage}
                </Text>
              </View>
              <Text className="text-xs text-gray-400">Close: {item.closeDate}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}